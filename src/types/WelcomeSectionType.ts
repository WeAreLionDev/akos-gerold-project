import type { SanityWelcomeSectionType } from 'src/clients/sanity/queries/homepage/Homepage.interface'

export type WelcomeSectionType = Omit<SanityWelcomeSectionType, '_type'>
