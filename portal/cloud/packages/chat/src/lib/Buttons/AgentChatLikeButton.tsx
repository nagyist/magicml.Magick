import clsx from 'clsx'
import { MagickUnauthorizedDialog,Button } from '@magickml/client-ui'
import { useRouter } from 'next/router'
import { FunctionComponent, useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
// import { api } from '@magickml/portal-server-provider'
import { useSession } from '@clerk/nextjs'

type AgentChatLikeButtonProps = {
  publicAgentId: string
}

const AgentChatLikeButton: FunctionComponent<AgentChatLikeButtonProps> = ({
  publicAgentId,
}) => {
  const session = useSession()
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  // const utils = api.useContext()

  const isLiked = false

  // const { data: likes } = api.publicAgents.getLikedPublicAgents.useQuery(
  //   undefined,
  //   {
  //     enabled: session.status === 'authenticated',
  //   }
  // )

  // const isLiked = likes?.some(like => like.publicAgentId === publicAgentId)

  // const { mutateAsync: handleLike } = api.publicAgents.likeAgent.useMutation({
  //   onSuccess: async () => {
  //     await utils.publicAgents.getLikedPublicAgents.invalidate()
  //   },
  //   onError: err => {
  //     console.error('Error liking agent', err)
  //   },
  // })

  // const { mutateAsync: handleUnlike } =
  //   api.publicAgents.unlikeAgent.useMutation({
  //     onSuccess: async () => {
  //       await utils.publicAgents.getLikedPublicAgents.invalidate()
  //     },
  //     onError: err => {
  //       console.error('Error unliking agent', err)
  //     },
  //   })

  // const handleLikeToggle = async () => {
  //   if (publicAgentId && session.status === 'authenticated') {
  //     const isLiked = likes?.some(like => like.publicAgentId === publicAgentId)

  //     if (isLiked) {
  //       await handleUnlike({ publicAgentId })
  //     } else {
  //       await handleLike({ publicAgentId })
  //     }
  //   }
  // }

  return (
    <>
      {session.isSignedIn ? (
        <LikeButton
          // onClick={handleLikeToggle}
          onClick={() => {}}
          isLiked={isLiked}
        />
      ) : (
        <MagickUnauthorizedDialog
          open={open}
          setOpen={setOpen}
          trigger={<LikeButton onClick={() => setOpen(true)} />}
          title="You must be logged in to like an agent."
          description="Click the button below to login or create an account."
          onSubmit={() => router.push('/auth/sign-in')}
          submitText="Login"
        />
      )}
    </>
  )
}

type LikeButtonProps = {
  onClick: () => void
  isLiked?: boolean
}

const LikeButton: FunctionComponent<LikeButtonProps> = ({
  onClick,
  isLiked,
}) => {
  return (
    <Button onClick={onClick} variant="agent" size="sm">
      <AiFillHeart
        className={clsx(
          isLiked ? 'text-red-500' : 'text-white',
          'color-transition group-hover:text-red-500'
        )}
      />
    </Button>
  )
}

export default AgentChatLikeButton
