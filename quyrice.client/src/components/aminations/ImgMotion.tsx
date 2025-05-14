'use client'

import { motion } from 'framer-motion'
import { ImgMotionProps } from '@/common/models/animations/animation.modal'

const ImgMotion = ({
  src,
  className,
  altImg,
  onClick,
  variants,
  initial,
  animate,
  whileHover,
  transition,
  ...rest
}: ImgMotionProps) => {
  return (
    <motion.img
      src={src}
      className={className}
      alt={altImg}
      onClick={onClick}
      variants={variants}
      initial={initial}
      animate={animate}
      whileHover={whileHover}
      transition={transition}
      {...rest}
    />
  )
}

export default ImgMotion
