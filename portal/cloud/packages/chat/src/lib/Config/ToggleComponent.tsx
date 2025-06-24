import AgentTitle from './AgentTitle'
import ConfigToggle from './ConfigToggle'
import { InfoIcon } from '@magickml/icons'

type Title = 'Make Public' | 'Enable Remixing' | 'Open in Editor'

export type TogglableControls = {
  title: Title
  handleMethod: () => void
  value: boolean | undefined
  enabled: boolean | undefined
  isPublic?: boolean | undefined
}
interface Props {
  TogglableProperties: TogglableControls[]
}

const ToggleComponent = ({ TogglableProperties }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
      {TogglableProperties.map(
        (config, index) =>
          config.enabled && (
            <div key={index}>
              <div className="flex items-center">
                <AgentTitle title={config.title} className="mr-2" />
                <InfoIcon height={20} width={20} className="text-[#4D4D4D]" />
              </div>
              <div className="flex items-center content-between">
                <span
                  className={`${
                    config.value ? 'text-light-grey' : ''
                  } uppercase`}
                >
                  No
                </span>
                {
                  <ConfigToggle
                    value={config.value || false}
                    onChange={() => config.handleMethod()}
                    className="mx-3"
                    disabled={
                      config.title === 'Enable Remixing' && !config.isPublic
                        ? true
                        : false
                    }
                  />
                }
                <span
                  className={`${
                    config.value ? 'text-white' : 'text-light-grey'
                  } uppercase`}
                >
                  Yes
                </span>
              </div>
            </div>
          )
      )}
    </div>
  )
}

export default ToggleComponent
