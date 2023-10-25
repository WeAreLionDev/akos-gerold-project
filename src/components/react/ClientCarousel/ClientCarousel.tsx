import { motion, useAnimationControls } from 'framer-motion'
import { type FC, useRef } from 'react'

import './ClientCarousel.css'
import type { ClientCarouselProps } from './ClientCarousel.interface'

const ClientCarousel: FC<ClientCarouselProps> = () => {
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
        {Array.from(Array(8)).map((id) => (
          <div key={`${id}-rd`} className="bg-red-500" />
        ))}
        {Array.from(Array(8)).map((id) => (
          <div key={`${id}-bl`} className="bg-blue-500" />
        ))}
        {Array.from(Array(8)).map((id) => (
          <div key={`${id}-blc`} className="bg-black" />
        ))}
      </motion.div>
      <div className="client-scrollbar">
        <motion.div />
      </div>
    </div>
  )
}

export default ClientCarousel
