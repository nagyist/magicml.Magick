import {
  createTRPCRouter,
  protectedProcedure,
} from '@magickml/portal-server-core'
import { stripeService } from '@magickml/portal-billing'
import { z } from 'zod'
import { prismaPortal, type Transaction } from '@magickml/portal-db'
import { getFullUser, paginateItems } from '@magickml/portal-utils-server'
import type Stripe from 'stripe'
import { KeywordsService } from '@magickml/keywords-service'

export const billingRouter = createTRPCRouter({
  createCheckout: protectedProcedure
    .input(
      z.object({
        price: z.string().optional(), // Optional, only for subscriptions
        name: z.string(),
        amount: z.number().optional(), // Optional, only for adding to balance
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await getFullUser(ctx.auth.userId)

      if (!user.customer) {
        throw new Error('Stripe customer not found')
      }

      let checkoutSession: Stripe.Response<Stripe.Checkout.Session>
      try {
        if (input.amount) {
          checkoutSession = await stripeService.createBalanceCheckout({
            amount: input.amount,
            customer: user.customer,
            userId: ctx.auth.userId,
          })
        } else {
          if (!input.price) {
            throw new Error('Price ID is required for subscriptions')
          }
          checkoutSession = await stripeService.createSubscriptionCheckout({
            priceId: input.price,
            customer: user.customer,
            userId: ctx.auth.userId,
            name: input.name,
          })
        }

        if (!checkoutSession) {
          throw new Error('Failed to create Stripe checkout session.')
        }

        return { checkoutSession }
      } catch (error) {
        console.error('Error in createCheckout:', error)
        throw error
      }
    }),

  getBudget: protectedProcedure.query(async ({ ctx }) => {
    const keywordsService = new KeywordsService()
    const { walletUser, mpUser } = await keywordsService.fetchProxyWallets(
      ctx.auth.userId
    )

    const balance = walletUser
      ? walletUser?.period_budget - walletUser?.total_period_usage || 0
      : 0

    const promoBalance = mpUser
      ? mpUser?.period_budget - mpUser?.total_period_usage || 0
      : 0

    const data = {
      balance: balance < 0 ? 0 : balance,
      promotional_balance: promoBalance < 0 ? 0 : promoBalance,
    }

    return data
  }),

  getPromotions: protectedProcedure.query(async ({ ctx }) => {
    const promotions = await prismaPortal.promotion.findMany({
      where: {
        userId: ctx.auth.userId,
        isUsed: false,
        validFrom: { lte: new Date() },
        validUntil: { gte: new Date() },
      },
    })

    return promotions
  }),
  getTransactions: protectedProcedure
    .input(
      z.object({
        limit: z.number().optional(),
        cursor: z.string().optional(),
        projectId: z.string().optional(),
        agentId: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 10
      const { cursor, projectId, agentId } = input
      const mode = projectId ? 'project' : agentId ? 'agent' : 'user'
      let transactions: Transaction[]
      switch (mode) {
        case 'project':
          console.log('project')
          transactions = await prismaPortal.transaction.findMany({
            where: {
              projectId,
              userId: ctx.auth.userId,
              createdAt: { lt: cursor ? new Date(cursor) : new Date() },
            },
            take: limit,
            orderBy: {
              createdAt: 'desc',
            },
          })
          break
        case 'agent':
          console.log('agent')
          transactions = await prismaPortal.transaction.findMany({
            where: {
              agentId,
              userId: ctx.auth.userId,
              createdAt: { lt: cursor ? new Date(cursor) : new Date() },
            },
            take: limit,
            orderBy: {
              createdAt: 'desc',
            },
          })
          break
        default:
          transactions = await prismaPortal.transaction.findMany({
            where: {
              userId: ctx.auth.userId,
              createdAt: { lt: cursor ? new Date(cursor) : new Date() },
            },
            take: limit,
            orderBy: {
              createdAt: 'desc',
            },
          })
          break
      }

      return paginateItems(transactions, limit)
    }),

  redeemCode: protectedProcedure
    .input(z.object({ code: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const promotionCode = await prismaPortal.promotionCode.findUnique({
        where: { code: input.code },
      })

      if (!promotionCode) {
        throw new Error('Invalid promotion code')
      }

      const user = await getFullUser(ctx.auth.userId)

      if (!user.customer) {
        throw new Error('Stripe customer not found')
      }

      const checkoutSession = await stripeService.createSubscriptionCheckout({
        priceId: '{{PRICE_ID}}',
        customer: user.customer,
        userId: ctx.auth.userId,
        name: 'Promotion',
        coupon: promotionCode.couponId,
      })

      if (!checkoutSession) {
        throw new Error('Failed to create Stripe checkout session.')
      }

      return { checkoutSession }
    }),
})
