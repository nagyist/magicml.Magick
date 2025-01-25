import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'
import { type Agent, type AgentMessages } from '@magickml/portal-types'

// Creating an atom for the agent data
export const agentDataAtom = atomWithReset<Agent>({
  id: '',
  workspace_id: '',
  name: null,
  image: null,
  enabled: null,
  updatedAt: null,
  projectId: null,
  spells: null,
  creatorName: null,
  description: null,
  // rootSpell: null, // Deprecated
  // TODO: Deprecated
  // publicVariables: null, // Deprecated
  // secrets: null, // Deprecated
  // pingedAt: null, // Deprecated
  // data: null, // Deprecated
})

export const agentMessagesAtom = atomWithReset<AgentMessages[]>([])

export const toggleAgentChatAtom = atom(true)
export const toggleAgentSettingsAtom = atom(true)
export const toggleAgentMobileSettingsAtom = atom(false)
export const settingsSheetAtom = atom(0)
