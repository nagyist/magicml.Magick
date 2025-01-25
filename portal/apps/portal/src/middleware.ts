import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/auth/verify',
  '/terms',
  '/privacy',
  '/eula',
  '/404',
  '/api',
  '/api/auth/sync',
  '/api/billing/sync',
  '/subscribe',
  'templates/(.*)',
  '/api/trpc/templates.find',
  '/templates/(.*)',
  '/templates',
  '/',
])

const isIgnoredRoute = createRouteMatcher([
  '/api/magick',
  '/api/magick/budget/set_budget',
  '/api/magick/budget/get_budget',
  '/api/magick/user',
  '/api/magick/user(.*)',
])

const isBotRequest = (userAgent: string) =>
  /Twitterbot|facebookexternalhit|LinkedInBot|Slackbot|Discordbot/.test(
    userAgent
  )

export default clerkMiddleware(
  (auth, req) => {
    const userAgent = req.headers.get('user-agent') || ''

    if (isBotRequest(userAgent)) {
      console.log('Bot request detected.')
      const parsedUrl = new URL(req.url)
      const pathParts = parsedUrl.pathname.split('/')
      const templateIdIndex = pathParts.indexOf('templates') + 1
      const templateId = pathParts[templateIdIndex]
      if (templateId) {
        const url = req.nextUrl.clone()
        url.pathname = `/api/meta/${templateId}`
        return NextResponse.rewrite(url)
      }
    }

    if (isIgnoredRoute(req)) {
      // Skip auth check for ignored routes
      return
    }
    if (!isPublicRoute(req)) {
      // Protect routes that are not public
      auth().protect()
    }
  },
  { debug: process.env.CLERK_MIDDLEWARE_LOGGING === 'true' }
)

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)',
    '/agents(.*)',
    '/projects(.*)',
    '/account(.*)',
    '/billing(.*)',
    '/templates(.*)',
  ],
}
