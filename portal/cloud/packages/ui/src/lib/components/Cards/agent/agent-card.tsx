'use client'

import { useRef, useState } from 'react'
import { PortalCard } from './portal-card'
import { AgentCardMenu } from './menu/agent-card-menu'
import { AgentCardFooter } from './agent-card-footer'
import { AgentCardProps } from './types'

export const AgentCard: React.FC<AgentCardProps> = props => {
  const footerRef = useRef<HTMLButtonElement>(null)
  const footerState = useState(false)
  const menuState = useState(false)
  const updateModalState = useState(false)
  const deleteModalState = useState(false)
  const templateModalState = useState(false)

  const isFooterActive = (e: MouseEvent) => {
    if (footerRef.current) {
      return footerRef.current.contains(e.target as Node)
    }
    return false
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      isFooterActive(e.nativeEvent) ||
      footerState[0] ||
      menuState[0] ||
      updateModalState[0] ||
      deleteModalState[0] ||
      templateModalState[0]
    ) {
      e.stopPropagation()
    } else {
      window.open(`/projects/${props.projectId}`, '_blank')
    }
  }

  const openEditor = () => {
    window.open(`/projects/${props.projectId}`, '_blank')
  }

  return (
    <PortalCard
      id={props.id}
      name={props.name}
      image={props.image}
      description={props.description}
      onClick={handleClick}
      menu={
        <AgentCardMenu
          agentName={props.name}
          agentId={props.id}
          agentDescription={props.description}
          projectId={props.projectId}
          isPublic={true} // TODO: get from API
          openState={menuState}
          updateModalState={updateModalState}
          deleteModalState={deleteModalState}
          templateModalState={templateModalState}
        />
      }
      footer={
        <AgentCardFooter
          id={props.id}
          name={props.name}
          description={props.description}
          image={props.image}
          state={footerState}
          buttonRef={footerRef}
          submitText="Build"
          onSubmit={openEditor}
          metadata={null}
        />
      }
    />
  )
}
