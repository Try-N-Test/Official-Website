'use client'
import {motion} from 'motion/react'

const AnimatedAurora = () => {
  return (
    <motion.div
    className="absolute inset-0 z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <svg className="h-full w-full">
      <defs>
        <radialGradient id="aurora1" cx="75%" cy="50%" r="70%">
          <stop offset="0%" stopColor="rgba(46, 183, 185, 0.3)" />
          <stop offset="100%" stopColor="rgba(46, 183, 185, 0)" />
        </radialGradient>
        <radialGradient id="aurora2" cx="25%" cy="70%" r="75%">
          <stop offset="0%" stopColor="rgba(46, 183, 185, 0.25)" />
          <stop offset="100%" stopColor="rgba(46, 183, 185, 0)" />
        </radialGradient>
      </defs>
      <motion.circle
        cx="75%"
        cy="50%"
        r="70%"
        fill="url(#aurora1)"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="25%"
        cy="70%"
        r="70%"
        fill="url(#aurora2)"
        animate={{
          scale: [1.4, 1, 1.4],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </svg>
  </motion.div>
  )
}

export default AnimatedAurora
