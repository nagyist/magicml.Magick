import { z } from 'zod'

export const updateTemplateVersionSchema = z.object({
  templateId: z.string(),
})

export const getTemplateVersionSchema = z.object({
  templateId: z.string(),
  version: z.number(),
})
