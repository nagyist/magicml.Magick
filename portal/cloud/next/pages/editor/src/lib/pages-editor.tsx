'use client'
import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { type AppConfig } from '@magickml/providers'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { Maintenance } from '@magickml/portal-ui'
import { useScreenWidth } from '@magickml/portal-hooks'
import { MagickDialog } from '@magickml/client-ui'
import { useRouter } from 'next/navigation'

const MagickIDE = dynamic(
  () => import('client/editor').then(mod => mod.MagickIDE),
  {
    ssr: false,
  }
)

export const Editor = (props: AppConfig): React.ReactElement | null => {
  const [loading, setLoading] = useState(true)
  const status = useState<string>('Initializing editor...')
  const [cookie, setCookie] = useState<boolean | null>(null)
  const [mobileDialog, setMobileDialog] = useState(false)

  const { theme } = useTheme()
  const dimensions = useScreenWidth()
  const router = useRouter()

  useEffect(() => {
    // I think we can remove this with minimal updates to the editor now that we de-iframed
    setCookie(!posthog.has_opted_out_capturing())
  }, [])

  useEffect(() => {
    // here we force dark mode until the editor is ready
    if (theme !== 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    if (dimensions < 768) {
      setMobileDialog(true)
    } else {
      setMobileDialog(false)
    }
  }, [dimensions, mobileDialog])

  if (!props || !props.apiUrl || !props.token) return null

  return (
    <>
      {!loading && (
        <MagickDialog
          title="Mobile Not Supported"
          open={mobileDialog}
          setOpen={setMobileDialog}
          trigger={<div className="hidden" />}
          onSubmit={() => {
            router.push('/')
          }}
          submitButton={false}
          contentClassNames="pt-0"
          titleClassNames="py-2 text-center font-montAlt"
          type="error"
          noClose
        >
          <div className="text-black dark:text-ds-white font-sans font-medium text-base flex flex-col gap-y-2">
            <p>
              Magick's Development Environment is not supported as a mobile
              experience
            </p>
            <p>Please reconnect from a desktop or laptop for full access.</p>
          </div>
        </MagickDialog>
      )}
      {loading && (
        <div className=" h-dvh flex items-center justify-center flex-col gap-y-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <object
            type="image/svg+xml"
            data="/images/loading.svg"
            aria-label="loading..."
            className="w-72 h-72"
          />
          <span className="text-sm font-sans font-medium tracking-tight">
            {status[0]}
          </span>
        </div>
      )}
      {process.env.NEXT_PUBLIC_AIDE_MAINTENANCE_MODE === 'true' ? (
        <Maintenance mode="editor" />
      ) : cookie !== null ? (
        <>
          <MagickIDE
            config={props}
            loading={[loading, setLoading]}
            loadingStatus={status}
          />
        </>
      ) : null}
    </>
  )
}
