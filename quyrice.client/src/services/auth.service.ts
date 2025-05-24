interface LoginCredentials {
  email: string
  password: string
}

// interface User {
//   id: string
//   email: string
//   role: 'admin' | 'user'
// }

// Mock user database
const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@example.com',
    password: 'Admin@1235678',
    role: 'admin' as const,
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'Admin@1235678',
    role: 'user' as const,
  },
]

export const authService = {
  login: async ({ email, password }: LoginCredentials) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user = MOCK_USERS.find((u) => u.email === email && u.password === password)

    if (!user) {
      throw new Error('Invalid credentials')
    }

    const { password: _, ...userWithoutPassword } = user
    const token = `mock-jwt-token-${user.id}`

    // Store in cookies
    document.cookie = `user=${JSON.stringify(userWithoutPassword)}; path=/`
    document.cookie = `token=${token}; path=/`

    return {
      user: userWithoutPassword,
      token,
    }
  },

  logout: async () => {
    // Clear cookies
    document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT'
  },
}

export const getProducts = async () => {
  try {
    const res = await fetch('http://localhost:1901/api/products').then((res) => res.json())
    return res
  } catch (error) {
    console.log(error)
  }
}
