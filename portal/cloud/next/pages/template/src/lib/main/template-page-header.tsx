'use client'

import { usePathname, useRouter } from 'next/navigation'
import { TemplateGetStaticProps } from '../template-page-isr'
import { Button } from '@magickml/client-ui'
import { CreateAgentDialog } from '@magickml/portal-ui'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useUser } from '@clerk/nextjs'
import { Reply, AccountTreeOutlined, ForumOutlined } from '@mui/icons-material'
import { TemplateAgentImage } from '../components'

type TemplatePageHeaderProps = {
  template: TemplateGetStaticProps['template']
}

export const TemplatePageHeader = (props: TemplatePageHeaderProps) => {
  const { template } = props

  const { isSignedIn } = useUser()

  const router = useRouter()
  const pathname = usePathname()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      (process.env?.NEXT_PUBLIC_APP_URL || '') + pathname
    )
    toast.success('Link copied to clipboard')
  }

  const createDialog = useState(false)

  const openCreateDialog = () => {
    if (!isSignedIn) {
      router.push('/sign-in')
      return
    }
    createDialog[1](true)
  }

  return (
    <>
      <CreateAgentDialog templateId={template.id} state={createDialog} />
      <div className="inline-flex flex-col lg:flex-row justify-between w-full items-center gap-y-4">
        <TemplateAgentImage className="lg:hidden" template={template} />
        <h1 className="text-[32px] font-medium">
          {template?.name || 'Unnamed Template'}
        </h1>

        <div className="inline-flex flex-col w-full lg:w-auto lg:flex-row-reverse p-2 bg-ds-card-alt rounded-lg gap-2">
          {/* CTA Button */}
          <Button variant="portal-primary" onClick={openCreateDialog}>
            <AccountTreeOutlined className="!h-5 !w-5 mr-1" />
            Build in Magick
          </Button>

          {/* Other Buttons */}
          <div className="inline-flex gap-2 justify-center lg:justify-start">
            <Button
              variant="ghost"
              className="mr-4 hover:border-none"
              onClick={copyToClipboard}
            >
              <Reply className="!h-5 !w-5 mr-1 transform -scale-x-100" />
              Share
            </Button>
            <Button variant="ghost" className="mr-4 hover:border-none" disabled>
              <ForumOutlined className="!h-5 !w-5 mr-1 transform -scale-x-100" />
              Chat
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
