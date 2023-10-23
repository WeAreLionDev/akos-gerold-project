import { addSlugPrefix } from 'src/clients/sanity'

import { DEFAULT_PREFIX } from './Tags.consts'
import type { ConvertSanityTagToTagFunction } from './Tags.interface'

const convertSanityTagToTag: ConvertSanityTagToTagFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  return items.map(({ slug, ...tag }) => ({
    ...tag,
    slug: addSlugPrefix(slug, prefix),
  }))
}

export default convertSanityTagToTag
