import { motion, useAnimationControls } from 'framer-motion'
import { type FC, useCallback, useEffect, useRef, useState } from 'react'
import { useMediaBreakpoint } from 'src/utility'

import Image from 'src/components/sanity/Image.tsx'

import './ClientCarousel.css'
import type { ClientCarouselProps } from './ClientCarousel.interface'

const ClientCarousel: FC<ClientCarouselProps> = ({ clients }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)
  const animationControls = useAnimationControls()
  const { mediaBreakpoint } = useMediaBreakpoint()
  const [carouselWidth, setCarouselWidth] = useState<number>(0)

  const imgClasses = 'block h-auto w-full object-cover grayscale transition-all duration-300 ease-in-out hover:grayscale-0 delay-150'

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
        {clients.map(({ _id, image, companyName }, index) => {
          if (index === 0) {
            return (
              <motion.div ref={itemsRef} key={_id} className="flex flex-col items-center justify-center">
                <div className="flex w-20 cursor-pointer flex-col">
                  <Image asset={image} alt={companyName} className={imgClasses} />
                </div>
              </motion.div>
            )
          }
          return (
            <motion.div key={_id} className="flex flex-col items-center justify-center">
              <div className="flex w-20 cursor-pointer flex-col">
                <Image asset={image} alt={companyName} className={imgClasses} />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default ClientCarousel
