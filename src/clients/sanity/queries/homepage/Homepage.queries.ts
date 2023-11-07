import { useSanityClient } from 'src/clients/sanity/useSanityClient'

import convertSanityHomepageToHomepage from './Homepage.converter'
import { sanityHomepageGroqQuery } from './Homepage.groq'
import type { SanityHomepageType } from './Homepage.interface'

export const useGetHomepageQuery = async () => {
  const query = await useSanityClient.fetch<SanityHomepageType[]>(sanityHomepageGroqQuery)
  if (query.length === 0) throw new Error('No homepage data found')
  if (query[0]?.pageBuilder?.length === 0) throw new Error('No homepage sections found')
  const homepage = query[0] as SanityHomepageType
  return convertSanityHomepageToHomepage(homepage)
}
