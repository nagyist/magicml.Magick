import { NextApiRequest, NextApiResponse } from 'next'
import { prismaPortal } from '@magickml/portal-db'
import { parseParams } from '@magickml/pages-template/server'
import { siteConfig } from '@magickml/portal-config'
import { getImage, ImageType } from '@magickml/utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req
  const parsedParams = parseParams(query)

  if (!parsedParams) {
    res.status(404).end()
    return
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
    },
  })

  if (!template) {
    res.status(404).end()
    return
  }

  const img = getImage({
    id: template.id || '0',
    image: template.image,
    type: ImageType.IMAGE,
  })

  const metadata = {
    title: `${template.name || 'Create with Magick'}`,
    description: template.description || siteConfig.description,
    openGraph: {
      type: 'website',
      title: `${template.name || 'Create with Magick'}`,
      description: template.description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: img,
          width: 630,
          height: 630,
          alt: template.name || 'Create with Magick',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${template.name || 'Agent Template'} - ${siteConfig.name}`,
      description: `${template.description || siteConfig.description}`,
      images: [img],
      site: '@MagickML',
    },
  }

  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${metadata.title}</title>
      <meta name="description" content="${metadata.description}">
      <meta property="og:type" content="${metadata.openGraph.type}">
      <meta property="og:title" content="${metadata.openGraph.title}">
      <meta property="og:description" content="${metadata.openGraph.description}">
      <meta property="og:site_name" content="${metadata.openGraph.siteName}">
      <meta property="og:image" content="${metadata.openGraph.images[0].url}">
      <meta property="og:image:width" content="${metadata.openGraph.images[0].width}">
      <meta property="og:image:height" content="${metadata.openGraph.images[0].height}">
      <meta name="twitter:card" content="${metadata.twitter.card}">
      <meta name="twitter:title" content="${metadata.twitter.title}">
      <meta name="twitter:description" content="${metadata.twitter.description}">
      <meta name="twitter:image" content="${metadata.twitter.images[0]}">
      <meta name="twitter:site" content="${metadata.twitter.site}">
    </head>
    <body></body>
    </html>
  `)
}
