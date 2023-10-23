import { baseSanityDocumentDateFragment, baseSanityDocumentMetaFragment } from 'src/clients/sanity/base/BaseSanityDocument.groq'

export const sanityTagsGroqQuery = `
*[_type == "tag"]
{
  ${baseSanityDocumentMetaFragment}
  "posts": *[_type=="post" && references(^._id)]{ 
    title,
    "slug": slug.current,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    ${baseSanityDocumentDateFragment}
  },
  ${baseSanityDocumentDateFragment}
}
`
