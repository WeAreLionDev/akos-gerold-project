import type { SanityClientSectionType } from 'src/clients/sanity/queries/homepage/Homepage.interface'

export type ClientSectionType = Omit<SanityClientSectionType, '_type'>
