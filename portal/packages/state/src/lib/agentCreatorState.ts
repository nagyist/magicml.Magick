import { atomWithReset } from 'jotai/utils'
// import { AllNodesData } from '@magickml/portal-types'

export type InputMethodType = 'upload' | 'preset'
type AgentProject = {
  name: string
  id: string | null
}

export type Variable = {
  name: string
  id: number
  value: string | boolean
  type: string
}
export const activeStepAtom = atomWithReset(0)
export const isModalOpenAtom = atomWithReset(false)
export const selectedConnectionAtom = atomWithReset('')
export const agentProjectAtom = atomWithReset<AgentProject>({
  name: 'New Project',
  id: null,
})

// export const publicVariablesAtom = atomWithReset<AllNodesData>({})

export const agentGreetingAtom = atomWithReset('')

export const inputMethodAtom = atomWithReset<InputMethodType>('preset')

export const agentNameAtom = atomWithReset('')

export const discordAtom = atomWithReset({
  enabled: false,
  token: '',
  applicationId: '',
  enableVoice: false,
  connectionEnabled: false,
})

export const restAtom = atomWithReset(true)
