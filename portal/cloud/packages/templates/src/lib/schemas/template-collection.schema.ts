import { z } from 'zod'

export const createTemplateCollectionSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  templates: z.array(
    z.object({
      templateId: z.string(),
      version: z.number(),
    })
  ),
})

export const getTemplateCollectionSchema = z.object({
  collectionId: z.string(),
})