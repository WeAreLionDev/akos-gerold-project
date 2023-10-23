import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { useSanityClient } from './useSanityClient'

export const imageBuilder = imageUrlBuilder(useSanityClient)

export function useGetImageUrl(source: SanityImageSource) {
  return imageBuilder.image(source)
}
