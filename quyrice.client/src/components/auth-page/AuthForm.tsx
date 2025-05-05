'use client'

import FormProvider from '@/components/form/AuthProvider'
import validatorSchema from '@/libs/validator/auth.validator'
import InputField from '@/components/input/InputField'
import { IAuthFormProps } from '@/common/models/auth/auth.model'
import { inputField } from '@/common/constants/auth/auth.constant'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/redux/features/auth/authSlice'
import { authService } from '@/services/auth.service'
import { useState } from 'react'
import { InferType } from 'yup'

type LoginFormData = InferType<typeof validatorSchema.login>
type RegisterFormData = InferType<typeof validatorSchema.register>
type ForgotPasswordFormData = InferType<typeof validatorSchema.forgotPassword>

const AuthForm = ({ type }: IAuthFormProps) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [error, setError] = useState<string | null>(null)

  const BUTTON_TITLE: Record<string, string> = {
    login: 'Login',
    register: 'Create now',
    forgotPassword: 'Reset my password',
  }

  const titleButton = (type: string): string => {
    return BUTTON_TITLE[type] || 'Submit'
  }

  const onSubmit = async (data: LoginFormData | RegisterFormData | ForgotPasswordFormData) => {
    try {
      setError(null)

      if (type === 'login') {
        const loginData = data as LoginFormData
        const response = await authService.login({
          email: loginData.email,
          password: loginData.password,
        })

        dispatch(setCredentials(response))
        router.push('/')
      } else if (type === 'register') {
        // const registerData = data as RegisterFormData
        // // Implement register logic
        // const dataRegister = {
        //   name: registerData.username,
        //   password: registerData.password,
        //   email: registerData.email,
        // }
        // API call here
        router.push('/login')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <FormProvider onSubmit={onSubmit} validatorSchema={validatorSchema[type]}>
      <div className="">
        {inputField(type).map((input) => (
          <InputField
            key={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-2 mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full bg-green-900 text-white py-4 rounded-3xl hover:bg-green-800 transition-colors"
      >
        {titleButton(type)}
      </button>
    </FormProvider>
  )
}

export default AuthForm
