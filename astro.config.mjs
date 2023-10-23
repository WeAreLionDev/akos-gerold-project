import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import sanity from '@sanity/astro'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, ASTRO_WEBSITE_URL, ASTRO_DISABLE_INDEXING } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  '',
)
export const sanityClienfConfig = {
  projectId: SANITY_STUDIO_PROJECT_ID,
  dataset: SANITY_STUDIO_DATASET,
  apiVersion: '2021-03-25',
  useCdn: true,
}

const robotsTxtPolicy = ASTRO_DISABLE_INDEXING ? { userAgent: '*', disallow: '/' } : { userAgent: '*', allow: '/' }

// https://astro.build/config
export default defineConfig({
  site: ASTRO_WEBSITE_URL,
  integrations: [sitemap(), tailwind(), react(), sanity(sanityClienfConfig), robotsTxt({ policy: [robotsTxtPolicy] })],
})
