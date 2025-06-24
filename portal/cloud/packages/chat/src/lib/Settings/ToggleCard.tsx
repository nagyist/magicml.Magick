import { cn, Switch, Label } from '@magickml/client-ui'
import { InfoIcon } from '@magickml/icons'

type ToggleCardProps = {
  title: string
  value: boolean | undefined
  handleValueChanged: () => void
}

const ToggleCard = ({ title, value, handleValueChanged }: ToggleCardProps) => {
  return (
    <div className="flex items-start gap-8 mb-8">
      <div className="flex items-start flex-grow gap-8">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <Label className="text-sm font-normal md:text-base text-light-blue font-sans">
              {title}
            </Label>
            <InfoIcon className="text-light-blue" />
          </div>
          <div className="flex items-center gap-4">
            <Label
              className={cn(
                'text-base font-normal  text-[#A0B3C1] font-sans',
                value ? 'text-[#303132]' : ''
              )}
            >
              No
            </Label>
            <Switch
              checked={value}
              className=""
              size={'small'}
              secondary={'bg-secondary'}
              secondaryThumb={'bg-secondary'}
              translateX={'small'}
              onClick={handleValueChanged}
            />
            <Label
              className={cn(
                'text-base font-normal  text-[#A0B3C1] font-sans',
                value ? '' : 'text-[#303132]'
              )}
            >
              Yes
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToggleCard
