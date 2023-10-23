import rss from '@astrojs/rss'
import { useGetPostsQuery } from 'src/clients/sanity'
import { SITE_DESCRIPTION, SITE_TITLE } from 'src/config'

export async function GET(context) {
  const posts = await useGetPostsQuery()
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [
      ...posts.map(({ slug, title, description, pubDate }) => ({
        title,
        description,
        pubDate,
        link: slug,
      })),
    ],
  })
}
