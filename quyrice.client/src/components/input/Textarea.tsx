import ITexttareaProps from '@/common/models/input/input.model'
import { useFormContext, useController } from 'react-hook-form'
import { motion } from 'framer-motion'
import ErrorField from './ErrorField'

const Textarea = ({ name, label, placeholder, className }: ITexttareaProps) => {
  const { control } = useFormContext()

  const {
    field: { value, ...field },
    fieldState: { error },
  } = useController({ name, control })

  return (
    <>
      {label && (
        <label htmlFor={name} className="b  lock text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className={`${label && 'mt-1'} relative`}>
        <motion.textarea
          {...field}
          id={name}
          value={value ?? ''}
          placeholder={placeholder}
          animate={{
            scale: error ? [1, 1.02, 1] : 1,
          }}
          transition={{
            duration: 0.2,
            ease: 'easeInOut',
          }}
          className={`
            w-full 
            h-[200px] 
            px-6 py-4 
            pr-10 
            bg-gray-100 
            rounded-3xl 
            outline-none 
            resize-none 
            border
            ${error ? 'border-red-500' : 'border-transparent'} 
            focus:ring-green-900 
            focus:ring-1
            focus:border-green-900 
            placeholder-gray-400 
            text-gray-800 
            text-base 
            transition-all 
            duration-200 
            ${className}
          `}
        />
        <ErrorField error={error} />
      </div>
    </>
  )
}

export default Textarea
