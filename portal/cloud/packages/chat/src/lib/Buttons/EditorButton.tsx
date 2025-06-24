import { Button } from '@magickml/client-ui'
import { trackEvent, PrivateEventTypes } from '@magickml/portal-utils-shared'

type Props = {
  projectId: string | null
  agentId: string | null
}

const EditorButton = ({ projectId, agentId }: Props) => {
  const tracking = (e: any, cta_id: string, cta_text: string, link: string) => {
    e.preventDefault()
    trackEvent(PrivateEventTypes.AGENT_PRIVATE_OPEN_IDE, agentId ?? '')
    window.open(link, '_blank')
  }

  return (
    <Button
      variant="agent"
      size="sm"
      className="hidden lg:inline-flex"
      onClick={e => {
        tracking(e, 'editor', 'Editor', `/projects/${projectId}`)
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        className="w-[18px] h-[16px]"
      >
        <path
          d="M15.6782 7.33321V1.99988H10.6897V3.99988H6.4138V1.99988H1.42529V7.33321H6.4138V5.33321H7.83909V11.9999H10.6897V13.9999H15.6782V8.66654H10.6897V10.6665H9.26437V5.33321H10.6897V7.33321H15.6782ZM4.98851 5.99988H2.85058V3.33321H4.98851V5.99988ZM12.1149 9.99988H14.2529V12.6665H12.1149V9.99988ZM12.1149 3.33321H14.2529V5.99988H12.1149V3.33321Z"
          className="text-black fill-current dark:text-white color-transition"
        />
      </svg>
      Editor
    </Button>
  )
}

export default EditorButton
