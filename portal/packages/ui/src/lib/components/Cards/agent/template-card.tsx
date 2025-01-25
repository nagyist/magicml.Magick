'use client'

import { useRef, useState } from 'react'
import { PortalCard } from './portal-card'
import { AgentCardFooter } from './agent-card-footer'
import { TemplateCardProps } from './types'
import React from 'react'
import { CreateAgentDialog } from './menu/dialogs/create-agent-dialog'
import { TemplateCardMenu } from './menu/template-card-menu'
import { useUser } from '@clerk/nextjs'
import { AgentCardBadge } from './components/agent-card-badge'
import { useRouter } from 'next/navigation'

export const TemplateCard: React.FC<TemplateCardProps> = props => {
  const router = useRouter()

  const { createdAt: versionDate, version } = props.templateVersions[0] || {}
  const { user, isSignedIn } = useUser()
  const isAdmin = (role: unknown) => role === 'ADMIN'
  const isCreator = (creator: string | null | undefined) => creator === user?.id

  const footerRef = useRef<HTMLButtonElement>(null)
  const menuState = useState(false)
  const footerState = useState(false)
  const createState = useState(false)
  const updateState = useState(false)
  const updateVersionState = useState(false)
  const deleteState = useState(false)

  const isFooterActive = (e: MouseEvent) => {
    if (footerRef.current) {
      return footerRef.current.contains(e.target as Node)
    }
    return false
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      isFooterActive(e.nativeEvent) ||
      menuState[0] ||
      footerState[0] ||
      createState[0] ||
      updateState[0] ||
      updateVersionState[0] ||
      deleteState[0]
    ) {
      e.stopPropagation()
    } else if (!createState[0]) {
      createState[1](true)
    }
  }

  const handleFooterSubmit = () => {
    if (!isSignedIn) {
      router.push('/sign-in')
      return
    }

    footerState[1](false)
    createState[1](true)
  }

  const handleSecondaryClick: React.MouseEventHandler<
    HTMLButtonElement
  > = e => {
    e.preventDefault()
    if (!window) return
    // window.open(`/templates/${props.id}`, '_blank')
    router.push(`/templates/${props.id}`)
  }

  // If the template has was created in the past 3 days, show bade with text "NEW"
  // If the last version was created in the past 3 days, show badge with text "UPDATED"
  // Prioritize version date over template date

  const isNew = (date: Date) =>
    date.getTime() > Date.now() - 1000 * 60 * 60 * 24 * 3

  const badgeOrNoBadge = (): React.ReactNode | null => {
    if (props.type !== 'OFFICIAL') {
      return null
    }

    const versionIsNew = versionDate && isNew(versionDate)
    const templateIsNew = props.createdAt && isNew(props.createdAt)

    if (versionIsNew && version > 1)
      return <AgentCardBadge>UPDATED</AgentCardBadge>

    if (templateIsNew && version === 1)
      return <AgentCardBadge>NEW</AgentCardBadge>
    return null
  }

  return (
    <PortalCard
      {...props}
      onClick={handleClick}
      badge={badgeOrNoBadge()}
      menu={
        isSignedIn &&
        (isAdmin(user?.publicMetadata.role) || isCreator(props.userId)) && (
          <TemplateCardMenu
            template={props}
            isCreator={isCreator(props.userId)}
            isAdmin={isAdmin(user?.publicMetadata.role)}
            openState={menuState}
            updateDialogState={updateState}
            updateVersionDialogState={updateVersionState}
            deleteDialogState={deleteState}
          />
        )
      }
      footer={
        <>
          <AgentCardFooter
            {...props}
            state={footerState}
            buttonRef={footerRef}
            submitText="Build"
            secondaryText="Preview"
            onSecondaryClick={handleSecondaryClick}
            onSubmit={handleFooterSubmit}
            metadata={props.templateVersions[0]?.metadata as any}
          />
          <CreateAgentDialog templateId={props.id} state={createState} />
        </>
      }
    />
  )
}
