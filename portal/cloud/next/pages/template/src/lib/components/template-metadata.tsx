'use client'
import { ImageType } from '@magickml/portal-utils-shared'
import { getImage } from '@magickml/pages-shared'
import type { TemplateGetStaticProps } from '../template-page-isr'
import { Avatar, AvatarImage, cn } from '@magickml/client-ui'
import { TempateMetadataItemItem } from './template-metadata-item'
import { WizardHatIcon, MagickWandIcon, CrystalBallIcon } from '../icons'
import {
  Psychology,
  Update,
  PlayArrow,
  //  Favorite
} from '@mui/icons-material'
import { api } from '@magickml/portal-server-provider'

interface TemplateMetadataProps extends React.HTMLAttributes<HTMLDivElement> {
  template: TemplateGetStaticProps['template']
}

export const TemplateMetadata: React.FC<TemplateMetadataProps> = ({
  template,
  className,
  ...props
}) => {
  const metadata = template?.templateVersions?.[0].metadata as Record<
    string,
    any
  >
  const models = (metadata?.models as string[]) ?? []

  const { data: creator, isFetching } = api.profiles.find.useQuery(
    { id: template?.userId ?? '' },
    {
      enabled: !!template?.userId,
    }
  )

  return (
    <div className={cn('inline-flex flex-col w-full', className)} {...props}>
      {/* Built By */}
      <TempateMetadataItemItem title="Built By" Icon={WizardHatIcon}>
        <div className="inline-flex w-full items-center justify-start gap-x-1">
          {isFetching ? (
            <span className="loading loading-xs loading-dots " />
          ) : (
            <>
              <Avatar className="w-8 h-8 items-start justify-start">
                <AvatarImage
                  className="h-full w-full rounded-full"
                  alt="Magick"
                  src={
                    creator?.imageUrl
                      ? creator.imageUrl
                      : getImage({
                          id: template?.id ?? '1',
                          image: template?.image ?? '',
                          type: ImageType.IMAGE,
                        })
                  }
                />
              </Avatar>
              <span className="text-ds-primary-p dark:text-ds-primary-m  font-medium">
                {creator?.username ?? 'n/a'}
              </span>
            </>
          )}
        </div>
      </TempateMetadataItemItem>

      {/* Template Uses */}
      <TempateMetadataItemItem title="Template Uses" Icon={PlayArrow}>
        <p className="text-white text-base font-medium">
          {template?.usageCount ?? 'n/a'}
        </p>
      </TempateMetadataItemItem>

      {/* Likes */}
      {/* <TempateMetadataItemItem title="Likes" Icon={Favorite}>
        <p className="text-white text-base font-medium">7</p>
      </TempateMetadataItemItem> */}

      {/* Current Version */}
      <TempateMetadataItemItem title="Current Version" Icon={Psychology}>
        <p className="font-medium">
          {`Version ${template?.templateVersions?.[0].version ?? '1'}`}
        </p>
      </TempateMetadataItemItem>

      {/* Created */}
      <TempateMetadataItemItem title="Created" Icon={MagickWandIcon}>
        <p className="font-medium">
          {new Date(template?.createdAt ?? '').toLocaleDateString()}
        </p>
      </TempateMetadataItemItem>

      {/* Last Updated */}
      <TempateMetadataItemItem title="Last Updated" Icon={Update}>
        <p className="font-medium">
          {new Date(template?.updatedAt ?? '').toLocaleDateString()}
        </p>
      </TempateMetadataItemItem>

      {/* Models Used */}
      <TempateMetadataItemItem
        title="Models Used"
        Icon={CrystalBallIcon}
        className="flex flex-col items-start justify-start gap-y-2 w-full border-none"
        constainerProps={{
          className: cn('w-full flex flex-row-wrap'),
        }}
      >
        {models.map(model => (
          <div className="inline-flex gap-x-1 basis-1/2" key={model}>
            {/* There is no current sane way to get a provider from a model name */}
            {/* TODO: add to servicesShared  */}
            {/* <Avatar key={model} className="w-8 h-8 items-start justify-start">
              <AvatarImage
                className="h-full w-full rounded-full"
                alt={model}
                src={getImage({
                  id: template?.id ?? '1',
                  image: template?.image ?? '',
                  type: ImageType.IMAGE,
                })}
              />
            </Avatar>
            <span>Model Org</span> */}

            <span className="text-xs">{model}</span>
          </div>
        ))}
      </TempateMetadataItemItem>
    </div>
  )
}
