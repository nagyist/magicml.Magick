import {
  createTRPCRouter,
  protectedProcedure,
} from '@magickml/portal-server-core'
import { rateTemplateSchema, getTemplateRatingSchema } from '../schemas'
import { getTemplateRating, rateTemplate } from '../services'

export const templateRatingRouter = createTRPCRouter({
  rate: protectedProcedure
    .input(rateTemplateSchema)
    .mutation(async ({ ctx, input }) => {
      await rateTemplate(input.templateId, ctx.auth.userId, input.rating)
    }),
  find: protectedProcedure
    .input(getTemplateRatingSchema)
    .query(async ({ input }) => {
      return await getTemplateRating(input.templateId)
    }),
})
