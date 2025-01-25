import { MagickDialog, MagickUnauthorizedDialog } from '@magickml/client-ui'
import { Button, Input, Label } from '@magickml/client-ui'
import { useRouter } from 'next/router'
import { FunctionComponent, useState } from 'react'
// import toast from 'react-hot-toast'
import { SlRefresh } from 'react-icons/sl'
import { useSession } from '@clerk/nextjs'
// import { api } from '@magickml/portal-server-provider'

type AgentChatRemixButtonProps = {
  publicAgentId: string
  agentName: string
}

const AgentChatRemixButton: FunctionComponent<AgentChatRemixButtonProps> = () =>
  // {
  // publicAgentId,
  // agentName,
  // }
  {
    const session = useSession()
    const router = useRouter()
    const [open, setOpen] = useState<boolean>(false)
    const [name, setName] = useState<string>('')

    // const { mutateAsync: remixAgent, isLoading } =
    //   api.publicAgents.remix.useMutation({
    //     onSuccess: () => {
    //       setOpen(false)
    //       setName('')
    //       router.push('/agents')
    //     },
    //     onError: error => {
    //       setOpen(false)
    //       setName('')
    //       toast.error(error.message)
    //     },
    //   })

    // const handleRemixAgent = async () => {
    //   if (!name) {
    //     toast.error("New Agent's name should be set!")
    //     return
    //   }
    //   if (name.toLocaleLowerCase() === agentName.toLowerCase()) {
    //     toast.error('Try with a different name!')
    //     return
    //   }
    //   await remixAgent({ publicAgentId, workspaceId, name })
    // }
    return (
      <>
        {session.isSignedIn ? (
          <MagickDialog
            open={open}
            setOpen={setOpen}
            trigger={<RemixButton onClick={() => setOpen(true)} />}
            title="Remix Agent"
            description="Remixing an agent will create a new agent with the same spell as the original agent. The new agent will be owned by you and will be placed in your workspace."
            // onSubmit={handleRemixAgent}
            submitText="Remix"
            // isLoading={isLoading}
          >
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input
              id="name"
              autoComplete="off"
              value={name}
              onChange={e => setName(e.target.value)}
              className="focus:border-secondary-highlight placeholder:font-sans placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
              placeholder="Type your new Agent's name here"
            />
          </MagickDialog>
        ) : (
          <MagickUnauthorizedDialog
            open={open}
            setOpen={setOpen}
            trigger={<RemixButton onClick={() => setOpen(true)} />}
            title="Create & Remix Agents"
            description="Create new agents with their own names, personality, custom knowledge (uploaded documents) and other unique variables based off of our awe inspiring templates or other agents you’ve chatted with by signing up and becoming a Magick creator. "
            onSubmit={() => router.push('/auth/sign-in')}
            submitText="Login"
          />
        )}
      </>
    )
  }

type RemixButtonProps = {
  onClick: () => void
}

const RemixButton: FunctionComponent<RemixButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} variant="agent" size="sm">
      <SlRefresh className="text-lg lg:mr-1" />
      <span className="hidden lg:flex">Remix</span>
    </Button>
  )
}

export default AgentChatRemixButton
