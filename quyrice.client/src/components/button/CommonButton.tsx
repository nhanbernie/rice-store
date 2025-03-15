import React from 'react'
import { ButtonProps } from '@/models/button/button.model'
import Icon from '@/components/icons/Icon'

const CommonButton: React.FC<ButtonProps> = ({
  idIcon,
  text,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl px-2 py-2 transition-all duration-300`}
    >
      {idIcon && <Icon id={`icon-account`} className={`mr-2 rounded-lg ${className}`} />}
      {text}
    </button>
  )
}

export default CommonButton
