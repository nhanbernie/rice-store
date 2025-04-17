export interface ICommonAuth {
  userName: string
  password: string
}

export interface IAuth extends ICommonAuth {
  login: Record<string, unknown>
  register: {
    email: string
    confirmPassword: string
  }
  fogotPassword: Record<string, unknown>
}
