import { prismaPortal } from '@magickml/portal-db'

/**
 * Increments the usage count of a template by 1.
 * 
 * @param templateId - The ID of the template to increment the usage count for.
 * @returns The updated template with the incremented usage count.
 */
export const incrementTemplateUsage = async (templateId: string) => {
  return prismaPortal.template.update({
    where: {
      id: templateId,
    },
    data: {
      usageCount: {
        increment: 1,
      },
    },
  })
}