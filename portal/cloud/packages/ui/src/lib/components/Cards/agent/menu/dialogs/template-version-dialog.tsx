'use client'

import { api } from '@magickml/portal-server-provider'
import toast from 'react-hot-toast'
import { PortalDialog } from '@magickml/client-ui'

type TemplateVersionDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
}

export const TemplateVersionDialog: React.FC<TemplateVersionDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
}) => {
  const utils = api.useContext()

  const {
    mutateAsync: TemplateVersionVersion,
    isLoading: isTemplateVersionLoading,
  } = api.templateVersions.update.useMutation({
    onSuccess: async () => {
      await utils.templates.invalidate()
      toast.success('Template updated')
      setIsOpen(false)
    },
    onError: e => {
      toast.error(e.message)
      setIsOpen(false)
    },
  })

  const handleTemplateVersion = async () => {
    if (!agentId) return
    await TemplateVersionVersion({ templateId: agentId })
  }

  return (
    <PortalDialog
      base={{
        root: {
          open: isOpen,
          onOpenChange: setIsOpen,
        },
      }}
      title="Update Template Version"
      description="This will update the template to your live agent's current spells."
      footerText={`${
        isTemplateVersionLoading ? 'Updating' : 'Update'
      } Template`}
      footerButton={{
        onClick: handleTemplateVersion,
        isLoading: isTemplateVersionLoading,
        className: 'w-full',
        variant: 'portal-primary',
      }}
    >
      <></>
    </PortalDialog>
  )
}
