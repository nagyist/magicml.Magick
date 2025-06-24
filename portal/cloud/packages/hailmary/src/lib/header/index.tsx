'use client'

import React from 'react'
import { HeaderProps } from '../types'
import { HeaderButton } from './header-button'
import { Button } from '@magickml/client-ui'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { getHeaderTitle } from '../utils/page-utils'
import { useSetAtom } from 'jotai'
import { sidebarDrawerAtom } from '../sidebar/sidebar-drawer'

export const Header: React.FC<HeaderProps> = ({ buttons }) => {
  const path = usePathname()
  const setDrawerOpen = useSetAtom(sidebarDrawerAtom)
  const handleDrawerOpen = () => setDrawerOpen(true)

  return (
    <header className="inline-flex h-16 w-full items-center gap-1 border-b bg-background px-4">
      <h1 className="text-xl font-semibold">{getHeaderTitle(path || '')}</h1>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={handleDrawerOpen}
      >
        <Menu className="size-4" />
        <span className="sr-only">Menu</span>
      </Button>

      {buttons.map((button, index) => (
        <HeaderButton key={index} {...button} />
      ))}
    </header>
  )
}
