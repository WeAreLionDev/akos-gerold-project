import type { HTMLAttributes } from 'astro/types'

export type NavigationLinkType = Pick<HTMLAttributes<'a'>, 'href'> & { label: string }
