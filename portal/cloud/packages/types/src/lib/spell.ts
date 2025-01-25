export interface NodeData {
  /** Indicates if the node data is public. */
  isPublic?: boolean
  /** The name of the node. */
  name?: string
  /** Fewshot data. */
  fewshot?: string
  /** Variable value which can be string or boolean. */
  _var?: string | boolean
  /** Success state of the node. */
  success?: boolean
  /** Key for the socket. */
  socketKey?: string
  /** Error state of the node. */
  error?: boolean
  /** Indicates if the node is an output. */
  isOutput?: boolean
  /** Type of the output. */
  outputType?: string
  /** Indicates if the node should be sent to playtest. */
  sendToPlaytest?: boolean
}

export interface Node {
  /** The identifier for the node. */
  id: number
  /** Data associated with the node. */
  data: NodeData
}

export interface Graph {
  /** Collection of nodes indexed by their id. */
  nodes: Record<number, Node>
}

export interface JSONStructure {
  /** Represents the graph structure. */
  graph: Graph
}

export type VarType = 'string' | 'text' | 'boolean'

export type NodeDataWithType = NodeData & {
  /** The type of the variable (string/text/boolean). */
  type: VarType
  id: number
  /** Value if the type is boolean. */
  boolValue?: boolean
  /** Value if the type is string or text. */
  stringValue?: string
  value: any
}

export type AllNodesData = {
  [id: string]: NodeDataWithType
}
