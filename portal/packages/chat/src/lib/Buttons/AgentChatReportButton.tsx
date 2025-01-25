// import toast from 'react-hot-toast'
import { AiOutlineWarning } from 'react-icons/ai'
// import { api } from '@magickml/portal-server-provider'
import { useState } from 'react'
import { Checkbox, Textarea, Button ,MagickDialog} from '@magickml/client-ui'

const AgentChatReportButton = ({
  publicAgentId,
}: {
  publicAgentId: string
}) => {
  // const { mutateAsync: makeReport, isLoading: isReporting } =
  //   api.publicAgents.reportAgent.useMutation({
  //     onSuccess: () => {
  //       toast.success('Agent reported')
  //     },
  //     onError: error => {
  //       toast.error(error.message)
  //     },
  //   })

  // const handleReport = async () => {
  //   await makeReport({ publicAgentId, message: report })
  //   setOpen(false)
  //   setReport('')
  // }

  const [open, setOpen] = useState<boolean>(false)
  const [report, setReport] = useState<string>('')

  return (
    <>
      <MagickDialog
        title="Report an Issue"
        open={open}
        // isLoading={isReporting}
        trigger={
          <Button onClick={() => setOpen(true)} variant="agent" size="sm">
            <AiOutlineWarning />
            <span className="hidden lg:inline-flex">Report</span>
          </Button>
        }
        setOpen={setOpen}
        // onSubmit={handleReport}
        submitText="Report"
        description="Reporting this agent will send a report to the MagickML team. Please provide a description of why you are reporting this agent."
      >
        <div className="flex flex-col text-black gap-y-4 dark:text-white">
          <div className="flex items-center space-x-2">
            <Checkbox
              className="bg-transparent border-2 border-black rounded-none dark:border-white"
              id="offends"
            />
            <label
              htmlFor="offends"
              className="text-sm leading-none font-sans peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              This agent offends me
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              className="bg-transparent border-2 border-black rounded-none dark:border-white"
              id="broken"
            />
            <label
              htmlFor="broken"
              className="text-sm leading-none font-sans peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              This agent is broken
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              className="bg-transparent border-2 border-black rounded-none dark:border-white"
              id="sucks"
            />
            <label
              htmlFor="sucks"
              className="text-sm leading-none font-sans peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              This agent sucks
            </label>
          </div>
        </div>
        <div className="flex flex-col text-black gap-y-4 dark:text-white">
          <Textarea
            className="focus:border-secondary-highlight placeholder:font-sans placeholder:text-black/70 dark:placeholder:text-white/70 w-full h-32 p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
            placeholder="additional comments..."
            value={report}
            onChange={e => setReport(e.target.value)}
          />
        </div>
      </MagickDialog>
    </>
  )
}

export default AgentChatReportButton
