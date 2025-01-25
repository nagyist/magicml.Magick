import posthog from 'posthog-js'

export enum PublicEventTypes {
  AGENT_PUBLIC_CLICK = 'agent_public_click',
  AGENT_PUBLIC_LIKE = 'agent_public_like',
  AGENT_PUBLIC_UNLIKE = 'agent_public_unlike',
  AGENT_PUBLIC_REMIX = 'agent_public_remix',
  AGENT_PUBLIC_SHARE = 'agent_public_share',
  AGENT_PUBLIC_MESSAGE = 'agent_public_message',
  AGENT_PUBLIC_RESPONSE = 'agent_public_response',
  AGENT_PUBLIC_UPDATE = 'agent_public_update',
}

export enum PrivateEventTypes {
  AGENT_PRIVATE_CLICK = 'agent_private_click',
  AGENT_PRIVATE_MAKE_PUBLIC = 'agent_private_make_public',
  AGENT_PRIVATE_OPEN_IDE = 'agent_private_open_ide',
  AGENT_PRIVATE_DELETE = 'agent_private_delete',
  AGENT_PRIVATE_MESSAGE = 'agent_private_message',
  AGENT_PRIVATE_RESPONSE = 'agent_private_response',
  AGENT_PRIVATE_KNOWLEDGE_ADD = 'agent_private_knowledge_add',
  AGENT_PRIVATE_UPDATE = 'agent_private_update',
}

export enum OtherEventTypes {
  AGENT_TEMPLATE_CLICK = 'agent_template_click',
  AGENT_CREATE_CLICK = 'agent_create_click',
  EXPLORE_NEXT_CLICK = 'explore_next_click',
  INFO_CLICK = 'info_click',
  NOTIFY_ME_CLICK = 'notify_me_click',
  CTA_CLICK = 'cta_click',
  NAV_SETTINGS_CLICK = 'nav_settings_click',
  LIGHT_MODE_TRIGGERED = 'light_mode_triggered',
  DARK_MODE_TRIGGERED = 'dark_mode_triggered',
}

export enum NavEventTypes {
  NAV_HOME_CLICK = 'nav_home_click',
  NAV_PROJECTS_CLICK = 'nav_projects_click',
  NAV_AGENTS_CLICK = 'nav_agents_click',
  NAV_EXPLORE_CLICK = 'nav_explore_click',
  NAV_SETTINGS_CLICK = 'nav_settings_click',
  NAV_FEEDBACK_CLICK = 'nav_feedback_click',
  NAV_TUTORIALS_CLICK = 'nav_tutorials_click',
  NAV_DOCS_CLICK = 'nav_docs_click',
  NAV_JOIN_DISCORD = 'nav_join_discord',
  NAV_TWITTER = 'nav_twitter',
}

export type EventTypes =
  | PublicEventTypes
  | PrivateEventTypes
  | OtherEventTypes
  | NavEventTypes

export interface EventMetadata {
  [key: string]: any
}

export const trackEvent = (
  eventName: EventTypes,
  agentId?: string,
  metadata: EventMetadata = {}
) => {
  let commonProps = { ...metadata }

  if (agentId) {
    commonProps = { ...commonProps, agent_id: agentId }
  }

  if (Object.values(NavEventTypes).includes(eventName as NavEventTypes)) {
    posthog.capture(eventName, commonProps)
    return
  }

  if (Object.values(PublicEventTypes).includes(eventName as PublicEventTypes)) {
    posthog.capture(eventName, { ...commonProps, featured: true })
    return
  }

  if (
    Object.values(PrivateEventTypes).includes(eventName as PrivateEventTypes)
  ) {
    posthog.capture(eventName, commonProps)
    return
  }

  if (Object.values(OtherEventTypes).includes(eventName as OtherEventTypes)) {
    posthog.capture(eventName, commonProps)
  }
}
