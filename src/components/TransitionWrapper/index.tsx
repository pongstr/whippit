import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const TransitionWrapper: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ type: 'spring', duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
export default TransitionWrapper
