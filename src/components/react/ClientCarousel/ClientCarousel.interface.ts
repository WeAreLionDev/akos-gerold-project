import type { HTMLAttributes } from 'react'

import type { SanityClientType } from 'src/types'

export type ClientCarouselProps = HTMLAttributes<HTMLDivElement> & { clients: SanityClientType[] }
