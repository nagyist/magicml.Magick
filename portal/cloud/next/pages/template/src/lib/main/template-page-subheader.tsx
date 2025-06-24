'use client'
import { TemplateGetStaticProps } from '../template-page-isr'

type TemplatePageSubHeaderProps = {
  template: TemplateGetStaticProps['template']
}

export const TemplatePageSubHeader = (props: TemplatePageSubHeaderProps) => {
  const { template } = props
  return (
    <div className="flex flex-col gap-y-4 w-full bg-ds-card-alt p-4 rounded-lg">
      <h2 className="text-2xl font-normal">Description</h2>
      <p className="text-base font-normal opacity-90">
        {template?.description || 'No description provided'}
      </p>
    </div>
  )
}
