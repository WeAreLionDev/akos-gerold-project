import type { SanityWorkWithMeSectionType } from 'src/clients/sanity/queries/homepage/Homepage.interface'

export type WorkWithMeSectionType = Omit<SanityWorkWithMeSectionType, '_type'>
