import { useSanityClient } from 'src/clients/sanity/useSanityClient'

import convertSanityPostToPost from './Posts.converter'
import { sanityPostsGroqQuery } from './Posts.groq'
import type { SanityPostType } from './Posts.interface'

export const useGetPostsQuery = async (prefix?: string | undefined | boolean | null) => {
  const query = await useSanityClient.fetch<SanityPostType[]>(sanityPostsGroqQuery)
  return convertSanityPostToPost(query, { prefix })
}
