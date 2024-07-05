import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const TransitionWrapper: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 550 }}
        transition={{ type: 'spring', duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
export default TransitionWrapper
