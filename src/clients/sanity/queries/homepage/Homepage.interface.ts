import type { PortableTextProps } from 'astro-portabletext/types'

import type { SanityClientType, SanityImageWithAlt, SanityLinkType, SanityTestimonialType } from 'src/types'

export type SanityHeroSectionType = {
  _type: 'heroSection'
  heading: string
  tagline: string
  subLink: SanityLinkType
  button: SanityLinkType
  desktopImage: SanityImageWithAlt
  mobileImage: SanityImageWithAlt
}

export type SanityWelcomeSectionType = {
  _type: 'welcomeSection'
  body: string
  signature: string
  subtitle: string
  image: SanityImageWithAlt
}

export type SanityClientSectionType = {
  _type: 'clientSection'
  title: string
  clients: SanityClientType[]
}

export type SanityServiceSectionType = {
  _type: 'serviceSection'
  image: SanityImageWithAlt
  orientation: boolean
  blueTheme: boolean
  title: string
  testimonial: SanityTestimonialType
  tagline?: string
  body: PortableTextProps
  button?: SanityLinkType
}

export type SanityTestimonialSectionType = {
  _type: 'testimonialSection'
  title: string
  testimonials: SanityTestimonialType[]
}

export type SanityAboutMeSectionType = {
  _type: 'aboutMeSection'
  image: SanityImageWithAlt
  title: string
  body: string
}

export type SanityWorkWithMeSectionType = {
  _type: 'workWithMeSection'
  title: string
  body: string
  button: SanityLinkType
  image: SanityImageWithAlt
}

export type SanityHomepageSectionsType =
  | SanityHeroSectionType
  | SanityWelcomeSectionType
  | SanityClientSectionType
  | SanityServiceSectionType
  | SanityTestimonialSectionType
  | SanityAboutMeSectionType
  | SanityWorkWithMeSectionType

export type SanityHomepageType = {
  title: string
  pageBuilder: SanityHomepageSectionsType[]
}
