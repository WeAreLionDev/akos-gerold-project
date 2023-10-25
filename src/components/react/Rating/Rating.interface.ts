import type { HTMLAttributes } from 'react'

export type RatingProps = HTMLAttributes<HTMLDivElement> & {
  rating: number
  maxRating?: number
  subtitle?: string
  className?: string
}
