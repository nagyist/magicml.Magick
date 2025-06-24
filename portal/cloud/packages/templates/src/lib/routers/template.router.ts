import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@magickml/portal-server-core'
import { prismaPortal, TemplateType } from '@magickml/portal-db'
import { clerkClient } from '@clerk/nextjs/server'
import {
  findTemplatesSchema,
  createTemplateSchema,
  updateTemplateSchema,
  deleteTemplateSchema,
  presignTemplateImageSchema,
} from '../schemas'
import { removeTemplate, createFromAgent } from '../services'
import { z } from 'zod'
import { publicPresigner } from '@magickml/storage'

export const templatesRouter = createTRPCRouter({
  find: publicProcedure
    .input(findTemplatesSchema)
    .query(async ({ input, ctx }) => {
      const { type, self } = input
      const userId = ctx.auth.userId

      if (self && !userId) {
        throw new Error('User not found')
      }

      const where = {
        deletedAt: null,
        userId: self ? userId : undefined,
        type: self ? undefined : type,
        public: self ? undefined : true,
      }

      return await prismaPortal.template.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          name: true,
          description: true,
          image: true,
          updatedAt: true,
          userId: true,
          public: true,
          ogAgentId: true,
          type: true,
          createdAt: true,
          templateVersions: {
            take: 1,
            orderBy: { version: 'desc' },
            select: {
              version: true,
              metadata: true,
              createdAt: true,
            },
          },
        },
      })
    }),
  create: protectedProcedure
    .input(createTemplateSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await clerkClient.users.getUser(ctx.auth.userId)
      console.log(input)

      return await createFromAgent({
        ...input,
        userId: ctx.auth.userId,
        type:
          user.publicMetadata?.['role'] === 'ADMIN'
            ? input.type
            : TemplateType.COMMUNITY,
        public: input.public ?? false,
      })
    }),

  update: protectedProcedure
    .input(updateTemplateSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await clerkClient.users.getUser(ctx.auth.userId)
      const role = user.publicMetadata?.['role']

      const { templateId: id, ...data } = input
      const template = await prismaPortal.template.findUnique({
        where: { id },
      })

      if (!template) {
        throw new Error('Template not found')
      }

      if (template.userId !== ctx.auth.userId) {
        if (role !== 'ADMIN') {
          throw new Error('You are not authorized to update this template')
        }
      }

      return prismaPortal.template.update({
        where: { id },
        data,
      })
    }),

  delete: protectedProcedure
    .input(deleteTemplateSchema)
    .mutation(async ({ ctx, input }) => {
      const template = await prismaPortal.template.findUnique({
        where: { id: input.templateId },
      })

      if (!template) {
        throw new Error('Template not found')
      }

      if (template.userId !== ctx.auth.userId) {
        throw new Error('You are not authorized to delete this template')
      }

      await removeTemplate(input.templateId)
    }),
  presignImageUrl: protectedProcedure
    .input(presignTemplateImageSchema)
    .mutation(async ({ input, ctx }) => {
      const user = await clerkClient.users.getUser(ctx.auth.userId)
      const role = user.publicMetadata?.['role']

      const { id, type } = input

      const template = await prismaPortal.template.findUnique({
        where: { id },
        select: { userId: true },
      })

      const exists = z
        .object({ userId: z.string() })
        .safeParse(template).success

      const isOwner = exists && template?.userId === ctx.auth.userId

      if (exists && !isOwner && role !== 'ADMIN') {
        throw new Error('You are not authorized to update this template')
      }

      const presignedUrl = await publicPresigner.getPresignedUrl({
        type,
        id,
      })
      if (!presignedUrl) {
        throw new Error('Error generating presigned URL')
      } else {
        return presignedUrl
      }
    }),
})
