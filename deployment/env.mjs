import { loadEnv } from 'vite'
import { z } from 'zod'

import {
  DEFAULT_ASTRO_DISABLE_INDEXING,
  DEFAULT_SANITY_HOST,
  DEFAULT_SANITY_PORT,
  VALIDATION_MESSAGES,
  VALIDATION_SANITY_AUTH_TOKEN_LENGTH,
  VALIDATION_SANITY_DATASET_DEVELOPMENT,
  VALIDATION_SANITY_DATASET_PRODUCTION,
  VALIDATION_SANITY_MIN_PROJECT_ID_LENGTH,
} from './env.consts.mjs'

const {
  SANITY_HOST,
  SANITY_STUDIO_PROJECT_ID,
  SANITY_PORT,
  SANITY_STUDIO_DATASET,
  SANITY_AUTH_TOKEN,
  ASTRO_WEBSITE_URL,
  FONTAWESOME_NPM_AUTH_TOKEN,
  SKIP_ENV_VALIDATION,
  ASTRO_DISABLE_INDEXING,
  ASTRO_GTAG_ID,
  ASTRO_GTM_ID,
  CI,
} = loadEnv(process.env.NODE_ENV, process.cwd(), '')

const processEnv = {
  ASTRO_WEBSITE_URL,
  SANITY_STUDIO_PROJECT_ID,
  SANITY_PORT: SANITY_PORT || DEFAULT_SANITY_PORT,
  SANITY_STUDIO_DATASET,
  SANITY_AUTH_TOKEN,
  SANITY_HOST: SANITY_HOST || DEFAULT_SANITY_HOST,
  ASTRO_DISABLE_INDEXING: ASTRO_DISABLE_INDEXING || DEFAULT_ASTRO_DISABLE_INDEXING,
  ASTRO_GTAG_ID,
  ASTRO_GTM_ID,
  FONTAWESOME_NPM_AUTH_TOKEN,
}

const sanityEnvSchema = z.object({
  SANITY_STUDIO_PROJECT_ID: z.string().min(VALIDATION_SANITY_MIN_PROJECT_ID_LENGTH, { message: VALIDATION_MESSAGES.sanityProjectId }),
  SANITY_STUDIO_DATASET: z.union([z.literal(VALIDATION_SANITY_DATASET_PRODUCTION), z.literal(VALIDATION_SANITY_DATASET_DEVELOPMENT)], {
    errorMap: () => ({ message: VALIDATION_MESSAGES.sanityDataset }),
  }),
  SANITY_HOST: z.union([z.string().ip(), z.string().url(), z.string().regex(/^(localhost)$/)]),
  SANITY_PORT: z.coerce.number(),
  SANITY_AUTH_TOKEN: z
    .union([
      z.string().length(0, VALIDATION_MESSAGES.sanityToken),
      z.string().length(VALIDATION_SANITY_AUTH_TOKEN_LENGTH, VALIDATION_MESSAGES.sanityTokenLength),
    ])
    .optional()
    .transform((value) => (value === '' ? undefined : value)),
})

const astroEnvSchema = z.object({
  ASTRO_WEBSITE_URL: z.string().url({ message: VALIDATION_MESSAGES.astroUrl }),
  ASTRO_GTAG_ID: z
    .string()
    .regex(new RegExp(/^G-[A-Z0-9]{1,10}$/))
    .optional(),
  ASTRO_GTM_ID: z
    .string()
    .regex(new RegExp(/^GTM-[A-Z0-9]{1,8}$/))
    .optional(),
  ASTRO_WEBSITE_URL: z.string().url({ message: VALIDATION_MESSAGES.astroUrl }),
  ASTRO_DISABLE_INDEXING: z.coerce.boolean().optional(),
})

const yarnEnvSchema = z.object({
  FONTAWESOME_NPM_AUTH_TOKEN: z.string({ message: VALIDATION_MESSAGES.fontAwesomeNpmAuthToken }),
})

let requiredSchema = astroEnvSchema.merge(sanityEnvSchema)

if (!!CI == false) {
  requiredSchema = requiredSchema.merge(yarnEnvSchema)
}

if (!!SKIP_ENV_VALIDATION == false) {
  const parsed = requiredSchema.safeParse(processEnv)
  if (!parsed.success) {
    console.table(parsed.error.flatten().fieldErrors)
    throw new Error('❌ Invalid environment variables:')
  }
  console.log('✅ All Required Env Variables present in the .env file.')
} else {
  console.log('⏩ Validation was skipped.')
}
