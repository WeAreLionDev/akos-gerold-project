import type { SanityServiceSectionType } from 'src/clients/sanity/queries/homepage/Homepage.interface'

import type { SanityTestimonialType } from './SanityTestimonialType'

export type ServiceSectionType = Omit<SanityServiceSectionType, '_type' | 'blueTheme' | 'orientation'> & {
  variant: 'dark' | 'light'
  orientation: 'left' | 'right'
  testimonial: SanityTestimonialType
}
