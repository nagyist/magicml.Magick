import { agentDataAtom } from '@magickml/portal-state'
import { useAtomValue } from 'jotai'
import { ClipboardIcon } from '@heroicons/react/20/solid'
import { api } from '@magickml/portal-server-provider'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { copyToClipboard } from '@magickml/portal-utils-shared'

const Analytics = () => {
  const agent = useAtomValue(agentDataAtom)
  const [isCopied, setIsCopied] = useState(false)
  const { data: result } = api.agents.getAgentAnalytics.useQuery({
    agentId: agent?.id,
    projectId: agent?.projectId || '',
  })

  function handleCopyToClipboard() {
    copyToClipboard('agent-url')
    setIsCopied(true)
    toast.success('Copied to clipboard', { position: 'bottom-center' })
    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  return (
    <div className="h-full overflow-auto">
      <div className="bg-[#262730] flex justify-between p-4 mb-4 rounded">
        <h1>status:</h1>
        <h1 className={agent.enabled ? 'text-[#42B951]' : 'text-[#F00]'}>
          {agent.enabled ? 'Enabled' : 'Disabled'}
        </h1>
      </div>
      <div className="bg-[#262730] mb-4 relative flex justify-between p-4 rounded">
        <ClipboardIcon
          className={`absolute w-4 h-4 top-2 right-2 cursor-pointer ${
            isCopied ? 'text-green-500' : ''
          }`}
          onClick={handleCopyToClipboard}
        />
        <h1 id="agent-url">
          {`${process.env.NEXT_PUBLIC_API_URL}/api?apiKey='yourApiKey'&agentId=${agent.id}`}
        </h1>
      </div>
      <div className="bg-[#262730] mb-4 p-4 rounded">
        <h1 className="mb-4 text-light-blue">Requests/Agent Responses</h1>
        <div className="flex justify-between mb-4 rounded">
          <h3 className="text-sm text-white"># of requests today:</h3>
          <h3 className="text-white ">{result?.requestsToday}</h3>
        </div>
        <div className="mb-4 bg-white rounded w-fit"></div>
        <div className="flex justify-between rounded">
          <h3 className="text-sm text-white">Requests this month:</h3>
          <h3 className="text-white ">{result?.monthlyRequest?.toFixed(4)}</h3>
        </div>
      </div>
      <div className="bg-[#262730] mb-4 p-4 rounded">
        <h1 className="mb-4 text-light-blue">Cost</h1>
        <div className="flex justify-between mb-4 rounded">
          <h3 className="text-sm text-white">$ spent today:</h3>
          <h3 className="text-white ">${result?.spentToday?.toFixed(4)}</h3>
        </div>
        <div className="mb-4 bg-white rounded w-fit"></div>
        <div className="flex justify-between rounded">
          <h3 className="text-sm text-white">$ spent this month:</h3>
          <h3 className="text-white">
            ${result?.monthlyCost?.toFixed(4) || 0}
          </h3>
        </div>
      </div>

      {/* COMMENTED FOR NOW */}
      {/* <div className="bg-[#262730] flex justify-between p-4 mb-4 rounded">
        <h1 className="text-sm text-white"># of Errors:</h1>
        <h1 className="text-[#F00]">16</h1>
      </div>
      <div className="bg-[#262730] flex justify-between p-4 mb-4 rounded">
        <h1 className="text-sm text-white "># of ppl interacted with:</h1>
        <h1 className="text-[#42B951]">10,000</h1>
      </div> */}
    </div>
  )
}

export default Analytics
