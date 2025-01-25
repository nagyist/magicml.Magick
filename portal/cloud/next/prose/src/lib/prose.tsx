'use client'

import { EditorState } from 'prosemirror-state'
import { schema } from 'prosemirror-schema-basic'
import { ProseMirror } from '@nytimes/react-prosemirror'
import { useState } from 'react'

const defaultState = EditorState.create({ schema })
export function ProseEditor() {
  // It's important that mount is stored as state,
  // rather than a ref, so that the ProseMirror component
  // is re-rendered when it's set
  const [mount, setMount] = useState<HTMLElement | null>(null)

  return (
    <ProseMirror mount={mount} defaultState={defaultState}>
      <div
        className="px-3 py-2 bg-ds-card-alt placeholder:font-normal rounded-md border border-ds-neutral text-sm"
        ref={setMount}
      />
    </ProseMirror>
  )
}

// <div className="flex flex-col gap-y-1">
// {label && (
//   <Label className="font-medium text-sm" htmlFor={id}>
//     {label}
//   </Label>
// )}
// <Textarea
//   id={id}
//   className={cn(
//     'px-3 py-2 bg-ds-card-alt placeholder:font-normal rounded-md border border-ds-neutral text-sm',
//     className
//   )}
//   {...props}
// />
// </div>
