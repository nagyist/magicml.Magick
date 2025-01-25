// import { JSONValue } from 'superjson/dist/types'

export interface AgentDataOld {
  discord_api_key: string
  discord_enabled: boolean
  rest_enabled: boolean
  use_voice: boolean
  rest_api_key?: string
}

export type AgentData = {
  id: string
  rootSpell: any
  // TODO: Deprecated
  // publicVariables: string | null
  secrets: string | null
  name: string | null
  image: string | null
  enabled: boolean | null
  updatedAt: string | null
  // pingedAt: string | null // Deprecated
  projectId: string | null
  spells?: any
  // data: any // Deprecated
}

export interface PublicVariable {
  [key: string]: string | boolean | number
}

export type Agent = {
  workspace_id: string | null
  id: string
  name: string | null
  image: string | null
  enabled: boolean | null
  updatedAt: string | null
  projectId: string | null
  spells?: any
  isTemplate?: boolean
  likesCount?: string
  commentsCount?: string
  creatorName?: string | null
  description?: string | null
  isPublic?: boolean
  publicAgentId?: string
  remixable?: boolean
  isDraft?: boolean
  draftAgentId?: string
  // rootSpell: any // Deprecated
  // TODO: Deprecated
  // publicVariables: JSONValue | null
  // secrets: string | null // Deprecated
  // pingedAt: string | null // Deprecated
  // data: AgentData | null // Deprecated
}

export type AgentMessages = {
  sender: string
  message: string
  entity: string
}
