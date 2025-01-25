import type { Meta, StoryObj } from '@storybook/react'

import { ReadOnlyFlow } from '@magickml/flow-core'
import { getRawNodeSpec } from '@magickml/node-spec'
import { useRef } from 'react'
import { SpellInterfaceWithGraph } from '@magickml/agent-server-schemas'
/**
 * A vertically stacked set of interactive headings that each reveal a section
 * of content.
 */

const spec = getRawNodeSpec()

// get all node names for argument options
const nodeNames = spec.map(node => node.type)

const baseSpell: Omit<SpellInterfaceWithGraph, 'graph'> = {
  id: 'story-spell',
  name: 'story-spell',
  projectId: 'xxx',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

const baseGraph: SpellInterfaceWithGraph['graph'] = {
  id: 'test',
  nodes: [],
  variables: [],
  values: [],
}

const baseNode: Omit<
  SpellInterfaceWithGraph['graph']['nodes'][0],
  'id' | 'type'
> = {
  metadata: {
    positionX: '288.3926399999998',
    positionY: '300.1126400000001',
  },
}

const makeSpell = (node: string) => {
  return {
    ...baseSpell,
    graph: {
      ...baseGraph,
      nodes: [
        {
          ...baseNode,
          type: node,
          id: node,
        },
      ],
    },
  }
}

const meta = {
  title: 'nodes/node',
  component: ReadOnlyFlow,
  tags: ['autodocs'],
  argTypes: {
    node: {
      options: nodeNames.sort(),
      control: { type: 'select' },
      defaultValue: nodeNames.sort()[0],
    },
  },

  render: args => {
    const parentRef = useRef<HTMLDivElement>(null)
    return (
      <div className="min-h-[500px] w-full" ref={parentRef}>
        {/* <div className="text-black">{JSON.stringify(args)}</div> */}
        <ReadOnlyFlow
          windowDimensions={{ width: 1280, height: 400 }}
          parentRef={parentRef}
          spell={makeSpell(args?.node || nodeNames[0])}
        />
      </div>
    )
  },
} satisfies Meta<any>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default behavior of the accordion allows only one item to be open.
 */
export const Default: Story = {} as Story
