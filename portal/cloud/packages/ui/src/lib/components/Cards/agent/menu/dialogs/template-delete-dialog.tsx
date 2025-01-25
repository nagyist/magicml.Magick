'use client'

import { useState } from 'react'
import { api } from '@magickml/portal-server-provider'
import toast from 'react-hot-toast'
import { PortalDialog, InputWithLabel, DialogType } from '@magickml/client-ui'

type DeleteTemplateDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  templateId: string | null
  templateName: string | null
}

export const DeleteTemplateDialog: React.FC<DeleteTemplateDialogProps> = ({
  isOpen,
  setIsOpen,
  templateId,
  templateName,
}) => {
  const utils = api.useContext()
  const [disableConfirmDelete, setDisableConfirmDelete] = useState(true)

  const { mutateAsync: deleteTemplate, isLoading: isDeleteLoading } =
    api.templates.delete.useMutation({
      onSuccess: async () => {
        await utils.templates.invalidate()
        toast.success('Template deleted')
        handleClose()
      },
      onError: e => {
        toast.error(e.message)
        handleClose()
      },
    })

  const handleTemplateDelete = async () => {
    if (!templateId) return
    await deleteTemplate({
      templateId,
    })
  }

  const handleClose = () => {
    setDisableConfirmDelete(true)
    setIsOpen(false)
  }

  const handleOnChangeDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableConfirmDelete(e.target.value !== templateName)
  }

  return (
    <PortalDialog
      base={{
        root: {
          open: isOpen,
          onOpenChange: setIsOpen,
        },
      }}
      title="Delete Template"
      description={`Are you sure you want to delete this template? This action cannot be undone.`}
      footerText="Delete Template"
      footerButton={{
        onClick: handleTemplateDelete,
        disabled: disableConfirmDelete,
        isLoading: isDeleteLoading,
        className: 'w-full bg-ds-error',
      }}
      type={DialogType.ERROR}
    >
      <div className="flex flex-col gap-8">
        <InputWithLabel
          id="delete-template"
          label={`Template Name: ${templateName}`}
          onChange={handleOnChangeDelete}
          placeholder="Enter template name to confirm"
          disabled={isDeleteLoading}
          className="w-full"
        />
      </div>
    </PortalDialog>
  )
}
