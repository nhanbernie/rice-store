import React from 'react'

export interface IInputFieldProps {
  name: string
  label?: string
  type?: string
  placeholder?: string
  className?: string
}

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  type: string
  className: string
  placeholder: string
  onChange: () => void
  onBlur: () => void
  readOnly: boolean
}

export default interface ITexttareaProps {
  name: string
  label?: string
  placeholder?: string
  className?: string
}
