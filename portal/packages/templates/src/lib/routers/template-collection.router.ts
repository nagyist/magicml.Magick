import {
  createTRPCRouter,
  protectedProcedure,
} from '@magickml/portal-server-core'
import { createTemplateCollection, getTemplateCollection } from '../services'
import {
  createTemplateCollectionSchema,
  getTemplateCollectionSchema,
} from '../schemas'

export const templateCollectionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createTemplateCollectionSchema)
    .mutation(async ({ input }) => {
      return await createTemplateCollection(input)
    }),
  find: protectedProcedure
    .input(getTemplateCollectionSchema)
    .query(async ({ input }) => {
      return await getTemplateCollection(input.collectionId)
    }),
})
