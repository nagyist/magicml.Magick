'use client'

import { useState } from 'react'
import { api } from '@magickml/portal-server-provider'
import toast from 'react-hot-toast'
import { PortalDialog, InputWithLabel, DialogType } from '@magickml/client-ui'

type DeleteDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
  agentName: string | null
  projectId: string | null
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
  agentName,
  projectId,
}) => {
  const utils = api.useContext()
  const [disableConfirmDelete, setDisableConfirmDelete] = useState(true)

  const { mutateAsync: deleteAgent, isLoading: isDeleteLoading } =
    api.agents.deleteAgent.useMutation({
      onSuccess: async () => {
        await utils.agents.invalidate()
        toast.success('Agent deleted')
        handleClose()
      },
      onError: e => {
        toast.error(e.message)
        handleClose()
      },
    })

  const handleAgentDelete = async () => {
    if (!agentId || !projectId) return
    await deleteAgent({
      projectId,
      agentId,
    })
  }

  const handleClose = () => {
    setDisableConfirmDelete(true)
    setIsOpen(false)
  }

  const handleOnChangeDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableConfirmDelete(e.target.value !== agentName)
  }

  return (
    <PortalDialog
      base={{
        root: {
          open: isOpen,
          onOpenChange: setIsOpen,
        },
      }}
      title="Delete Agent"
      description={`Are you sure you want to delete this agent? This action cannot be undone and all data associated with this agent will be lost.`}
      footerText="Delete Agent"
      footerButton={{
        onClick: handleAgentDelete,
        disabled: disableConfirmDelete,
        isLoading: isDeleteLoading,
        className: 'w-full bg-ds-error',
      }}
      type={DialogType.ERROR}
    >
      <div className="flex flex-col gap-8">
        <InputWithLabel
          id="delete-agent"
          label={`Agent Name: ${agentName}`}
          onChange={handleOnChangeDelete}
          placeholder="Enter agent name to confirm"
          disabled={isDeleteLoading}
          className="w-full"
        />
      </div>
    </PortalDialog>
  )
}
