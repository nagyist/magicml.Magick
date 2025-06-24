'use client'

import { useState } from 'react'
import { api } from '@magickml/portal-server-provider'
import toast from 'react-hot-toast'
import { convertFileToBase64 } from '@magickml/portal-utils-shared'
import { PortalDialog, InputWithLabel } from '@magickml/client-ui'

type ImageDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
}

export const ImageDialog: React.FC<ImageDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
}) => {
  const utils = api.useContext()
  const [imageFile, setImageFile] = useState<File | null>(null)

  const { mutateAsync: updateAgent, isLoading: isUpdateLoading } =
    api.agents.updateAgent.useMutation({
      onSuccess: async () => {
        setImageFile(null)
        toast.success('Image updated.')
        await utils.agents.invalidate()
      },
      onError: error => {
        toast.error('Something went wrong')
      },
    })

  const handleImageUpdate = async () => {
    if (!imageFile || !agentId) return
    const base64 = await convertFileToBase64(imageFile)
    await updateAgent({
      image: base64,
      agentId,
      updateDraft: true,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files?.[0] ?? null)
  }

  return (
    <PortalDialog
      base={{
        root: {
          open: isOpen,
          onOpenChange: setIsOpen,
        },
      }}
      title="Update Image"
      description="Update your agent's image."
      footerText="Update Image"
      footerButton={{
        onClick: handleImageUpdate,
        disabled: !imageFile,
        isLoading: isUpdateLoading,
      }}
    >
      <div className="flex flex-col gap-8">
        <InputWithLabel
          id="agentImage"
          type="file"
          label="Upload an image"
          onChange={handleFileChange}
          placeholder="Upload an image"
          className="w-full"
        />
      </div>
    </PortalDialog>
  )
}
