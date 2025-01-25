import { Tab } from '@headlessui/react'
import clsx from 'clsx'

export interface ILog {
  name: string
  type: string
}

interface AgentTabsProps {
  tabs: string[]
}

export const AgentTabs: React.FC<AgentTabsProps> = ({ tabs }) => (
  <Tab.List className="flex space-x-1">
    {tabs.map(tab => (
      <Tab
        key={tab}
        className={({ selected }) =>
          clsx(
            'w-full border dark:text-blue-100 border-b-0 border-[#3C3F41] rounded-ss-lg py-2.5 text-sm font-medium leading-5 text-light-blue',
            selected
              ? 'bg-[#DCE8ED] dark:bg-main-darkest'
              : ' hover:bg-white/[0.12] hover:text-white'
          )
        }
      >
        {tab}
      </Tab>
    ))}
  </Tab.List>
)
