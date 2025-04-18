import { IInputFieldProps } from '@/common/models/input/input.model'
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
  inputField: IInputFieldProps[]
}
