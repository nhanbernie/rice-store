import { Variants } from 'framer-motion'

export const titleAnimation: Variants = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
}

export const productCardAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: custom * 0.1, ease: [0.42, 0, 0.58, 1] },
  }),
}

export const hoverButton = {
  whileHover: { scale: 1.1 },
  transition: { type: 'spring', stiffness: 300, damping: 15 },
}

export const tapScale = {
  whileTap: { scale: 0.9 },
  transition: { duration: 0.2, ease: 'easeOut' },
}

export const hoverImage = {
  whileHover: { scale: 1.1 },
  transition: { duration: 0.5, delay: 0.1 },
}
