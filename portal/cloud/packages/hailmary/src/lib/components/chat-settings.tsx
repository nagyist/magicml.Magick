'use client'

import React, { useEffect, useState } from 'react'
import { ChatSettingsProps } from '../types'
import { Button, SelectWithLabel } from '@magickml/client-ui'
// import { codeToHtml } from 'shiki'

export const ChatSettings: React.FC<ChatSettingsProps> = ({
  agents,
  agentId,
  connect,
  disconnect,
  connected,
  info,
  messages,
}) => {
  const [agentIdValue, setAgentIdValue] = agentId
  const [highlightedInfo] = useState<string | null>(null)
  const [highlightedMessages] = useState<string | null>(null)

  // const highlight = async (code: string) => {
  //   // return await codeToHtml(code, {
  //   //   lang: 'json',
  //   //   theme: theme === 'dark' ? 'github-dark' : 'github-light',
  //   // })
  // }

  useEffect(() => {
    if (info) {
      // highlight(JSON.stringify(info, null, 2)).then(setHighlightedInfo)
    }
  }, [info])

  useEffect(() => {
    if (messages) {
      // highlight(JSON.stringify(messages, null, 2)).then(setHighlightedMessages)
    }
  }, [messages])

  return (
    <div className="hidden md:grid w-full items-start gap-6 col-span-1">
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">Welcome</legend>
        <p className="text-muted-foreground">
          This page lets you chat with an agent, testing out the standalone
          agent server.
        </p>

        <SelectWithLabel
          id="agent"
          label="Agent"
          className="w-full"
          options={agents.map(agent => ({
            label: agent.name,
            value: agent.id,
          }))}
          value={agentIdValue}
          onValueChange={setAgentIdValue}
          group="Select one of your agents to connect to."
          placeholder="Select an agent"
        />

        <Button
          onClick={connected ? disconnect : connect}
          variant="portal-neutral"
        >
          {connected ? 'Disconnect' : 'Connect'}
        </Button>
      </fieldset>
      <fieldset className="grid gap-6 rounded-lg border px-4 max-h-52 overflow-x-hidden overflow-y-auto">
        <legend className="-ml-1 px-1 text-sm font-medium">Agent</legend>
        <code
          dangerouslySetInnerHTML={{ __html: highlightedInfo || '' }}
          className="text-muted-foreground overflow-x-auto min-h-10"
        />
      </fieldset>
      <fieldset className="grid gap-6 rounded-lg border px-4 max-h-52 overflow-x-hidden overflow-y-auto">
        <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
        <code
          dangerouslySetInnerHTML={{ __html: highlightedMessages || '' }}
          className="text-muted-foreground max-h-full min-h-10 overflow-y-auto"
        />
      </fieldset>
    </div>
  )
}
