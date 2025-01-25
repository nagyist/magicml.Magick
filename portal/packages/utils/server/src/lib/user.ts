import { clerkClient } from '@clerk/clerk-sdk-node'
import { KeywordsService } from '@magickml/keywords-service'

export const getFullUser = async (userId: string) => {
  const keywordsService = new KeywordsService()
  try {
    const user = await clerkClient.users.getUser(userId)
    if (!user) throw new Error('User not found')

    let { mpUser, walletUser } = await keywordsService.fetchProxyWallets(userId)
    if (!mpUser?.customer_identifier || !walletUser?.customer_identifier) {
      const userData = await keywordsService.createWalletUsers(userId)
      mpUser = userData.mpUser
      walletUser = userData.walletUser
    }

    if (!mpUser.period_budget || !walletUser.period_budget) {
      await keywordsService.ensurePeriodBudget({ mpUser, walletUser })
    }
    const isWizard = user.publicMetadata?.subscription === 'WIZARD'
    const useWallet = mpUser.period_budget - mpUser.total_period_usage <= 0

    const publicMetadata = user.publicMetadata || {}
    const privateMetadata = user.privateMetadata || {}

    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        ...publicMetadata,
        ...(isWizard && {
          mpRenewsAt: mpUser.period_end,
        }),
        useWallet,
      },
      privateMetadata: {
        ...privateMetadata,
        mpUser,
        walletUser,
      },
    })

    const customer = user.privateMetadata?.['stripeId'] as string | undefined
    if (!customer) {
      throw new Error('Stripe customer not found')
    }

    return { user, customer, mpUser, walletUser, useWallet }
  } catch (error) {
    console.error('Error in getFullUser:', error)
    throw error
  }
}
