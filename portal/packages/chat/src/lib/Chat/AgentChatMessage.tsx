import { type AgentMessages } from '@magickml/portal-types'
import clsx from 'clsx'
import { useMarkdownProcessor } from '@magickml/portal-hooks'
import Image from "next/legacy/image"
import { defaultImage } from '@magickml/portal-utils-shared'

interface Props {
  message: AgentMessages
  agent: any
}

export const AgentChatMessage = ({ message, agent }: Props) => {
  const content = useMarkdownProcessor(message.message) as JSX.Element

  const getAvatar = () => {
    if (agent?.image) {
      return `${`${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${agent?.data.image}`}`
    } else {
      return defaultImage(agent?.data.id || '0')
    }
  }

  return (
    <div className="flex flex-row items-start mb-4">
      {message.entity === 'agent' && (
        <div className="avatar">
          <div className="w-8 rounded-full">
            <Image src={getAvatar()} alt="agent" width={72} height={72} />
          </div>
        </div>
      )}

      <div
        className={clsx(
          message.entity === 'user' ? 'dark:bg-[#262b2e] bg-[#f0f5f6] ' : '',
          'relative flex flex-col rounded-lg rounded-tl-none rounded-br-none px-4 py-2 text-left color-transition gap-3'
        )}
      >
        {content}
      </div>
    </div>
  )
}
