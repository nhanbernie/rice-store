import { ReactNode } from 'react'
import { BaseMotionProps } from '../animations/animation.modal'

export interface ButtonProps extends BaseMotionProps {
  idIcon?: string | undefined
  text?: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
  srcImg?: string
  altImg?: string
  styleButton?: string
  className?: string
  index?: string | number
  children?: ReactNode
}
