import { prismaPortal } from '@magickml/portal-db'
import { prismaCore } from '@magickml/server-db'
import { generateSpellMetadata } from '../utils/metadata'

interface UpdateTemplateVersionInput {
  templateId: string
  ogAgentId: string
}
/**
 * Updates the version of a template by creating a new version with the provided spells.
 *
 * @param templateId - The ID of the template to update.
 * @param ogAgentId - The ID of the agent the template was created from.
 * @returns The newly created template version.
 */
export const updateTemplateVersion = async ({
  templateId,
  ogAgentId,
}: UpdateTemplateVersionInput) => {
  const agent = await prismaCore.agents.findUnique({
    where: { id: ogAgentId, isDraft: false },
    select: {
      currentSpellReleaseId: true,
    },
  })

  if (!agent) {
    throw new Error('Agent not found')
  }

  if (!agent.currentSpellReleaseId) {
    throw new Error(
      'You cannot create a template from an agent without a spell release'
    )
  }

  const release = await prismaCore.spellReleases.findUnique({
    where: {
      id: agent.currentSpellReleaseId,
    },
    select: {
      spells: true,
    },
  })

  if (!release) {
    throw new Error(
      'You cannot create a template from an agent without a spell release'
    )
  }

  const spells = release.spells

  const currentVersion = await prismaPortal.templateVersion.findFirst({
    where: { templateId },
    orderBy: { version: 'desc' },
  })

  const newVersion = (currentVersion?.version || 0) + 1

  return prismaPortal.templateVersion.create({
    data: {
      templateId,
      version: newVersion,
      spells,
      metadata: generateSpellMetadata(spells),
    },
  })
}

/**
 * Retrieves a specific version of a template or the latest version if 'latest' is provided.
 *
 * @param templateId - The ID of the template.
 * @param version - The version number to retrieve or 'latest' for the most recent version.
 * @returns The requested template version or null if not found.
 */
export const getTemplateVersion = async (
  templateId: string,
  version: number | 'latest'
) => {
  if (version === 'latest') {
    return prismaPortal.templateVersion.findFirst({
      where: { templateId },
      orderBy: { version: 'desc' },
    })
  }

  return prismaPortal.templateVersion.findUnique({
    where: {
      templateId_version: {
        templateId,
        version,
      },
    },
  })
}
