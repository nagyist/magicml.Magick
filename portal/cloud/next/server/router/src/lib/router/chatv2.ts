import { z } from 'zod'

import {
  createTRPCRouter,
  protectedProcedure,
} from '@magickml/portal-server-core'

import jwt from 'jsonwebtoken'

import { prismaCore } from '@magickml/server-db'

import axios from 'axios'

import { prismaPortal } from '@magickml/portal-db'

export const chatRouterV2 = createTRPCRouter({
  createRoom: protectedProcedure.mutation(async ({ ctx }) => {
    try {
      // Get the user ID from the session
      const userId = ctx.auth.userId

      // Generate a token with the user ID and permission type
      const token = generateToken({
        role: 'user',
        userId,
        permissionType: PermissionType.User,
      })

      const response = (await axios.post(
        `${process.env?.['NEXT_PUBLIC_PORTAL_CHAT_URL']}/rooms`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      )) as { data: { roomId: string } }

      if (!response.data.roomId) {
        throw new Error('Error creating room')
      }

      return { room: response.data.roomId, token }
    } catch (error) {
      console.error(error)
      throw new Error('Error creating room')
    }
  }),

  inviteAgent: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        roomId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      console.log('inviteAgent', input)
      try {
        // Get the user ID from the session
        const userId = ctx.auth.userId

        // Check if the user has permission to invite the agent
        const agent = await prismaCore.agents.findUnique({
          where: { id: input.agentId },
          select: {
            id: true,
            projectId: true,
          },
        })

        if (!agent || agent.projectId === null) {
          throw new Error('Unauthorized: Agent does not belong to user')
        }

        const project = await prismaPortal.project.findUnique({
          where: { id: agent.projectId },
          select: {
            owner: true,
          },
        })

        if (project?.owner !== userId) {
          throw new Error('Unauthorized: Agent does not belong to user')
        }

        // Generate a token with the user ID, agent ID, and permission type
        const token = generateToken({
          userId,
          agentId: input.agentId,
          permissionType: PermissionType.Agent,
        })

        const response = await axios.post(
          `${process.env?.['NEXT_PUBLIC_PORTAL_CHAT_URL']}/invite`,
          {
            agentId: input.agentId,
            roomId: input.roomId,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )

        if (!response.data) {
          throw new Error('Error inviting agent')
        }

        console.log(response.data)
        return response.data
      } catch (error) {
        console.error(error)
        throw new Error('Error inviting agent')
      }
    }),
})

export enum PermissionType {
  User = 'user',
  Agent = 'agent',
}

export interface TokenPayload {
  role?: 'user' | 'agent'
  userId: string
  agentId?: string
  permissionType: PermissionType
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  try {
    const decoded = jwt.verify(token, 'my-secret-key') as TokenPayload
    return decoded
  } catch (err) {
    throw new Error('Invalid token')
  }
}

export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, 'my-secret-key', { expiresIn: '30m' })
}
