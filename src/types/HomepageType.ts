import type {
  SanityAboutMeSectionType,
  SanityClientSectionType,
  SanityTestimonialSectionType,
  SanityWorkWithMeSectionType,
} from 'src/clients/sanity/queries/homepage/Homepage.interface'

import type { HeroSectionType, ServiceSectionType, WelcomeSectionType } from 'src/types'

export type HomepageType = {
  title: string
  heroSection: HeroSectionType
  welcomeSection: WelcomeSectionType
  clientSection: Omit<SanityClientSectionType, '_type'>
  testimonialSection: Omit<SanityTestimonialSectionType, '_type'>
  aboutMeSection: Omit<SanityAboutMeSectionType, '_type'>
  workWithMeSection: Omit<SanityWorkWithMeSectionType, '_type'>
  services: ServiceSectionType[]
}
