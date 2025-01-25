import { feathers } from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import axios from 'axios'

// Connect to a different URL

export const makeClient = (url: string) => {
  const restClient = rest(url)
  const app = feathers()

  app.configure(
    restClient.axios(
      axios.create({
        headers: { 'x-api-key': process.env.AGENT_API_KEY },
      })
    )
  )

  return app
}
