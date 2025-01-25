import { z } from 'zod'
import {
  createTRPCRouter,
  protectedProcedure,
} from '@magickml/portal-server-core'
import { hasAccess } from '../utils/shared'
import { prismaCore } from '@magickml/server-db'

export const spellRouter = createTRPCRouter({
  find: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        projectId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const access = await hasAccess({
        user: {
          userId: ctx.auth.userId,
          orgId: ctx.auth.orgId || '',
        },
        projectId: input.projectId,
      })

      if (!access) {
        throw new Error('Unauthorized')
      }

      return await prismaCore.spells.findMany({
        where: { projectId: input.projectId },
        select: {
          id: true,
          name: true,
          updatedAt: true,
        },
      })
    }),
})
