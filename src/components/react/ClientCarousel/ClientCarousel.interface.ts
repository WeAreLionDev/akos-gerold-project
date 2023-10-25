import type { HTMLAttributes } from 'react'

import type { ClientType } from 'src/types'

export type ClientCarouselProps = HTMLAttributes<HTMLDivElement> & { clients: ClientType[] }
