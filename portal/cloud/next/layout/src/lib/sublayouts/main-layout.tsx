import React from 'react'
import { PortalHeader } from '../header'
import PortalFooter from '../footer'
import { cn } from '@magickml/client-ui'
import { PortalMobileNav } from '../navigation/mobile-nav'
// import PageViewer from './page-viewer'

type Props = {
  children: React.ReactNode
  classNames?: string
}

export const MainLayout: React.FC<Props> = ({
  children,
  classNames = 'pt-4 mx-2 md:mx-8 lg:mx-12',
}) => {
  return (
    <>
      {/* <PageViewer /> */}
      <div className="relative flex flex-col w-full h-screen">
        <PortalHeader />
        <div
          className={cn(
            'flex flex-col z-10 h-full overflow-y-auto overflow-x-hidden pb-20',
            classNames
          )}
        >
          {children}
        </div>
        <PortalMobileNav />
      </div>
      <PortalFooter />
    </>
  )
}
