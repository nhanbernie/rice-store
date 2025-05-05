'use client'

import { AnimatePresence, motion } from 'framer-motion'

interface IErrorFieldProps {
  error?: {
    message?: string
    [key: string]: any
  }
}
const ErrorField = ({ error }: IErrorFieldProps) => {
  return (
    <AnimatePresence>
      {error && (
        <motion.div
          key={typeof error === 'string' ? error : error.message}
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            height: 'auto',
            transition: {
              duration: 0.2,
              ease: 'easeOut',
            },
          }}
          exit={{
            opacity: 0,
            y: -10,
            height: 0,
            transition: {
              duration: 0.15,
              ease: 'easeIn',
            },
          }}
        >
          <motion.p
            className="px-6 mt-2 text-sm text-red-600 flex items-center"
            initial={{ color: '#EF4444' }}
            animate={{
              color: ['#EF4444', '#DC2626', '#EF4444'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {error.message}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ErrorField
