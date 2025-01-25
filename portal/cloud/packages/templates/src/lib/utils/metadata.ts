import { Prisma } from '@magickml/portal-db'

/**
 * Generates metadata from an array of spell JSON objects.
 * @param spells - The array of spell JSON objects to extract metadata from.
 * @returns The extracted spell metadata.
 */
export function generateSpellMetadata(
  spells: any[]
): Prisma.InputJsonValue | undefined {
  const models: string[] = []
  let discord = false
  let slack = false
  let knowledge = false

  /**
   * Traverses the nodes recursively and extracts relevant metadata.
   * @param nodes - The nodes to traverse.
   */
  function traverseNodes(nodes: any[]): void {
    for (const node of nodes) {
      if (!node) {
        continue
      }
      if (node.type === 'magick/generateText' && node.configuration.model) {
        models.push(node.configuration.model)
      } else if (
        node.type === 'discord/sendMessage' ||
        node.type === 'discord/onMessage'
      ) {
        discord = true
      } else if (
        node.type === 'slack/sendMessage' ||
        node.type === 'slack/onMessage'
      ) {
        slack = true
      } else if (node.type.startsWith('action/knowledge/')) {
        knowledge = true
      }

      if (node.flows) {
        for (const flow of Object.values(node.flows) as any[]) {
          if (flow.nodeId) {
            const childNode = nodes.find(n => n.id === flow.nodeId)
            if (childNode) {
              traverseNodes([childNode])
            }
          }
        }
      }
    }
  }

  for (const spell of spells) {
    traverseNodes(spell.graph.nodes)
  }

  return {
    models: Array.from(new Set(models)),
    discord,
    slack,
    knowledge,
  }
}
