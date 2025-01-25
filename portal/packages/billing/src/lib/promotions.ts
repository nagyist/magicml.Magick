import { clerkClient } from '@clerk/nextjs/server'
import { prismaPortal, PromotionType } from '@magickml/portal-db'
import { Decimal } from '@prisma/client/runtime/library'
import { KeywordsService } from '@magickml/keywords-service'

const keywordsService = new KeywordsService()

export const makeTrialPromotion = async (userId: string) => {
  const promo = await prismaPortal.promotion.create({
    data: {
      name: 'Trial',
      description: 'Get started for free with $2,00 in credits',
      type: PromotionType.INTRO,
      amount: new Decimal(2),
      validFrom: new Date(),
      validUntil: new Date(new Date().setDate(new Date().getDate() + 30)),
      isUsed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId,
    },
  })

  const mpUser = await keywordsService.updateProxyWallet(`MP_${userId}`, {
    period_budget: 2,
    period_start: new Date().toISOString(),
    period_end: new Date(
      new Date().setDate(new Date().getDate() + 30)
    ).toISOString(),
  })

  if (!mpUser?.customer_identifier) {
    throw new Error('Failed to update user credits with trial promotion')
  }

  await prismaPortal.promotion.update({
    where: { id: promo.id },
    data: { isUsed: true },
  })

  const user = await clerkClient.users.getUser(userId)
  clerkClient.users.updateUserMetadata(userId, {
    publicMetadata: {
      ...user.publicMetadata,
      useWallet: false,
    },
    privateMetadata: {
      ...user.privateMetadata,
      mpUser,
    },
  })

  return { mpUser }
}

export const makeApprenticePromotion = async (userId: string) => {
  // this create an empty credit promotion but if we ever decide to add a price to the apprentice subscription
  // we can change the amount here
  await prismaPortal.promotion.create({
    data: {
      name: 'Apprentice',
      description: 'Apprentice subscription credits.',
      type: PromotionType.ADMIN,
      amount: new Decimal(0),
      validFrom: new Date(),
      validUntil: new Date(new Date().setDate(new Date().getDate() + 30)),
      isUsed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId,
    },
  })
}

export const makeWizardPromotion = async (userId: string) => {
  try {
    const promo = await prismaPortal.promotion.create({
      data: {
        name: 'Wizard',
        description: 'Wizard subscription credits.',
        type: PromotionType.ADMIN,
        amount: new Decimal(10),
        validFrom: new Date(),
        validUntil: new Date(new Date().setDate(new Date().getDate() + 30)),
        isUsed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId,
      },
    })

    const updatedMpUser = await keywordsService.updateProxyWallet(
      `MP_${userId}`,
      {
        period_budget: 10,
        period_start: new Date().toISOString(),
      }
    )

    if (!updatedMpUser?.customer_identifier) {
      throw new Error('Failed to update user credits')
    }

    await prismaPortal.promotion.update({
      where: { id: promo.id },
      data: { isUsed: true },
    })
    const user = await clerkClient.users.getUser(userId)
    clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...user.publicMetadata,
        subscription: 'WIZARD',
        mpRenewsAt: new Date(new Date().setDate(new Date().getDate() + 30)),
        useWallet: false,
      },
      privateMetadata: {
        ...user.privateMetadata,
        mpUser: updatedMpUser,
      },
    })
  } catch (error) {
    console.error('Error updating user:', error)
    throw error
  }
}

// export const makeBalancePromotion = async (userId: string, amount: number) => {
//   await prismaPortal.promotion.create({
//     data: {
//       name: 'Balance',
//       description: 'Balance credits.',
//       type: PromotionType.ADMIN,
//       amount: new Decimal(amount),
//       validFrom: new Date(),
//       validUntil: new Date(new Date().setDate(new Date().getDate() + 30)),
//       isUsed: false,
//       createdAt: new Date(),
//       updatedAt: new Date(),
//       userId,
//     },
//   })
// }
