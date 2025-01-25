import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '@magickml/portal-server-core'
import { prepareToken } from '../utils/shared'
import { prismaPortal } from '@magickml/portal-db'
import { createAgent, createSpell } from '@magickml/portal-utils-server'
import { trackServerEvent } from '@magickml/portal-utils-server'
import { PublicEventTypes } from '@magickml/portal-utils-shared'
import {
getInfinitePublicAgents,
paginateItems,
} from '@magickml/portal-utils-server'

function sanitizeAgentData(agentData: string): object {
try {
const cleanData: any = {}
for (const [key, value] of Object.entries(JSON.parse(agentData))) {
if (!key.includes('api_key')) {
cleanData[key] = value
}
}

    return cleanData as object

} catch (e) {
console.error('AgentData Parse Error', agentData)
return {}
}
}

export const publicAgentsRouter = createTRPCRouter({
reportAgent: publicProcedure
.input(z.object({ publicAgentId: z.string(), message: z.string() }))
.mutation(async ({ input }) => {
await prisma.reports.create({
data: {
publicAgentId: input.publicAgentId,
message: input.message,
},
})

      return { success: true }
    }),

likeAgent: protectedProcedure
.input(z.object({ publicAgentId: z.string() }))
.mutation(async ({ ctx, input }) => {
await prisma.likes.create({
data: {
userId: ctx.session.user.id,
publicAgentId: input.publicAgentId,
},
})

      trackServerEvent(
        PublicEventTypes.AGENT_PUBLIC_LIKE,
        ctx.session?.user.email ?? '',
        input.publicAgentId
      )
      return { success: true }
    }),

unlikeAgent: protectedProcedure
.input(z.object({ publicAgentId: z.string() }))
.mutation(async ({ ctx, input }) => {
await prisma.likes.delete({
where: {
userId_publicAgentId: {
userId: ctx.session.user.id,
publicAgentId: input.publicAgentId,
},
},
})

      trackServerEvent(
        PublicEventTypes.AGENT_PUBLIC_UNLIKE,
        ctx.session?.user.email ?? '',
        input.publicAgentId
      )
      return { success: true }
    }),

addComment: protectedProcedure
.input(
z.object({
publicAgentId: z.string(),
content: z.string().nonempty(),
})
)
.mutation(async ({ ctx, input }) => {
const newComment = await prisma.comments.create({
data: {
userId: ctx.session.user.id,
publicAgentId: input.publicAgentId,
content: input.content,
},
})

      return { comment: newComment }
    }),

getPublicAgents: publicProcedure.query(async () => {
const publicAgents = await prisma.agents.findMany({
where: {
isPublic: true,
enabled: true,
},
select: {
commentsCount: true,
creatorName: true,
creatorImage: true,
enabled: true,
likesCount: true,
name: true,
image: true,
id: true,
publicAgentId: true,
description: true,
},
orderBy: {
likesCount: 'desc',
},
})

    if (!publicAgents) {
      return []
    }

    return publicAgents

}),

getFeaturedAgents: publicProcedure.query(async () => {
const publicAgents = await prisma.agents.findMany({
where: {
isPublic: true,
enabled: true,
featured: true,
},
select: {
commentsCount: true,
creatorName: true,
creatorImage: true,
creatorId: true,
enabled: true,
likesCount: true,
name: true,
image: true,
id: true,
publicAgentId: true,
description: true,
},
orderBy: {
likesCount: 'desc',
},
})

    if (!publicAgents) {
      return []
    }

    return publicAgents

}),

getPublicAgentsByIds: publicProcedure
.input(z.object({ ids: z.array(z.string()) }))
.query(async ({ input }) => {
const publicAgents = await prisma.agents.findMany({
where: {
isPublic: true,
enabled: true,
publicAgentId: {
in: input.ids,
},
},
select: {
commentsCount: true,
creatorName: true,
creatorImage: true,
enabled: true,
likesCount: true,
name: true,
image: true,
id: true,
publicAgentId: true,
description: true,
},
orderBy: {
likesCount: 'desc',
},
})

      if (!publicAgents) {
        return []
      }

      const sanitizedAgents = publicAgents.map(agent => {
        return {
          ...agent,
          commentsCount: Number(agent.commentsCount),
          likesCount: Number(agent.likesCount),
        }
      })

      return sanitizedAgents
    }),

getTemplateAgents: publicProcedure.query(async () => {
const publicAgents = await prisma.agents.findMany({
where: {
isPublic: true,
enabled: true,
isTemplate: true,
},
select: {
commentsCount: true,
creatorName: true,
creatorImage: true,
enabled: true,
likesCount: true,
name: true,
image: true,
id: true,
publicAgentId: true,
description: true,
},
orderBy: {
likesCount: 'desc',
},
})

    if (!publicAgents) {
      return []
    }

    return publicAgents.map(agent => ({
      ...agent,
      likesCount: Number(agent.likesCount),
      commentsCount: Number(agent.commentsCount),
    }))

}),

getRemixableAgents: protectedProcedure.query(async () => {
const remixableAgents = await prisma.agents.findMany({
where: {
isPublic: true,
remixable: true,
isTemplate: false,
},
select: {
commentsCount: true,
creatorName: true,
creatorImage: true,
enabled: true,
likesCount: true,
name: true,
image: true,
id: true,
publicAgentId: true,
description: true,
},
orderBy: {
likesCount: 'desc',
},
})

    if (!remixableAgents) {
      return []
    }

    return remixableAgents.map(agent => ({
      ...agent,
      likesCount: Number(agent.likesCount),
      commentsCount: Number(agent.commentsCount),
    }))

}),

getPublicAgent: publicProcedure
.input(z.object({ agentId: z.string() }))
.query(async ({ input }) => {
const publicAgent = await prisma.agents.findFirst({
where: {
id: input.agentId,
isPublic: true,
enabled: true,
},
select: {
commentsCount: true,
creatorName: true,
creatorImage: true,
enabled: true,
likesCount: true,
name: true,
image: true,
id: true,
publicAgentId: true,
description: true,
remixable: true,
},
})

      if (!publicAgent) {
        throw new Error('Agent not found')
      }

      return publicAgent
    }),

getLikedPublicAgents: protectedProcedure.query(async ({ ctx }) => {
const likedPublicAgents = await prisma.likes.findMany({
where: {
userId: ctx.session.user.id,
},
select: {
publicAgentId: true,
},
})

    if (!likedPublicAgents) {
      return []
    }

    return likedPublicAgents

}),

remix: protectedProcedure
.input(
z.object({
publicAgentId: z.string(),
workspaceId: z.string(),
name: z.string(),
})
)
.mutation(async ({ ctx, input }) => {
const agent = await prisma.agents.findFirst({
where: {
publicAgentId: input.publicAgentId,
},
select: {
data: true,
name: true,
version: true,
rootSpellId: true,
projectId: true,
},
})

      const isV2 = agent?.version === '2.0'

      if (!agent) {
        throw new Error('Agent not found')
      }

      if (isV2) {
        const spells = await prisma.spells.findMany({
          where: {
            projectId: agent.projectId,
          },
        })

        const project = await prisma.project.create({
          data: {
            name: input.name,
            creatorId: ctx.session.user.id,
            slug: '',
            description: '',
            completed: true,
            workspace_id: input.workspaceId,
          },
        })

        if (!project) {
          throw new Error('Project creation failed')
        }

        // prepare token for AIDE
        const newToken = await prepareToken(ctx, { projectId: project.id })

        // HOTFIX: prevents api_keys in agent data from being copied
        // Ideally all these keys should be kept in agent.secrets,
        // but that will need a change on the aide, so this is a hotfix
        const sanitizedAgentData =
          typeof agent.data === 'string' ? sanitizeAgentData(agent.data) : {}

        await Promise.all(
          spells.map(async spell => {
            const spellInput = {
              projectId: project.id,
              name: spell.name,
              type: spell.type,
              spellData: spell,
              publicVariables: [],
              agentData: sanitizedAgentData,
            }

            // @ts-ignore
            const createdSpell = await createSpell(newToken, spellInput)

            return createdSpell
          })
        )

        const agentInput = {
          projectId: project.id,
          name: input.name,
          publicVariables: [],
          data: sanitizedAgentData,
        }

        // @ts-ignore
        const createdAgent = await createAgent(newToken, agentInput)

        trackServerEvent(
          PublicEventTypes.AGENT_PUBLIC_REMIX,
          ctx.session?.user.email ?? '',
          input.publicAgentId
        )
        return createdAgent
      } else {
        if (!agent.rootSpellId) {
          throw new Error('Agent has no root spell')
        }

        const spell = await prisma.spells.findFirst({
          where: {
            id: agent.rootSpellId,
          },
        })

        if (!spell) {
          throw new Error('Spell not found')
        }

        // create project for the agent
        const project = await prisma.project.create({
          data: {
            name: input.name,
            creatorId: ctx.session.user.id,
            slug: '',
            description: '',
            completed: true,
            workspace_id: input.workspaceId,
          },
        })

        if (!project) {
          throw new Error('Project creation failed')
        }

        // prepare token for AIDE
        const newToken = await prepareToken(ctx, { projectId: project.id })

        // HOTFIX: prevents api_keys in agent data from being copied
        // Ideally all these keys should be kept in agent.secrets,
        // but that will need a change on the aide, so this is a hotfix
        const sanitizedAgentData =
          typeof agent.data === 'string' ? sanitizeAgentData(agent.data) : {}

        const spellInput = {
          projectId: project.id,
          name: spell.name,
          spellData: spell,
          publicVariables: [],
          agentData: sanitizedAgentData,
        }
        // @ts-ignore
        const createdSpell = await createSpell(newToken, spellInput)

        const agentInput = {
          projectId: project.id,
          name: input.name,
          rootSpellId: createdSpell.id,
          publicVariables: [],
          data: sanitizedAgentData,
        }

        // @ts-ignore
        const createdAgent = await createAgent(newToken, agentInput)

        trackServerEvent(
          PublicEventTypes.AGENT_PUBLIC_REMIX,
          ctx.session?.user.email ?? '',
          input.publicAgentId
        )
        return createdAgent
      }
    }),

getInfinite: publicProcedure
.input(
z.object({ limit: z.number().optional(), cursor: z.string().optional() })
)
.query(async opts => {
const { input } = opts
const limit = input.limit ?? 10
const { cursor } = input

      const fetchedItems = await getInfinitePublicAgents({ limit, cursor })
      const result = paginateItems(fetchedItems, limit)

      return result
    }),

})
