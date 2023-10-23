import type { TagType } from 'src/clients/sanity'

import type { BaseSanityDocument, ConvertSanityDocument } from 'src/types'

export type ConvertSanityPostToPostFunction = ConvertSanityDocument<SanityPostType, PostType>

export type PostTagType = Pick<TagType, 'title' | 'slug'>

export type SanityPostType = BaseSanityDocument & {
  tags: PostTagType[]
}

export type PostType = SanityPostType
