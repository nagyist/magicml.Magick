//@ts-check

// @ts-expect-error workaround for prisma plugin
const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next')

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: true,
  },
  experimental: {
    instrumentationHook: false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'replicate.delivery' },
      { protocol: 'https', hostname: 'emawtpjmqvwygksvurku.supabase.co' },
      { protocol: 'https', hostname: 'lglrzlrsfxchbqsslvur.supabase.co' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      {
        protocol: 'https',
        hostname: 'pub-58d22deb43dc48e792b7b7468610b5f9.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'directus-production-1d52.up.railway.app',
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
  transpilePackages: ['@magickml/behave-graph'],
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/@magickml\/behave-graph/,
      type: 'javascript/auto',
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    })

    config.experiments = {
      layers: true,
    }

    return config
  },
}

module.exports = composePlugins(withNx)(nextConfig)
