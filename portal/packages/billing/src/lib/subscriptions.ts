import { stripeService } from './stripeService'
import { type SubscribePageProps } from '@magickml/portal-types'

export const getSubscriptionKeys = async () => {
  const products = await stripeService.getSubscriptionKeys()
  const sortedProducts = products.sort((a, b) => b.created - a.created)

  const subscriptionKeys: SubscribePageProps = {
    APPRENTICE: { product: '', price: '', name: 'Apprentice' },
    WIZARD: { product: '', price: '', name: 'Wizard' },
  }

  sortedProducts.forEach(product => {
    if (product.metadata.subscription) {
      const key = product.metadata.subscription
      if (key === 'WIZARD' || key === 'APPRENTICE') {
        subscriptionKeys[key] = {
          ...subscriptionKeys[key],
          product: product.id,
          price:
            typeof product.default_price === 'string'
              ? product.default_price
              : '',
        }
      }
    }
  })

  return subscriptionKeys
}
