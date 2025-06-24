import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

export interface ITab {
  name: string
  filter?: (agent: any) => boolean
  component: React.ReactNode
}

interface AgentTabPanelProps {
  tabs: ITab[]
}

export const AgentTabPanel: React.FC<AgentTabPanelProps> = ({ tabs }) => (
  <Tab.Panels className="h-full">
    {tabs.map(tab => (
      <Tab.Panel
        key={tab.name}
        className={clsx(
          ' dark:bg-main-darkest bg-[#DCE8ED] p-6 border border-t-0 rounded-b border-[#3C3F41]  h-full overflow-auto'
        )}
      >
        <AnimatePresence
        // mode="wait"
        >
          <motion.div key={tab.name} layout>
            {tab.component}
          </motion.div>
        </AnimatePresence>
      </Tab.Panel>
    ))}
  </Tab.Panels>
)
