import React, { useState, useEffect } from 'react'
import { BiMessage } from 'react-icons/bi'
import AgentChatAccordion from './AgentChatAccordion'
import { FaDiscord } from 'react-icons/fa'
import { Conversation, groupMessagesByDate } from '@magickml/portal-config'
import testData from './testData.json'
import { useFeatureFlagEnabled } from 'posthog-js/react'

function AgentChatHistory({
  toggleChatHistory,
  setToggleChatHistory,
}: {
  toggleChatHistory: boolean
  setToggleChatHistory: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [groupedConvos, setGroupedConvos] = useState<any>({
    Today: [],
    Yesterday: [],
    Previous_7_days: [],
    Previous_30_days: [],
    month: [],
  })
  // Fetch your messages from the backend or set them in some other way
  useEffect(() => {
    // Simulating setting messages from the imported test data
    setConversations(testData.items)
  }, [])

  // Group messages when messages change
  useEffect(() => {
    const grouped: any = groupMessagesByDate(conversations)

    setGroupedConvos(grouped)
  }, [conversations])

  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...'
    } else {
      return text
    }
  }

  // Utility function to format category labels
  const formatCategoryLabel = (category: string) => {
    return category.replace(/_/g, ' ');
  }

  const locations = ['MagickML.com', 'Discord']

  const flagEnabled = useFeatureFlagEnabled('use-chat-history')

  return (
    <div className="hidden lg:flex">
      {flagEnabled && (
        <>
          <div
            className={`m-5 z-50 ${toggleChatHistory ? 'hidden' : 'block'}`}
            data-projection-id="120"
            style={{ opacity: 1 }}
            onClick={() => setToggleChatHistory(!toggleChatHistory)}
          >
            <span
              className="rounded-lg flex flex-col items-center justify-center p-2 border-[2px] border-solid border-secondary"
              data-state="closed"
            >
              <button
                aria-label="Open History"
                className="text-black w-[27px] h-[25px] transition-colors duration-200 dark:text-white cursor-pointer text-sm rounded-md hover:bg-gray-500/10"
              >
                <svg
                  width="23"
                  height="17"
                  viewBox="0 0 23 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.25 0.166748V16.8334H22.75V0.166748H0.25ZM20.5 5.03133H17.6875V2.25008H20.5V5.03133ZM17.6875 7.11467H20.5V9.89592H17.6875V7.11467ZM2.5 2.25008H15.4375V14.7501H2.5V2.25008ZM17.6875 14.7501V11.9688H20.5V14.7501H17.6875Z"
                    className="text-black fill-current dark:text-white"
                  />
                </svg>
              </button>
            </span>
          </div>
          <div
            className="transition-all duration-300 ease-out  dark:bg-[#171B1C] bg-[#F1F4F6] pl-2"
            style={{
              width: toggleChatHistory ? '272px' : '0',
              opacity: toggleChatHistory ? 1 : 0,
            }}
          >
            <div className="self-stretch flex flex-row items-start justify-between pt-5 px-2.5 pb-2.5 text-base text-foreground-text">
              <div className="rounded-lg dark:bg-[#262B2E] h-10 flex flex-row items-center justify-center py-2.5 px-3.5 box-border gap-[10px] transform-none">
                <div className="relative transform-none">New Conversation</div>
              </div>
              <div
                className="rounded-lg flex flex-col items-center justify-center p-2 border-[2px] border-solid border-secondary"
                onClick={() => setToggleChatHistory(!toggleChatHistory)}
              >
                <span
                  className="relative overflow-hidden shrink-0"
                  data-state="closed"
                >
                  <button className="text-black w-[27px] h-[25px] transition-colors duration-200 dark:text-white cursor-pointer text-sm rounded-md hover:bg-gray-500/10">
                    <svg
                      width="23"
                      height="17"
                      viewBox="0 0 23 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.25 0.166748V16.8334H22.75V0.166748H0.25ZM20.5 5.03133H17.6875V2.25008H20.5V5.03133ZM17.6875 7.11467H20.5V9.89592H17.6875V7.11467ZM2.5 2.25008H15.4375V14.7501H2.5V2.25008ZM17.6875 14.7501V11.9688H20.5V14.7501H17.6875Z"
                        fill="white"
                        className="fill-current"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div
              style={{ maxHeight: 'calc(95vh - 80px)', overflowY: 'auto' }}
              className="flex flex-col gap-4"
            >
              {locations.map((location, i) => (
                <AgentChatAccordion title={location} key={i}>
                  {location === 'MagickML.com' && (
                    <div>
                      {Object.keys(groupedConvos).map(
                        (category: any, index) => (
                          <div key={index}>
                            {groupedConvos[category].length > 0 && (
                              <div className="text-[#A0B3C1] text-sm pl-2">
                                {formatCategoryLabel(category)}
                              </div>
                            )}
                            {groupedConvos[category].map(
                              (message: any, i: any) => (
                                <div
                                  key={i}
                                  className="p-2 my-2 dark:text-white text-black cursor-pointer  w-[98%] rounded-lg transition-all duration-300 hover:dark:bg-[#262B2E] hover:bg-white"
                                  style={{
                                    opacity: toggleChatHistory ? 1 : 0,
                                    transform: toggleChatHistory
                                      ? 'translateY(0)'
                                      : 'translateY(20px)',
                                  }}
                                >
                                  <div className="flex items-center ">
                                    <BiMessage className="mr-2   w-[20px]" />
                                    <p className="text-[14px] text-gray-400 truncate	">
                                      {truncateText(message.title, 30)}
                                    </p>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                  {location === 'Discord' &&
                    Array.from(Array(10).keys()).map(i => (
                      <div
                        className="p-2 my-2 dark:text-white text-black cursor-pointer  w-[98%] rounded-lg transition-all duration-300 hover:dark:bg-[#262B2E] hover:bg-white"
                        key={i}
                        style={{
                          opacity: toggleChatHistory ? 1 : 0,
                          transform: toggleChatHistory
                            ? 'translateY(0)'
                            : 'translateY(20px)',
                        }}
                      >
                        <div className="flex items-center justify-between ">
                          <div>
                            <FaDiscord className="inline mr-4 text-lg" />
                            <p className="inline-block text-[14px]">MagickML</p>
                          </div>
                          <p className="text-[14px]">#general</p>
                        </div>
                      </div>
                    ))}
                </AgentChatAccordion>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AgentChatHistory
