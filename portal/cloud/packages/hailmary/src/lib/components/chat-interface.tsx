'use client'

import React from 'react'
import { ChatInterfaceProps } from '../types'
import { ChatMessages } from './chat-messages'
import { Badge } from '@magickml/client-ui'
import { cn } from '@magickml/client-ui'
import dynamic from 'next/dynamic'
const ChatInput = dynamic(
  () => import('./chat-input').then(mod => mod.ChatInput),
  { ssr: false }
)

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  connected = false,
  chatMessagesProps,
  chatInputProps,
}) => {
  return (
    <div
      className={cn(
        'relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2'
      )}
    >
      {!connected && (
        <div className="absolute inset-0 flex items-center rounded-xl justify-center backdrop-blur-sm z-50 w-full h-full">
          <p className="text-lg font-semibold">
            Connect to an agent to get started
          </p>
        </div>
      )}
      <Badge
        variant={connected ? 'secondary' : 'destructive'}
        className="absolute right-3 top-3"
      >
        {connected ? 'Connected' : 'Disconnected'}
      </Badge>
      <ChatMessages {...chatMessagesProps} />
      <ChatInput {...chatInputProps} />
    </div>
  )
}
