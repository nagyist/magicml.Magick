import { useAtom } from 'jotai'
import { toggleAgentSettingsAtom } from '@magickml/portal-state'
import Image from 'next/legacy/image'
import { defaultImage } from '@magickml/portal-utils-shared'
// import AgentChatRemixButton from '../Buttons/AgentChatRemixButton'
import AgentChatLikeButton from '../Buttons/AgentChatLikeButton'
import AgentChatShareButton from '../Buttons/AgentChatShareButton'
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/router'
import { Button } from '@magickml/client-ui'
import EditorButton from '../Buttons/EditorButton'
import clsx from 'clsx'
import { AgentData } from '@magickml/portal-types'
import { useSession } from '@clerk/nextjs'

export const AgentChatHeader = ({
  isPrivate = false,
  className = '',
  agent,
}: {
  isPrivate?: boolean
  className?: string
  agent: AgentData
}) => {
  const router = useRouter()
  const [toggleAgentSettings, setToggleAgentSettings] = useAtom(
    toggleAgentSettingsAtom
  )
  const { isSignedIn } = useSession()

  return (
    <div
      className={clsx(
        className,
        toggleAgentSettings
          ? 'border-b-transparent lg:border-b-[#3d454a]'
          : 'border-b-[#3d454a]',
        'fixed top-0 left-0 right-0 md:relative',
        'w-full md:h-14 lg:h-auto lg:py-3 flex justify-center text-left border-b box-border dark:bg-[#101112] bg-[white] z-20 color-transition lg:px-1'
      )}
    >
      <div className="flex flex-row justify-between w-full">
        {/* Back Button */}
        <Button
          className="self-center"
          variant="ghost"
          onClick={() =>
            isSignedIn ? router.push('/') : router.push('/explore')
          }
          size="icon"
        >
          <IoIosArrowBack className="text-2xl text-black dark:text-white" />
        </Button>
        {/* Agent Info */}
        <div className="inline-flex items-center self-center justify-start p-1 ml-2 lg:ml-0">
          <div className="self-center avatar">
            <div className="w-8 h-8 rounded-full lg:w-10 lg:h-10">
              <Image
                src={
                  agent?.data.image
                    ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${agent?.data.image}`
                    : defaultImage(agent?.data.id ?? '')
                }
                alt="agent"
                width={112}
                height={112}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center my-auto mt-1 ml-2 items-left gap-y-1">
            <p className="font-bold leading-none line-clamp-1 line text-secondary-highlight font-montAlt dark:text-white">
              {agent?.data.name}
            </p>
            <span className="text-[10px] lg:text-[15px] leading-none font-sans text-black dark:text-[#a0b3c1] mb-2">
              created by @{agent?.data.creatorName}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex mr-2 items-center justify-end ml-auto gap-x-0.5 lg:gap-x-3">
          {agent?.data.isPublic && (
            <AgentChatLikeButton
              publicAgentId={agent?.data.publicAgentId ?? ''}
            />
          )}
          {/* {!isPrivate && (
            <AgentChatReportButton
              publicAgentId={agent?.data.publicAgentId ?? ""}
            />
          )} */}
          {<AgentChatShareButton agentId={agent?.data.id ?? ''} />}
          {/* {agent?.data.remixable && (
            <AgentChatRemixButton
              publicAgentId={agent.data.publicAgentId ?? ''}
              agentName={agent.data.name ?? ''}
            />
          )} */}
          {isPrivate && (
            <EditorButton
              projectId={agent?.data.projectId ?? ''}
              agentId={agent?.data.id ?? ''}
            />
          )}
          {isPrivate && (
            <Button
              onClick={() => setToggleAgentSettings(!toggleAgentSettings)}
              variant="agent"
              className="hidden lg:inline-flex"
              size="sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 33 30"
                fill="none"
              >
                <path
                  d="M21.4831 9.02488L20.1831 9.52488C19.9101 9.32488 19.6241 9.16238 19.3121 9.03738L19.1171 7.71238C19.0911 7.58738 18.9871 7.49988 18.8571 7.49988H16.7771C16.6471 7.49988 16.5431 7.58738 16.5301 7.71238L16.3351 9.03738C16.0231 9.16238 15.7241 9.32488 15.4641 9.52488L14.1641 9.02488C14.0471 8.98738 13.9041 9.02488 13.8521 9.13738L12.8121 10.8624C12.7471 10.9749 12.7731 11.1124 12.8771 11.1874L13.9821 12.0124C13.9431 12.1624 13.9171 12.3374 13.9171 12.4999C13.9171 12.6624 13.9301 12.8249 13.9561 12.9874L12.8641 13.8124C12.7601 13.8874 12.7341 14.0249 12.7991 14.1249L13.8391 15.8624C13.9041 15.9749 14.0341 16.0124 14.1641 15.9749L15.4511 15.4749C15.7241 15.6749 16.0101 15.8374 16.3351 15.9624L16.5171 17.2874C16.5431 17.4124 16.6471 17.4999 16.7771 17.4999H18.8571C18.9871 17.4999 19.0911 17.4124 19.1171 17.2874L19.3121 15.9624C19.6241 15.8374 19.9231 15.6749 20.1831 15.4749L21.4701 15.9749C21.5871 16.0249 21.7301 15.9749 21.7821 15.8624L22.8221 14.1249C22.8871 14.0124 22.8611 13.8874 22.7571 13.8124L21.6781 12.9874C21.7041 12.8249 21.7171 12.6624 21.7171 12.4999C21.7171 12.3249 21.7041 12.1624 21.6781 12.0124L22.7831 11.1874C22.8871 11.1124 22.9131 10.9749 22.8481 10.8624L21.8081 9.13738C21.7431 9.02488 21.6001 8.98738 21.4831 9.02488ZM17.8171 14.2874C16.7901 14.2874 15.9581 13.4874 15.9581 12.4999C15.9581 11.5124 16.7901 10.7124 17.8171 10.7124C18.8441 10.7124 19.6761 11.5124 19.6761 12.4999C19.6761 13.4874 18.8441 14.2874 17.8171 14.2874Z"
                  className="text-black fill-current dark:text-white color-transition"
                />
                <path
                  d="M26.8391 11.3249C26.2801 7.23738 22.6401 3.99988 18.3501 3.76238C18.1681 3.74988 17.9991 3.74988 17.8171 3.74988C13.2281 3.74988 9.45811 7.01238 8.82111 11.2499L6.31211 15.5999C5.77911 16.4249 6.40311 17.4999 7.41711 17.4999H8.71711V19.9999C8.71711 21.3749 9.88711 22.4999 11.3171 22.4999H12.6171V26.2499H21.7171V20.3999C25.1231 18.8374 27.3721 15.2999 26.8391 11.3249ZM20.2741 18.2874L19.1171 18.8124V23.7499H15.2171V19.9999H11.3171V14.9999H9.62711L11.3561 12.0874C11.5901 8.82488 14.3721 6.24988 17.8171 6.24988C21.4051 6.24988 24.3171 9.04988 24.3171 12.4999C24.3171 15.1124 22.6401 17.3499 20.2741 18.2874Z"
                  className="text-black fill-current dark:text-white color-transition"
                />
              </svg>
              Settings
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
