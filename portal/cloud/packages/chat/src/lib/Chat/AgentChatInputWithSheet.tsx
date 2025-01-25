import clsx from 'clsx'
import { Textarea } from '@magickml/client-ui'
import { useEffect, useRef, useState } from 'react'
import ChatInput from './InputSheet'
import { useKeyboardDisplacement } from '@magickml/portal-hooks'

type AgentChatInputProps = {
  value: string
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleKeyDown: (event: any) => void
  handleClick: () => void
  isResponding: boolean
  agentName: string | null
  isPublic?: boolean
}

const AgentChatInput = ({
  value,
  handleChange,
  handleKeyDown,
  handleClick,
  isResponding,
  agentName,
  isPublic = false,
}: AgentChatInputProps) => {
  const textareaRef = useRef<any>(null)
  const [isOpened, setOpen] = useState(true)
  const [displacement, setDisplacement] = useState(0)
  const keyboardDisplacement = useKeyboardDisplacement()

  useEffect(() => {
    setDisplacement(keyboardDisplacement)
  }, [keyboardDisplacement])

  const handleSheetClose = () => {
    setOpen(false)
  }

  return (
    <div
      className={clsx(
        !isPublic ? 'bottom-11' : 'bottom-0',
        'w-full inline-flex lg:bottom-0 placeholder:text-[#a0b3c1] font-sans dark:placeholder:text-white/50 placeholder:black/50 rounded-[8px] rounded-b-none lg:rounded-b-[8px] relative pb-0 lg:pb-0 lg:mb-4'
      )}
    >
      <ChatInput
        textareaRef={textareaRef}
        value={value}
        isOpen={isOpened}
        setOpen={setOpen}
        displacement={displacement}
      >
        <Textarea
          placeholder={agentName ? `Message ${agentName}` : 'Type a message'}
          value={value}
          ref={textareaRef}
          id="prompt-textarea"
          onBlur={() => {
            setDisplacement(0)
          }}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              handleSheetClose()
            }
            handleKeyDown(e)
          }}
          onChange={handleChange}
          className="w-full h-full overflow-visible text-base bg-transparent border-0 resize-none focus:ring-0"
        />
        <button
          className="absolute bottom-3 right-3 z-50 pt-1 text-black lg:right-6 disabled:text-black/50 disabled:dark:text-white/50 dark:text-white"
          disabled={isResponding || !value}
          onClick={e => {
            handleClick()
            handleSheetClose()
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 29 33"
            fill="none"
          >
            <path
              d="M1.8125 14.0075L1.82458 4.63281L27.1875 16.6859L1.82458 28.7391L1.8125 19.3644L19.9375 16.6859L1.8125 14.0075Z"
              fill="currentColor"
              className="color-transition"
            />
          </svg>
        </button>
      </ChatInput>
    </div>
  )
}

export default AgentChatInput
