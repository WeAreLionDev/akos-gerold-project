import type { SanityAboutMeSectionType } from 'src/clients/sanity/queries/homepage/Homepage.interface'

export type AboutMeSectionType = Omit<SanityAboutMeSectionType, '_type'>
