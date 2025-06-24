import { type FC } from 'react'
/**
 * Props for the `PortalLayout` component.
 */
interface AccountLayoutProps {
  /** Content to be rendered within the layout. */
  children: React.ReactNode
}

/**
 * `PortalLayout` serves as a wrapper component that sets up the general layout for a page.
 */
export const PortalLayout: FC<AccountLayoutProps> = ({ children }) => {
  return (
    <div className="relative bg-ds-background color-transition h-dvh flex">
      {children}
    </div>
  )
}
