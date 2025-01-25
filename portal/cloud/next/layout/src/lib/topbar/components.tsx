'use client'

import { Button } from 'client/core'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { SmartToyOutlined } from '@mui/icons-material'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@magickml/client-ui'
import { useEffect, useState } from 'react'
import { api } from '@magickml/portal-server-provider'
import { useUser } from '@clerk/nextjs'
import { useInView } from 'react-intersection-observer'

export const SubscribeButton = ({
  hasSubscription,
}: {
  hasSubscription: boolean
}) => {
  return !hasSubscription ? (
    <Button
      className="bg-[#04c9f0] text-[#0b0d0e] px-1 py-1 w-[136px] h-[30px] rounded font-semibold hover:bg-[#5dd5f0] transition duration-300"
      onClick={() => {
        window.open('/subscribe', '_blank')
      }}
    >
      Subscribe
    </Button>
  ) : null
}

export const FeedbackButton = () => {
  return (
    <Button
      className="bg-[--ds-neutral] text-[--ds-white] px-1 py-1 w-[136px] h-[30px] rounded font-semibold hover:bg-[#919eaa] transition duration-300"
      onClick={() => {
        window.open(
          'https://docs.google.com/forms/d/e/1FAIpQLSeNICszMVzBZKPh0b7Dvizn3J0mnPgLYKLXDakmZaqo9Q39Ew/viewform?usp=sf_link',
          '_blank'
        )
      }}
    >
      Feedback
    </Button>
  )
}

export const HomeButton = () => {
  return (
    <Button
      onClick={() => {
        window.open('/', '_self')
      }}
      className="text-white font-bold py-2 rounded bg-transparent"
    >
      <HomeOutlinedIcon className="hover:text-[#06c9f0] transition duration-300" />
    </Button>
  )
}

export const AgentMenu = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const { isSignedIn } = useUser()
  const { inView } = useInView()

  const { data, fetchNextPage } = api.agents.getInfinite.useInfiniteQuery(
    {},
    {
      getNextPageParam: lastPage => lastPage.nextCursor,
      refetchInterval: 1000 * 60 * 1, // 1 minute
      enabled: isSignedIn,
    }
  )

  useEffect(() => {
    if (inView && data) {
      fetchNextPage()
    }
  }, [inView, data])

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <DropdownMenu open={!!openMenu} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger
        onClick={() => {
          toggleMenu()
        }}
      >
        <SmartToyOutlined
          className={`h-4 w-4 m-1 ${
            openMenu ? 'text-[#06c9f0]' : ''
          } hover:text-[#06c9f0] transition duration-300`}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={`w-[200px] border-[1.5px] border-[#06c9f0] bg-[#060607] flex flex-col items-center`}
        style={{ marginLeft: '110px' }}
      >
        <h3 className="mt-2 mb-2 pb-2 text-white font-semibold border-b-[1px] border-[#181c1c] w-full text-center">
          My Agents
        </h3>
        <div className="w-full overflow-y-auto max-h-64">
          {data?.pages
            .flatMap(page => (page.items ? page.items : []))
            .map((agent, i: number) => (
              <Button
                key={agent.id}
                className={`w-full text-left px-3 py-2 hover:bg-[#363d42] transition duration-300 border-b-[1px] border-[#181c1c]`}
                onClick={() => {
                  window.open(`/projects/${agent.projectId}`, '_blank')
                }}
              >
                {agent.name}
              </Button>
            ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
