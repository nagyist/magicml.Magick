'use client'

import React, { useState } from 'react'
import { InputWithLabel, PortalDialog } from '@magickml/client-ui'
import { api } from '@magickml/portal-server-provider'
import toast from 'react-hot-toast'

type CreateAgentDialogProps = {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  templateId: string
}

export const CreateAgentDialog: React.FC<CreateAgentDialogProps> = ({
  state,
  templateId,
}) => {
  const [open, setOpen] = state
  const [name, setName] = useState('')

  const { mutateAsync: create, isLoading } =
    api.agents.createFromTemplate.useMutation({
      onSuccess: agent => {
        setOpen(false)
        setName('')
        window.open(`/projects/${agent.project}`, '_blank')
      },
      onError: error => {
        setOpen(false)
        setName('')
        toast.error(error.message)
      },
    })

  const handleCreate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!name) {
      toast.error('Please enter a name for your agent.')
      return
    }

    await create({ templateId, name })
  }

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCreate(e as any)
    }
  }

  return (
    <PortalDialog
      base={{
        root: {
          open: open,
          onOpenChange: setOpen,
        },
      }}
      title="Name Your Agent"
      description="Using a Template will create a new Agent with the same spells as the Template."
      footerText="Create"
      footerButton={{
        onClick: handleCreate,
        disabled: !name,
        isLoading: isLoading,
        variant: 'portal-primary',
        className: 'w-full',
      }}
      triggerButton={{
        className: 'hidden',
      }}
    >
      <div className="flex flex-col gap-8">
        <InputWithLabel
          id="name"
          label="Name"
          placeholder="Name your agent"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="off"
          onKeyDown={handleEnterPress}
        />
      </div>
    </PortalDialog>
  )
}
