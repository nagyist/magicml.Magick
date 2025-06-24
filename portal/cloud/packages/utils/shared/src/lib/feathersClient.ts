import {
  Application,
  TransportConnection,
  feathers,
} from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import { io } from 'socket.io-client'

/**
 * Configure custom services.
 *
 * @param app - Feathers application instance
 * @param socketClient - TransportConnection instance
 */
const configureCustomServices = (
  app: Application<any, any>,
  socketClient: TransportConnection<any>
): void => {
  app.use('agents', socketClient.service('agents'), {
    methods: ['run', 'message'],
    events: ['result', 'spell', 'event'],
  })
}

type Config = {
  apiUrl: string
}

/**
 * Build Feathers client connection.
 *
 * @param config - Application configuration object.
 * @param token - API token.
 * @returns Feathers client
 */
export const buildFeathersClient = async (
  config: Config,
  token: string
): Promise<any> => {
  const socket = io(`${config.apiUrl}?token=${token}`, {
    transports: ['websocket'],
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  })
  const client = feathers()
  const socketClient = socketio(socket, { timeout: 10000 })
  // todo this needs more than an<any> here.  Super hacky.
  client.configure(socketClient as any)

  configureCustomServices(client, socketClient)

  // No idea how to type feathers to add io properties to root client.
  return client
}
