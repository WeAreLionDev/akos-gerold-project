import type { SanityTestimonialType } from 'src/types'

export type TestimonialCarouselProps = { testimonials: SanityTestimonialType[] }

export enum CarouselDirection {
  Back,
  Forward,
}
