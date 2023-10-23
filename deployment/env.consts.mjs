export const DEFAULT_SANITY_PORT = '3333'

export const DEFAULT_SANITY_HOST = '0.0.0.0'

export const DEFAULT_ASTRO_DISABLE_INDEXING = false

export const VALIDATION_SANITY_DATASET_PRODUCTION = 'production'

export const VALIDATION_SANITY_DATASET_DEVELOPMENT = 'dev'

export const VALIDATION_SANITY_MIN_PROJECT_ID_LENGTH = 8

export const VALIDATION_SANITY_AUTH_TOKEN_LENGTH = 180

export const VALIDATION_MESSAGES = {
  sanityProjectId: `❌ Invalid Sanity project ID. Must be at least ${VALIDATION_SANITY_MIN_PROJECT_ID_LENGTH} characters long.`,
  sanityDataset: `❌ Invalid value for Sanity Dataset. Supported values: "${VALIDATION_SANITY_DATASET_PRODUCTION}" | "${VALIDATION_SANITY_DATASET_DEVELOPMENT}".`,
  sanityToken: '❌ Invalid Sanity auth token.',
  sanityTokenLength: `❌ Sanity auth token can only be ${VALIDATION_SANITY_AUTH_TOKEN_LENGTH} characters long.`,
  astroUrl: '❌ Invalid Astro website URL.',
  fontAwesomeNpmAuthToken: '❌ Invalid Font Awesome NPM auth token. Required for succesful builds.',
  astroGtagId: '❌ Invalid Google Analytics ID. Required for succesful builds.',
  astroGManagerId: '❌ Invalid Google Tag Manager ID. Required for succesful builds.',
}
