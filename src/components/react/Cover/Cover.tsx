import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkLarge } from '@fortawesome/sharp-solid-svg-icons'
import { useStore } from '@nanostores/react'
import { AnimatePresence, motion } from 'framer-motion'
import type { FC } from 'react'

import { IconContainer } from 'src/components/react'

import { isMenuOpen } from 'src/stores'

import { COVER_ANIMATION } from './Cover.consts'

const Cover: FC = () => {
  const menuState = useStore(isMenuOpen)
  const handleToggleMenuState = () => isMenuOpen.set(!menuState)

  return (
    <AnimatePresence>
      {menuState && (
        <motion.div
          key="cover"
          animate="open"
          initial="close"
          exit="close"
          variants={COVER_ANIMATION}
          className="fixed inset-0 z-20 hidden cursor-pointer bg-black"
          onClick={handleToggleMenuState}
        >
          <IconContainer className="group absolute right-0 top-0 hidden p-12 md:block">
            <FontAwesomeIcon
              icon={faXmarkLarge}
              className="group-hover:text-secondary h-7 w-7 cursor-pointer text-white transition-all duration-300 ease-in-out"
            />
          </IconContainer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Cover
