export const addSlugPrefix = (slug: string, prefix: string | boolean) => (prefix ? `${prefix}/${slug}` : slug)
