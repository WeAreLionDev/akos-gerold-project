import classNames from 'classnames'
import { motion } from 'framer-motion'
import { type FC, useMemo, useState } from 'react'

import { Testimonial } from 'src/components/react'

import './TestimonialCarousel.css'
import type { TestimonialCarouselProps } from './TestimonialCarousel.interface'

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const slides = useMemo(() => Math.ceil(testimonials.length / 3), [testimonials])
  const handleSlideChange = (slide: number) => {
    if (slide < slides || slide !== 0) setCurrentSlide(slide)
  }
  return (
    <div className="flex flex-col items-center">
      <span>Slides: {slides}</span>
      <span>Current Slide: {currentSlide}</span>
      <div className="flex max-w-7xl flex-col overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{
            x: { type: 'spring', stiffness: 600, damping: 150 },
            opacity: { duration: 0.9 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              const nextSlide = currentSlide + 1
              console.log('nextSlide', nextSlide)
              if (nextSlide < slides) setCurrentSlide(nextSlide)
            } else if (swipe > swipeConfidenceThreshold) {
              const prevSlide = currentSlide - 1
              console.log('prevSlide', prevSlide)
              if (prevSlide > 0) setCurrentSlide(prevSlide)
            }
          }}
          className="testimonial-carousel"
        >
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </motion.div>
        <div className="flex flex-col py-10">
          <ul className="flex justify-center gap-4">
            {Array.from(Array(slides).keys()).map((slide) => (
              <li
                key={slide}
                className={classNames('h-4 w-4 cursor-pointer rounded-full', `${currentSlide === slide ? 'bg-zinc-500' : 'bg-zinc-300'}`)}
                onClick={() => handleSlideChange(slide)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel
