'@ts-nocheck'

import { PrismaClient } from '../../../db/src/lib/prisma/client-portal'
import * as templates from './templates'

export const baseTemplates = Object.values(templates)

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding templates...')
  for (const t of baseTemplates) {
    const { id, name } = t
    // We can update this to just make a new version instead of skip,
    // but I don't think we will need to use this beyond local deving now
    const existingTemplate = await prisma.template.findUnique({
      where: { id },
    })

    if (existingTemplate) {
      console.log(`Template ${id}: ${name} already exists, skipping...`)
      continue
    }

    // @ts-ignore
    await prisma.template.create({ data: t })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
