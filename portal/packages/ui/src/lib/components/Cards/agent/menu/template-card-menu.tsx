'use client'

import React from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from '@magickml/client-ui'
import { UpdateTemplateDialog } from './dialogs/template-update-dialog'
import { DeleteTemplateDialog } from './dialogs/template-delete-dialog'
import { TemplateVersionDialog } from './dialogs/template-version-dialog'
import type { TemplateCardProps } from '../types'

type TemplateCardMenuProps = {
  template: TemplateCardProps
  isCreator: boolean
  isAdmin: boolean
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  updateDialogState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  updateVersionDialogState: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ]
  deleteDialogState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export const TemplateCardMenu: React.FC<TemplateCardMenuProps> = ({
  isCreator,
  isAdmin,
  openState,
  updateDialogState,
  updateVersionDialogState,
  deleteDialogState,
  template,
  ...rest
}) => {
  const { id, name, public: isPublic, description } = template

  const [isOpen, setIsOpen] = openState
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = deleteDialogState
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = updateDialogState

  const menuItems = [
    {
      name: isAdmin ? 'Admin Update' : 'Update',
      type: 'button',
      action: () => setIsUpdateDialogOpen(true),
      enabled: true,
    },
    {
      name: 'Update Version',
      type: 'button',
      action: () => updateVersionDialogState[1](true),
      enabled: true,
    },
    {
      name: `${isAdmin ? 'Admin Delete' : 'Delete'}`,
      action: () => setIsDeleteDialogOpen(true),
      type: 'button',
      enabled: true,
    },
  ]

  return (
    <>
      <UpdateTemplateDialog
        isOpen={isUpdateDialogOpen}
        setIsOpen={setIsUpdateDialogOpen}
        templateId={id ?? ''}
        initialName={name ?? ''}
        initialDescription={description ?? ''}
        initialPublic={isPublic ?? false}
      />
      <TemplateVersionDialog
        isOpen={updateVersionDialogState[0]}
        setIsOpen={updateVersionDialogState[1]}
        agentId={id}
      />
      <DeleteTemplateDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        templateId={id}
        templateName={name}
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
              item.enabled && (
                <DropdownMenuItem
                  key={item.name}
                  onSelect={item.action ?? (() => {})}
                >
                  {item.name}
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
