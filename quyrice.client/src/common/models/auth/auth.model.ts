import React from 'react'

export interface IAuthPageProps {
  children: React.ReactNode
}

export interface RegisterFormData {
  username: string
  email: string
  password: string
  confirmPassword: string
}

export interface IAuthFormProps {
  type: 'login' | 'register' | 'forgotPassword'
}

export interface RegisterFormData {
  username: string
  email: string
  password: string
  confirmPassword: string
}
