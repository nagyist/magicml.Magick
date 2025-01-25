import { defaultImage } from '@magickml/portal-utils-shared'
import { ProjectCard } from '.'
import clsx from 'clsx'
import { EventTypes } from '@magickml/portal-utils-shared'
import Link from 'next/link'

type CardGridProps = {
  itemsToShow: any[]
  usePlaceholder?: boolean
  placeholderClassNames?: string
  placeholderText?: string
  gridClassNames?: string
  Icon?: React.FC<any>
  type?: string
  isPublicAgent?: boolean
  posthogCardEvent?: EventTypes
  setCreateProjectOpen?: (value: boolean) => void
  isLoading: boolean
  onClick?: (agentId?: string) => void
}

export const ProjectGrid: React.FC<CardGridProps> = ({
  itemsToShow,
  placeholderClassNames = 'w-[232px] h-[332px] md:w-[220px] hidden',
  placeholderText = 'Create New Agent',
  gridClassNames = 'flex flex-wrap gap-x-4 gap-y-4 justify-center lg:justify-start',
  Icon,
  type = 'agent',
  usePlaceholder = true,
  isPublicAgent = false,
  setCreateProjectOpen,
  isLoading,
  onClick,
}) => {
  return (
    <>
      {!isLoading && type === 'project' && itemsToShow.length === 0 && (
        <div className="flex flex-col items-center justify-center md:hidden">
          <h1 className="mt-4 text-2xl font-bold">No Projects Found</h1>
          <p className="mt-2 text-sm text-center">
            Create a new project to get started
          </p>
        </div>
      )}
      {!isLoading && type === 'agent' && itemsToShow.length === 0 && (
        <div className="flex flex-col items-center justify-center md:hidden">
          <h1 className="mt-4 text-2xl font-bold">No Agents Found</h1>
          <p className="mt-2 text-sm text-center">
            Create a new agent to get started
          </p>
        </div>
      )}
      {isLoading && (
        <div className="flex flex-col items-center justify-center">
          <span className="inset-0 w-10 mx-auto top-4 loading loading-dots text-secondary-highlight " />
        </div>
      )}
      <div className={clsx('relative pb-10', gridClassNames)}>
        {usePlaceholder && Icon && (
          <PlaceholderCard
            text={placeholderText}
            link="/templates"
            type={type === 'agent' ? 'link' : 'button'}
            action={() => setCreateProjectOpen && setCreateProjectOpen(true)}
            Icon={Icon}
            classNames={placeholderClassNames}
          />
        )}

        {itemsToShow &&
          itemsToShow.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              name={project.name ?? 'Untitled'}
              image={
                project.image
                  ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${project.image}`
                  : defaultImage(project.id)
              }
              description={project?.description ?? ''}
            />
          ))}
      </div>
    </>
  )
}

type MagickCardProps = {
  Icon: React.FC<any>
  classNames?: string
  text?: string
  type?: 'link' | 'button'
  action?: () => void
  link?: string
}

const baseStyles =
  'color-transition bg-transparent border-2 border-dashed rounded-lg border-black/50 dark:border-white/50 hover:border-secondary-highlight dark:hover:border-secondary-highlight'

const PlaceholderCard = ({
  Icon,
  classNames,
  text = 'Empty state',
  type = 'button',
  action = () => {},
  link = 'cloud.magickml.com',
}: MagickCardProps) => {
  return type === 'button' ? (
    <button
      type="button"
      onClick={action}
      className={clsx('relative block text-center', baseStyles, classNames)}
    >
      <EmptyStateContent Icon={Icon} text={text} />
    </button>
  ) : (
    <Link
      href={link}
      className={clsx(
        'my-auto flex flex-col justify-center relative text-center',
        baseStyles,
        classNames
      )}
    >
      <EmptyStateContent Icon={Icon} text={text} />
    </Link>
  )
}

type EmptyStateContentProps = {
  Icon: React.FC<any>
  text?: string
}

const EmptyStateContent = ({ Icon, text }: EmptyStateContentProps) => {
  return (
    <>
      <Icon className="w-12 h-12 mx-auto text-[#18181d] dark:text-[#BADDE4] color-transition" />

      <span className="block mt-2 text-sm font-semibold text-black dark:text-white color-transition">
        {text}
      </span>
    </>
  )
}
