import { AllNodesData, Graph, Node, NodeDataWithType } from '@magickml/portal-types'

/**
 * Extracts public variables from a given JSON structure.
 *
 * @param json - The JSON structure containing nodes with public variable data.
 * @returns An array of node data with type annotations (string, text, or boolean).
 */
export function extractPublicVariablesV2(graph: Graph): AllNodesData {
  const nodes = Object.values(graph.nodes) as Node[]

  return nodes
    .filter(node => node.data?.isPublic)
    .map(node => mapNodeDataToType(node))
    .reduce((acc, cur) => {
      acc[cur.id] = cur
      return acc
    }, {} as AllNodesData)
}

/**
 * Maps the node data to its corresponding type.
 *
 * @param data - Node data to be mapped to its type.
 * @returns Mapped node data with its type.
 */
function mapNodeDataToType(node: Node): NodeDataWithType {
  if (node.data.fewshot) {
    return {
      ...node.data,
      type: 'text',
      stringValue: node.data.fewshot,
      value: node.data.fewshot,
      id: node.id,
    }
  }
  if (isBoolean(node.data._var)) {
    return {
      ...node.data,
      type: 'boolean',
      boolValue: node.data._var,
      value: node.data._var,
      id: node?.id,
    }
  }
  return {
    ...node.data,
    type: 'string',
    stringValue: String(node.data._var),
    value: String(node.data._var),
    id: node.id,
  }
}

/**
 * Type guard to verify if a value is boolean.
 *
 * @param value - Value to be checked for its type.
 * @returns True if the value is of boolean type, false otherwise.
 */
function isBoolean(value: string | boolean | undefined): value is boolean {
  return typeof value === 'boolean'
}

export function extractAgentData(data: Record<string, unknown>, key: string) {
  if (data[key]) {
    return data[key] as string
  }
  return null
}
