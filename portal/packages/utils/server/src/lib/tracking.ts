import { PostHog } from 'posthog-node'
import {
  EventTypes,
  PublicEventTypes,
  PrivateEventTypes,
  OtherEventTypes,
  NavEventTypes,
  EventMetadata,
} from '@magickml/portal-utils-shared'

const client = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY ?? '', {
  host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
})

export const trackServerEvent = async (
  eventName: EventTypes,
  userEmail: string,
  agentId?: string,
  metadata: EventMetadata = {}
) => {
  let commonProps = { ...metadata }

  if (agentId) {
    commonProps = { ...commonProps, agent_id: agentId }
  }

  const captureOptions = {
    distinctId: userEmail,
    event: eventName,
    properties: commonProps,
  }

  if (Object.values(NavEventTypes).includes(eventName as NavEventTypes)) {
    client.capture(captureOptions)
    return
  }

  if (Object.values(PublicEventTypes).includes(eventName as PublicEventTypes)) {
    client.capture({
      ...captureOptions,
      properties: { ...commonProps, featured: true },
    })
    return
  }

  if (
    Object.values(PrivateEventTypes).includes(eventName as PrivateEventTypes)
  ) {
    client.capture(captureOptions)
    return
  }

  if (Object.values(OtherEventTypes).includes(eventName as OtherEventTypes)) {
    client.capture(captureOptions)
  }
}

export const shutdownPostHog = async () => {
  await client.shutdown()
}
