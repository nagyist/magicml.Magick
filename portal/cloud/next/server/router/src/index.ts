import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from './lib/portal-server-router'
export { portalRouter, type AppRouter } from './lib/portal-server-router'

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>

export * from './lib/utils/shared'
