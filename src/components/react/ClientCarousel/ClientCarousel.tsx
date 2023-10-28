import { motion, useAnimationControls } from 'framer-motion'
import { type FC, useCallback, useEffect, useRef, useState } from 'react'
import { useMediaBreakpoint } from 'src/utility'

import './ClientCarousel.css'
import type { ClientCarouselProps } from './ClientCarousel.interface'

const ClientCarousel: FC<ClientCarouselProps> = ({ clients }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)
  const animationControls = useAnimationControls()
  const { mediaBreakpoint } = useMediaBreakpoint()
  const [carouselWidth, setCarouselWidth] = useState<number>(0)

  const onReset = useCallback(() => {
    if (mediaBreakpoint === 'sm' || mediaBreakpoint === 'md') return
    animationControls.start({
      x: 0,
      y: 0,
    })
  }, [animationControls, mediaBreakpoint])

  useEffect(() => {
    const itemsWidth = itemsRef.current?.getBoundingClientRect().width
    const itemsOffset = mediaBreakpoint === 'md' || mediaBreakpoint === 'sm' ? 80 : 0
    if (itemsWidth) {
      setCarouselWidth(itemsWidth * 10 + itemsOffset)
    }
    onReset()
  }, [mediaBreakpoint, onReset])

  return (
    <div ref={containerRef} className="flex w-full max-w-screen flex-col xl:max-w-7xl">
      <motion.div
        className="client-section"
        drag="x"
        animate={animationControls}
        dragConstraints={containerRef}
        dragElastic={1}
        onDragEnd={onReset}
        style={{ width: carouselWidth }}
      >
        {clients.map(({ id, logo }, index) => {
          if (index === 0) {
            return (
              <motion.div
                ref={itemsRef}
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
            )
          }
          return (
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
          )
        })}
      </motion.div>
      <div className="client-scrollbar">
        <motion.div />
      </div>
    </div>
  )
}

export default ClientCarousel
