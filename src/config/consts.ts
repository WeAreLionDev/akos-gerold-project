// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { NavigationLinkType } from 'src/types'

export const CONTACT_EMAIL = 'mailto:contact@akos-gerold.com'
export const SITE_TITLE = 'Akos Gerold - Persuade Ethically &amp; Effectively'
export const SITE_DESCRIPTION =
  'We have turned the science into training &amp; consultancy,so you can sell, convert and grow like Apple, Amazon and Google.'
export const SITE_OWNER = 'LionDev'
export const NAVIGATION_LINKS: NavigationLinkType[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Clients', href: '#clients' },
  { label: 'About', href: '#about-me' },
  { label: 'Contact', href: CONTACT_EMAIL },
]
export const FOOTER_LINKS: NavigationLinkType[] = [
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Clients', href: '#clients' },
  { label: 'About', href: '#about-me' },
]

export const SITE_URL = import.meta.env.ASTRO_WEBSITE_URL

export const SITE_TITLE_PREFIX = 'Ákos Gerold -'

export const SANITY_CLIENT_CONFIG = {
  projectId: 'ss3dws13',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
}

export const GTAG_ID = import.meta.env.ASTRO_GTAG_ID
export const GTM_ID = import.meta.env.ASTRO_GTM_ID
