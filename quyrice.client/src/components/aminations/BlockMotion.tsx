'use client'
import { productCardAnimation } from '@/common/constants/animations/common-animations.constant'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
interface BlockMotionProps {
  className?: string
  variants?: import('framer-motion').Variants
  index?: string | number
  children?: ReactNode
  animate?: 'initial' | 'animate' | 'exit'
}

const BlockMotion = ({ className, variants, index, children }: BlockMotionProps) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial={productCardAnimation.initial}
      custom={index}
      animate={productCardAnimation.animate(index as number)}
    >
      {children}
    </motion.div>
  )
}

export default BlockMotion
