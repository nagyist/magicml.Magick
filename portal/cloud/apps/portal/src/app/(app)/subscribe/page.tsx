import { getSubscriptionKeys } from '@magickml/portal-billing'
import { SubscribePage } from '@magickml/pages-subscribe'

const subscribe = async () => {
  const keys = await getSubscriptionKeys()
  return <SubscribePage {...keys} />
}

export default subscribe
