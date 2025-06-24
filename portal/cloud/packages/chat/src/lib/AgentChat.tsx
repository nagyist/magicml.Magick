import { v4 as uuidv4 } from 'uuid'
import { api } from '@magickml/portal-server-provider'
import { useEffect, useRef, useState } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import {
  agentMessagesAtom,
  toggleAgentSettingsAtom,
} from '@magickml/portal-state'
import AgentChatInput from './Chat/AgentChatInput'
import AgentChatMessages from './Chat/AgentChatMessages'
import toast from 'react-hot-toast'
import clsx from 'clsx'
import { AgentChatHeader } from './Chat/AgentChatHeader'
import { Application } from '@feathersjs/feathers'
import { AgentData } from '@magickml/portal-types'
import { useUser } from '@clerk/nextjs'

type AgentChatProps = {
  isPrivate?: boolean
  classNames?: string
  sessionId: string
  client: Application | null
  agent: AgentData
}

const AgentChat = ({
  isPrivate = false,
  classNames,
  sessionId,
  client,
  agent,
}: AgentChatProps) => {
  const toggleAgentSettings = useAtomValue(toggleAgentSettingsAtom)
  const [backupSender, setBackupSender] = useState<any>(null)
  const { user } = useUser()
  const [messages, setMessages] = useAtom(agentMessagesAtom)
  const [input, setInput] = useState('')
  const messageContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const id = localStorage.getItem('userId')
    if (id) {
      setBackupSender(id)
    } else {
      // generate UUID and store in local storage
      const newId = uuidv4()
      localStorage.setItem('userId', newId)
      setBackupSender(newId)
    }
  }, [])

  const { mutateAsync: privateChat, isLoading: privateChatIsLoading } =
    api.chat.privateChat.useMutation({
      onError: error => {
        toast.error(
          error +
            'Error communciating with agent. Please check your spell for proper inputs and outputs.'
        )
      },
    })

  useEffect(() => {
    if (!client) return

    const handler = (data: any) => {
      if (data.component !== 'Output') return

      const agentMessage = {
        sender: agent?.data.name || 'Agent',
        message: data?.output.output,
        entity: 'agent',
      }
      setMessages(messages => [...messages, agentMessage])
    }

    client.service('agents').on('spell', handler)

    return () => {
      client.service('agents').removeListener('spell', handler)
    }
  }, [client])

  useEffect(() => {
    if (agent) {
      const agentMessage = {
        sender: agent?.data.name || 'Agent',
        message:
          // TODO: Deprecated
          // agent.data.description && agent.data.description.length > 0
          //   ? agent.data.description
          //   : 'Hello! Try talking to me about anything!',
          'Hello! Try talking to me about anything!',
        entity: 'agent',
      }

      if (messages.length > 1) {
        const newMessages = [...messages]
        newMessages[0] = agentMessage
        setMessages(newMessages)
      } else setMessages([agentMessage])
    }

    return () => setMessages([])
  }, [agent?.data.description])

  const handlePrivateChat = async () => {
    await privateChat({
      agentId: agent?.data.id || '',
      projectId: agent?.data.projectId || '',
      prompt: input,
      sender: user?.id || backupSender,
      sessionId,
    })
  }

  const { mutateAsync: publicChat, isLoading: publicChatIsLoading } =
    api.chat.publicChat.useMutation({
      onError: error => {
        toast.error(
          'Error communciating with agent. If its your agent, please check your spell otherwise please report this issue to us.'
        )
      },
    })

  const handlePublicChat = async () => {
    console.log(
      'public chat sender',
      user?.id || `backup sender: ${backupSender}`
    )

    await publicChat({
      agentId: agent?.data.id || '',
      prompt: input,
      sender: user?.id || backupSender,
      sessionId,
    })
  }

  const isResponding = privateChatIsLoading || publicChatIsLoading

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight
    }
  }, [messages])

  const onSend = async () => {
    const agentMessage = {
      sender: 'You',
      message: input,
      entity: 'user',
    }
    setMessages(messages => [...messages, agentMessage])

    if (isPrivate) {
      await handlePrivateChat()
    } else {
      await handlePublicChat()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isResponding) return
    if (e.key === 'Enter' && !e.shiftKey && input.length !== 0) {
      e.preventDefault()
      onSend()
      setInput('')
    }
    e.stopPropagation()
  }

  const handleClick = () => {
    onSend()
    setInput('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  return (
    <>
      <div
        key="chat-motion"
        className={clsx(
          'pb-24 flex-col grow w-full h-full lg:px-0 relative overflow-hidden transition-all duration-150 ease-in-out flex',
          !toggleAgentSettings && 'lg:max-w-5xl mx-auto md:max-w-2xl',
          classNames
        )}
      >
        <div
          className={clsx(
            'transition-all duration-300 ease-in-out w-full overflow-hidden relative',
            toggleAgentSettings ? 'flex-row' : 'flex-col'
          )}
        >
          <AgentChatHeader
            agent={agent}
            isPrivate={isPrivate}
            className="hidden lg:block"
          />
        </div>

        <AgentChatMessages
          messages={messages}
          reff={messageContainerRef}
          isResponding={isResponding}
          agent={agent}
        />

        <div className="absolute bottom-0 left-0 right-0 w-full mx-auto md:bottom-14 lg:px-5 lg:bottom-0">
          <AgentChatInput
            value={input}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handleClick={handleClick}
            isResponding={isResponding}
            agentName={agent?.data.name || 'Agent'}
            isPublic={!isPrivate}
          />
        </div>
      </div>
    </>
  )
}

export default AgentChat
