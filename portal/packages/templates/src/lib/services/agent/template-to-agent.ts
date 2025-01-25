import { makeClient } from 'ideClient'
import { ideServerUrl } from '../../constants'
import { v4 } from 'uuid'
import { incrementTemplateUsage } from '../template-usage'
import { getTemplateVersion } from '../template-version'
import { prismaPortal } from '@magickml/portal-db'

/**
 * Represents the input data for creating a project from a template.
 */
interface CreateFromTemplateInput {
  projectName: string
  agentName: string
  templateId: string
  owner: string
}

/**
 * Creates a new project from a template with the provided input data.
 *
 * @param input - The input data for creating the project.
 * @returns An object containing the ID of the created project.
 * @throws Error if the specified template or template version is not found.
 */
export const createFromTemplate = async (input: CreateFromTemplateInput) => {
  const { projectName, agentName, templateId, owner } = input

  const template = await prismaPortal.template.findUnique({
    where: { id: templateId },
  })

  if (!template) {
    throw new Error('Template not found')
  }

  const project = await prismaPortal.project.create({
    data: {
      name: projectName,
      description: `project for ${agentName}`,
      owner,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  })

  const app = makeClient(ideServerUrl)

  await app.service('projects').create({
    name: projectName,
    projectId: project.id,
  })

  const latestTemplateVersion = await getTemplateVersion(templateId, 'latest')

  if (!latestTemplateVersion) {
    throw new Error('No template version found')
  }

  const templateSpells = latestTemplateVersion.spells

  let i = 1
  for (const tspell of templateSpells as any[]) {
    const graph =
      'graph' in tspell
        ? tspell.graph
        : { nodes: [], variables: [], customEvents: [] }

    const name = 'name' in tspell ? tspell.name : `Spell ${i}`

    const input = {
      id: v4(),
      projectId: project.id,
      name,
      graph,
      type: 'behave',
    }

    await app.service('spells').create(input)
    i++
  }

  await incrementTemplateUsage(templateId)

  return {
    project: project.id,
  }
}
