import AgentCreatorInputContainer from '../Inputs/AgentCreatorInputContainer'
import AgentCreatorToggle from '../Inputs/AgentCreatorToggle'
import { Label, Textarea } from '@magickml/client-ui'
import { AllNodesData, NodeDataWithType } from '@magickml/portal-types'

type PublicVarComponentProps = {
  publicVariables: AllNodesData
  handleSwitchChange: (variable: NodeDataWithType, value: boolean) => void
  handleInputChange: (
    variable: NodeDataWithType,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  updatePubVariables: (
    event:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void
}

const PublicVariables = ({
  publicVariables,
  handleInputChange,
  handleSwitchChange,
  updatePubVariables,
}: PublicVarComponentProps) => {
  return (
    <AgentCreatorInputContainer className="flex flex-col pt-4 col-span-full gap-y-4">
      <Label className="mb-2 text-sm uppercase md:text-lg text-light-blue">
        Public Variables
      </Label>
      {Object.values(publicVariables).map((variable, index) => {
        return (
          <div key={index}>
            <label className="flex flex-col text-black dark:text-white gap-y-1">
              <span className="text-base text-light-blue font-montAlt">
                {variable.name}:
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
                  className="w-full magick-input border-[#BADDE4!important] mt-4 font-normal text-base"
                  value={variable.stringValue || variable.value}
                  onKeyDown={updatePubVariables}
                  onChange={e => handleInputChange(variable, e)}
                ></Textarea>
              ) : (
                <input
                  type="text"
                  className="w-full magick-input"
                  value={variable.stringValue || variable.value}
                  onKeyDown={updatePubVariables}
                  onChange={e => handleInputChange(variable, e)}
                />
              )}
            </label>
          </div>
        )
      })}
    </AgentCreatorInputContainer>
  )
}

export default PublicVariables
