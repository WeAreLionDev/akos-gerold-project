// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { NavigationLinkType } from 'src/types'

export const SITE_TITLE = '%WEBSITE_TITLE% Your Digitalization Partner'
export const SITE_DESCRIPTION =
  'IT Company that specilizes in Web Development, Software Development, Digitalization and Automation Small and Big Businesses.'
export const SITE_OWNER = 'LionDev'
export const NAVIGATION_LINKS: NavigationLinkType[] = [{ label: 'Blog', href: '/blog' }]
export const FOOTER_LINKS: NavigationLinkType[] = [{ label: 'Blog', href: '/blog' }]

export const SITE_URL = import.meta.env.ASTRO_WEBSITE_URL

export const SITE_TITLE_PREFIX = '%WEBSITE_TITLE%'

export const SANITY_CLIENT_CONFIG = {
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.SANITY_STUDIO_DATASET,
  apiVersion: '2021-03-25',
  useCdn: true,
}

export const GTAG_ID = import.meta.env.ASTRO_GTAG_ID
export const GTM_ID = import.meta.env.ASTRO_GTM_ID
