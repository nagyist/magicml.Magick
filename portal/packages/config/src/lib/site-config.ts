export const siteConfig = {
  name: 'MagickML',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://beta.magickml.com',
  ogImage: 'https://beta.magickml.com/og.jpg',
  description: '',
  links: {
    twitter: 'https://twitter.com/MagickML',
    github: 'https://github.com/oneirocom/magick',
  },
}

export type SiteConfig = typeof siteConfig
