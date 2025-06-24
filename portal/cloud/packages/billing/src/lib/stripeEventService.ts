import Stripe from 'stripe'
import { clerkClient } from '@clerk/nextjs/server'
import { makeWizardPromotion, makeApprenticePromotion } from './promotions'
import { PortalSubscriptions } from '@magickml/portal-utils-shared'
import { buffer } from 'micro'
import { NextApiRequest } from 'next'
import { PortalBot } from '@magickml/server-event-tracker'
import { KeywordsService } from '@magickml/keywords-service'

class StripeEventHandler {
  private stripe: Stripe
  private keywordsService: KeywordsService

  private bot: PortalBot = new PortalBot(
    process.env.CLERK_WEBHOOK_LOGGING === 'true',
    typeof process.env.PORTAL_BOT_URL === 'string'
  )

  constructor(stripe: Stripe) {
    this.stripe = stripe
    this.keywordsService = new KeywordsService()
  }

  private async errorLog(event: string, content: string) {
    await this.bot.log({
      event,
      content,
      slackMessage: {
        text: `${event}: ${content}`,
        blocks: [],
      },
    })
  }

  private getWebhookSecret = () => process.env.STRIPE_WEBHOOK_SECRET!

  private extractSignature = (req: NextApiRequest) =>
    (() => {
      const sig = req.headers['stripe-signature']
      if (typeof sig !== 'string')
        throw new Error('Stripe signature is not a string or is undefined.')
      return sig
    })()

  private getRawBody = async (req: NextApiRequest) => await buffer(req)

  private async constructWebhookEvent(
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

  async handleEvent(req: NextApiRequest) {
    const sig = this.extractSignature(req)
    const webhookSecret = this.getWebhookSecret()
    try {
      const event = await this.constructWebhookEvent(
        await this.getRawBody(req),
        sig,
        webhookSecret
      )
      switch (event.type) {
        case 'checkout.session.completed':
          await this.handleCheckoutSessionCompleted(event)
          break
        case 'customer.subscription.deleted':
          const subName = event.data.object.metadata?.subscriptionName
          const id = event.data.object.metadata?.userId
          await this.keywordsService.handleSubscriptionCancellation({
            userId: id,
            subscriptionName: subName,
          })
          break
        case 'invoice.payment_succeeded':
          const sub = event.data.object.subscription
          const isRenewal =
            event.data.object.billing_reason === 'subscription_cycle'
          const subscriptionName = event.data.object.metadata?.subscriptionName
          const userId = event.data.object.metadata?.userId
          const periodEnd = event.data.object.period_end
          const renewalDate = new Date(periodEnd * 1000)

          const isWizard = subscriptionName === 'WIZARD'

          if (sub && subscriptionName && userId) {
            if (isRenewal) {
              await this.keywordsService.handleSubscriptionRenewal({
                userId,
                subscriptionName,
              })
            }
            const user = await clerkClient.users.getUser(userId)
            await clerkClient.users.updateUserMetadata(userId, {
              publicMetadata: {
                ...user.publicMetadata,
                subscription: subscriptionName,
                ...(isWizard && { mpRenewsAt: renewalDate }),
              },
            })
          }
          break
        default:
          console.log('Unhandled stripe event:', event.type)
          break
      }
    } catch (error) {
      console.error('Error handling stripe event:', error)
      throw error
    }
  }

  async handleCheckoutSessionCompleted(event: Stripe.Event) {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session?.metadata?.userId || ''
    const isBalance = session?.metadata?.balance === 'true' ? true : false
    const subscriptionName = session?.metadata?.subscriptionName as string
    const amount = session?.metadata?.amount as string

    if (isBalance) {
      const parsedAmount = parseFloat(amount)

      try {
        // Get the user's private metadata from Clerk
        const user = await clerkClient.users.getUser(userId)
        const privateMetadata = user.privateMetadata

        if (privateMetadata?.walletUser) {
          const userWallet = await this.keywordsService.fetchProxyWallet(
            `WALLET_${userId}`
          )

          if (!userWallet.customer_identifier) {
            throw new Error('User proxy data not found')
          }

          const walletUser = await this.keywordsService.updateProxyWallet(
            `WALLET_${userId}`,
            {
              period_budget: parsedAmount + userWallet.period_budget,
              period_start: new Date().toISOString(),
              period_end: new Date(
                new Date().setDate(new Date().getDate() + 30)
              ).toISOString(),
            }
          )

          if (!walletUser) {
            throw new Error('Failed to update wallet user')
          }
        } else {
          const walletUser = await this.keywordsService.createWalletUser(
            `WALLET_${userId}`,
            {
              period_budget: parsedAmount,
              budget_duration: 'monthly',
              period_start: new Date().toISOString(),
            }
          )

          if (!walletUser) {
            throw new Error('Failed to create wallet user')
          }

          await clerkClient.users.updateUserMetadata(userId, {
            privateMetadata: {
              walletUser: walletUser,
            },
          })
        }

        await this.bot.log({
          event: 'Checkout session completed',
          content: `Updated balance: ${userId} ${parsedAmount}`,
          slackMessage: {
            text: `Checkout session completed: ${userId} ${parsedAmount}`,
            blocks: [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*${userId} Balance Information*\n*Amount*: ${parsedAmount}`,
                },
              },
            ],
          },
        })
      } catch (error) {
        await this.errorLog(
          'Checkout session completed',
          `Error updating balance: ${error}`
        )
      }
    } else {
      if (!userId || !subscriptionName) {
        await this.errorLog(
          'Checkout session completed',
          `Missing userId or subscriptionName`
        )

        return
      }
      // add promotion
      switch (subscriptionName.toUpperCase() as PortalSubscriptions) {
        case 'APPRENTICE':
          await makeApprenticePromotion(userId)
          break
        case 'WIZARD':
          await makeWizardPromotion(userId)
          break
        default:
          await this.errorLog(
            'Checkout session completed',
            `Unhandled subscription: ${subscriptionName}`
          )
          break
      }

      try {
        await clerkClient.users
          .updateUserMetadata(userId, {
            publicMetadata: {
              subscription: subscriptionName,
            },
          })
          .catch(err => {
            console.error('Error updating metadata:', err)
            throw err
          })

        await this.bot.log({
          event: 'Checkout session completed',
          content: `Updated user metadata: ${userId} ${subscriptionName}`,
          slackMessage: {
            text: `Checkout session completed: ${userId} ${subscriptionName}`,
            blocks: [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*${userId} Subscription Information*\n*Subscription*: ${subscriptionName}`,
                },
              },
            ],
          },
        })
      } catch (error) {
        await this.errorLog(
          'Checkout session completed',
          `Error updating user metadata: ${error}`
        )
      }
    }
  }
}

export { StripeEventHandler }
