'@ts-nocheck'

import { PrismaClient } from '../db'

const prisma = new PrismaClient()

const USER_ID = 'user_2cmxaOcCiIKp63xSxTM9LaWXDM4'
const WORLD_ID = '7294d268-6e8e-41be-a179-fd3f7650f9b0'

async function main() {
  console.log('Seeding project...')
  const existingSeedProject = await prisma.project.findUnique({
    where: {
      id: WORLD_ID,
    },
  })

  if (existingSeedProject) {
    console.log('Seed Project already exists, skipping...')
    return
  }

  const project = await prisma.project.create({
    data: {
      id: WORLD_ID,
      name: 'Seed Project',
      description: 'This is the first project',
      owner: USER_ID,
    },
  })

  console.log('Seed Project created:', project.id)
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
