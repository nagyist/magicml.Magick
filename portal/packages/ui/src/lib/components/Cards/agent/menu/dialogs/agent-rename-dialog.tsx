'use client'

import { useState } from 'react'
import { api } from '@magickml/portal-server-provider'
import toast from 'react-hot-toast'
import { PortalDialog, InputWithLabel } from '@magickml/client-ui'

type RenameDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
  agentName: string | null
}

export const RenameDialog: React.FC<RenameDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
  agentName,
}) => {
  const utils = api.useContext()
  const [renameValue, setRenameValue] = useState(agentName ?? '')

  const { mutateAsync: updateAgent, isLoading: isUpdateLoading } =
    api.agents.updateAgent.useMutation({
      onSuccess: async () => {
        await utils.agents.invalidate()
        toast.success('Agent updated')
        setIsOpen(false)
      },
      onError: e => {
        toast.error(e.message)
        setIsOpen(false)
      },
    })

  const handleRename = async () => {
    if (!agentId) return
    if (renameValue === agentName) {
      toast.error('Please enter a new name for the agent.')
      return
    }
    await updateAgent({
      agentId,
      name: renameValue,
      updateDraft: true,
    })
  }

  return (
    <PortalDialog
      base={{
        root: {
          open: isOpen,
          onOpenChange: setIsOpen,
        },
      }}
      title="Rename Agent"
      description="Rename your agent to a new name."
      footerText="Rename Agent"
      footerButton={{
        onClick: handleRename,
        disabled: renameValue === agentName || renameValue === '',
        isLoading: isUpdateLoading,
        className: 'w-full',
        variant: 'portal-primary',
      }}
    >
      <div className="flex flex-col gap-8">
        <InputWithLabel
          id="rename-agent"
          label={`Current name: ${agentName}`}
          value={renameValue}
          onChange={e => setRenameValue(e.target.value)}
          placeholder="Enter new agent name"
          disabled={isUpdateLoading}
          className="w-full"
        />
      </div>
    </PortalDialog>
  )
}
