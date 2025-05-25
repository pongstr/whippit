import React from 'react'
import { AnimatePresence, motion } from 'motion/react'

export const Transition: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: -50, overflowY: 'hidden' }}
        animate={{ opacity: 1, y: 0, overflowY: 'hidden' }}
        exit={{ opacity: 0, y: 50, overflowY: 'hidden' }}
        transition={{ type: 'spring', duration: 1.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
