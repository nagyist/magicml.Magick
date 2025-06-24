import type { TemplateGetStaticProps } from './template-page-isr'
import { TemplatePageContainer } from './layout/template-container'
import { TemplatePageSide } from './layout/template-page-aside'
import { TemplatePageMain } from './main/template-page-main'
import { ReactFlowProvider } from '@xyflow/react'
export async function TemplatePage({
  template,
}: {
  template: TemplateGetStaticProps['template']
}) {
  return (
    <>
      <TemplatePageContainer>
        <TemplatePageSide template={template} />
        <ReactFlowProvider>
          <TemplatePageMain template={template} />
        </ReactFlowProvider>
      </TemplatePageContainer>
    </>
  )
}
