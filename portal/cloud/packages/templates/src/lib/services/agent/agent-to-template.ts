import { prismaCore } from '@magickml/server-db'
import { prismaPortal, type Prisma, TemplateType } from '@magickml/portal-db'
import { generateSpellMetadata } from '../../utils/metadata'

/**
 * Represents the input data for creating a template from an agent.
 */
export interface CreateFromAgentInput {
  name: string
  agentId: string
  id?: string
  image?: string
  description?: string
  userId?: string
  type?: TemplateType
  public?: boolean
}

/**
 * Creates a new template from an agent with the provided input data.
 *
 * @param input - The input data for creating the template.
 * @returns The created template.
 * @throws Error if the specified agent is not found.
 */
export const createFromAgent = async (input: CreateFromAgentInput) => {
  const agent = await prismaCore.agents.findUnique({
    where: { id: input.agentId, isDraft: false },
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

  const template: Prisma.TemplateCreateInput = {
    id: input.id,
    name: input.name,
    description: input.description,
    image: input.image,
    userId: input.userId,
    type: input.type || TemplateType.COMMUNITY,
    public: input.public || false,
    ogAgentId: input.agentId,
    templateVersions: {
      create: [
        {
          version: 1,
          spells,
          metadata: generateSpellMetadata(spells),
        },
      ],
    },
  }

  return prismaPortal.template.create({ data: template })
}
