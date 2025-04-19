import { IInputFieldProps } from "@/common/models/input/input.model";

const commonFields: IInputFieldProps[] = [
  { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
  { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter your password' },
];

export const inputField = (type: 'register' | 'login' | 'forgotPassword'): IInputFieldProps[] => {
  const fields: Record<'register' | 'login' | 'forgotPassword', IInputFieldProps[]> = {
    register: [
      ...commonFields,
      { label: 'Username', name: 'username', type: 'text', placeholder: 'Enter your username' },
      { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Confirm your password' }
    ],
    login: [...commonFields],
    forgotPassword:  [
      { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
    ]
  };

  return fields[type];
};