import { prismaPortal } from '@magickml/portal-db'
import type { GetStaticProps } from 'next'
import { z } from 'zod'

const idSchema = z.string().nonempty()
const versionSchema = z.number().optional()

interface ParseParamsSuccessOutput {
  id: z.infer<typeof idSchema>
  version?: z.infer<typeof versionSchema>
}

type ParseParamsInput = Parameters<GetStaticProps>['0']['params']

export const parseParams = (
  params: ParseParamsInput
): ParseParamsSuccessOutput | false => {
  const templateId = idSchema.safeParse(params?.templateId)
  const version = versionSchema.safeParse(parseInt(params?.version as string))

  return templateId.success
    ? {
        id: templateId.data,
        version: version.success ? version.data : undefined,
      }
    : false
}

export const templatesGetStaticProps: GetStaticProps = async ({ params }) => {
  const parsedParams = parseParams(params)

  if (!parsedParams) {
    return {
      notFound: true,
    }
  }

  const template = await prismaPortal.template.findFirst({
    where: {
      id: parsedParams.id,
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
              version: true,
              spells: true,
              createdAt: true,
              updatedAt: true,
              metadata: true,
            },
          },
    },
  })

  if (!template) {
    return {
      redirect: {
        destination: '/templates',
        permanent: false,
      },
    }
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

  return {
    props: {
      template: returnTemplate,
    },
    revalidate: 600, // Revalidate every 10 minutes (600 seconds)
    // TODO: change to revalidate based on the version
  }
}

export type TemplateGetStaticProps = {
  template: {
    id: string
    name: string
    image: string
    description: string
    createdAt: string
    updatedAt: string
    usageCount: number
    userId: string | null
    templateVersions: {
      id: string
      version: number
      spells: string[]
      createdAt: string
      updatedAt: string
      metadata: Record<string, any>
    }[]
  }
}

export async function templatesGetStaticPaths() {
  // Fetch the templates of type "OFFICIAL"
  const officialTemplates = await prismaPortal.template.findMany({
    where: {
      type: 'OFFICIAL',
      public: true,
    },
    select: {
      id: true,
    },
  })

  // Generate paths for the official templates
  const officialPaths = officialTemplates.map(template => ({
    params: { templateId: template.id },
  }))

  // Fetch the templates of type "COMMUNITY"
  const communityTemplates = await prismaPortal.template.findMany({
    where: {
      type: 'COMMUNITY',
      public: true,
    },
    select: {
      id: true,
    },
  })

  // Generate paths for the community templates
  const communityPaths = communityTemplates.map(template => ({
    params: { templateId: template.id },
  }))

  const paths = [...officialPaths, ...communityPaths]

  // This will pre-render all public OFFICIAL and COMMUNITY type templates at build time
  // For templates not available yet/private, we set fallback: 'blocking' to generate them on-demand
  return { paths, fallback: 'blocking' }
}
