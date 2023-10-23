export const baseSanityDocumentDateFragment = `
    'pubDate': _createdAt,
    'upDate': _updatedAt,
`

export const baseSanityDocumentMetaFragment = `
    title,
    "slug": slug.current,
    description,
`
export const baseSanityDocumentFragment = `
    ${baseSanityDocumentMetaFragment}
    featuredImage{asset->{url}},
    body,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    ${baseSanityDocumentDateFragment}
`
