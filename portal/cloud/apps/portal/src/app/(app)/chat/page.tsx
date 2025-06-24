'use client'
import { Chat } from 'hailmary'
import { api } from '@magickml/portal-server-provider'
import { useEffect, useMemo } from 'react'

import { useUser } from '@clerk/nextjs'
import Head from 'next/head'
import { useInView } from 'react-intersection-observer'

export default function Page() {
  const { isSignedIn } = useUser()
  const { inView } = useInView()
  const {
    data,
    // isFetchingNextPage,
    fetchNextPage,
    //  hasNextPage,
    //  isLoading
  } = api.agents.getInfinite.useInfiniteQuery(
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

  const agentMemo = useMemo<any>(() => {
    if (!data) return []
    return data.pages
      .flatMap(page => (page.items ? page.items : []))
      .map(agent => ({
        id: agent.id,
        name: agent.name,
        image: agent.image,
        projectId: agent.projectId,
      }))
  }, [data]) as any

  return (
    <>
      <Head>
        <title>Chat | MagickML</title>
        <meta name="description" content="Chat with an agent" />
      </Head>
      <Chat agents={agentMemo} />
    </>
  )
}
