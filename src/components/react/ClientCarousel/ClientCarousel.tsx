import { motion, useAnimationControls } from 'framer-motion'
import { type FC, useRef } from 'react'

import './ClientCarousel.css'
import type { ClientCarouselProps } from './ClientCarousel.interface'

const ClientCarousel: FC<ClientCarouselProps> = ({ clients }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationControls = useAnimationControls()
  const onReset = () => {
    animationControls.start({
      x: 0,
      y: 0,
    })
  }

  return (
    <div ref={containerRef} className="flex w-full max-w-sm flex-col xl:max-w-7xl">
      <motion.div
        className="client-section cursor-move self-center"
        drag="x"
        animate={animationControls}
        dragConstraints={containerRef}
        dragElastic={1}
        onDragEnd={onReset}
      >
        {clients.map(({ id, logo }) => (
          <motion.div
            whileTap={{ scale: 1.5 }}
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.5, easings: 'easeInOut', damping: 0.25, stiffness: 500 },
            }}
            key={id}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex w-20 cursor-pointer flex-col">
              <img src={logo} alt={id} className="block h-auto w-full object-cover" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="client-scrollbar">
        <motion.div />
      </div>
    </div>
  )
}

export default ClientCarousel
