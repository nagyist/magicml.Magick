import { type Prisma } from '@magickml/portal-db'
import blankSpell from './blank.spell.json'
import { generateSpellMetadata } from '../../utils/metadata'

export const blankTemplate: Prisma.TemplateCreateInput = {
  id: 'blank',
  name: 'Blank Template',
  description:
    'A totally empty agent.  This is a great place to start if you want to build an agent from scratch.',
  templateVersions: {
    create: [
      {
        version: 1,
        spells: [blankSpell],
        metadata: generateSpellMetadata([blankSpell]),
      },
    ],
  },
  type: 'OFFICIAL',
  public: true,
  
}
