import { MotionProps } from 'framer-motion'

export interface TitleMotionProps extends BaseMotionProps {
  tab?: string | 'div'
  title?: string
}

export interface BaseMotionProps extends MotionProps {
  className?: string
  variants?: import('framer-motion').Variants
  initial?: string
  animate?: string
  whileHover?: import('framer-motion').TargetAndTransition
  transition?: import('framer-motion').TargetAndTransition
}

export interface ImgMotionProps extends BaseMotionProps {
  src?: string
  altImg?: string
  onClick?: () => void
}
