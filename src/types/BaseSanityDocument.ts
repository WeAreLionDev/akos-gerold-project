import type { SanityImageWithAssetStub } from '@sanity/image-url/lib/types/types'
import type { PortableTextProps } from 'astro-portabletext/types'

export type BaseSanityDocument = {
  featuredImage?: SanityImageWithAssetStub
  slug: string
  title: string
  description: string
  body: PortableTextProps
  estimatedReadingTime: number
  pubDate: string
  upDate: string
}
