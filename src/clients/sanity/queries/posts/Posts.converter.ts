import { DEFAULT_PREFIX as DEFAULT_PREFIX_TAG, addSlugPrefix } from 'src/clients/sanity'

import { DEFAULT_PREFIX } from './Posts.consts'
import type { ConvertSanityPostToPostFunction } from './Posts.interface'

const convertSanityPostToPost: ConvertSanityPostToPostFunction = (items, options) => {
  const prefix = options?.prefix ? DEFAULT_PREFIX : false
  return items.map(({ slug, tags, ...post }) => ({
    ...post,
    slug: addSlugPrefix(slug, prefix),
    tags: tags.map((tag) => ({ ...tag, slug: addSlugPrefix(slug, DEFAULT_PREFIX_TAG) })),
  }))
}

export default convertSanityPostToPost
