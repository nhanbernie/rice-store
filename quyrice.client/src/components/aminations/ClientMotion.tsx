'use client'

import { motion } from 'framer-motion'

interface ClientMotionProps {
  children: React.ReactNode
  className?: string
  initial?:
    | import('framer-motion').TargetAndTransition
    | import('framer-motion').VariantLabels
    | undefined
  animate?:
    | import('framer-motion').TargetAndTransition
    | import('framer-motion').VariantLabels
    | undefined
  whileHover?:
    | import('framer-motion').TargetAndTransition
    | import('framer-motion').VariantLabels
    | undefined
  whileTap?:
    | import('framer-motion').TargetAndTransition
    | import('framer-motion').VariantLabels
    | undefined
  transition?: import('framer-motion').Transition | undefined
}

const ClientMotion = ({
  children,
  className,
  initial,
  animate,
  whileHover,
  whileTap,
  transition,
}: ClientMotionProps) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      whileTap={whileTap}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

export default ClientMotion
