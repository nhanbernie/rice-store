'use client'

import { motion } from 'framer-motion'
import { TitleMotionProps } from '@/common/models/animations/animation.modal'

const TitleMotion = ({ className, title, variants }: TitleMotionProps) => {
  return (
    <motion.h2 className={className} variants={variants} initial="initial" animate="animate">
      {title}
    </motion.h2>
  )
}

export default TitleMotion
