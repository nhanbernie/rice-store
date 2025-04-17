import React, { FC } from 'react'
import { IInputProps } from '@/common/models/input/input.model'

const Input: FC<IInputProps> = ({
  id,
  type,
  className,
  placeholder,
  onChange,
  onBlur,
  readOnly,
  ...field
}) => {
  return (
    <input
      id={id}
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      readOnly={readOnly}
      {...field}
    />
  )
}

export default Input
