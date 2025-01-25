'use client'
import { cn } from '@magickml/client-ui'
import type { SvgIconTypeMap } from '@mui/material'
import type { OverridableComponent } from '@mui/material/OverridableComponent'

interface TempateMetadataItemItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  titleProps?: React.HTMLAttributes<HTMLParagraphElement>
  constainerProps?: React.HTMLAttributes<HTMLDivElement>
  title: string
  children: React.ReactNode
  noBorder?: boolean
  Icon?:
    | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string })
    | React.FC<React.SVGProps<SVGSVGElement>>
}

export const TempateMetadataItemItem = (
  props: TempateMetadataItemItemProps
) => {
  const { title, children, Icon, constainerProps, className, titleProps } =
    props
  return (
    <div
      className={cn(
        'inline-flex justify-between items-center w-full h-fit py-4',
        props.noBorder ? '' : 'border-b border-zinc-600',
        className
      )}
    >
      <p
        className="inline-flex gap-x-1 text-neutral-400  font-semibold font-['Montserrat']"
        {...titleProps}
      >
        {Icon && <Icon />} {title}
      </p>

      <div className="w-1/2" {...constainerProps}>
        {children}
      </div>
    </div>
  )
}
