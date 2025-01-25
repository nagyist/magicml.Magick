import { FunctionComponent } from 'react'
import Link from 'next/link'

/**
 * Properties for the FooterLink component.
 */
type FooterLinkProps = {
  /** The URL to which the link points */
  href: string
  /** Children to be displayed within the link */
  children: React.ReactNode
}

/**
 * FooterLink Component
 *
 * This component renders a link, with an optional icon, for the footer.
 *
 * @param props Properties for the FooterLink component.
 * @returns JSX.Element
 */
const FooterLink: FunctionComponent<FooterLinkProps> = ({ href, children }) => {
  return (
    <div className="inline-flex items-center justify-start gap-[5px] text-left text-[#18181d] dark:text-[#bababa] color-transition">
      <Link
        className="hover:link first-letter:relative w-full"
        target="_blank"
        href={href}
      >
        {children}
      </Link>
    </div>
  )
}

export default FooterLink
