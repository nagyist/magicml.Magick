export interface Conversation {
  id: string
  title: string
  create_time: string
  update_time: string
}

interface GroupedMessages {
  Today: Conversation[]
  Yesterday: Conversation[]
  Previous_7_days: Conversation[]
  Previous_30_days: Conversation[]
  month: Conversation[]
}

export const groupMessagesByDate = (
  messages: Conversation[]
): GroupedMessages => {
  const today = new Date().toLocaleDateString()
  const yesterday = new Date(Date.now() - 86400000).toLocaleDateString() // 86400000 milliseconds in a day

  const groupedMessages: GroupedMessages = {
    Today: [],
    Yesterday: [],
    Previous_7_days: [],
    Previous_30_days: [],
    month: [],
  }

  messages.forEach(message => {
    const messageDate = new Date(message.create_time).toLocaleDateString()

    if (messageDate === today) {
      groupedMessages.Today.push(message)
    } else if (messageDate === yesterday) {
      groupedMessages.Yesterday.push(message)
    } else if (
      new Date(message.create_time) > new Date(Date.now() - 7 * 86400000) && // Messages from the previous 7 days
      new Date(message.create_time) <= new Date()
    ) {
      groupedMessages.Previous_7_days.push(message)
    } else if (
      new Date(message.create_time) > new Date(Date.now() - 30 * 86400000) && // Messages from the previous 30 days
      new Date(message.create_time) <= new Date()
    ) {
      groupedMessages.Previous_30_days.push(message)
    } else if (
      new Date(message.create_time).getMonth() === new Date().getMonth() &&
      new Date(message.create_time).getFullYear() === new Date().getFullYear()
    ) {
      groupedMessages.month.push(message)
    }
  })

  return groupedMessages
}
