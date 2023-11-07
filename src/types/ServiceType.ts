import type { SanityTestimonialType } from 'src/types'

export type ServiceType = {
  title: string
  body: string
  image: string
  variant: 'dark' | 'light'
  orientation: 'left' | 'right'
  testimonial: SanityTestimonialType
}
