'use client'

import React from 'react'
import toast from 'react-hot-toast'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from '@magickml/client-ui'

import { DeleteDialog } from './dialogs/agent-delete-dialog'
import { TemplateDialog } from './dialogs/create-template-dialog'
import Link from 'next/link'
import { AgentUpdateDialog } from './dialogs/agent-update-dialog'

type AgentCardMenuProps = {
  agentId: string | null
  agentName: string | null
  agentDescription: string | null
  projectId: string | null
  isPublic: boolean | null
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  deleteModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  templateModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  updateModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export const AgentCardMenu: React.FC<AgentCardMenuProps> = ({
  agentId,
  agentName,
  agentDescription,
  projectId,
  openState,
  updateModalState,
  deleteModalState,
  templateModalState,
}) => {
  const [isOpen, setIsOpen] = openState
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = updateModalState
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = deleteModalState
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = templateModalState

  const menuItems = [
    {
      name: 'Open in Editor',
      type: 'link',
      href: `/projects/${projectId}`,
      enabled: true,
    },
    {
      name: 'Chat with Agent',
      type: 'link',
      href: `/agents/${agentId}`,
      enabled: false,
    },
    {
      name: 'Copy Link',
      type: 'button',
      action: () => {
        navigator.clipboard.writeText(
          `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/explore/${agentId}`
        )
        toast.success('Link copied to clipboard')
      },
      enabled: false,
    },
    {
      name: 'Update Agent',
      action: () => setIsUpdateDialogOpen(true),
      type: 'button',
      enabled: true,
    },
    {
      name: 'Create Template',
      action: () => setIsTemplateDialogOpen(true),
      type: 'button',
      enabled: true,
    },
    {
      name: 'Delete',
      action: () => setIsDeleteDialogOpen(true),
      type: 'button',
      enabled: true,
    },
  ]

  return (
    <>
      <AgentUpdateDialog
        isOpen={isUpdateDialogOpen}
        setIsOpen={setIsUpdateDialogOpen}
        agentId={agentId}
        initialName={agentName}
        initialDescription={agentDescription}
      />
      <TemplateDialog
        isOpen={isTemplateDialogOpen}
        setIsOpen={setIsTemplateDialogOpen}
        agentId={agentId}
      />
      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        agentId={agentId}
        agentName={agentName}
        projectId={projectId}
      />

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="absolute z-40 top-0 right-0 rounded-tr-xl"
            variant="ghost"
          >
            <EllipsisVerticalIcon className="w-5 h-5 text-ds-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {menuItems.map(
            item =>
              item.enabled &&
              (item.type === 'link' ? (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href ?? '#'} target="_blank">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  key={item.name}
                  onSelect={item.action ?? (() => {})}
                >
                  {item.name}
                </DropdownMenuItem>
              ))
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
