import type { SanityHeroSectionType } from 'src/clients/sanity/queries/homepage/Homepage.interface'

export type HeroSectionType = Omit<SanityHeroSectionType, '_type'>
