import { useSanityClient } from 'src/clients/sanity/useSanityClient'

import convertSanityTagToTag from './Tags.converter'
import { sanityTagsGroqQuery } from './Tags.groq'
import type { SanityTagType } from './Tags.interface'

export const useGetTagsQuery = async (prefix?: string | undefined | boolean | null) => {
  const query = await useSanityClient.fetch<SanityTagType[]>(sanityTagsGroqQuery)
  return convertSanityTagToTag(query, { prefix })
}
