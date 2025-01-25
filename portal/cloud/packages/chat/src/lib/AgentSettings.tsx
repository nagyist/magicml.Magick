import Config from './Config'
import AgentDocuments from './AgentDocuments'
import AgentSettingsHeader from './Settings/AgentSettingsHeader'
import { ITab } from './Settings/AgentTabPanel'
import clsx from 'clsx'
import { useState } from 'react'
import { Button } from '@magickml/client-ui'
import { motion } from 'framer-motion'
import { useScreenWidth } from '@magickml/portal-hooks'
import { AgentData } from '@magickml/portal-types'
import { usesDocuments } from '@magickml/portal-utils-shared'

const AgentSetting = ({
  classNames,
  isPublic,
  agent,
}: {
  classNames?: string
  isPublic?: boolean
  agent: AgentData
}) => {
  const width = useScreenWidth()
  const isMobile = width < 1024
  const motionProps = {
    initial: !isMobile ? { opacity: 0, x: '100%' } : { opacity: 0 },
    animate: !isMobile ? { opacity: 1, x: '0%' } : { opacity: 1 },
    exit: isMobile ? { opacity: 0, x: '100%' } : { opacity: 0 },
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 17.5,
      mass: 1,
      delay: 0.1,
      duration: 0.15,
    },
  }

  return (
    <motion.div
      {...motionProps}
      key="settings-motion"
      className={clsx(
        !isPublic ? 'pb-11' : 'pb-0',
        'flex-col flex-grow w-full sm:overflow-hidden bg-[#dbe2e8] dark:bg-[#171b1c]',
        classNames
      )}
    >
      <AgentSettingsContent agent={agent} />
    </motion.div>
  )
}

const AgentSettingsContent = ({ agent }: { agent: AgentData }) => {
  const [selected, setSelected] = useState('config')
  const renderedTabs: ITab[] = [
    { name: 'config', component: <Config agent={agent} /> },
    // { name: "analytics", component: <Analytics /> },
    // { name: "integrations", component: <Integrations /> },
    {
      name: 'knowledge',
      filter: agent => {
        const nodes = agent.graph.nodes as { [key: string]: any }
        return usesDocuments(nodes)
      },
      component: <AgentDocuments projectId={agent.projectId} agent={agent} />,
    },
    // { name: 'logs', component: <LogsComponent logs={logs} /> },
  ]

  return (
    <>
      <AgentSettingsHeader />
      <div className="h-9 w-full bg-[#fff] dark:bg-[#101112] lg:bg-[#dbe2e8] lg:dark:bg-[#171b1c]">
        <div className="inline-flex w-full h-full">
          {renderedTabs
            .filter(tab => (tab.filter ? tab.filter(agent) : true))
            .map(tab => (
              <Button
                key={tab.name}
                onClick={() => setSelected(tab.name)}
                className={clsx(
                  'w-1/2 capitalize shadow-none gap-x-1 text-black bg-transparent dark:text-white color-transition border-b-2 rounded-none',
                  selected === tab.name
                    ? 'border-b-black dark:border-b-white'
                    : 'border-b-transparent'
                )}
              >
                {tab.name}
              </Button>
            ))}
        </div>
      </div>
      <div className={clsx('p-6 h-full overflow-auto')}>
        {renderedTabs.map(tab => (
          <div
            key={tab.name}
            className={clsx(
              'w-full h-full',
              selected === tab.name ? 'block' : 'hidden'
            )}
          >
            {tab.component}
          </div>
        ))}
      </div>
    </>
  )
}

export default AgentSetting
