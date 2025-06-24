import { z } from 'zod'
import {
  createTRPCRouter,
  protectedProcedure,
} from '@magickml/portal-server-core'
import { prismaPortal } from '@magickml/portal-db'
import { hasAccess, prepareToken } from '../utils/shared'
import { uploadImage } from '../utils/upload'
import { v4 } from 'uuid'
import { UploadImageType } from '@magickml/storage'

export const projectsRouter = createTRPCRouter({
  // Create a project
  createProject: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        base64Image: z.string().optional().nullable(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { base64Image } = input
      const id = v4()

      let filePath: string | null = null

      // Handle the base64 image data
      if (base64Image) {
        const imgResponse = await uploadImage(
          id,
          base64Image,
          UploadImageType.PROJECT_AVATAR
        )
        filePath = `/projects/${id}/avatar.jpg?${imgResponse.VersionId}`
      }

      const project = await prismaPortal.project.create({
        data: {
          id,
          owner: ctx.auth.orgId || ctx.auth.userId,
          image: filePath,
          description: input.description,
          name: input.name,
        },
      })

      const newToken = await prepareToken({
        user: {
          userId: ctx.auth.userId,
          user: {},
          orgId: ctx.auth.orgId || null,
        },
        projectId: project.id,
      })

      await createProjectData({ token: newToken, projectId: project.id })

      return project
    }),

  // Get all projects for the current user
  getProjects: protectedProcedure.query(async ({ ctx }) => {
    return await prismaPortal.project.findMany({
      where: {
        owner: ctx.auth.orgId || ctx.auth.userId,
        deletedAt: null,
      },
    })
  }),

  // Get a specific project by ID
  getProject: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ input, ctx }) => {
      return await prismaPortal.project.findFirst({
        where: {
          id: input.projectId,
          deletedAt: null,
          owner: ctx.auth.orgId || ctx.auth.userId,
        },
      })
    }),

  // Update a project
  updateProject: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const access = await hasAccess({
        projectId: input.projectId,
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
        },
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      return await prismaPortal.project.update({
        where: { id: input.projectId },
        data: {
          name: input.name,
          description: input.description,
        },
      })
    }),

  // Soft delete a project
  deleteProject: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const access = await hasAccess({
        projectId: input.projectId,
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
        },
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      // Proceed to soft delete the project by setting the deletedAt field
      return await prismaPortal.project.update({
        where: { id: input.projectId },
        data: { deletedAt: new Date() },
      })
    }),
})

interface CreateProjectDataParams {
  token: string
  projectId: string
}
export async function createProjectData(
  params: CreateProjectDataParams
): Promise<void> {
  await fetch(`${process.env?.['NEXT_PUBLIC_API_URL']}/projects`, {
    method: 'POST',
    body: JSON.stringify({
      data: { id: '0' },
      projectId: params.projectId,
      replace: true,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${params.token}`,
    },
  })
}
