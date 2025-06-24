import { ComponentProps } from 'react'
import { Button, Input, Select, Textarea, Tooltip } from '@magickml/client-ui'

export type ButtonProps = ComponentProps<typeof Button>
export type SelectProps = ComponentProps<typeof Select>
export type InputProps = ComponentProps<typeof Input>
export type TextareaProps = ComponentProps<typeof Textarea>
export type TooltipProps = ComponentProps<typeof Tooltip>

export type SelectOption = {
  label: JSX.Element | string
  value: string
}

export type AgentProps = {
  id: string
  name: string
  image: string
  projectId: string
}

export type ChatSettingsProps = {
  agents: AgentProps[]
  connected: boolean
  connect: () => void
  disconnect: () => void
  agentId: [string, React.Dispatch<React.SetStateAction<string>>]
  info: any
  messages: any[]
}

export type ChatMessage = {
  sender: string
  text: string
  id?: string
}

export type ChatMessagesProps = {
  messages: {
    sender: string
    text: string
    id?: string
    responseId?: string
    audioUrl?: string
    audioChunks?: any
  }[]
}

export interface ChatTranscriptionProps
  extends React.ComponentProps<typeof Button> {
  onTranscript: React.ChangeEventHandler<HTMLTextAreaElement>
  sendMessage: () => void
}

export type ChatInputProps = {
  textareaProps: TextareaProps
  onMessageSend: (message: string) => void
  attachButtonProps: ButtonProps
  onAttachClick: () => void
  transcriptionProps: ChatTranscriptionProps
}

export type ChatInterfaceProps = {
  connected: boolean
  chatMessagesProps: ChatMessagesProps
  chatInputProps: ChatInputProps
}

export type SidebarProps = {
  buttons: (ButtonProps & {
    icon: React.ReactNode
    tooltipProps: Omit<TooltipProps, 'children'> & { content: string }
    href?: string
  })[]
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  buttons: ButtonProps[]
}
