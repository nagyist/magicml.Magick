import { prismaPortal } from '@magickml/portal-db'
import { type Prisma } from '@magickml/portal-db'

/**
 * Creates a new template in the database.
 *
 * @param template - The template data to create.
 * @returns The created template.
 */
export const createTemplate = async (template: Prisma.TemplateCreateInput) => {
  return prismaPortal.template.create({ data: template })
}

/**
 * Removes a template from the database by marking it as deleted.
 *
 * @param templateId - The ID of the template to remove.
 * @throws Error if the template is not found.
 */
export const removeTemplate = async (templateId: string) => {
  const template = await prismaPortal.template.findUnique({
    where: { id: templateId },
  })

  if (!template) {
    throw new Error('Template not found')
  }

  await prismaPortal.template.update({
    where: { id: templateId },
    data: { deletedAt: new Date() },
  })
}

/**
 * Rates a template or updates an existing rating.
 *
 * @param templateId - The ID of the template to rate.
 * @param userId - The ID of the user rating the template.
 * @param rating - The rating value.
 * @returns The created or updated rating.
 */
export const rateTemplate = async (
  templateId: string,
  userId: string,
  rating: number
) => {
  const existingRating = await prismaPortal.templateRating.findUnique({
    where: {
      templateId_userId: {
        templateId,
        userId,
      },
    },
  })

  if (existingRating) {
    return prismaPortal.templateRating.update({
      where: {
        id: existingRating.id,
      },
      data: {
        rating,
        updatedAt: new Date(),
      },
    })
  } else {
    return prismaPortal.templateRating.create({
      data: {
        templateId,
        userId,
        rating,
      },
    })
  }
}

/**
 * Retrieves the average rating and total number of ratings for a template.
 *
 * @param templateId - The ID of the template to get the rating for.
 * @returns An object containing the average rating and total number of ratings.
 */
export const getTemplateRating = async (templateId: string) => {
  const ratings = await prismaPortal.templateRating.findMany({
    where: {
      templateId,
    },
  })

  const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0)
  const averageRating = ratings.length > 0 ? totalRating / ratings.length : 0

  return {
    averageRating,
    totalRatings: ratings.length,
  }
}
