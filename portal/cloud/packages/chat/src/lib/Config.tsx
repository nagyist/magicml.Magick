import { api } from '@magickml/portal-server-provider'
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDebounce } from 'use-debounce'
import { useAtom } from 'jotai'
import { agentGreetingAtom } from '@magickml/portal-state'
import {
  // AllNodesData,
  // NodeDataWithType,
  AgentData,
} from '@magickml/portal-types'
import {
  // validateKeys,
  defaultImage,
  extractAgentData,
} from '@magickml/portal-utils-shared'
// import AgentCreatorToggle from './Inputs/AgentCreatorToggle'
import {
  Input,
  agentInputStyles,
  Textarea,
  Button,
  buttonVariants,
  Label,
} from '@magickml/client-ui'
import { MagickDialog } from '@magickml/client-ui'
import ConfigSwitches from './Settings/Config/ConfigSwitches'
import clsx from 'clsx'
import DiscordConfig from './Settings/Config/DiscordConfig'

const Config = ({ agent }: { agent: AgentData }) => {
  const utils = api.useContext()
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [updatedDiscordToken, setUpdatedDiscordToken] = useState<boolean>(false)
  const [deleteDiscordToken, setDeleteDiscordToken] = useState<boolean>(false)
  const [discordToken, setDiscordToken] = useState('')

  // NAME UPDATE
  const [name, setName] = useState(agent?.data.name || '')
  const [updatedName] = useDebounce(name, 2000)

  useEffect(() => {
    if (!updatedName) return
    if (updatedName === agent?.data.name) return
    handleNameUpdate(updatedName)
  }, [updatedName, agent?.data.name])

  const handleNameUpdate = async (name: string) => {
    await updateAgent({ name, agentId: agent?.data.id ?? '' })
      .then(async data => {
        toast.success('Name updated.')
        await utils.agents.invalidate()
      })
      .catch(() => {
        toast.error('Something went wrong.')
      })
  }

  const handleDiscordTokenUpdate = async (discordToken: string) => {
    await updateAgent({
      data: {
        ...JSON.parse(JSON.stringify(agent?.data.data)),
        discord_api_key: discordToken,
      },
      agentId: agent?.data.id ?? '',
    })
      .then(async data => {
        toast.success('Discord token updated.')
        await utils.agents.invalidate()
        setDeleteDiscordToken(false)
        setUpdatedDiscordToken(false)
        setDiscordToken('')
      })
      .catch(() => {
        toast.error('Something went wrong.')
      })
  }

  // GREETING UPDATE
  const [greeting, setGreeting] = useAtom(agentGreetingAtom)
  const [updatedGreeting] = useDebounce(greeting, 2000)

  // TODO: Deprecated
  // useEffect(() => {
  //   if (!agent?.data.description) return
  //   setGreeting(agent.data.description)

  //   return () => setGreeting('')
  // }, [agent])

  useEffect(() => {
    if (!updatedGreeting) return
    if (updatedGreeting === agent?.data.description) return
    handleGreetingUpdate(updatedGreeting)
  }, [updatedGreeting])

  const handleGreetingUpdate = async (greeting: string) => {
    await updatePublicAgentDesc({
      description: greeting,
      agentId: agent?.data.id ?? '',
    })
      .then(async data => {
        toast.success('Greeting updated.')
        await utils.agents.invalidate()
      })
      .catch(() => {
        toast.error('Something went wrong.')
      })
  }

  // TODO: Deprecated
  // PUBLIC VARIABLES UPDATE
  // const [publicVariables, setPublicVariables] = useState<AllNodesData | null>()
  // const [updatedVariables] = useDebounce(publicVariables, 2000)

  // set public variables intially.
  // useEffect(() => {
  //   if (publicVariables) return
  //   setPublicVariables(JSON.parse(agent?.data.publicVariables || '{}'))
  // }, [publicVariables, agent?.data.publicVariables])

  // save public variables when updated.  But ensure the keys match the agent's public variables.
  // useEffect(() => {
  //   if (!updatedVariables || !agent?.data.publicVariables) return
  //   if (Object.keys(updatedVariables).length === 0) return
  //   if (
  //     !validateKeys(JSON.parse(agent?.data.publicVariables), updatedVariables)
  //   )
  //     return

  //   // check to ensure the values have changed
  //   if (
  //     JSON.stringify(updatedVariables) === agent?.data.publicVariables ||
  //     JSON.stringify(updatedVariables) === '{}'
  //   )
  //     return

  //   updatePublicVariables(JSON.stringify(updatedVariables))
  // }, [updatedVariables])

  // const updatePublicVariables = async (publicVariables: string) => {
  //   await updateAgent({ publicVariables, agentId: agent?.data.id ?? '' })
  //     .then(async data => {
  //       toast.success('Public variable updated.')
  //       await utils.agents.invalidate()
  //     })
  //     .catch(() => {
  //       toast.error('Something went wrong.')
  //     })
  // }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files ? e.target.files[0] : null)
  }

  const { mutateAsync: updatePublicAgentDesc } =
    api.agents.updatePublicAgentDesc.useMutation()

  const { mutateAsync: updateAgent, isLoading: updateIsLoading } =
    api.agents.updateAgent.useMutation()

  const convertFileToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const handleImageUpdate = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (!imageFile) return
    const base64 = await convertFileToBase64(imageFile)

    await updateAgent({
      image: base64,
      agentId: agent?.data.id ?? '',
    })
      .then(data => {
        setImageFile(null)
        toast.success('Image updated.')
        utils.agents.invalidate()
      })
      .catch(error => {
        toast.error('Something went wrong.', error.message)
      })
  }

  // const updatePubVariables = async (
  //   event:
  //     | React.KeyboardEvent<HTMLTextAreaElement>
  //     | React.KeyboardEvent<HTMLInputElement>
  // ) => {
  //   if (event.key === 'Enter' && !event.shiftKey) {
  //     event.preventDefault()
  //     await updatePublicVariables(JSON.stringify(publicVariables))
  //   }
  // }

  // const handleInputChange = (
  //   variable: NodeDataWithType,
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setPublicVariables({
  //     ...publicVariables,
  //     [variable.id]: {
  //       ...variable,
  //       stringValue: event.target.value,
  //       value: event.target.value,
  //     },
  //   })
  // }

  // const handleSwitchChange = async (
  //   variable: NodeDataWithType,
  //   value: boolean
  // ) => {
  //   const updatedPublicVars = {
  //     ...publicVariables,
  //     [variable.id]: {
  //       ...variable,
  //       boolValue: value,
  //       value,
  //     },
  //   }
  //   setPublicVariables(updatedPublicVars)
  //   await updatePublicVariables(JSON.stringify(updatedPublicVars))
  // }

  const onCancel = () => {
    setDiscordToken('')
    setDeleteDiscordToken(false)
    setUpdatedDiscordToken(false)
  }

  return (
    <div className="grid grid-cols-2 p-2 overflow-auto gap-x-4 gap-y-8 font-sans">
      {/* Agent Avatar */}
      <div className="flex flex-col col-span-full lg:col-span-1">
        <Label className="mb-4 text-base font-semibold">Agent Image</Label>
        {/* {!agent.image && (
          <p className="mb-4">
            Upload your own image to use as your agent&apos;s avatar.
          </p>
        )} */}
        {/* Avatar */}
        <div className="mb-2 avatar">
          <div className="relative mr-2 border rounded-xl border-secondary-main">
            {imageFile ? (
              <Image
                src={URL.createObjectURL(imageFile)}
                alt="Agent Avatar"
                width={250}
                height={250}
                unoptimized
                className="object-contain"
              />
            ) : (
              <Image
                src={`${
                  agent?.data.image
                    ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${agent?.data.image}`
                    : defaultImage(agent?.data.id ?? '0')
                }`}
                alt="Agent Avatar"
                width={250}
                height={250}
                className="object-contain"
              />
            )}
          </div>
        </div>
        {/* Upload Input */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grid w-full items-center gap-1.5">
            <Label
              className={buttonVariants({
                variant: 'agent',
                size: 'sm',
                className: 'justify-start m-0 py-0 px-2 w-28 font-sans',
              })}
              htmlFor="avatar"
            >
              Click to Upload
            </Label>
            <Input
              onChange={handleFileChange}
              accept="image/*"
              id="avatar"
              type="file"
              className="hidden"
              // edit file upload message: ex no file chosen
              placeholder="Upload Image"
            />
          </div>
          {imageFile && (
            <Button
              onClick={handleImageUpdate}
              variant="agent"
              size="sm"
              className="justify-center px-2 py-0 m-0 w-28 font-sans"
            >
              Update
              {updateIsLoading && (
                <span className="text-black loading loading-spinner loading-xs dark:text-white"></span>
              )}
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col pb-8 gap-y-5 col-span-full lg:col-span-1">
        <div className="flex flex-col col-span-2 gap-y-2">
          <Label className="text-base font-semibold" htmlFor="name">
            Display Name
            {/* <InformationCircleIcon height={16} className="inline ml-2" /> */}
          </Label>
          <Input
            className={agentInputStyles}
            type="name"
            id="name"
            defaultValue={name}
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <p className="text-xs">
            Display name is what is displayed to a user. Agent name is how the
            agent understands its own name. These two will soon be merged into a
            single value.
          </p>
        </div>
        <div className="flex flex-col h-full col-span-2 gap-y-2">
          <Label className="text-base font-semibold" htmlFor="greeting">
            Agent Greeting
          </Label>
          <Textarea
            className={clsx(agentInputStyles, 'flex-grow')}
            id="greeting"
            defaultValue={agent?.data.description || ''}
            onChange={e => setGreeting(e.target.value)}
            value={greeting}
            name="greeting"
            rows={3}
          />
          <p className="text-xs">
            The greeting is what the agent says when it first meets a user.
          </p>
        </div>
      </div>

      <div className="flex flex-row flex-wrap pb-8 gap-y-5 col-span-full">
        <ConfigSwitches agent={agent} />
      </div>
      <div>
        <DiscordConfig agent={agent} />
      </div>

      {/* Agent Name */}

      {/* Agent Description */}
      {/* <div className="flex flex-col col-span-2 gap-y-.5">
        <Label className="text-base font-semibold" htmlFor="description">
          Agent Description
        </Label>
        <Textarea
          className={agentInputStyles}
          defaultValue={agent?.name || ""}
          onChange={(e) => handleNameUpdate(e.target.value)}
          value={agent?.name || ""}
          name="description"
          rows={3}
          id="description"
        />
      </div> */}

      {extractAgentData(agent?.data.data as any, 'discord_enabled') && (
        <div className="flex w-full col-span-full">
          <Button
            className="mr-4 transition-all hover:scale-105"
            onClick={() => setUpdatedDiscordToken(true)}
          >
            {!extractAgentData(agent?.data.data as any, 'discord_api_key')
              ? 'Set'
              : 'Update'}{' '}
            Discord Token
          </Button>
          <Button
            className="bg-[#4f4f4f] hover:scale-105 transition-all disabled:cursor-not-allowed"
            disabled={
              !extractAgentData(agent?.data.data as any, 'discord_api_key')
            }
            onClick={() => setDeleteDiscordToken(true)}
          >
            Delete Discord Token
          </Button>
        </div>
      )}
      <MagickDialog
        isLoading={updateIsLoading}
        open={deleteDiscordToken}
        setOpen={setDeleteDiscordToken}
        submitText="Delete"
        onSubmit={() => handleDiscordTokenUpdate('')}
        title="Are sure you want to delete your discord token?"
        description="your agent will not respond unless you set a new discord token"
      />
      <MagickDialog
        isLoading={updateIsLoading}
        open={updatedDiscordToken}
        setOpen={setUpdatedDiscordToken}
        onSubmit={() => handleDiscordTokenUpdate(discordToken)}
        clear={onCancel}
        submitText="Save"
        title={`${
          !extractAgentData(agent?.data.data as any, 'discord_api_key')
            ? 'Set'
            : 'Update'
        } your discord token`}
        submitDisabled={!discordToken}
      >
        <Input
          type="text"
          className="focus:border-secondary-highlight placeholder:font-sans placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
          value={discordToken}
          placeholder="Paste your discord token here."
          // onKeyDown={updatePubVariables}
          onChange={e => setDiscordToken(e.target.value)}
        />
      </MagickDialog>

      {/* Agent Greeting */}
      {/* {publicVariables && (
        <div className="flex flex-col col-span-full gap-y-4">
          {Object.values(publicVariables).length > 0 && (
            <>
              <div className="divider before:bg-[#4f4f4f] h-[2px] after:bg-[#4f4f4f]" />
              <Label
                className="text-xl font-semibold uppercase font-montAlt"
                htmlFor="greeting"
              >
                Agent Variables
              </Label>
            </>
          )}
          {Object.values(publicVariables).map((variable, index) => {
            return (
              <div key={index}>
                <Label className="flex flex-col text-base font-semibold gap-y-1">
                  <span className="text-sm font-sans">
                    {variable?.name && variable.name.length > 0
                      ? variable.name
                      : 'Unnamed Variable'}
                  </span>
                  {variable.type === 'boolean' ||
                  variable.type.includes('Boolean Variable') ? (
                    <AgentCreatorToggle
                      value={variable.boolValue || variable.value}
                      onChange={value => handleSwitchChange(variable, value)}
                    />
                  ) : variable.type === 'text' ||
                    variable.type.includes('Text Variable') ? (
                    <Textarea
                      rows={5}
                      className="focus:border-secondary-highlight placeholder:font-sans placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
                      value={variable.stringValue || variable.value}
                      onKeyDown={updatePubVariables}
                      onChange={e => handleInputChange(variable, e)}
                    />
                  ) : (
                    <Input
                      type="text"
                      className="focus:border-secondary-highlight placeholder:font-sans placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
                      value={variable.stringValue || variable.value}
                      onKeyDown={updatePubVariables}
                      onChange={e => handleInputChange(variable, e)}
                    />
                  )}
                </Label>
              </div>
            )
          })}
        </div>
      )} */}
    </div>
  )
}

export default Config
