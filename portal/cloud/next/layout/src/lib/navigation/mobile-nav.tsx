'use client'

import React from 'react'
import { cn } from '@magickml/client-ui'
import { usePathname, useRouter } from 'next/navigation'
import { usePortalNavigation } from '../hooks/use-portal-navigation'

type Props = {}

export const PortalMobileNav: React.FC<Props> = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const navigation = usePortalNavigation()

  const isRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return (pathname && pathname.includes(href)) || false
  }

  return (
    <div className="sticky lg:hidden bottom-0 left-0 z-50 w-full h-20 bg-ds-card border-t border-t-zinc-700">
      <div className="flex justify-evenly items-center h-full w-full divide-x divide-x-zinc-700  mx-auto font-medium">
        {navigation.map(nav => (
          <button
            key={nav.href}
            className={cn(
              'flex flex-col items-center justify-center group h-full w-full',
              isRoute(nav.href) ? '' : 'opacity-50'
            )}
            onClick={() => push(nav.href)}
          >
            <nav.Icon
              height="24"
              width="24"
              viewBox="0 0 28 28"
              className="w-6 h-6"
            />
            <span className="text-xs font-normal">{nav.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
