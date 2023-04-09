import { motion } from 'framer-motion'
import Router from 'next/router'
import React, { FC, ReactNode } from 'react'

const RoutesAnimation: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      key={Router.route}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      transition={{ duration: 0.2 }}
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          filter: `invert()`,
          opacity: 0,
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default RoutesAnimation
