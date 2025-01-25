'use client'
import { PropsWithChildren } from 'react'

type TemplatePageContainerProps = {}

export const TemplatePageContainer = (
  props: PropsWithChildren<TemplatePageContainerProps>
) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden max-w-screen-xl mx-auto">
      {props.children}
    </div>
  )
}
