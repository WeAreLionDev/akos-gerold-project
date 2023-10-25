import classNames from 'classnames'
import { motion } from 'framer-motion'
import { type FC } from 'react'
import { animationSwipePower } from 'src/utility'

import { Testimonial } from 'src/components/react'

import { INITIAL_CAROUSEL_POSITION, SLIDER_GAP_OFFSET, SWIPE_CONFIDENCE_THRESHOLD } from './TestimonialCarousel.consts'
import './TestimonialCarousel.css'
import { CarouselDirection, type TestimonialCarouselProps } from './TestimonialCarousel.interface'
import { useCarouselHookProps } from './TestimonialCarousel.utility'

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const { containerRef, carouselWidth, position, x, paginate, pagination, setSlide, currentSlide } = useCarouselHookProps(
    INITIAL_CAROUSEL_POSITION,
    testimonials.length,
    SLIDER_GAP_OFFSET,
  )

  return (
    <div className="flex flex-col items-center">
      <div ref={containerRef} className="flex w-full max-w-7xl flex-col overflow-hidden">
        <motion.div
          style={{ x, width: carouselWidth }}
          animate={{ x: position }}
          transition={{
            x: { type: 'spring', stiffness: 600, damping: 150, duration: 1 },
          }}
          drag="x"
          dragConstraints={{
            left: position,
            right: 0,
          }}
          dragElastic={1}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = animationSwipePower(offset.x, velocity.x)
            if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
              paginate(CarouselDirection.Forward)
            } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
              paginate(CarouselDirection.Back)
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
            {pagination.map((slide) => (
              <li
                key={slide}
                className={classNames('h-4 w-4 cursor-pointer rounded-full', `${currentSlide === slide ? 'bg-zinc-500' : 'bg-zinc-300'}`)}
                onClick={() => setSlide(slide)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel
