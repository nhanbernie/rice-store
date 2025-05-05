export const ROUTES = {
  // Public routes
  HOME: '/',
  PRODUCTS: '/products',
  SERVICES: '/services',
  CONTACT: '/contact',
  ABOUT: '/about',

  // Auth routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',

  // Protected routes (Admin)
  ADMIN: {
    PRODUCTS_MANAGEMENT: '/products-management',
  },
} as const

export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.PRODUCTS,
  ROUTES.SERVICES,
  ROUTES.CONTACT,
  ROUTES.ABOUT,
]

export const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.FORGOT_PASSWORD]

export const PROTECTED_ROUTES = [ROUTES.ADMIN.PRODUCTS_MANAGEMENT]
