import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
// styles
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

// import "styles/sheetOverrides.css";
// import "driver.js/dist/driver.css";
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { Montserrat, Montserrat_Alternates } from 'next/font/google'

// state
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { api } from '@magickml/portal-server-provider'

import { StyledToaster } from '@magickml/portal-ui'

import clsx from 'clsx'
import { Maintenance } from '@magickml/portal-ui'
import { useEffect } from 'react'

import { ClerkProvider } from '@clerk/nextjs'
import { clerkAppearance } from '../styles/clerk'
import dynamic from 'next/dynamic'
import { FrigadeProvider } from '@magickml/portal-providers'

const PostHogProvider = dynamic(
  () =>
    import('@magickml/portal-providers').then(mod => mod.CustomPosthogProvider),
  { ssr: false }
)

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const monteserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  variable: '--font-sans-alternates',
  weight: ['400', '500', '600', '700'],
})

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout): React.ReactElement => {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    function (page) {
      return <>{page}</>
    }

  useEffect(() => {
    // Calculate the viewport height and set it as a CSS variable
    function setViewportHeight() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // Set the viewport height on initial load
    setViewportHeight()

    // Update the viewport height when the window is resized
    window.addEventListener('resize', setViewportHeight)

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', setViewportHeight)
  }, [])

  return (
    <ClerkProvider appearance={clerkAppearance} {...pageProps}>
      {/* <AnonymousUserProvider>
        <FrigadeProvider>
          <CustomPosthogProvider> */}
      <PostHogProvider>
        <FrigadeProvider>
          <main
            className={clsx(
              montserrat.className,
              `${monteserratAlternates.variable} font-sans h-screen`
            )}
          >
            <NextThemeProvider attribute="class">
              {process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
                <Maintenance mode="cloud" />
              ) : (
                getLayout(<Component {...pageProps} />)
              )}

              <StyledToaster />
            </NextThemeProvider>
          </main>
          {process.env.NEXT_PUBLIC_DEV_TOOLS === 'true' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
          {/* </CustomPosthogProvider>
        </FrigadeProvider>
      </AnonymousUserProvider> */}
        </FrigadeProvider>
      </PostHogProvider>
    </ClerkProvider>
  )
}

export default api.withTRPC(App)
