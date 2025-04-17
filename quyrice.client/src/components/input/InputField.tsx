'use client'
import { FC, useState } from 'react'
import { useFormContext, useController } from 'react-hook-form'
import { IInputFieldProps } from '@/common/models/input/input.model'
import Icon from '../icons/Icon'
import { COMMON_ICON } from '@/common/constants/styles/icons/icon.constant'

const InputField: FC<IInputFieldProps> = ({ name, label, type = 'text', placeholder = '' }) => {
  const { control } = useFormContext()
  const {
    field: { value, ...field },
    fieldState: { error },
  } = useController({ name, control })

  const [visible, setVisible] = useState(false)
  const isPasswordType = type === 'password'

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className={`relative ${label && 'mt-1'}`}>
        <input
          {...field}
          value={value ?? ''}
          id={name}
          type={isPasswordType && visible ? 'text' : type}
          placeholder={placeholder}
          className={`w-full px-6 py-4 pr-10 bg-gray-100 rounded-3xl outline-none ${
            error ? 'border-red-500' : 'border-transparent'
          } focus:ring-green-900 focus:ring-1 transition-transform duration-200`}
        />

        {isPasswordType && (
          <div
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={() => setVisible((prev) => !prev)}
            onMouseDown={(e) => e.preventDefault()}
          >
            <Icon
              id={visible ? COMMON_ICON.EyeIcon : COMMON_ICON.EyeSlashIcon}
              className="w-5 h-5 text-gray-400"
            />
          </div>
        )}
      </div>

      {error && <p className="px-6 mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  )
}

export default InputField
