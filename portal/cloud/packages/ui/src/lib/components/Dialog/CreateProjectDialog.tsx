'use client'

import { useState } from 'react'
import { api } from '@magickml/portal-server-provider'
import { toast } from 'react-hot-toast'
import { MagickDialog } from '@magickml/client-ui'
import { Input, Label, formInputStyles } from '@magickml/client-ui'
interface CreateProjectDialogProps {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export const CreateProjectDialog: React.FC<CreateProjectDialogProps> = ({
  state,
}) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const utils = api.useContext()

  const { mutateAsync: createProject, isLoading: createProjectLoading } =
    api.projects.createProject.useMutation({
      onSuccess: async data => {
        openInNewTab(`/projects/${data.id}`)

        toast.success('Project created!')
        state[1](false)
        setName('')
        setDescription('')
        setImageFile(null)
        await utils.projects.getProjects.invalidate()
      },
      onError: error => {
        toast.error('Error creating project. Check your image for corruption.')
      },
    })

  const handleCreateProject = async () => {
    let base64Image: string | null = null
    if (imageFile) {
      base64Image = await convertFileToBase64(imageFile)
    }

    await createProject({
      name,
      description,
      base64Image: base64Image as string,
    })
  }

  const convertFileToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files ? e.target.files[0] : null)
  }

  return (
    <MagickDialog
      open={state[0]}
      setOpen={state[1]}
      submitText="Create"
      submitDisabled={!name || createProjectLoading}
      onSubmit={handleCreateProject}
      isLoading={createProjectLoading}
      title="Create a new project"
      description="Get started by filling in the information below to create your new project."
      trigger={<button onClick={() => state[1](true)}>New Project</button>}
    >
      <>
        <Input
          className={formInputStyles}
          placeholder="Project Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          className={formInputStyles}
          placeholder="Project Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="project_image_input">Picture</Label>
          <Input
            id="project_image_input"
            onChange={handleFileChange}
            accept="image/*"
            type="file"
          />
        </div>
      </>
    </MagickDialog>
  )
}
