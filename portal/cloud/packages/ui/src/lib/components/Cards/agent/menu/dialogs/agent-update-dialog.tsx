'use client'

import { useState } from 'react'
import { api, RouterInputs } from '@magickml/portal-server-provider'
import toast from 'react-hot-toast'
import {
  PortalDialog,
  InputWithLabel,
  TextareaWithLabel,
} from '@magickml/client-ui'
import { handleImageUpload, PublicPresignType } from '../../utils/image'

enum Status {
  IDLE = 'Update Agent',
  IMG_UPLOADING = 'Uploading Image...',
  AGENT_UPDATING = 'Updating Agent...',
}

type AgentUpdateDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
  initialName: string | null
  initialDescription: string | null
}

export const AgentUpdateDialog: React.FC<AgentUpdateDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
  initialName,
  initialDescription,
}) => {
  const utils = api.useContext()
  const [name, setName] = useState(initialName ?? '')
  const [description, setDescription] = useState(initialDescription ?? '')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [status, setStatus] = useState<Status>(Status.IDLE)

  const { mutateAsync: getPresignedUrl } =
    api.agents.getPresignedUrl.useMutation({
      onError: error => {
        toast.error('Error getting image upload URL')
      },
    })

  const { mutateAsync: updateAgent } = api.agents.updateAgent.useMutation({
    onSuccess: async () => {
      setImageFile(null)
      toast.success('Agent updated.')
      await utils.agents.invalidate()
      setStatus(Status.IDLE)
      setIsOpen(false)
    },
    onError: error => {
      setStatus(Status.IDLE)
      toast.error('Error updating agent')
    },
  })

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!agentId) return

    let image: string | undefined
    if (imageFile) {
      setStatus(Status.IMG_UPLOADING)
      const args: RouterInputs['agents']['getPresignedUrl'] = {
        agentId,
        type: PublicPresignType.agentAvatar,
      }
      const key = await handleImageUpload({
        id: agentId,
        imageFile,
        fn: getPresignedUrl,
        args,
        type: args.type,
      })

      image = key
    }
    setStatus(Status.AGENT_UPDATING)

    await updateAgent({
      name,
      description,
      image,
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
      title="Update Agent"
      description="Update your agent's name, description, and image."
      footerText={status}
      footerButton={{
        onClick: handleUpdate,
        disabled: !name || status !== Status.IDLE,
        isLoading: status !== Status.IDLE,
        className: 'w-full',
        variant: 'portal-primary',
      }}
    >
      <div className="flex flex-col gap-8">
        <InputWithLabel
          id="agentName"
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter a name for your agent"
          className="w-full"
        />
        <TextareaWithLabel
          id="agentDescription"
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter a description for your agent"
          className="w-full"
          rows={4}
        />
        <InputWithLabel
          id="agentImage"
          type="file"
          label="Upload an image (optional)"
          onChange={handleFileChange}
          placeholder="Upload an image"
          className="w-full"
          accept="image/*"
        />
      </div>
    </PortalDialog>
  )
}
