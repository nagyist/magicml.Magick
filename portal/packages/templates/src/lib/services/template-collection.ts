import { prismaPortal } from '@magickml/portal-db'
import { getTemplateVersion } from './template-version'

/**
 * Represents the input data for creating a template collection.
 */
export interface CreateTemplateCollectionInput {
  name: string
  description?: string
  templates: {
    templateId: string
    version: number
  }[]
}

/**
 * Creates a new template collection with the provided input data.
 *
 * @param input - The input data for creating the template collection.
 * @returns The created template collection.
 * @throws Error if a specified template version is not found.
 */
export const createTemplateCollection = async (
  input: CreateTemplateCollectionInput
) => {
  const { name, description, templates } = input

  const templateData = await Promise.all(
    templates.map(async ({ templateId, version }) => {
      const templateVersion = await getTemplateVersion(templateId, version)
      if (!templateVersion) {
        throw new Error(`Template version not found: ${templateId} v${version}`)
      }
      return {
        templateId,
        version,
        spells: templateVersion.spells,
      }
    })
  )

  return prismaPortal.templateCollection.create({
    data: {
      name,
      description,
      templates: JSON.stringify(templateData),
    },
  })
}

/**
 * Retrieves a template collection by its ID.
 *
 * @param collectionId - The ID of the template collection to retrieve.
 * @returns The template collection with detailed template information.
 * @throws Error if the template collection is not found.
 */
export const getTemplateCollection = async (collectionId: string) => {
  const collection = await prismaPortal.templateCollection.findUnique({
    where: { id: collectionId },
  })

  if (!collection) {
    throw new Error('Template collection not found')
  }

  const templateData = collection.templates as {
    templateId: string
    version: number
    spells: string[]
  }[]

  const templatesWithDetails = await Promise.all(
    templateData.map(async ({ templateId, version, spells }) => {
      const template = await prismaPortal.template.findUnique({
        where: { id: templateId },
      })
      return {
        ...template,
        version,
        spells,
      }
    })
  )

  return {
    ...collection,
    templates: templatesWithDetails,
  }
}
