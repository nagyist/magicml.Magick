import { createTRPCRouter, publicProcedure } from '@magickml/portal-server-core'
import { clerkClient } from '@clerk/nextjs/server'
import { z } from 'zod'

const findProfileInputSchema = z.object({
  id: z.string(),
})

const findProfileOutputSchema = z.object({
  id: z.string(),
  username: z.string(),
  imageUrl: z.string(),
})

export const profileRouter = createTRPCRouter({
  find: publicProcedure
    .input(findProfileInputSchema)
    .output(findProfileOutputSchema)
    .query(async ({ input }) => {
      const { id, username, imageUrl } = await clerkClient.users.getUser(
        input.id
      )

      return {
        id,
        username: username || 'n/a',
        imageUrl,
      }
    }),
})
