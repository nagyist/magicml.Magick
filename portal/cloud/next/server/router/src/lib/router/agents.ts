import { z } from 'zod'
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '@magickml/portal-server-core'
import { hasAccess, prepareToken } from '../utils/shared'
import { prismaPortal } from '@magickml/portal-db'
import { prismaCore } from '@magickml/server-db'
import {
  trackServerEvent,
  paginateItems,
  getAgentData,
  getInfiniteAgents,
} from '@magickml/portal-utils-server'
import {
  PublicEventTypes,
  PrivateEventTypes,
} from '@magickml/portal-utils-shared'
import { makeClient } from 'ideClient'
import { createFromTemplate } from '@magickml/portal-templates'
import { publicPresigner, PublicPresignType } from '@magickml/storage'

const ideServerUrl = process.env?.['IDE_SERVER_URL'] || 'http://localhost:3030'

const app = makeClient(ideServerUrl)

export const agentsRouter = createTRPCRouter({
  getAgent: publicProcedure
    .input(z.object({ agentId: z.string() }))
    .query(async ({ ctx, input }) => {
      const agentData = await getAgentData({
        auth: ctx.auth,
        agentId: input.agentId,
      })

      if (!agentData) {
        throw new Error('Agent not found')
      }

      // check if the user has access to the agent
      if (!agentData.status.isPublic && !agentData.status.isCreator) {
        throw new Error('User does not have access to the specified agent')
      }

      // check if agent is enabled
      if (!agentData.status.isCreator && !agentData.status.isEnabled) {
        throw new Error('Agent is not enabled')
      }

      return agentData
    }),

  getAgentAnalytics: protectedProcedure
    .input(z.object({ agentId: z.string(), projectId: z.string() }))
    .query(async ({ input, ctx }) => {
      const newToken = await prepareToken({
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
          user: {},
        },
        projectId: input.projectId,
      })
      const agents = await fetchAgentAnalytics({
        token: newToken,
        agentId: input.agentId,
        projectId: input.projectId,
      })

      return agents
    }),

  createFromTemplate: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        templateId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { name, templateId } = input
      const agent = await createFromTemplate({
        projectName: name,
        templateId,
        agentName: name,
        owner: ctx.auth.userId,
      })

      return agent
    }),

  // delete a single agent
  deleteAgent: protectedProcedure
    .input(z.object({ agentId: z.string(), projectId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const token = await prepareToken({
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
          user: {},
        },
        projectId: input.projectId,
      })
      const deletedAgent = await deleteAgent({
        token,
        agentId: input.agentId,
        projectId: input.projectId,
      })
      trackServerEvent(
        PrivateEventTypes.AGENT_PRIVATE_DELETE,
        ctx.auth.userId,
        input.agentId
      )
      return deletedAgent
    }),

  getPresignedUrl: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        type: z.nativeEnum(PublicPresignType),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { agentId: id, type } = input

      const agent = await prismaCore.agents.findUnique({
        where: { id },
        select: { projectId: true },
      })

      if (!agent?.projectId) {
        throw new Error('Agent project not found')
      }

      const access = await hasAccess({
        projectId: agent.projectId,
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
        },
      })

      if (!access) {
        throw new Error('No access to the specified workspace')
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

  updateAgent: protectedProcedure
    .input(
      z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        // TODO: Deprecated
        // publicVariables: z.string().optional(), // unused now leaving for old code
        variables: z.string().optional(), // unused now, is done in a different way
        image: z.string().optional().nullable(),
        data: z.any().optional().nullable(), // unused now leaving for old code
        agentId: z.string(),
        updateDraft: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const agent = await prismaCore.agents.findUnique({
        where: { id: input.agentId },
      })

      if (!agent?.projectId) {
        throw new Error('Agent project not found')
      }

      const access = await hasAccess({
        projectId: agent.projectId,
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
        },
      })

      if (!access) {
        throw new Error('No access to the specified workspace')
      }

      const performUpdate = async (agentIdToUpdate: string) => {
        await app.service('agents').patch(agent.id, {
          name: input?.name || undefined,
          description: input?.description || undefined,
          image: input?.image || undefined,
        })

        trackServerEvent(
          PrivateEventTypes.AGENT_PRIVATE_UPDATE,
          ctx.auth.userId, // todo: make email, this was previously typed weirdly, there is no email here,
          agentIdToUpdate
        )
      }

      // Update the draft agent if updateDraft is true and a draft agent exists
      if (input.updateDraft && agent.draftAgentId) {
        await performUpdate(agent.draftAgentId)
      }

      // Always update the original (live) agent
      await performUpdate(input.agentId)

      return agent
    }),

  makePublic: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        description: z.string().optional(),
        remixable: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prismaCore.agents.findUnique({
        where: {
          id: input.agentId,
        },
        select: {
          projectId: true,
        },
      })

      if (!a?.projectId) {
        throw new Error('Agent not found')
      }

      const access = await hasAccess({
        projectId: a.projectId,
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
        },
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      // check if agent is public
      const deployed = await prismaPortal.publicAgent.findUnique({
        where: {
          agentId: input.agentId,
        },
      })

      // if the agent exists and deletedAt is null, it is already public
      if (deployed && deployed.deletedAt === null) {
        throw new Error('Agent is already public')
      }

      // if the agent exists and deletedAt is not null, restore the agent
      if (deployed && deployed.deletedAt !== null) {
        const agent = await prismaPortal.publicAgent.update({
          where: {
            agentId: input.agentId,
          },
          data: {
            deletedAt: null,
            description: input.description ?? '',
            remixable: input.remixable ?? false,
          },
        })
        return agent
      }

      // if the agent does not exist, create it
      const newPublicAgent = await prismaPortal.publicAgent.create({
        data: {
          agentId: input.agentId,
          userId: ctx.auth.userId,
          description: input.description ?? '',
          remixable: input.remixable ?? false,
        },
      })

      trackServerEvent(
        PrivateEventTypes.AGENT_PRIVATE_MAKE_PUBLIC,
        ctx.auth.userId, // todo: make email, this was previously typed weirdly, there is no email here,
        input.agentId
      )

      return newPublicAgent
    }),
  updateAgentPublic: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        description: z.string().optional(),
        remixable: z.boolean().optional(),
        isTemplate: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prismaCore.agents.findUnique({
        where: {
          id: input.agentId,
        },
        select: {
          projectId: true,
        },
      })

      if (!a?.projectId) {
        throw new Error('Agent not found')
      }

      const access = await hasAccess({
        projectId: a.projectId,
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
        },
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      const agent = await prismaPortal.publicAgent.update({
        where: {
          agentId: input.agentId,
        },
        data: {
          deletedAt: null,
          description: input.description,
          remixable: input.remixable,
          isTemplate: input.isTemplate,
        },
      })

      trackServerEvent(
        PublicEventTypes.AGENT_PUBLIC_UPDATE,
        ctx.auth.userId, // todo: make email, this was previously typed weirdly, there is no email here,
        input.agentId
      )

      return agent
    }),

  updatePublicAgentDesc: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prismaCore.agents.findUnique({
        where: {
          id: input.agentId,
        },
        select: {
          projectId: true,
        },
      })

      if (!a?.projectId) {
        throw new Error('Agent not found')
      }

      const access = await hasAccess({
        projectId: a.projectId,
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
        },
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      const agent = await prismaPortal.publicAgent.update({
        where: {
          agentId: input.agentId,
        },
        data: {
          description: input.description,
        },
      })

      trackServerEvent(
        PublicEventTypes.AGENT_PUBLIC_UPDATE,
        ctx.auth.userId, // todo: make email, this was previously typed weirdly, there is no email here,
        input.agentId
      )

      return agent
    }),
  makePrivate: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prismaCore.agents.findUnique({
        where: {
          id: input.agentId,
        },
        select: {
          projectId: true,
        },
      })

      if (!a?.projectId) {
        throw new Error('Agent not found')
      }

      const access = await hasAccess({
        projectId: a.projectId,
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || null,
        },
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      const deployed = await prismaPortal.publicAgent.findUnique({
        where: {
          agentId: input.agentId,
        },
      })

      // If the agent exists and deletedAt is null, set deletedAt to now
      if (deployed && deployed.deletedAt === null) {
        const agent = await prismaPortal.publicAgent.update({
          where: {
            agentId: input.agentId,
          },
          data: {
            deletedAt: new Date(), // setting current date
            remixable: false,
          },
        })
        return agent
      }

      // If the agent exists and deletedAt is not null, it's already private
      if (deployed && deployed.deletedAt !== null) {
        throw new Error('Agent is already private')
      }

      // If the agent doesn't exist, no need to make it private
      throw new Error('Agent not found')
    }),

  getInfinite: protectedProcedure
    .input(
      z.object({ limit: z.number().optional(), cursor: z.string().optional() })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 10
      const { cursor } = input

      const fetchedItems = await getInfiniteAgents({
        limit,
        cursor,
        userId: ctx.auth.userId,
      })

      return paginateItems(fetchedItems, limit)
    }),
})

interface FetchAgentAnalyticsInput {
  token: string
  agentId: string
  projectId: string
}
const fetchAgentAnalytics = async (
  params: FetchAgentAnalyticsInput
): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env?.['NEXT_PUBLIC_API_URL']}/request/analytics?agentId=${params.agentId}?projectId=${params.projectId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      }
    )
    return await response.json()
  } catch (error) {
    console.error('ERROR', error)
  }
}

interface DeleteAgentParams {
  token: string
  agentId: string
  projectId: string
}
const deleteAgent = async (params: DeleteAgentParams): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env['NEXT_PUBLIC_API_URL']}/agents/${params.agentId}?projectId=${params.projectId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      }
    )
    return await response.json()
  } catch (error) {
    console.error('ERROR', error)
  }
}
