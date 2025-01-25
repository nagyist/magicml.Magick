import type { NextApiRequest, NextApiResponse } from 'next'
import { stripeService } from './stripeService'
import { getAuth } from '@clerk/nextjs/server'
import { getFullUser } from '@magickml/portal-utils-server'

export const portalEndpoint = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed')

  const { userId } = getAuth(req)

  if (!userId) {
    return res.status(401).end('Unauthorized')
  }

  const user = await getFullUser(userId)

  try {
    if (!user.customer) {
      throw new Error('Stripe customer not found')
    }

    const portalUrl = await stripeService.createPortal(user.customer)
    console.log('portalUrl', portalUrl)
    res.status(200).json({ url: portalUrl })
  } catch (error: any) {
    console.error(`Error message: ${error.message}`)
    res.status(500).end(`Server Error: ${error.message}`)
  }
}
