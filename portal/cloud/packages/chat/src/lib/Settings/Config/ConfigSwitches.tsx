import { AgentData, Agent } from '@magickml/portal-types'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Switch, Label } from '@magickml/client-ui'
import { api } from '@magickml/portal-server-provider'

type Switch = {
  key: keyof Agent
  name: string
  action: () => void
  disabled?: boolean
  filter?: () => boolean
  loading?: boolean
}

const ConfigSwitches = ({ agent }: { agent: AgentData }) => {
  const [loading, setLoading] = useState({
    isPublic: false,
    remixable: false,
    isTemplate: false,
  })
  const utils = api.useContext()

  // make public mutation
  const { mutateAsync: makePublic } = api.agents.makePublic.useMutation({
    onSuccess: async () => {
      toast.success('Agent made public')
      await utils.agents.invalidate()
      setLoading(prevLoading => ({
        ...prevLoading,
        isPublic: false,
      }))
    },
    onError: err => {
      console.error('Error updating agent', err)
      toast.error('Something went wrong')
      setLoading(prevLoading => ({
        ...prevLoading,
        isPublic: false,
      }))
    },
  })

  // updatePublic mutation
  const { mutateAsync: updatePublic } =
    api.agents.updateAgentPublic.useMutation({
      onSuccess: async () => {
        toast.success('Agent updated')
        await utils.agents.invalidate()
        setLoading(prevLoading => ({
          ...prevLoading,
          remixable: false,
        }))
      },
      onError: err => {
        console.error('Error updating agent', err)
        toast.error('Something went wrong')
        setLoading(prevLoading => ({
          ...prevLoading,
          remixable: false,
        }))
      },
    })

  // make private mutation
  const { mutateAsync: makePrivate } = api.agents.makePrivate.useMutation({
    onSuccess: async () => {
      toast.success('Agent made private')
      await utils.agents.invalidate()
      setLoading(prevLoading => ({
        ...prevLoading,
        isPublic: false,
      }))
    },
    onError: err => {
      console.error('Error updating agent', err)
      toast.error('Something went wrong')
      setLoading(prevLoading => ({
        ...prevLoading,
        isPublic: false,
      }))
    },
  })

  const switches: Switch[] = [
    {
      name: 'Public',
      key: 'isPublic',
      action: async () => {
        if (!agent?.data.isPublic) {
          setLoading(prevLoading => ({
            ...prevLoading,
            isPublic: true,
          }))
          await makePublic({
            agentId: agent?.data.id ?? '',
          })
        } else {
          setLoading(prevLoading => ({
            ...prevLoading,
            isPublic: true,
          }))
          await makePrivate({
            agentId: agent?.data.id ?? '',
          })
        }
      },
      loading: loading.isPublic,
    },
    {
      name: 'Remix',
      key: 'remixable',
      disabled: !agent?.data.isPublic,
      action: async () => {
        setLoading(prevLoading => ({
          ...prevLoading,
          remixable: true,
        }))
        await updatePublic({
          agentId: agent?.data.id ?? '',
          remixable: !agent?.data.remixable,
        })
      },
      loading: loading.remixable,
    },
  ]

  return (
    <>
      {switches
        .filter(sw => !sw.filter || sw?.filter())
        .map(sw => (
          <div
            key={sw.name}
            className="flex flex-col items-start flex-grow space-y-1"
          >
            <Label className="pb-3 text-base font-semibold" htmlFor={sw.name}>
              {sw.name}
            </Label>
            <div className="inline-flex items-center justify-center gap-x-4">
              <span className="font-berkley-mono">NO</span>
              {sw.loading ? (
                <div className="loading loading-dot text-secondary-highlight" />
              ) : (
                <Switch
                  disabled={sw.disabled}
                  id={sw.name}
                  onCheckedChange={sw.action}
                  checked={
                    // TODO: Deprecated
                    // (agent?.data[sw.key as keyof typeof agent.data] as any) ??
                    false
                  }
                />
              )}
              <span className="font-berkley-mono">YES</span>
            </div>
          </div>
        ))}
    </>
  )
}

export default ConfigSwitches
