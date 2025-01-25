import { agentMessagesAtom } from '@magickml/portal-state'
import clsx from 'clsx'
import { Ref, useEffect } from 'react'
import toast from 'react-hot-toast'
import { api } from '@magickml/portal-server-provider'
import { useResetAtom } from 'jotai/utils'
import { AgentChatMessage } from './AgentChatMessage'
import { type AgentData, type AgentMessages } from '@magickml/portal-types'

type AgentChatMessagesProps = {
  reff: Ref<HTMLDivElement>
  isResponding: boolean
  isPublic?: boolean
  messages: AgentMessages[]
  agent: AgentData
}

const AgentChatMessages = ({
  reff,
  isResponding,
  isPublic = false,
  messages,
  agent,
}: AgentChatMessagesProps) => {
  const utils = api.useContext()
  const resetAgentMessage = useResetAtom(agentMessagesAtom)

  const { mutateAsync: updateAgent } = api.agents.updateAgent.useMutation()

  const enableRestAPI = async () => {
    await updateAgent({
      data: {
        ...((agent?.data.data as any) || {}),
        rest_enabled: true,
      },
      agentId: agent?.data.id || '',
    })
      .then(async data => {
        await utils.agents.invalidate()
      })
      .catch(err => {
        toast.error(err.message)
      })
  }

  useEffect(() => {
    resetAgentMessage()
  }, [resetAgentMessage])

  useEffect(() => {
    const scrollDown = () => {
      if (reff && typeof reff === 'object' && reff.current) {
        reff.current.scrollTop = reff.current.scrollHeight
      }
    }

    if (reff && typeof reff === 'object' && reff.current) {
      reff.current.addEventListener('DOMNodeInserted', scrollDown)
    }

    return () => {
      if (reff && typeof reff === 'object' && reff.current) {
        reff.current.removeEventListener('DOMNodeInserted', scrollDown)
      }
    }
  }, [reff])

  return (
    <div
      className={clsx(
        messages.length > 0 ? 'overflow-auto' : 'overflow-hidden',
        'flex flex-col flex-grow h-0 px-3 md:px-5 py-5 md:pt-10 w-full max-w-full lg:max-w-7xl mx-auto'
      )}
    >
      <div ref={reff} className="pb-2 grow">
        {/* @ts-ignore */}
        {isPublic && !agent?.data?.data?.rest_enabled && (
          <div className="dark:bg-[#17181E] h-80 border relative mt-32 border-[#1BC5EB] text-center rounded">
            <div className="flex flex-col items-center content-between justify-center p-8">
              <h2 className="mb-8 text-xl text-[#1BC5EB]">
                Enable Agent to use REST API!
              </h2>
              <h3>
                Input node of the root spell should also be set to REST API
                (POST) to chat with this agent.
              </h3>
            </div>
            <button
              onClick={enableRestAPI}
              className="w-40 absolute bottom-4 right-4 text-sm font-medium text-black bg-[#DCE8ED] hover:bg-[#DCE8ED] dark:bg-card-main hover:dark:bg-card-main border-1 border-card-main dark:text-white font-berkley-mono hover:scale-105 active:scale-95 btn rounded-xl"
            >
              Enable Agent
            </button>
          </div>
        )}

        {messages.map((message, index) => (
          <AgentChatMessage agent={agent} message={message} key={index} />
        ))}
      </div>
    </div>
  )
}

export default AgentChatMessages
