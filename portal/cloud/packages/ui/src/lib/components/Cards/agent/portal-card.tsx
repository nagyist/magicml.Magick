'use client'

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@magickml/client-ui'
import { getImage, ImageType } from '@magickml/utils'
import { PortalCardProps } from './types'

export const PortalCard: React.FC<PortalCardProps> = ({
  id,
  name,
  image,
  description,
  onClick,
  menu,
  footer,
  badge,
}) => {
  return (
    <Card
      onClick={onClick}
      key={id}
      className="w-44 h-60 lg:w-56 lg:h-80 flex flex-col border-ds-neutral hover:border-ds-primary hover:scale-[102.5%] transition-all duration-150 ease-in-out hover:overflow-visible cursor-pointer relative"
    >
      {badge && badge}
      <div className="relative w-full h-[53%] rounded-t-xl overflow-hidden m-0 p-0">
        {menu}
        <img
          src={getImage({
            id,
            image,
            type: ImageType.IMAGE,
          })}
          alt={name ?? 'Placeholder'}
          className="object-cover bg-ds-card-alt object-center absolute w-full h-full aspect-square"
        />
      </div>
      <CardHeader className="p-0 pt-2.5 h-[35%] text-center text-pretty grow">
        <CardTitle className="font-sans text-sm lg:text-base font-medium inline-flex items-center justify-center">
          {name}
        </CardTitle>
        {description && (
          <CardDescription className="mx-2 line-clamp-2 text-xs lg:text-base text-center dark:!text-ds-white !text-ds-black">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardFooter className="h-[12%]">{footer}</CardFooter>
    </Card>
  )
}
