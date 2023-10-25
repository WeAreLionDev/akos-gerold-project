import type { CarouselBreakpoints } from './TestimonialCarousel.utility'

export const SWIPE_CONFIDENCE_THRESHOLD = 10000
export const INITIAL_CAROUSEL_POSITION = 0
export const SLIDER_GAP_OFFSETS: CarouselBreakpoints = {
  sm: 60,
  md: 10,
  lg: 10,
  xl: 40,
  '2xl': 40,
} as const
