'use client'

import { useEffect, useState } from 'react'
import { ChatInterface } from './components/chat-interface'

import { AgentProps, ChatInputProps, ChatMessagesProps } from './types'
import { useUser } from '@clerk/nextjs'
import { v4 } from 'uuid'
import { TooltipProvider } from '@magickml/client-ui'
import { ChatSettings } from './components/chat-settings'

interface ChatProps {
  agents: AgentProps[]
}

export const Chat = ({ agents }: ChatProps) => {
  const { user } = useUser()
  const [prompt, setPrompt] = useState<string>('')
  const [messages, setMessages] = useState<ChatMessagesProps['messages']>([])
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [agentId, setAgentId] = useState<string>(
    'f79066c5-3beb-4aa5-9de9-fad89e245afa'
  )
  const [agentInfo, setAgentInfo] = useState<any>(null)

  const handleConnect = () => {
    if (agentId) {
      const socketUrl = `ws://${process.env.NEXT_PUBLIC_AGENT_SERVER_URL}/ws/${agentId}`
      const newSocket = new WebSocket(socketUrl)

      newSocket.onopen = () => {
        console.log('WebSocket connection established')
      }

      newSocket.onmessage = (event: MessageEvent) => {
        if (typeof event.data === 'string') {
          const data = JSON.parse(event.data)
          switch (data.type) {
            case 'message':
              // eslint-disable-next-line no-case-declarations
              const isStream = typeof data?.responseId === 'number'
              if (!isStream) {
                setMessages(prevMessages => [...prevMessages, data])
              } else {
                setMessages(prevMessages => {
                  const messageIndex = prevMessages.findIndex(
                    message => message.responseId === data.responseId
                  )
                  if (messageIndex !== -1) {
                    const prevMessageText = prevMessages[messageIndex].text
                    let updatedMessageText = prevMessageText

                    if (data.text === '<START>') {
                      // If the current token is <START>, create a new message in the history
                      return [
                        ...prevMessages,
                        {
                          ...data,
                          text: '',
                        },
                      ]
                    } else if (data.text === '<END>') {
                      // If the current token is <END>, remove the <END> token from the message text
                      updatedMessageText = prevMessageText.replace(/<END>/g, '')
                    } else {
                      // Append the new text to the existing message, filtering out <START> and <END> tokens
                      updatedMessageText =
                        prevMessageText +
                        data.text.replace(/<START>|<END>/g, '')
                    }

                    const updatedMessage = {
                      ...prevMessages[messageIndex],
                      text: updatedMessageText,
                    }
                    const updatedMessages = [...prevMessages]
                    updatedMessages[messageIndex] = updatedMessage
                    return updatedMessages
                  } else {
                    // If the current token is <START>, create a new message in the history
                    if (data.text === '<START>') {
                      return [
                        ...prevMessages,
                        {
                          ...data,
                          text: '',
                        },
                      ]
                    } else {
                      // Filter out <START> and <END> tokens from the new message text
                      const filteredText = data.text.replace(
                        /<START>|<END>/g,
                        ''
                      )
                      return [
                        ...prevMessages,
                        {
                          ...data,
                          text: filteredText,
                        },
                      ]
                    }
                  }
                })
              }
              break
            case 'agentInfo':
              setAgentInfo(data.data)
              break
            case 'status':
              console.log('Status:', data)
              break
            default:
              console.error('Unknown message type:', data.type)
          }
        } else {
          console.log('Received binary data:', event)
          // Handle binary data
          const arrayBuffer = event.data
          handleBinaryData(arrayBuffer)
        }
      }

      newSocket.onclose = () => {
        console.log('WebSocket connection closed')
        setSocket(null)
      }

      newSocket.onerror = error => {
        console.error('WebSocket error:', error)
        setSocket(null)
      }

      setSocket(newSocket)
      return () => {
        newSocket.close()
      }
    }
  }

  let mediaSource: MediaSource | null = null
  let sourceBuffer: SourceBuffer | null = null

  async function handleBinaryData(data: Blob) {
    if (!mediaSource) {
      mediaSource = new MediaSource()
      const audioElement = document.createElement('audio')
      audioElement.src = URL.createObjectURL(mediaSource)
      audioElement.play()
    }

    if (mediaSource.readyState === 'open' && !sourceBuffer) {
      sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg')
      sourceBuffer.mode = 'sequence'
    }

    if (sourceBuffer && sourceBuffer.updating) {
      await new Promise(resolve => {
        ;(sourceBuffer as SourceBuffer).addEventListener('updateend', resolve, {
          once: true,
        })
      })
    }

    if (sourceBuffer) {
      const arrayBuffer = await data.arrayBuffer()
      sourceBuffer.appendBuffer(arrayBuffer)
    }
  }

  const handleDisconnect = () => {
    if (socket) {
      socket.close()
    }
    setSocket(null)
  }

  useEffect(() => {
    return () => {
      if (socket) {
        socket.close()
      }
    }
  }, [socket])

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const newMessage = {
        text: prompt,
        id: v4(),
        sender: user?.username || user?.id || 'Anonymous',
        type: 'message',
      }
      socket.send(JSON.stringify(newMessage))
      setMessages(prevMessages => [...prevMessages, newMessage])
      setPrompt('')
    }
  }

  const chatInputProps: ChatInputProps = {
    textareaProps: {
      placeholder: 'Type your message here...',
      value: prompt,
      onChange: event => {
        setPrompt(event.target.value)
      },
    },
    onMessageSend: sendMessage,
    attachButtonProps: {
      onClick: () => {
        console.log('Attach button clicked')
      },
    },
    onAttachClick: () => {
      console.log('Attach button clicked')
    },
    transcriptionProps: {
      onTranscript: event => {
        setPrompt(prompt + event.target.value)
      },
      sendMessage,
    },
  }

  return (
    <TooltipProvider>
      <main className="grid flex-1 gap-4 overflow-y-auto w-full p-1 md:p-2 lg:p-4 md:grid-cols-2 lg:grid-cols-3">
        <ChatSettings
          agents={agents}
          connected={socket?.OPEN === WebSocket.OPEN}
          connect={handleConnect}
          disconnect={handleDisconnect}
          agentId={[agentId, setAgentId]}
          info={agentInfo}
          messages={messages}
        />
        <ChatInterface
          connected={socket?.OPEN === WebSocket.OPEN}
          chatMessagesProps={{
            messages: messages,
          }}
          chatInputProps={chatInputProps}
        />
      </main>
      {messages.map((message, index) => (
        <audio
          key={index}
          src={message.audioUrl}
          autoPlay
          controls
          style={{ display: 'none' }}
        />
      ))}
    </TooltipProvider>
  )
}
