'use client'

import React from 'react'
import {
  Button,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@magickml/client-ui'
import { SidebarProps } from '../types'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@magickml/client-ui'
import { isCurrentPage } from '../utils/page-utils'

export const SidebarButton: React.FC<SidebarProps['buttons'][number]> = ({
  icon,
  tooltipProps,
  href,
  onClick,
  className,
  ...buttonProps
}) => {
  const { push } = useRouter()
  const pathname = usePathname()

  return (
    <Tooltip {...tooltipProps}>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'rounded-lg hover:bg-primary/50',
            className,
            // rmove any trailing slashes from pathname and href, then compare
            href &&
              pathname &&
              isCurrentPage({ pathname, href }) &&
              'bg-primary'
          )}
          onClick={e => {
            if (href) {
              push(href)
            }
            if (onClick) {
              onClick(e)
            }
          }}
          {...buttonProps}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {tooltipProps.content}
      </TooltipContent>
    </Tooltip>
  )
}
