import { prepareToken } from '@magickml/portal-server-router'
import { prismaPortal } from '@magickml/portal-db'
import { auth, currentUser } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'

import { MagickIDE } from 'client/editor'
import { KeywordsService } from '@magickml/keywords-service'
import { generateToken } from '@magickml/embedder-auth-token'
import {
  FeedbackButton,
  HomeButton,
  InfoMenu,
  SubscribeButton,
  UserMenu,
  AgentMenu,
} from 'portal/cloud/next/layout/src/lib/header'
import { clerkClient } from '@clerk/clerk-sdk-node'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default async function EditorPage({
  params,
}: {
  params: { projectId: string }
}) {
  console.log('EditorPage', params)
  if (!apiUrl) {
    throw new Error('API_URL not found')
  }

  const user = auth()

  const projectId = params?.projectId
  console.log('projectId', projectId)

  if (typeof projectId !== 'string' || !user.userId) {
    notFound()
  }

  const userData = await currentUser()

  const clerkUser = await clerkClient.users.getUser(user.userId)
  const isNeophyte = clerkUser.publicMetadata.subscription === 'NEOPHYTE'

  // check if project exists
  const project = await prismaPortal.project.findUnique({
    where: {
      id: projectId as string,
    },
    select: {
      id: true,
    },
  })

  console.log('project', project)

  if (!project) {
    notFound()
  }

  const token = await prepareToken({
    user: {
      userId: user.userId,
      user: userData,
      orgId: '',
    },
    projectId: projectId,
  })

  // update the projects last active date
  await prismaPortal.project.update({
    where: {
      id: projectId as string,
    },
    data: {
      lastActive: new Date(),
    },
  })

  const providerData = await new KeywordsService().fetchModels()

  const embedderToken = generateToken({
    owner: projectId,
    entity: projectId,
  })

  return (
    <MagickIDE
      config={{
        embedderToken,
        token,
        projectId,
        userId: user.userId,
        email: userData?.emailAddresses[0].emailAddress,
        apiUrl,
        providerData,
      }}
      loading={[] as any}
      loadingStatus={[] as any}
      leftTopBarItems={[<HomeButton key={1} />, <AgentMenu key={2} />]}
      rightTopBarItems={[
        <SubscribeButton hasSubscription={!isNeophyte} key={1} />,
        <FeedbackButton key={2} />,
        <InfoMenu key={3} />,
        <UserMenu key={4} />,
      ]}
    />
  )
}
