import { MagickTextInput } from '@magickml/portal-ui'
import { api } from '@magickml/portal-server-provider'
import Image from 'next/legacy/image'
import {
  // useEffect,
  useState,
} from 'react'
import toast from 'react-hot-toast'
import { useAtom, useAtomValue } from 'jotai'
import {
  // publicVariablesAtom,
  agentDataAtom,
} from '@magickml/portal-state'
// import { NodeDataWithType } from '@magickml/portal-types'
// import AgentCreatorInputContainer from '../Inputs/AgentCreatorInputContainer'
// import AgentCreatorToggle from '../Inputs/AgentCreatorToggle'
import ConfigOwnerContainer from './ConfigOwnerContainer'
import AgentTitle from './AgentTitle'
import ToggleComponent, { TogglableControls } from './ToggleComponent'
import { workspaceAtom } from '@magickml/portal-state'

const Config = () => {
  const utils = api.useContext()
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [agent] = useAtom(agentDataAtom)
  // const [publicVariables, setPublicVariables] = useAtom(publicVariablesAtom)
  const workspace = useAtomValue(workspaceAtom)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files ? e.target.files[0] : null)
  }

  const { mutateAsync: updateAgent, isLoading: updateIsLoading } =
    api.agents.updateAgent.useMutation()

  // useEffect(() => {
  //   if (agent?.publicVariables)
  //     setPublicVariables(JSON.parse(agent.publicVariables.toString()))
  // }, [setPublicVariables, agent.publicVariables])

  const convertFileToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = error => reject(error)
    })
  }

  const { mutateAsync: makeAgentPublic } = api.agents.makePublic.useMutation({
    onSuccess: async data => {
      toast.success('Agent made public. A link has been copied to clipboard.')
      navigator.clipboard.writeText(
        `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/explore/${data.id}`
      )
      // await utils.publicAgents.invalidate()
      await utils.agents.invalidate()
    },
    onError: () => {
      toast.error('Error making agent public.')
    },
  })

  const { mutateAsync: makeAgentPrivate } = api.agents.makePrivate.useMutation({
    onSuccess: async () => {
      toast.success('Agent made private.')
      // await utils.publicAgents.invalidate()
      await utils.agents.invalidate()
    },
    onError: () => {
      toast.error('Error making agent private.')
    },
  })

  const handlePublicToggle = async () => {
    if (!agent.id || !workspace) return
    if (agent.isPublic) {
      await makeAgentPrivate({ agentId: agent.id })
    } else {
      await makeAgentPublic({
        agentId: agent.id,
      })
    }
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
      agentId: agent.id,
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

  const handleNameUpdate = async (name: string) => {
    await updateAgent({ name, agentId: agent.id })
      .then(async data => {
        toast.success('Name updated.')
        await utils.agents.invalidate()
      })
      .catch(() => {
        toast.error('Something went wrong.')
      })
  }

  // TODO: Deprecated
  // const handleDescriptionUpdate = async (description: string) => {
  //   await updateAgent({ description, agentId: agent.id })
  //     .then(async (data) => {
  //       toast.success("Description updated.");
  //       await utils.agents.invalidate();
  //     })
  //     .catch(() => {
  //       toast.error("Something went wrong.");
  //     });
  // };

  // const save = async (publicVariables: string) => {
  //   await updateAgent({ publicVariables, agentId: agent.id })
  //     .then(async data => {
  //       toast.success('Public variable updated.')
  //       await utils.agents.invalidate()
  //     })
  //     .catch(() => {
  //       toast.error('Something went wrong.')
  //     })
  // }

  // const updatePubVariables = async (
  //   event:
  //     | React.KeyboardEvent<HTMLTextAreaElement>
  //     | React.KeyboardEvent<HTMLInputElement>
  // ) => {
  //   if (event.key === 'Enter' && !event.shiftKey) {
  //     event.preventDefault()
  //     await save(JSON.stringify(publicVariables))
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
  //   await save(JSON.stringify(updatedPublicVars))
  // }

  const TogglableProperties: TogglableControls[] = [
    {
      title: 'Make Public',
      handleMethod: handlePublicToggle,
      value: agent.isPublic,
      enabled: true,
    },
    {
      title: 'Enable Remixing',
      handleMethod: handlePublicToggle,
      value: agent.remixable,
      enabled: false,
      isPublic: agent.isPublic,
    },
    {
      title: 'Open in Editor',
      handleMethod: () => {},
      value: true,
      enabled: false,
    },
  ]

  return (
    <div className="h-full pb-10">
      <AgentTitle className="mb-4" title="Agent meta data" />
      <ConfigOwnerContainer />
      <div className="md:flex md:flex-row">
        <div className="md:w-1/2">
          <AgentTitle className="mb-4" title="Agent Image" />
          {!agent.image && (
            <p className="mb-4">
              Upload your own image to use as your agent&apos;s avatar.
            </p>
          )}
          <div className="inline-flex items-center mb-4 sm:col-span-full gap-x-4">
            <div className="flex flex-col">
              <div className="w-full max-w-xs form-control">
                <div className="mb-2 avatar">
                  <div className="relative w-24 border rounded-xl border-secondary-main ">
                    {imageFile ? (
                      <Image
                        src={URL.createObjectURL(imageFile)}
                        alt="Project Avatar"
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src={`${
                          agent?.image
                            ? process.env.NEXT_PUBLIC_BUCKET_PREFIX +
                              agent.image
                            : '/images/magick-icon.png'
                        }`}
                        alt="Placeholder Avatar"
                        width={96}
                        height={96}
                        className="object-contain"
                      />
                    )}
                    <label
                      className="absolute top-0 w-full h-full cursor-pointer"
                      htmlFor="project_image_input"
                    ></label>
                  </div>
                </div>
                {imageFile && (
                  <button
                    onClick={handleImageUpdate}
                    className="text-black bg-transparent btn bg-ghost hover:bg-transparent active:bg-transparent border-secondary-main hover:border-secondary-main dark:text-white"
                  >
                    Update
                    {updateIsLoading && (
                      <span className="loading loading-spinner text-accent"></span>
                    )}
                  </button>
                )}
              </div>
              <input
                type="file"
                className="hidden"
                id="project_image_input"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
          </div>
        </div>

        {/* THIS AND REMIXING NEEDS A BETTER TO HANDLED */}

        {/* <div className="md:w-1/2">
          <AgentTitle className="mb-4" title="Agent Description" />
          <MagickTextInput
            defaultValue={agent?.description || ""}
            onSave={(newDescription) => handleDescriptionUpdate(newDescription)}
            className="w-full dark:bg-black text-md magick-input"
            type="textarea"
            rows={3}
          >
            {agent?.description ? (
              <p className="w-full h-24 p-2 overflow-auto text-black cursor-pointer dark:bg-black magick-input">
                {agent.description}
              </p>
            ) : (
              <p className="h-24 p-2 overflow-auto text-black cursor-pointer magick-input dark:bg-black">
                Click to add a description of yourself!
              </p>
            )}
          </MagickTextInput>
        </div> */}
      </div>

      <ToggleComponent TogglableProperties={TogglableProperties} />
      <div className="divider before:bg-[#787777] after:bg-[#787777] my-8"></div>
      <div className="flex flex-col mb-6">
        <AgentTitle className="mb-4" title=" Agent Variables" />
        <AgentTitle title=" Agent name" />
        <MagickTextInput
          defaultValue={agent?.name || ''}
          onSave={newName => handleNameUpdate(newName)}
          minLength={3}
          maxLength={20}
          className="w-full p-2 text-md magick-input dark:bg-black"
        >
          <p className="dark:bg-black text-[#4D4D4D] ring-transparent border w-full p-2 rounded">
            {agent?.name ?? ''}
          </p>
        </MagickTextInput>
      </div>
      {/* <AgentCreatorInputContainer className="flex flex-col pt-4 col-span-full gap-y-4"> */}
      {/* {Object.values(publicVariables).map((variable, index) => {
          return (
            <div key={index}>
              <label className="flex flex-col text-black dark:text-white gap-y-1">
                <AgentTitle title={`${variable.name}:`} />
                {variable.type === 'boolean' ||
                variable.type.includes('Boolean Variable') ? (
                  <AgentCreatorToggle
                    value={variable.boolValue || variable.value}
                    onChange={value => handleSwitchChange(variable, value)}
                  />
                ) : variable.type === 'text' ||
                  variable.type.includes('Text Variable') ? (
                  <textarea
                    className="w-full font-normal dark:bg-black magick-input"
                    value={variable.stringValue || variable.value}
                    onKeyDown={updatePubVariables}
                    onChange={e => handleInputChange(variable, e)}
                  ></textarea>
                ) : (
                  <input
                    type="text"
                    className="w-full dark:bg-black magick-input"
                    value={variable.stringValue || variable.value}
                    onKeyDown={updatePubVariables}
                    onChange={e => handleInputChange(variable, e)}
                  />
                )}
              </label>
            </div>
          )
        })} */}
      {/* </AgentCreatorInputContainer> */}
    </div>
  )
}

export default Config
