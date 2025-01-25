import type { RouterOutputs } from '@magickml/portal-server-provider'
import type { ReactNode } from 'react'

/* Base Portal Card Props */
export interface PortalCardBaseProps {
  id: string
  name: string | null
  image: string | null
  description: string | null
  version?: string | null
  // Add value props here
}

/* Extended Portal Card Props */
export interface PortalCardProps extends PortalCardBaseProps {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  menu?: ReactNode
  footer?: ReactNode
  badge?: ReactNode
  // Add functional props here
}

/* These types will sync to template.router.ts in portal/templates */
export type AgentCardProps =
  RouterOutputs['agents']['getInfinite']['items'][number]

export type TemplateCardProps = RouterOutputs['templates']['find'][number]

/* Derived CardProps */
// export interface TemplateCardProps
//   extends PortalCardProps,
//     TemplateRouterOutput {
//   name: string // type conflict without this
// }

// export interface AgentCardProps extends PortalCardProps, AgentRouterOutput {}
