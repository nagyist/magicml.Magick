import type { NextApiRequest, NextApiResponse } from 'next'
import { stripeService } from './stripeService'

export const config = {
  api: {
    bodyParser: false,
  },
}

export const stripeWebhook = async function (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed')
    return
  }

  const sig = req.headers['stripe-signature'] as string | undefined
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !webhookSecret) {
    res.status(400).end('Missing Stripe signature or webhook secret')
    return
  }

  try {
    await stripeService.handleWebhook(req)
    res.status(200).json({ received: true })
  } catch (err: any) {
    console.error(`Error message: ${err.message}`)
    res.status(400).end(`Webhook Error: ${err.message}`)
  }
}
