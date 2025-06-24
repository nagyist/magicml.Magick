import { prismaPortal } from '@magickml/portal-db'
import { prismaCore } from '@magickml/server-db'
import { Session } from 'next-auth'
// import {
// PublicVariable,
// AgentDataOld,
// } from '@magickml/portal-types'
import {} from '@clerk/clerk-sdk-node'
import { getAuth } from '@clerk/nextjs/dist/types/server'

export const getAgentDataSSR = async (
  session: Session | null,
  agentId: string
) => {
  const agent = await prismaCore.agents.findUnique({
    where: {
      id: agentId,
    },
    select: {
      id: true,
      name: true,
      enabled: true,
      updatedAt: true,
      projectId: true,
      image: true,
      createdAt: true,
      currentSpellReleaseId: true,
      version: true,
      embeddingProvider: true,
      embeddingModel: true,
      // TODO: Deprecated
      secrets: false, // Deprecated
      rootSpellId: false, // Deprecated
      embedModel: false, // Deprecated
      publicVariables: false, // Deprecated
      pingedAt: false, // Deprecated
      data: false, // Deprecated
      runState: false, // Deprecated
      default: false, // Deprecated
    },
  })

  if (!agent || !agent?.projectId) return null

  const publicAgent = await prismaPortal.publicAgent.findUnique({
    where: {
      agentId: agentId,
    },
    select: {
      id: true,
      description: true,
      remixable: true,
      featured: true,
      isTemplate: true,
      deletedAt: true,
    },
  })

  const isPublic = !!publicAgent && publicAgent.deletedAt === null

  const project = await prismaPortal.project.findUnique({
    where: {
      id: agent.projectId,
    },
    select: {
      owner: true,
      name: true,
      image: true,
    },
  })

  const creatorId = project?.owner
  const creatorName = project?.name
  const creatorImage = project?.image

  const likesCount = await prismaPortal.likes.count({
    where: {
      publicAgentId: publicAgent?.id,
    },
  })

  const commentsCount = await prismaPortal.comments.count({
    where: {
      publicAgentId: publicAgent?.id,
      deletedAt: null,
    },
  })

  const status = {
    isPublic,
    isCreator: creatorId === session?.user.id,
    isEnabled: agent.enabled,
  }

  return {
    agent,
    publicAgent: {
      ...publicAgent,
      isPublic,
      likesCount,
      commentsCount,
    },
    project: {
      creatorId,
      creatorName,
      creatorImage,
    },
    status,
    meta: {
      title: `${agent.name} | MagickML`,
      description: publicAgent?.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/agents/${agent.id}`,
      image: agent.image
        ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${agent.image}`
        : `${process.env.NEXT_PUBLIC_APP_URL}/images/banner.png`,
    },
  }
}

interface GetAgentDataParams {
  auth: ReturnType<typeof getAuth>
  agentId: string
}

export const getAgentData = async (params: GetAgentDataParams) => {
  // Use prismaCore to query the agents table directly instead of using the removed view
  const agent = await prismaCore.agents.findUnique({
    where: {
      id: params.agentId,
    },
    select: {
      // Selections adapted from the original view
      id: true,
      name: true,
      enabled: true,
      updatedAt: true,
      projectId: true,
      data: true,
      image: true,
      createdAt: true,
      currentSpellReleaseId: true,
      version: true,
      embeddingProvider: true,
      embeddingModel: true,
      secrets: false, // Deprecated
      runState: false, // Deprecated
      default: false, // Deprecated
      rootSpellId: false, // Deprecated
      publicVariables: false, // Deprecated
      embedModel: false, // Deprecated
      pingedAt: false, // Deprecated
    },
  })

  if (!agent || !agent.projectId) return null

  // Additional logic based on the original view's operations
  const publicAgent = await prismaPortal.publicAgent.findUnique({
    where: {
      agentId: params.agentId,
    },
    select: {
      id: true,
      description: true,
      remixable: true,
      featured: true,
      isTemplate: true,
      deletedAt: true,
    },
  })

  const isPublic = !!publicAgent && publicAgent.deletedAt === null

  const project = await prismaPortal.project.findUnique({
    where: {
      id: agent.projectId,
    },
    select: {
      owner: true,
      name: true,
      image: true,
    },
  })

  const creatorId = project?.owner
  const creatorName = project?.name
  const creatorImage = project?.image

  const likesCount = await prismaPortal.likes.count({
    where: {
      publicAgentId: publicAgent?.id,
    },
  })

  const commentsCount = await prismaPortal.comments.count({
    where: {
      publicAgentId: publicAgent?.id,
      deletedAt: null,
    },
  })

  const status = {
    isPublic,
    isCreator: creatorId === params.auth?.userId,
    isEnabled: agent.enabled,
  }

  return {
    agent,
    publicAgent: {
      ...publicAgent,
      isPublic,
      likesCount,
      commentsCount,
    },
    project: {
      creatorId,
      creatorName,
      creatorImage,
    },
    status,
    meta: {
      title: `${agent.name} | MagickML`,
      description: publicAgent?.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/agents/${agent.id}`,
      image: agent.image
        ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${agent.image}`
        : `${process.env.NEXT_PUBLIC_APP_URL}/images/banner.png`,
    },
  }
}

type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never
export type AgentData = PromiseType<ReturnType<typeof getAgentData>>

type InfiniteAgentsOptions = {
  limit: number
  cursor?: string
  userId: string
}

export async function getInfiniteAgents({
  limit,
  cursor,
  userId,
}: InfiniteAgentsOptions) {
  if (!userId) {
    throw 'error'
  }

  const projects = await prismaPortal.project.findMany({
    where: {
      owner: userId,
    },
    select: {
      id: true,
    },
  })

  if (projects.length === 0) {
    return []
  }

  const agent = await prismaCore.agents.findMany({
    take: limit + 1, // add 1 to check for next page
    cursor: cursor ? { id: cursor } : undefined,
    orderBy: { updatedAt: 'desc' },
    where: {
      projectId: {
        in: projects.map(p => p.id),
      },
      currentSpellReleaseId: {
        not: null,
      },
    },
    select: {
      name: true,
      image: true,
      id: true,
      projectId: true,
      description: true,
    },
  })

  if (agent.length === 0) {
    return []
  }

  const publicAgents = await prismaPortal.publicAgent.findMany({
    where: {
      agentId: {
        in: agent.map(a => a.id),
      },
    },
    select: {
      id: true,
      description: true,
      agentId: true,
    },
  })

  return agent.map(a => {
    const publicAgent = publicAgents.find(pa => pa.agentId === a.id)
    return {
      ...a,
      publicAgentId: publicAgent?.id,
    }
  })
}

export const createAgent = async (
  token: string | null,
  input: {
    projectId: string
    name: string
    // rootSpellId: string
    // publicVariables: PublicVariable[]
    // data: AgentDataOld
  }
) => {
  const agent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/agents?projectId=${input.projectId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        projectId: input.projectId,
        updatedAt: new Date().toISOString(),
        pingedAt: new Date().toISOString(),
        enabled: true,
        name: input.name,
        // TODO: Deprecated
        // rootSpellId: input.rootSpellId,
        // data: JSON.stringify(input.data),
        // publicVariables: JSON.stringify(input.publicVariables),
        // secrets: JSON.stringify({}),
      }),
    }
  )

  const data = await agent.json()
  return data
}
