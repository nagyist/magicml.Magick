import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  Button,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@magickml/client-ui'
import { getImage, ImageType } from '@magickml/utils'
import type { PortalCardBaseProps } from './types'
import { getPluginCredentials } from '@magickml/node-spec'

interface SpellMetadata {
  models: string[]
  discord: boolean
  slack: boolean
  knowledge: boolean
}

export interface AgentCardFooterProps extends PortalCardBaseProps {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  buttonRef: React.RefObject<HTMLButtonElement>
  submitText: string
  onSubmit: () => void | Promise<void> | null
  secondaryText?: string
  onSecondaryClick?: React.MouseEventHandler<HTMLButtonElement> | null
  metadata: SpellMetadata | null | undefined
}

export const AgentCardFooter: React.FC<AgentCardFooterProps> = ({
  id,
  name,
  image,
  description,
  version,
  state,
  buttonRef,
  submitText,
  onSubmit,
  secondaryText,
  onSecondaryClick,
  metadata,
}) => {
  const [open, setOpen] = state
  const castedMetadata = metadata as SpellMetadata | undefined | null

  const pluginCredentials = getPluginCredentials()

  const discordCredentials = pluginCredentials?.find(
    credential => credential.pluginName === 'discord'
  )
  const slackCredentials = pluginCredentials?.find(
    credential => credential.pluginName === 'slack'
  )

  return (
    <Dialog onOpenChange={setOpen} modal={true} open={open}>
      <DialogTrigger asChild>
        <Button
          ref={buttonRef}
          onClick={() => state[1](!state[0])}
          variant="portal-neutral"
          size="sm"
          className="w-full hover:animate-shimmer border-ds-neutral font-medium
          bg-gradient-to-tr from-ds-neutral to-ds-neutral active:scale-95 transition-all
          hover:bg-[linear-gradient(110deg,#565c62,45%,#117a91,55%,#565c62)] bg-[length:200%_100%] "
        >
          More Info
        </Button>
      </DialogTrigger>
      <DialogContent
        onPointerDownOutside={e => e.preventDefault()}
        className="lg:max-w-2xl overflow-y-auto h-full sm:h-auto w-full text-ds-black dark:text-ds-white p-8"
      >
        <h2 className="text-2xl font-bold !font-montAlt capitalize inline-flex items-center justify-start">
          {name}
          {version && (
            <span className="ml-2 mt-1 text-[10px] font-sans leading-none  text-ds-primary-p dark:text-ds-primary-m">
              {version}
            </span>
          )}
        </h2>
        <div className="flex  flex-col lg:flex-row gap-2 items-start justify-start">
          <Avatar className="w-full aspect-square max-w-72 h-auto !rounded-[10px] mx-auto">
            <AvatarImage
              className="h-full w-full !rounded-[10px]"
              src={getImage({
                id,
                type: ImageType.IMAGE,
                image,
              })}
              alt={name ?? 'Untitled'}
            />
          </Avatar>
          <div className="flex flex-col gap-2 basis-2/3 px-6 py-2.5 ">
            <p className="text-base font-semibold text-left">Description</p>

            <div className="self-stretch text-base font-normal">
              {description && description.length > 0
                ? description
                : 'No description'}
            </div>

            {/* metadata */}
            {castedMetadata?.models && (
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-left">
                  Language Models
                </p>
                <div className="text-base font-normal">
                  {castedMetadata.models.join(', ')}
                </div>
              </div>
            )}
            <div className="inline-flex gap-2">
              {castedMetadata?.discord && (
                <Avatar className="h-6 w-6">
                  <AvatarImage src={discordCredentials?.icon} alt="discord" />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              )}
              {castedMetadata?.slack && (
                <Avatar className="h-6 w-6">
                  <AvatarImage src={slackCredentials?.icon} alt="slack" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
              )}
            </div>

            {castedMetadata?.knowledge && (
              <p className="text-xs">
                This agent uses the knowledge system so make your you upload
                your own knowledge in the editor.
              </p>
            )}
          </div>
        </div>

        <DialogFooter className="lg:pt-8 gap-2">
          {secondaryText && onSecondaryClick && (
            <Button onClick={onSecondaryClick} variant="portal-neutral">
              {secondaryText}
            </Button>
          )}
          <Button onClick={onSubmit} variant="portal-primary">
            {submitText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
