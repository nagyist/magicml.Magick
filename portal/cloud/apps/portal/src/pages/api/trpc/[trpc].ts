import { createNextApiHandler } from '@trpc/server/adapters/next'
import { createTRPCContext } from '@magickml/portal-server-core'
import { portalRouter } from '@magickml/portal-server-router'

export const maxDuration = 300

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
    responseLimit: '4mb',
  },
}

// export API handler
export default createNextApiHandler({
  router: portalRouter,
  createContext: createTRPCContext,
  onError:
    process.env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`
          )
        }
      : undefined,
})
