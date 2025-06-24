import Stripe from 'stripe'
import { prismaPortal } from '@magickml/portal-db'
import { makeTrialPromotion } from './promotions'
import { PriceKeys } from '@magickml/portal-utils-shared'
import { clerkClient } from '@clerk/nextjs/server'
import { StripeEventHandler } from './stripeEventService'
import { NextApiRequest } from 'next'
import { KeywordsService } from '@magickml/keywords-service'

export interface CreateCheckoutInput {
  price: keyof typeof PriceKeys
  amount: number | undefined
  customerId: string
  priceType: 'recurring' | 'one_time'
  successUrl: string
  cancelUrl?: string
}
export class StripeService {
  private stripe: Stripe
  private eventHandler: StripeEventHandler
  private KeywordsService: KeywordsService

  constructor() {
    const stripeSigningSecret = this.getSecret()

    this.stripe = new Stripe(stripeSigningSecret, {
      apiVersion: '2023-10-16',
      appInfo: {
        name: 'MagickML',
        version: '0.1.0',
      },
    })

    this.eventHandler = new StripeEventHandler(this.stripe)
    this.KeywordsService = new KeywordsService()
  }

  private getEnv(env: string): string {
    const envVar = process.env[env]
    if (!envVar) {
      throw new Error(`${env} environment variable is not set.`)
    }

    if (typeof envVar !== 'string') {
      throw new Error(`${env} environment variable is not a string.`)
    }

    return envVar
  }

  private getAppURL(): string {
    return this.getEnv('APP_URL')
  }

  private getSecret = () => process.env['STRIPE_SIGNING_SECRET']!

  private getPriceKeyValue(input: keyof typeof PriceKeys): string | undefined {
    return PriceKeys[input]
  }

  private async createCustomPrice(amount: number): Promise<Stripe.Price> {
    return await this.stripe.prices.create({
      unit_amount: amount * 100,
      currency: 'usd',
      product_data: {
        name: 'Add to Balance',
        unit_label: 'USD',
        metadata: {
          amount: amount.toString(),
          balance: 'true',
        },
      },
    })
  }

  private async getUser(userId: string) {
    try {
      const user = await clerkClient.users.getUser(userId)
      return {
        ...user,
        email: user.emailAddresses[0].emailAddress,
      }
    } catch (error) {
      console.error('Error getting user:', error)
      throw error
    }
  }

  async createStripeCustomer(email: string): Promise<string> {
    try {
      const stripeCustomer = await this.stripe.customers.create({ email })
      return stripeCustomer.id
    } catch (error) {
      console.error('Error creating Stripe customer:', error)
      throw error
    }
  }

  async constructWebhookEvent(
    rawBody: string | Buffer,
    sig: string,
    webhookSecret: string
  ): Promise<Stripe.Event> {
    try {
      const event = this.stripe.webhooks.constructEvent(
        rawBody,
        sig,
        webhookSecret
      )
      return event
    } catch (error) {
      console.error('Error constructing webhook event:', error)
      throw error
    }
  }

  async createCheckout(
    input: CreateCheckoutInput
  ): Promise<Stripe.Checkout.Session> {
    const { price, amount, customerId, priceType, successUrl, cancelUrl } =
      input

    console.log(`price: ${price}, amount: ${amount}`)
    let priceId
    if (price === 'Balance') {
      if (!amount) throw new Error('Amount is required for custom price')
      const customPrice = await this.createCustomPrice(amount)
      priceId = customPrice.id
    } else {
      priceId = this.getPriceKeyValue(price)
    }

    if (!priceId) throw new Error('Invalid price key')

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      customer: customerId,
      customer_update: { address: 'auto' },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl ?? `${this.getAppURL()}/billing`,
    }

    sessionParams.mode = priceType === 'recurring' ? 'subscription' : 'payment'

    return await this.stripe.checkout.sessions.create(sessionParams)
  }

  async createSubscriptionCheckout({
    priceId,
    customer,
    userId,
    name,
    coupon,
  }: {
    priceId: string
    customer: string
    userId: string
    name: string
    coupon?: string
  }): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    try {
      if (coupon) {
        // Check if the promotion code is valid for this user and not used
        const promotionCode = await prismaPortal.promotionCode.findFirst({
          where: {
            couponId: coupon,
            userId,
            isUsed: false,
          },
        })

        if (!promotionCode) {
          throw new Error('Invalid or used promotion code')
        }
      }

      const sessionParams: Stripe.Checkout.SessionCreateParams = {
        mode: 'subscription',
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        customer,
        customer_update: { address: 'auto' },
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        metadata: {
          userId,
          subscriptionName: name.toUpperCase(),
        },
        success_url: `${this.getAppURL()}/billing`,
        cancel_url: `${this.getAppURL()}/billing`,
      }

      if (coupon) {
        sessionParams.discounts = [{ coupon }]
      }

      const session = await this.stripe.checkout.sessions.create(sessionParams)

      if (coupon) {
        // Mark the promotion code as used
        await prismaPortal.promotionCode.update({
          where: { id: coupon },
          data: { isUsed: true },
        })
      }

      return session
    } catch (error) {
      console.error('Error creating subscription checkout:', error)
      throw error
    }
  }

  async createBalanceCheckout({
    amount,
    customer,
    userId,
  }: {
    amount: number
    customer: string
    userId: string
  }): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    try {
      const price = await this.createCustomPrice(amount)

      const session = await this.stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        customer,
        customer_update: { address: 'auto' },
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
        metadata: {
          userId,
          amount: amount.toString(),
          balance: 'true',
        },
        success_url: `${this.getAppURL()}/billing`,
        cancel_url: `${this.getAppURL()}/billing`,
      })

      return session
    } catch (error) {
      console.error('Error creating balance checkout:', error)
      throw error
    }
  }

  async createPortal(customerId: string): Promise<string> {
    const portalSession = await this.stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: this.getAppURL() + '/billing',
    })
    return portalSession.url
  }

  async createDefaultProxyUsers(userId: string) {
    try {
      const { mpUser, walletUser } =
        await this.KeywordsService.createWalletUsers(userId)

      if (!mpUser?.customer_identifier || !walletUser?.customer_identifier) {
        throw new Error('Error creating proxy users')
      }
      const { mpUser: updatedMpUser } = await makeTrialPromotion(userId)

      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          mpUser: updatedMpUser,
          walletUser: walletUser,
        },
      })
    } catch (error) {
      console.error('Error creating default wallet:', error)
      throw error
    }
  }

  async handleNewCustomer(userId: string): Promise<string> {
    if (!userId) throw new Error('userId is required')
    const { mpUser, walletUser } = await this.KeywordsService.fetchProxyWallets(
      userId
    )
    if (!mpUser?.customer_identifier || !walletUser?.customer_identifier) {
      this.createDefaultProxyUsers(userId)
    }

    const stripe = await this.stripe.customers.create({
      metadata: {
        userId,
      },
    })

    if (!stripe) throw new Error('Stripe customer not found')
    return stripe.id
  }

  async deleteCustomer(userId: string): Promise<void> {
    const customerData = await this.stripe.customers.search({
      query: `metadata['userId']:'${userId}'`,
    })

    const customer = customerData.data[0]

    if (!customer) throw new Error('Stripe customer not found')

    try {
      await this.stripe.customers.del(customer.id)
    } catch (error) {
      console.error('Error deleting customer:', error)
      throw error
    }
  }

  async getSubscriptionKeys() {
    // get all products from stripe where metadata field "subscription" exists
    const products = await this.stripe.products.list({ limit: 100 })

    return products.data.filter(
      product => product.metadata['subscription'] === 'APPRENTICE' || 'WIZARD'
    )
  }

  async handleWebhook(req: NextApiRequest) {
    this.eventHandler.handleEvent(req)
  }
}

export const stripeService = new StripeService()
