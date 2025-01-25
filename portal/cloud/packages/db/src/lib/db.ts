import { PrismaClient } from './prisma/client-portal'

export * from './prisma/client-portal'

const globalForPrismaPortal = globalThis as { prismaPortal?: PrismaClient }

export const prismaPortal =
  globalForPrismaPortal.prismaPortal ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })

if (process.env.NODE_ENV !== 'production')
  globalForPrismaPortal.prismaPortal = prismaPortal
