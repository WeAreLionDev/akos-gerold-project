import type { SanityImageWithAssetStub } from '@sanity/image-url/lib/types/types'

import type { SanityLinkType } from './SanityLinkType'

export type HeroSectionType = {
  heading: string
  tagline: string
  button: SanityLinkType
  subLink: SanityLinkType
  desktopImage: SanityImageWithAssetStub
  mobileImage: SanityImageWithAssetStub
}
