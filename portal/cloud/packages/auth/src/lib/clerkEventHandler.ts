import { clerkClient } from '@clerk/nextjs/server'
import {
  WebhookEvent,
  WebhookEventType,
  UserWebhookEvent,
  SessionWebhookEvent,
  EmailWebhookEvent,
  SMSWebhookEvent,
  OrganizationWebhookEvent,
  OrganizationMembershipWebhookEvent,
  OrganizationInvitationWebhookEvent,
  UserJSON,
} from '@clerk/nextjs/server'
import { stripeService } from '@magickml/portal-billing'
import { Roles } from '@magickml/portal-config'
import { PortalSubscriptions } from '@magickml/portal-utils-shared'
import { prismaPortal } from '@magickml/portal-db'
import { prismaCore } from '@magickml/server-db'
import { makeClient } from 'ideClient'
import { PortalBot } from '@magickml/server-event-tracker'

const ideServerUrl = process.env.IDE_SERVER_URL || 'http://localhost:3030'

const app = makeClient(ideServerUrl)

export class ClerkEventService {
  private bot: PortalBot = new PortalBot(
    process.env.CLERK_WEBHOOK_LOGGING === 'true',
    typeof process.env.PORTAL_BOT_URL === 'string'
  )

  async handleEvent(event: WebhookEvent) {
    const eventType: WebhookEventType = event.type
    switch (eventType) {
      case 'user.created':
        await this.handleUserCreated(event as UserWebhookEvent)
        break
      case 'user.updated':
        await this.handleUserUpdated(event as UserWebhookEvent)
        break
      case 'user.deleted':
        await this.handleUserDeleted(event as UserWebhookEvent)
        break
      case 'session.created':
        await this.handleSessionCreated(event as SessionWebhookEvent)
        break
      case 'session.ended':
        await this.handleSessionEnded(event as SessionWebhookEvent)
        break
      case 'session.removed':
        await this.handleSessionRemoved(event as SessionWebhookEvent)
        break
      case 'session.revoked':
        await this.handleSessionRevoked(event as SessionWebhookEvent)
        break
      case 'email.created':
        await this.handleEmailCreated(event as EmailWebhookEvent)
        break
      case 'organization.created':
        await this.handleOrganizationCreated(event as OrganizationWebhookEvent)
        break
      case 'organization.updated':
        await this.handleOrganizationUpdated(event as OrganizationWebhookEvent)
        break
      case 'organization.deleted':
        await this.handleOrganizationDeleted(event as OrganizationWebhookEvent)
        break
      case 'organizationMembership.created':
        await this.handleOrganizationMembershipCreated(
          event as OrganizationMembershipWebhookEvent
        )
        break
      case 'organizationMembership.updated':
        await this.handleOrganizationMembershipUpdated(
          event as OrganizationMembershipWebhookEvent
        )
        break
      case 'organizationMembership.deleted':
        await this.handleOrganizationMembershipDeleted(
          event as OrganizationMembershipWebhookEvent
        )
        break
      case 'organizationInvitation.created':
        await this.handleOrganizationInvitationCreated(
          event as OrganizationInvitationWebhookEvent
        )
        break
      case 'organizationInvitation.accepted':
        await this.handleOrganizationInvitationUpdated(
          event as OrganizationInvitationWebhookEvent
        )
        break
      case 'organizationInvitation.revoked':
        await this.handleOrganizationInvitationRevoked(
          event as OrganizationInvitationWebhookEvent
        )
        break
      case 'sms.created':
        await this.handleSMSCreated(event as SMSWebhookEvent)
        break
      default:
        await this.bot.log({
          event: 'Unknown event',
          content: JSON.stringify(event),
        })
        break
    }
  }

  // USER EVENTS
  private async handleUserCreated(event: UserWebhookEvent) {
    if (!event.data.id) {
      this.bot.log({
        event: 'User created',
        content: 'No user ID found in payload.',
      })
      return
    }

    await this.bot.log({
      event: 'User created',
      content: event.data.id,
      slackMessage: this.bot.makeUserMessage(event.data as UserJSON),
    })

    const customer = await stripeService.handleNewCustomer(event.data.id)

    await clerkClient.users.updateUserMetadata(event.data.id, {
      privateMetadata: {
        stripeId: customer,
      },
      publicMetadata: {
        role: Roles.USER,
        subscription: PortalSubscriptions.NEOPHYTE,
      },
    })
  }

  private async handleUserUpdated(event: UserWebhookEvent) {
    this.bot.log({
      event: 'User updated',
      content: event.data.id,
    })
  }

  private async handleUserDeleted(event: UserWebhookEvent) {
    const userId = event.data.id

    if (!userId) {
      await this.bot.log({
        event: 'User deleted',
        content: 'No user ID found in payload.',
      })

      return
    }

    try {
      const projects = await prismaPortal.project.findMany({
        where: {
          owner: userId,
        },
      })

      // Delete all agents and projects
      // agent deletion should cascade to all related data
      if (projects.length > 0) {
        for (const project of projects) {
          const agents = await prismaCore.agents.findMany({
            where: {
              projectId: project.id,
            },
          })

          for (const agent of agents) {
            // turn off all agents first just in case we cant delete
            await app.service('agents').patch(agent.id, { enabled: false })
            await app.service('agents').remove(agent.id)
          }

          await prismaPortal.project.delete({
            where: {
              id: project.id,
            },
          })
        }
      }

      // Delete user
      // await stripeService.deleteCustomer(userId)

      console.log('USER DELETED', userId)
    } catch (error) {
      await this.bot.log({
        event: 'User deleted',
        content: `Error deleting user: ${userId}`,
      })
    }
  }

  // SESSION EVENTS
  private async handleSessionCreated(event: SessionWebhookEvent) {
    await this.bot.log({
      event: 'Session created',
      content: event.data.user_id,
    })
  }

  private async handleSessionEnded(event: SessionWebhookEvent) {
    await this.bot.log({
      event: 'Session ended',
      content: event.data.user_id,
    })
  }

  private async handleSessionRemoved(event: SessionWebhookEvent) {
    await this.bot.log({
      event: 'Session removed',
      content: event.data.user_id,
    })
  }

  private async handleSessionRevoked(event: SessionWebhookEvent) {
    await this.bot.log({
      event: 'Session revoked',
      content: event.data.user_id,
    })
  }

  // ORGANIZATION EVENTS
  private async handleOrganizationCreated(event: OrganizationWebhookEvent) {
    await this.bot.log({
      event: 'Organization created',
      content: event.data.id,
    })
  }

  private async handleOrganizationUpdated(event: OrganizationWebhookEvent) {
    await this.bot.log({
      event: 'Organization updated',
      content: event.data.id,
    })
  }

  private async handleOrganizationDeleted(event: OrganizationWebhookEvent) {
    await this.bot.log({
      event: 'Organization deleted',
      content: event.data.id,
    })
  }

  // ORGANIZATION MEMBERSHIP EVENTS
  private async handleOrganizationMembershipCreated(
    event: OrganizationMembershipWebhookEvent
  ) {
    await this.bot.log({
      event: 'Organization membership created',
      content: event.data.id,
    })
  }

  private async handleOrganizationMembershipUpdated(
    event: OrganizationMembershipWebhookEvent
  ) {
    await this.bot.log({
      event: 'Organization membership updated',
      content: event.data.id,
    })
  }

  private async handleOrganizationMembershipDeleted(
    event: OrganizationMembershipWebhookEvent
  ) {
    await this.bot.log({
      event: 'Organization membership deleted',
      content: event.data.id,
    })
  }

  // ORGANIZATION INVITATION EVENTS
  private async handleOrganizationInvitationCreated(
    event: OrganizationInvitationWebhookEvent
  ) {
    await this.bot.log({
      event: 'Organization invitation created',
      content: event.data.id,
    })
  }

  private async handleOrganizationInvitationUpdated(
    event: OrganizationInvitationWebhookEvent
  ) {
    await this.bot.log({
      event: 'Organization invitation accepted',
      content: event.data.id,
    })
  }

  private async handleOrganizationInvitationRevoked(
    event: OrganizationInvitationWebhookEvent
  ) {
    await this.bot.log({
      event: 'Organization invitation revoked',
      content: event.data.id,
    })
  }

  // MISC EVENTS
  private async handleEmailCreated(event: EmailWebhookEvent) {
    await this.bot.log({ event: 'Email created', content: event.data.id })
  }

  private async handleSMSCreated(event: SMSWebhookEvent) {
    await this.bot.log({ event: 'SMS created', content: event.data.id })
  }
}

export const clerkEventService = new ClerkEventService()
