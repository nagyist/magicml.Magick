// DOCUMENTED
import { config } from 'dotenv-flow'
// import { importMetaEnv } from '../../../client/config/src/lib/import-meta-env'
import { v4 } from 'uuid'

// Load environment variables
config({
  path: '../../../.env.*',
})

// Check whether "process" is defined or not, and assign the appropriate environment object.
const processEnv = process?.env

/**
 * Get an environment variable value for the given key.
 *
 * @param {string} env - The key to search for in environment variables.
 * @returns {string} - The value associated with the key, or empty string if not found.
 */
function getVarForEnvironment(env: string): string {
  return (
    processEnv[env] || // Check processEnv for env key
    processEnv[`VITE_APP_${env}`] || // Check VITE prefixed env variables
    processEnv[`NEXT_${env}`] || // Check NEXT prefixed env variables
    processEnv[`REACT_${env}`] || // Check REACT prefixed env variables
    '' // Return empty string if not found
  )
}

// Define and export constants from environment variables
export const NODE_ENV = getVarForEnvironment('NODE_ENV') || 'development'
export const DATABASE_URL = getVarForEnvironment('DATABASE_URL') || undefined
export const STANDALONE = getVarForEnvironment('STANDALONE') === 'true' || false
export const PRODUCTION = getVarForEnvironment('PRODUCTION') === 'true'
export const DONT_CRASH_ON_ERROR =
  getVarForEnvironment('DONT_CRASH_ON_ERROR') === 'true'
export const SERVER_PORT = getVarForEnvironment('PORT') || '3030'
export const SERVER_HOST = getVarForEnvironment('HOST') || 'localhost'
export const TRUSTED_PARENT_URL =
  getVarForEnvironment('TRUSTED_PARENT_URL') || 'https://localhost:4000'
export const PORTAL_URL =
  getVarForEnvironment('PORTAL_URL') || 'http://localhost:4000'
export const API_ROOT_URL =
  getVarForEnvironment('API_URL') || `http://${SERVER_HOST}:${SERVER_PORT}`

export const PAGINATE_DEFAULT = getVarForEnvironment('PAGINATE_DEFAULT') || '10'
export const PAGINATE_MAX = getVarForEnvironment('PAGINATE_MAX') || '100'
export const JWT_SECRET = getVarForEnvironment('JWT_SECRET') || 'secret'

export const POSTHOG_ENABLED =
  getVarForEnvironment('POSTHOG_ENABLED') === 'true'
export const POSTHOG_API_KEY = getVarForEnvironment('POSTHOG_API_KEY')

export const REDIS_URL =
  // check for private URL on railway before we use the public one
  getVarForEnvironment('REDIS_PRIVATE_URL') || getVarForEnvironment('REDIS_URL')

export const PINO_LOG_LEVEL = getVarForEnvironment('PINO_LOG_LEVEL') || 'info'

export const AGENT_RESPONSE_TIMEOUT_MSEC =
  Number(getVarForEnvironment('AGENT_RESPONSE_TIMEOUT_MSEC')) || 120000

export const PORTAL_AGENT_KEY = getVarForEnvironment('PORTAL_AGENT_KEY') || v4()

export const AWS_ACCESS_KEY = getVarForEnvironment('AWS_ACCESS_KEY')
export const AWS_SECRET_KEY = getVarForEnvironment('AWS_SECRET_KEY')
export const AWS_REGION = getVarForEnvironment('AWS_REGION')
export const AWS_BUCKET_NAME = getVarForEnvironment('AWS_BUCKET_NAME')
export const AWS_BUCKET_ENDPOINT = getVarForEnvironment('AWS_BUCKET_ENDPOINT')
export const AWS_PUBLIC_BUCKET_PREFIX = getVarForEnvironment(
  'NEXT_PUBLIC_BUCKET_PREFIX'
)

export const HEARTBEAT_MSEC =
  Number(getVarForEnvironment('HEARTBEAT_MSEC')) || 3000
export const MANAGER_WARM_UP_MSEC =
  Number(getVarForEnvironment('MANAGER_WARM_UP_MSEC')) || 5000

export const API_ACCESS_KEY = getVarForEnvironment('API_ACCESS_KEY') || 'apiKey'

export const CREDENTIALS_ENCRYPTION_KEY =
  getVarForEnvironment('CREDENTIALS_ENCRYPTION_KEY') || 'key'

export const CREDENTIALS_ALGORITHM =
  getVarForEnvironment('CREDENTIALS_ALGORITHM') || 'aes-256-cbc'

export const OPENMETER = {
  enabled: getVarForEnvironment('OPENMETER_ENABLED') === 'true',
  endpoint:
    getVarForEnvironment('OPENMETER_ENDPOINT') || 'http://localhost:8888',
  token: getVarForEnvironment('OPENMETER_TOKEN'),
  source: getVarForEnvironment('OPENMETER_SOURCE') || 'cloud-dev',
}

export const PLUGIN_SETTINGS = {
  SLACK_DEVELOPER_MODE: getVarForEnvironment('SLACK_DEVELOPER_MODE') === 'true',
  DISCORD_DEVELOPER_MODE:
    getVarForEnvironment('DISCORD_DEVELOPER_MODE') === 'true',
}

// AI Service credentials
export const OPENAI_API_KEY = getVarForEnvironment('OPENAI_API_KEY')
export const DEFAULT_OPENAI_KEY = getVarForEnvironment('DEFAULT_OPENAI_KEY')
export const ANTHROPIC_API_KEY = getVarForEnvironment('ANTHROPIC_API_KEY')
export const GROQ_API_KEY = getVarForEnvironment('GROQ_API_KEY')
export const TOGETHERAI_API_KEY = getVarForEnvironment('TOGETHERAI_API_KEY')
export const GEMINI_API_KEY = getVarForEnvironment('GEMINI_API_KEY')
export const DEFAULT_GOOGLEAI_API_KEY = getVarForEnvironment(
  'DEFAULT_GOOGLEAI_API_KEY'
)
export const UNSTRUCTURED_KEY = getVarForEnvironment('UNSTRUCTURED_KEY')

// Voice Services
export const AAI_KEY = getVarForEnvironment('AAI_KEY')
export const ELEVENLABS_API_KEY = getVarForEnvironment('ELEVENLABS_API_KEY')

// Memory/Vector databases
export const PINECONE_INDEX_NAME =
  getVarForEnvironment('PINECONE_INDEX_NAME') || 'magick-dev-1536'
export const PINECONE_API_KEY = getVarForEnvironment('PINECONE_API_KEY')

export const AGENT_HEARTBEAT_INTERVAL_MSEC =
  Number(getVarForEnvironment('AGENT_HEARTBEAT_INTERVAL_MSEC')) || 10000

export const PORTAL_BOT_URL = getVarForEnvironment('PORTAL_BOT_URL') || false

export const BETA_FEATURES = {
  functions:
    getVarForEnvironment('NEXT_PUBLIC_BETA_FEATURES_FUNCTIONS') === 'true',
}

// Keywords API configuration
export const KEYWORDS_API_URL =
  getVarForEnvironment('KEYWORDS_API_URL') || 'https://api.keywordsai.co'
export const KEYWORDS_API_KEY = getVarForEnvironment('KEYWORDS_API_KEY')

// User service configuration
export const ENABLE_USER_SERVICE =
  getVarForEnvironment('ENABLE_USER_SERVICE') === 'true'

// Plugin directory
export const PLUGIN_DIRECTORY =
  getVarForEnvironment('PLUGIN_DIRECTORY') || './plugins'

// Feature flags
export const COMPOSER_V2 = getVarForEnvironment('COMPOSER_V2') === 'true'
export const BUDGET_LOGGING = getVarForEnvironment('BUDGET_LOGGING') === 'true'
export const LITELLM_LOCAL_MODEL_COST_MAP =
  getVarForEnvironment('LITELLM_LOCAL_MODEL_COST_MAP') === 'true'

// Google Cloud
export const GOOGLE_CLOUD = {
  PROJECT_ID: getVarForEnvironment('GOOGLE_CLOUD_PROJECT_ID'),
  CLIENT_EMAIL: getVarForEnvironment('GOOGLE_CLOUD_CLIENT_EMAIL'),
  PRIVATE_KEY: getVarForEnvironment('GOOGLE_CLOUD_PRIVATE_KEY'),
  PRIVATE_BUCKET_NAME: getVarForEnvironment('GOOGLE_PRIVATE_BUCKET_NAME'),
  PUBLIC_BUCKET_NAME: getVarForEnvironment('GOOGLE_PUBLIC_BUCKET_NAME'),
}

// Project bucket prefix
export const PROJECT_BUCKET_PREFIX = getVarForEnvironment(
  'PROJECT_BUCKET_PREFIX'
)

// Embedder configuration
export const EMBEDDER = {
  REDIS_URL: getVarForEnvironment('EMBEDDER_REDIS_URL'),
  REDIS_HOST: getVarForEnvironment('EMBEDDER_REDIS_HOST') || 'localhost',
  REDIS_PORT: Number(getVarForEnvironment('EMBEDDER_REDIS_PORT')) || 6379,
  PINECONE_PROJECT: getVarForEnvironment('EMBEDDER_PINECONE_PROJECT'),
  PINECONE_CLOUD: getVarForEnvironment('EMBEDDER_PINECONE_CLOUD') || 'aws',
  PINECONE_REGION:
    getVarForEnvironment('EMBEDDER_PINECONE_REGION') || 'us-east-1',
  DB_URL: getVarForEnvironment('EMBEDDER_DB_URL'),
  JWT_SECRET: getVarForEnvironment('EMBEDDER_JWT_SECRET') || 'secret',
  JWT_EXPIRES_IN: getVarForEnvironment('EMBEDDER_JWT_EXPIRES_IN') || '1d',
  AUTH_ROUTE_MATCHER:
    getVarForEnvironment('EMBEDDER_AUTH_ROUTE_MATCHER') || '/api',
}

export const AGENT_EMBEDDER_API_KEY = getVarForEnvironment(
  'AGENT_EMBEDDER_API_KEY'
)

export const ENABLE_SERAPH = getVarForEnvironment('ENABLE_SERAPH') === 'true'
export const NITRO_JWT_SECRET = getVarForEnvironment('NITRO_JWT_SECRET')

// Frigade configuration
export const FRIGADE_PRIVATE_KEY = getVarForEnvironment('FRIGADE_PRIVATE_KEY')
