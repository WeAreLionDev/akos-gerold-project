import { createClient } from '@sanity/client'
import { SANITY_CLIENT_CONFIG } from 'src/config'

export const useSanityClient = createClient(SANITY_CLIENT_CONFIG)
