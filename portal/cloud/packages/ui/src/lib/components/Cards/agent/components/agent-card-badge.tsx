import { Badge, cn } from '@magickml/client-ui'
import React from 'react'

interface Props extends React.ComponentProps<typeof Badge> {}

export const AgentCardBadge: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Badge
      className={cn(
        'w-28 h-9 z-50 inline-flex justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-ds-primary-m text-black text-sm font-normal font-sans',
        className
      )}
      {...props}
    />
  )
}
