import { MotionValue, useMotionValue } from 'framer-motion'
import { type Dispatch, type RefObject, type SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useMediaBreakpoint } from 'src/utility'

import { CarouselDirection } from 'src/components/react/TestimonialCarousel/TestimonialCarousel.interface'

interface UseCarouselHookProps {
  (
    initialCarouselPosition: number,
    items: number,
    slideOffsets: CarouselBreakpoints,
  ): {
    containerRef: RefObject<HTMLDivElement>
    carouselWidth: number
    x: MotionValue<number>
    paginate: (direction: CarouselDirection) => void
    position: number
    currentSlide: number
    setSlide: Dispatch<SetStateAction<number>>
    pagination: number[]
  }
}

export type CarouselBreakpoints = {
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
}

const CAROUSEL_BREAKPOINTS: CarouselBreakpoints = {
  sm: 1,
  md: 2,
  lg: 2,
  xl: 3,
  '2xl': 3,
} as const

export const useCarouselHookProps: UseCarouselHookProps = (initialCarouselPosition, items, slideOffsets) => {
  const { mediaBreakpoint } = useMediaBreakpoint()
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState<number>(initialCarouselPosition)
  const [slideWidth, setSlideWidth] = useState<number>(0)
  const [currentSlide, setSlide] = useState<number>(0)

  const motionX = useMotionValue<number>(0)

  const slideOffset = useMemo(
    () => slideOffsets[mediaBreakpoint as keyof typeof slideOffsets] || slideOffsets.lg,
    [mediaBreakpoint, slideOffsets],
  )

  const itemsPerSlide = useMemo(
    () => CAROUSEL_BREAKPOINTS[mediaBreakpoint as keyof typeof CAROUSEL_BREAKPOINTS] || CAROUSEL_BREAKPOINTS.sm,
    [mediaBreakpoint],
  )

  const maxSlides = useMemo(() => Math.ceil(items / itemsPerSlide), [items, itemsPerSlide])

  const pagination = useMemo(() => Array.from(Array(maxSlides).keys()), [maxSlides])

  const carouselWidth = useMemo(() => slideWidth * maxSlides, [slideWidth, maxSlides])

  const paginate = useCallback(
    (direction: CarouselDirection) => {
      if (direction === CarouselDirection.Forward) {
        const nextSlide = currentSlide + 1
        if (nextSlide < maxSlides) {
          setSlide(nextSlide)
        }
      } else {
        const prevSlide = currentSlide - 1
        if (prevSlide >= 0) {
          if (prevSlide === 0) setPosition(initialCarouselPosition)
          setSlide(prevSlide)
        }
      }
    },
    [initialCarouselPosition, maxSlides, currentSlide, setSlide, setPosition],
  )

  useEffect(() => {
    if (currentSlide === 0) setPosition(initialCarouselPosition)
    else {
      setPosition(currentSlide * slideWidth * -1)
    }
  }, [initialCarouselPosition, currentSlide, slideWidth, setPosition])

  useEffect(() => {
    motionX.set(position)
  }, [position, motionX])

  useEffect(() => {
    if (containerRef.current) {
      if (mediaBreakpoint === 'sm' || mediaBreakpoint === 'md') setSlideWidth(containerRef.current.getBoundingClientRect().width)
      else setSlideWidth(containerRef.current.getBoundingClientRect().width + slideOffset)
    }
    setSlide(0)
  }, [slideOffset, mediaBreakpoint, setSlide, setSlideWidth])

  return {
    containerRef,
    carouselWidth,
    x: motionX,
    position,
    paginate,
    pagination,
    currentSlide,
    setSlide,
  }
}
