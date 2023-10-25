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
        className="client-section self-center"
        drag="x"
        animate={animationControls}
        dragConstraints={containerRef}
        dragElastic={1}
        onDragEnd={onReset}
      >
        {clients.map(({ id, logo }) => (
          <div key={id} className="flex w-32 flex-col">
            <img src={logo} alt={id} className="w-ful block h-auto object-cover" />
          </div>
        ))}
      </motion.div>
      <div className="client-scrollbar">
        <motion.div />
      </div>
    </div>
  )
}

export default ClientCarousel
