import FormProvider from '@/components/form/AuthProvider'
import validatorSchema from '@/libs/validator/auth.validator'
import InputField from '@/components/input/InputField'
import { IAuthFormProps } from '@/common/models/auth/auth.model'

const AuthForm = ({ inputField }: IAuthFormProps) => {
  interface RegisterFormData {
    username: string
    email: string
    password: string
    confirmPassword: string
  }
  const onSubmit = async (data: RegisterFormData) => {
    const dataRegister = {
      name: data.username,
      password: data.password,
      email: data.email,
    }
    try {
      const res = await fetch('http://localhost:1901/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataRegister),
      })
      const result = await res.json()
      console.log('check result: ', result)
    } catch (err) {
      console.log('Error: ', err)
    }
  }

  return (
    <div className="text-start">
      <FormProvider onSubmit={onSubmit} validatorSchema={validatorSchema.register}>
        <div className="">
          {inputField.map((input) => (
            <InputField
              key={input.name}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
            />
          ))}
        </div>
        <button type="submit" className="w-full bg-green-900 text-white py-4 rounded-3xl">
          Start
        </button>
      </FormProvider>
    </div>
  )
}

export default AuthForm
