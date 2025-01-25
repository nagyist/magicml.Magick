import { z } from 'zod'

export const rateTemplateSchema = z.object({
  templateId: z.string(),
  rating: z.number().min(1).max(5),
})

export const getTemplateRatingSchema = z.object({
  templateId: z.string(),
})