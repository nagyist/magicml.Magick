import { type Prisma } from '@magickml/portal-db'
import slackDiscordSpell from './slack.spell.json'
import discordSpell from './discord.spell.json'
import { generateSpellMetadata } from '../../utils/metadata'

export const slackDiscordTemplate: Prisma.TemplateCreateInput = {
  id: 'slack-discord',
  name: 'Slack and Discord',
  description:
    'A template setup for basic Slack and Discord messaging.  Great place to start to learn how to connect you agent to platforms.',
  templateVersions: {
    create: [
      {
        version: 1,
        spells: [slackDiscordSpell, discordSpell],
        metadata: generateSpellMetadata([slackDiscordSpell, discordSpell]),
      },
    ],
  },

  type: 'OFFICIAL',
  public: true,
}
