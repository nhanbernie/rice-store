'use client'
import AuthPage from '@/components/auth-page/AuthPage'
import { IInputFieldProps } from '@/common/models/input/input.model'
import AuthForm from '@/components/auth-page/AuthForm'

export default function Register() {
  const inputField: IInputFieldProps[] = [
    { label: 'Username', name: 'username', type: 'text', placeholder: 'Enter your username' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
    { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter your password' },
    {
      label: 'Confirm Password',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm your password',
    },
  ]

  return (
    <AuthPage>
      <AuthForm inputField={inputField} />
    </AuthPage>
  )
}
