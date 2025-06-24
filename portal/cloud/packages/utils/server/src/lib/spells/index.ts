import {
  JSONStructure,
  // PublicVariable
} from '@magickml/portal-types'
import md5 from 'md5'
import { v4 as uuidv4 } from 'uuid'

export const createSpell = async (
  token: string | null,
  input: {
    projectId: string
    name: string
    spellData: JSONStructure
    // publicVariables: PublicVariable[]
  }
) => {
  const graphData = input.spellData.graph
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/spells?projectId=${input.projectId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: `${input.name}-Spell`,
        projectId: input.projectId,
        graph: graphData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        hash: md5(JSON.stringify(graphData.nodes)),
        id: uuidv4(),
      }),
    }
  )

  const data = await response.json()

  return data
}
