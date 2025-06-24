// 'use client'

// import { useEffect, useState } from 'react'
// import {
//   //  useRouter,
//   useSearchParams,
// } from 'next/navigation'
// import posthog from 'posthog-js'
// import { PostHogProvider } from 'posthog-js/react'
// import { CookieBanner } from '@magickml/portal-ui'
// import { useSession } from '@clerk/nextjs'

// type Props = {
//   children: React.ReactNode
// }

// export const PortalPosthogProvider = ({ children }: Props) => {
//   // get sessionId from query params
//   const query = useSearchParams()
//   // const router = useRouter()
//   const webflowSessionId = query.get('sessionId')

//   const { isSignedIn, session } = useSession()
//   const [showBanner, setShowBanner] = useState(false)

//   // Initialize PostHog
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
//         api_host:
//           process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
//         loaded: posthog => {
//           if (process.env.NODE_ENV === 'development') posthog.debug()
//         },
//         disable_session_recording: process.env.NODE_ENV === 'development',
//       })
//     }
//   }, [])

//   useEffect(() => {
//     if (webflowSessionId) {
//       // savw webflow id to localstorage
//       posthog.alias(webflowSessionId as string)
//     }
//   }, [webflowSessionId])

//   // Set identity
//   useEffect(() => {
//     if (isSignedIn && session?.user?.primaryEmailAddress?.emailAddress) {
//       posthog.identify(session?.user.primaryEmailAddress.emailAddress, {
//         email: session?.user.primaryEmailAddress.emailAddress,
//         firstName: session?.user.firstName,
//         lastName: session?.user.lastName,
//         userName: session?.user.username,
//         id: session?.user.id,
//       })
//     } else {
//       posthog.reset()
//     }
//   }, [isSignedIn, session])

//   // Check cookie tracking status
//   useEffect(() => {
//     if (posthog.has_opted_out_capturing()) {
//       return
//     } else if (posthog.has_opted_in_capturing()) {
//       return
//     } else {
//       setShowBanner(true)
//     }
//   }, [])

//   const acceptCookies = () => {
//     posthog.opt_in_capturing()
//     setShowBanner(false)
//   }

//   const declineCookies = () => {
//     posthog.opt_out_capturing()
//     setShowBanner(false)
//   }

//   return (
//     <PostHogProvider client={posthog}>
//       {children}
//       <CookieBanner
//         showBanner={showBanner}
//         acceptCookies={acceptCookies}
//         declineCookies={declineCookies}
//       />
//     </PostHogProvider>
//   )
// }

// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

export function PortalPosthogProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
