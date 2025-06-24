"use client"

import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const createDocument = async ({
  files,
  projectId,
  type,
  model,
}: {
  files: File[]
  projectId: string
  type: string
  model: string
}) => {
  const formData = new FormData()
  formData.append('date', new Date().toISOString())
  formData.append('projectId', projectId)
  formData.append('type', type)
  formData.append('model', model)
  for (const file of files as File[]) {
    formData.append('files', file, file.name)
  }
  const result = await fetch(`/api/documents/create?projectId=${projectId}`, {
    method: 'POST',
    body: formData,
  })

  if (!result.ok) {
    throw new Error('Error creating document')
  }
  return result.json()
}

export const useCreateDocument = () => {
  return useMutation(createDocument, {
    onSuccess: async () => {
      toast.success('Document uploaded successfully')
    },
    onError: error => {
      toast.error('Error uploading documents')
    },
  })
}
