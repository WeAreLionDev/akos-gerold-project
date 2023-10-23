import { baseSanityDocumentFragment } from 'src/clients/sanity/base/BaseSanityDocument.groq'

export const sanityPostsGroqQuery = `
*[_type == "post"]
{
  ${baseSanityDocumentFragment}
  "tags": tags[]->{
    title,
    "slug": slug.current
  },
}
`
