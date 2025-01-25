import { AgentData } from '@magickml/portal-types'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Switch, Label } from '@magickml/client-ui'
import { api } from '@magickml/portal-server-provider'
import { extractAgentData } from '@magickml/portal-utils-shared'

type DiscordSwitchProps = {
  agent: AgentData
}

const DiscordSwitch = ({ agent }: DiscordSwitchProps) => {
  const [loading, setLoading] = useState(false)
  const utils = api.useContext()
  const { mutateAsync: updateAgent } = api.agents.updateAgent.useMutation()

  const handleDiscordSwitchChange = async () => {
    setLoading(true)
    const isDiscordEnabled = extractAgentData(
      agent?.data.data as any,
      'discord_enabled'
    )
    const newDiscordEnabled = !isDiscordEnabled

    await updateAgent({
      data: {
        ...JSON.parse(JSON.stringify(agent?.data.data)),
        discord_enabled: newDiscordEnabled,
      },
      agentId: agent?.data.id ?? '',
    })
      .then(async data => {
        const toastMessage = newDiscordEnabled
          ? 'Discord enabled.'
          : 'Discord disabled.'
        toast.success(toastMessage)

        await utils.agents.invalidate()
        setLoading(false)
      })
      .catch(() => {
        toast.error('Something went wrong.')
        setLoading(false)
      })
  }

  return (
    <div className="flex flex-col items-start flex-grow space-y-1">
      <Label
        className="pb-3 text-base font-semibold"
        htmlFor="discordSwitch"
        id="discord_Toggle"
      >
        Discord
      </Label>
      <div className="inline-flex items-center justify-center gap-x-4">
        <span className="font-berkley-mono">OFF</span>
        {loading ? (
          <div className="loading loading-dot text-secondary-highlight" />
        ) : (
          <Switch
            id="discordSwitch"
            onCheckedChange={handleDiscordSwitchChange}
            checked={
              !!extractAgentData(agent?.data.data as any, 'discord_enabled')
            }
          />
        )}
        <span className="font-berkley-mono">ON</span>
      </div>
    </div>
  )
}

export default DiscordSwitch
