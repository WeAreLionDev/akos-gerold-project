import type { SanityImageWithAssetStub } from '@sanity/image-url/lib/types/types'

export type SanityImageWithAlt = SanityImageWithAssetStub & { alt?: string }
