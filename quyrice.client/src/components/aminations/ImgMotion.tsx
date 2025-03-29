"use client"

import { motion } from 'framer-motion'
import React from 'react'
import { ImgMotionProps } from '@/common/models/animations/animation.modal'

const ImgMotion: React.FC<ImgMotionProps> = ({
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
}) => {
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
