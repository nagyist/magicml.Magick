import { TemplatePage } from '@magickml/pages-template'
import {
  parseParams,
  TemplateGetStaticProps,
} from '@magickml/pages-template/server'
import { siteConfig } from '@magickml/portal-config'
import { prismaPortal } from '@magickml/portal-db'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { getImage, ImageType } from '@magickml/utils'

const Template = async ({
  params,
}: {
  params: { templateId: string; version?: string }
}) => {
  const parsedParams = parseParams(params)

  if (!parsedParams) {
    notFound()
  }

  const template = await prismaPortal.template.findFirst({
    where: {
      id: parsedParams.id,
      public: true,
    },
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      createdAt: true,
      updatedAt: true,
      usageCount: true,
      userId: true,
      templateVersions: parsedParams.version
        ? {
            where: {
              version: parsedParams.version,
            },
            select: {
              id: true,
              version: true,
              spells: true,
              createdAt: true,
              updatedAt: true,
              metadata: true,
            },
          }
        : {
            orderBy: {
              version: 'desc',
            },
            take: 1,
            select: {
              id: true,
              spells: true,
              version: true,
              createdAt: true,
              updatedAt: true,
              metadata: true,
            },
          },
    },
  })

  if (!template) {
    notFound()
  }

  const returnTemplate: TemplateGetStaticProps['template'] = {
    ...template,
    createdAt: template?.createdAt?.toISOString() ?? '',
    updatedAt: template?.updatedAt?.toISOString() ?? '',
    // @ts-ignore
    templateVersions: template.templateVersions.map(version => ({
      ...version,
      createdAt: version.createdAt.toISOString(),
      updatedAt: version.updatedAt.toISOString(),
    })),
  }

  return <TemplatePage template={returnTemplate} />
}

export default Template

export const dynamicParams = true

type TemplateMetadata = {
  params: { templateId: string; version?: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: TemplateMetadata,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parsedParams = parseParams(params)

  if (!parsedParams) {
    notFound()
  }

  // get the template
  const template = await prismaPortal.template.findFirst({
    where: {
      id: parsedParams.id,
      public: true,
    },
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      templateVersions: parsedParams.version
        ? {
            where: {
              version: parsedParams.version,
            },
            select: {
              id: true,
              version: true,
            },
          }
        : {
            orderBy: {
              version: 'desc',
            },
            take: 1,
            select: {
              id: true,
              metadata: true,
              version: true,
              spells: true,
              createdAt: true,
              updatedAt: true,
            },
          },
    },
  })

  const img = getImage({
    id: template?.id || '0',
    image: template?.image,
    type: ImageType.IMAGE,
  })

  return {
    title: `${template?.name || 'Create with Magick'}`,
    metadataBase: new URL(siteConfig.url),
    description: template?.description || siteConfig.description,
    keywords: [
      // TODO: add template metadata
      'MagickML',
      'Magick',
      'AI',
      'Artificial Intelligence',
      'AI Agents',
      'Low Code',
      'No Code AI',
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'AI Models',
      'Oneirocom',
    ],
    // authors: [ // maybe we can use this for user created content?
    //   {
    //     name: 'shadcn',
    //     url: 'https://shadcn.com',
    //   },
    // ],
    // creator: 'Oneirocom',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: `${template?.name || 'Create with Magick'}`,
      description: template?.description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: img,
          width: 630,
          height: 630,
          alt: template?.name || 'Create with Magick',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${template?.name || 'Agent Template'} - ${siteConfig.name}`,
      description: `${template?.description || siteConfig.description} - ${
        siteConfig.name
      }`,
      images: [img],
      site: '@MagickML',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
  }
}
