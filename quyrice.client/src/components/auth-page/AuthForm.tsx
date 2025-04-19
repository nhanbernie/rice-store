import FormProvider from '@/components/form/AuthProvider'
import validatorSchema from '@/libs/validator/auth.validator'
import InputField from '@/components/input/InputField'
import { IAuthFormProps } from '@/common/models/auth/auth.model'
import { inputField } from '@/common/constants/auth/auth.constant'
import { InferType } from 'yup'

const AuthForm = ({ type }: IAuthFormProps) => {
  const onSubmit = async (data: InferType<typeof validatorSchema[typeof type]>) => {
    const dataRegister = {
      name: 'username' in data ? data.username : undefined,
      password: 'password' in data ? data.password : undefined,
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
      <button type="submit" className="w-full bg-green-900 text-white py-4 rounded-3xl">
        Start
      </button>
    </FormProvider>
  )
}

export default AuthForm
