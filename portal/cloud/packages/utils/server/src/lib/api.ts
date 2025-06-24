import { NextApiRequest, NextApiResponse } from 'next'

export const validateBudgetRequest = (
  req: NextApiRequest,
  res: NextApiResponse,
  allowedMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS'
) => {
  // Validate request method
  if (req.method !== allowedMethod) {
    res.status(405).json({ status: 'error', message: 'Method Not Allowed' })
    return false
  }

  // Validate API key header
  const apiKey = req.headers['x-api-key']
  if (!apiKey || apiKey !== process.env.PORTAL_AGENT_KEY) {
    res.status(401).json({ status: 'error', message: 'Unauthorized' })
    return false
  }

  console.log('request validated', req.method, req.url)
  return true
}
