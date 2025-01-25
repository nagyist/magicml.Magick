'use client'
import { SpellInterfaceWithGraph } from '@magickml/agent-server-schemas'
import { TemplateGetStaticProps } from '../template-page-isr'
import { TemplatePageHeader } from './template-page-header'
import { TemplatePageSubHeader } from './template-page-subheader'
import { useRef, useState } from 'react'
import { cn } from '@magickml/client-ui'
import { TemplateMetadata } from '../components/template-metadata'
import { ReadOnlyFlow } from '@magickml/flow-core'

type TemplatePageMainProps = {
  template: TemplateGetStaticProps['template']
}

export const TemplatePageMain = (props: TemplatePageMainProps) => {
  const { template } = props
  const [activeSpell, setActiveSpell] = useState<
    SpellInterfaceWithGraph | null | undefined
  >(template?.templateVersions?.[0].spells?.[0] as any) //TODO: add correct type for json values to prisma schema

  const spells = template?.templateVersions?.[0].spells as any as
    | SpellInterfaceWithGraph[]
    | undefined
    | null

  const parentRef = useRef<HTMLDivElement>(null)

  return (
    <main className="w-full lg:px-10 items-start gap-8 flex flex-col h-full overflow-y-auto">
      <TemplatePageHeader template={template} />

      <TemplatePageSubHeader template={template} />

      <div className="flex flex-col gap-y-4 w-full full min-h-[500px] max-h-[700px] bg-ds-card-alt p-4 rounded-lg">
        <h2 className="text-2xl font-normal">Preview</h2>

        <div
          ref={parentRef}
          className="w-full h-full max-h-[400px] max-w-7xl bg-ds-card-alt rounded-[5px] border border-ds-primary-p dark:ds-primary-m overflow-hidden"
          // className="flex flex-col gap-y-4 w-full bg-ds-card-alt p-4 rounded-lg">
        >
          {spells && (
            <div className="overflow-hidden border-ds-neutral inline-flex items-center justify-start w-full bg-ds-card h-6 border-b">
              <span className="flex items-center border-r border-r-ds-neutral overflow-hidden justify-start max-w-fit h-12 px-4 font-medium">
                <p className="text-ellipsis text-nowrap">Spells</p>
              </span>
              {spells.map(spell => (
                <button
                  key={spell.id}
                  className={cn(
                    'flex items-center border-r font-light border-r-ds-neutral overflow-hidden justify-start max-w-fit h-12 px-4 text-ds-neutral',
                    {
                      'text-ds-primary-p dark:text-ds-primary-m':
                        activeSpell?.id === spell.id,
                      '': activeSpell?.id === spell.id,
                    }
                  )}
                  onClick={() => setActiveSpell(spell)}
                >
                  <p className="text-ellipsis text-nowrap">{spell.name}</p>
                </button>
              ))}
            </div>
          )}

          {activeSpell ? (
            <ReadOnlyFlow
              spell={activeSpell}
              windowDimensions={{ width: 1280, height: 400 }}
              parentRef={parentRef}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-ds-primary-m dark:text-ds-primary-p">
              No spell found
            </div>
          )}
        </div>
      </div>

      <TemplateMetadata className="lg:hidden" template={template} />
    </main>
  )
}
