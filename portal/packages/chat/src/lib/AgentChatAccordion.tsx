import { MdKeyboardArrowRight } from 'react-icons/md'
import { useState } from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
}

function AgentChatAccordion(props: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className="cursor-pointer mb-4" onClick={toggleAccordion}>
        <MdKeyboardArrowRight
          className={`inline text-[#A0B3C1] font-semibold text-[27px] ${
            isOpen ? 'rotate' : ''
          }`}
        />
        <h2 className="inline-block text-[#A0B3C1] font-semibold">
          {props.title}
        </h2>
      </div>
      {isOpen && <div className="accordion_content">{props.children}</div>}
    </div>
  )
}

export default AgentChatAccordion
