import { useStore } from '@nanostores/react'
import { AnimatePresence, motion } from 'framer-motion'
import type { FC } from 'react'

import { isMenuOpen } from 'src/stores'

import { MOBILE_MENU_ANIMATION } from './MobileMenu.consts'
import type { MobileMenuProps } from './MobileMenu.interface'

const MobileMenu: FC<MobileMenuProps> = ({ children }) => {
  const menuState = useStore(isMenuOpen)
  const handleToggleMenuState = () => isMenuOpen.set(!menuState)
  return (
    <AnimatePresence>
      {menuState && (
        <motion.div
          key="mobile-menu"
          animate="open"
          initial="close"
          exit="close"
          transition={{ y: { type: 'spring', stiffness: 300, damping: 30 } }}
          variants={MOBILE_MENU_ANIMATION}
          className="fixed bottom-0 left-0 right-0 z-30 flex max-h-screen max-w-screen flex-col bg-slate-900 shadow-md shadow-black xl:hidden"
          onClick={handleToggleMenuState}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
