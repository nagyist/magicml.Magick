import { Metadata, Viewport } from 'next'
import { siteConfig } from '@magickml/portal-config'
import {
  PortalLayout,
  ThemeProvider,
  fontSans,
} from '@magickml/portal-layout-next'

/* PROVIDERS */
import { ClerkProvider } from '@clerk/nextjs'
import { TRPCReactProvider } from '@magickml/portal-server-provider'
import * as Frigade from '@frigade/react'

/* STYLES */
import '../styles/globals.css'
import '../../../../../../packages/client/stylesheets/src/App.css'
import '../../../../../../packages/client/stylesheets/src/design-globals/design-globals.css'
import 'dockview/dist/styles/dockview.css'
import '../../../../../../packages/client/stylesheets/src/themes.scss'
import '@xyflow/react/dist/style.css'
import '../styles/globals.css'
import 'node_modules/latex.js/dist/css/katex.css'
import '../../../../../../packages/client/stylesheets/src/behaveFlow.css'
import '../../../../../../packages/client/stylesheets/src/dockview.css'
import '../../../../../../packages/client/stylesheets/src/flowOverrides.css'
import 'react-tooltip/dist/react-tooltip.css'

import { auth } from '@clerk/nextjs/server'
import { cn } from '@magickml/client-ui'
import { PortalPosthogProvider } from '@magickml/portal-providers'
import React from 'react'

// import {
//   CustomPosthogProvider,
//   FrigadeProvider,
// } from '@magickml/portal-providers'

// import { Analytics } from '@/components/analytics'
// import { ThemeProvider } from '@/components/providers'
// import { TailwindIndicator } from '@/components/tailwind-indicator'
// import { ThemeSwitcher } from '@/components/theme-switcher'
// import { Toaster as DefaultToaster } from '@/registry/default/ui/toaster'
// import { Toaster as NewYorkSonner } from '@/registry/new-york/ui/sonner'
// import { Toaster as NewYorkToaster } from '@/registry/new-york/ui/toaster'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'AI',
    'Artificial Intelligence',
    'AI Agents',
    'No Code AI',
    'Machine Learning',
  ],
  // authors: [ // maybe we can use this for user created content?
  //   {
  //     name: 'shadcn',
  //     url: 'https://shadcn.com',
  //   },
  // ],
  creator: 'Oneirocom',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@magickml',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { userId } = auth()

  return (
    <ClerkProvider>
      <TRPCReactProvider>
        <PortalPosthogProvider>
          <Frigade.Provider
            apiKey={process.env.FRIGADE_PRIVATE_KEY || ''}
            userId={userId || undefined}
          >
            <html lang="en" suppressHydrationWarning>
              <head />
              <body
                className={cn(
                  'min-h-screen bg-background font-sans antialiased w-full',
                  fontSans.variable
                )}
              >
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                  <PortalLayout>{children}</PortalLayout>
                  {/* <div vaul-drawer-wrapper="">
                <div className="relative flex min-h-screen flex-col bg-background">
                  {children}
                </div>
              </div> */}
                  {/* <TailwindIndicator /> */}
                  {/* <ThemeSwitcher /> */}
                  {/* <Analytics /> */}
                  {/* <NewYorkToaster /> */}
                  {/* <DefaultToaster /> */}
                  {/* <NewYorkSonner /> */}
                </ThemeProvider>
              </body>
            </html>
          </Frigade.Provider>
        </PortalPosthogProvider>
      </TRPCReactProvider>
    </ClerkProvider>
  )
}
