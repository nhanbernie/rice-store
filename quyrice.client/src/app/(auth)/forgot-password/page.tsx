'use client'
import { AuthForm, AuthPage } from '@/components/auth-page'

export default function Register() {
  return (
    <AuthPage>
      <div className="text-start">
        <AuthForm type={'forgotPassword'} />
      </div>
    </AuthPage>
  )
}
