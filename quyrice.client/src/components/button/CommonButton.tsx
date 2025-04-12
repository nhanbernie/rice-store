'use client'

import React from 'react'
import { ButtonProps } from '@/common/models/button/button.model'
import Icon from '@/components/icons/Icon'
import { motion } from 'framer-motion'

const CommonButton: React.FC<ButtonProps> = ({
  idIcon,
  text,
  onClick,
  className,
  styleButton,
  variants,
  ...rest
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`${
        styleButton ? styleButton : 'flex items-center justify-center gap-2 rounded-xl px-2 py-2'
      }`}
      variants={variants}
      initial="initial"
      animate="animate"
      {...rest}
    >
      {idIcon && <Icon id={idIcon} className={`${className ? className : 'mr-2 rounded-lg'}`} />}
      {text}
    </motion.button>
  )
}

export default CommonButton
