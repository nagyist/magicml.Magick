'use client'

import { useState } from 'react'
import { api } from '@magickml/portal-server-provider'
import toast from 'react-hot-toast'
import {
  PortalDialog,
  InputWithLabel,
  TextareaWithLabel,
  SwitchWithLabel,
} from '@magickml/client-ui'
import { handleImageUpload, PublicPresignType } from '../../utils/image'
import { RouterInputs } from '@magickml/portal-server-router'

enum Status {
  IDLE = 'Update Template',
  IMG_UPLOADING = 'Uploading Image...',
  TEMPLATE_UPDATING = 'Updating Template...',
}

type UpdateTemplateDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  templateId: string
  initialName: string
  initialDescription: string
  initialPublic: boolean
}

type UpdateTemplateState = {
  name: string
  description: string
  public: boolean
}

export const UpdateTemplateDialog: React.FC<UpdateTemplateDialogProps> = ({
  isOpen,
  setIsOpen,
  templateId,
  initialName,
  initialDescription,
  initialPublic,
}) => {
  const utils = api.useContext()
  const [imageFile, setImageFile] = useState<File | null>(null)

  const [templateState, setTemplateState] = useState<UpdateTemplateState>({
    name: initialName,
    description: initialDescription,
    public: initialPublic,
  })

  const [status, setStatus] = useState<Status>(Status.IDLE)

  const { mutateAsync: getPresignedUrl } =
    api.templates.presignImageUrl.useMutation({
      onError: error => {
        toast.error('Something went wrong')
      },
    })

  const { mutateAsync: updateTemplate } = api.templates.update.useMutation({
    onSuccess: async payload => {
      setImageFile(null)
      toast.success('Template updated')
      await utils.templates.invalidate()
      setStatus(Status.IDLE)
      setIsOpen(false)
    },
    onError: e => {
      toast.error(e.message)
      setStatus(Status.IDLE)
      setIsOpen(false)
    },
  })

  const handleUpdateTemplate = async () => {
    let image: string | undefined
    if (imageFile) {
      setStatus(Status.IMG_UPLOADING)
      const args: RouterInputs['templates']['presignImageUrl'] = {
        id: templateId,
        type: PublicPresignType.templateAvatar,
      }

      const key = await handleImageUpload({
        imageFile,
        fn: getPresignedUrl,
        args,
        ...args,
      })

      image = key
    }

    setStatus(Status.TEMPLATE_UPDATING)
    await updateTemplate({
      templateId,
      name: templateState.name,
      description: templateState.description,
      public: templateState.public,
      image,
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
      title="Update Template"
      description="Update the name and description of the template."
      footerText={status}
      footerButton={{
        onClick: handleUpdateTemplate,
        disabled: status !== Status.IDLE,
        isLoading: status !== Status.IDLE,
        className: 'w-full',
        variant: 'portal-primary',
      }}
    >
      <div className="flex flex-col gap-8">
        <InputWithLabel
          id="template-name"
          label="Template Name"
          value={templateState.name}
          onChange={e =>
            setTemplateState({ ...templateState, name: e.target.value })
          }
          placeholder="Enter a name for the template"
        />

        <TextareaWithLabel
          id="template-description"
          label="Template Description"
          value={templateState.description}
          onChange={e =>
            setTemplateState({ ...templateState, description: e.target.value })
          }
          placeholder="Enter a description for the template"
          rows={4}
        />

        <InputWithLabel
          id="templateImage"
          type="file"
          label="Upload an image (optional)"
          onChange={handleFileChange}
          placeholder="Upload an image"
          className="w-full"
        />

        <SwitchWithLabel
          id="template-type"
          label="Make this template public?"
          className="-[state=unchecked]:bg-ds-card-alt data-[state=unchecked]:border-ds-neutral data-[state=unchecked]:border"
          checked={templateState.public}
          onCheckedChange={checked =>
            setTemplateState({
              ...templateState,
              public: checked,
            })
          }
        />
      </div>
    </PortalDialog>
  )
}
