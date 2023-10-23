import type { SanityPostType } from 'src/clients/sanity'

import type { BaseSanityDocument, ConvertSanityDocument } from 'src/types'

export type ConvertSanityTagToTagFunction = ConvertSanityDocument<SanityTagType, TagType>

export type SanityTagType = Omit<BaseSanityDocument, 'featuredImage' | 'body' | 'estimatedReadingTime'> & {
  posts: SanityPostType[]
}

export type TagType = SanityTagType
