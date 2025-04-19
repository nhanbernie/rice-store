'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const authLinkMap = {
  '/login': {
    line1: {
      text: 'Don’t have an account?',
      linkText: 'Sign up',
      href: '/register',
    },
    line2: {
      text: 'Forgot password',
      href: '/forgot-password',
    },
  },
  '/register': {
    line1: {
      text: 'Already have an account?',
      linkText: 'Log in',
      href: '/login',
    },
    line2: {
      text: 'Forgot password',
      href: '/forgot-password',
    },
  },
  '/forgot-password': {
    line1: {
      text: 'Remember your password?',
      linkText: 'Log in',
      href: '/login',
    },
    line2: {
      text: 'Create new account',
      href: '/register',
    },
  },
} 

const AuthFooterLinks = () => {
  const pathName = usePathname()
  const content = authLinkMap[pathName as keyof typeof authLinkMap]

  if (!content) return null

  return (
    <div className="text-center mt-6">
      <p className="text-sm text-gray-500">
        {content.line1.text}{' '}
        <Link href={content.line1.href} className="font-semibold text-black">
          {content.line1.linkText}
        </Link>
      </p>
      <div className="mt-2">
        <Link href={content.line2.href} className="text-xs font-bold">
          {content.line2.text}
        </Link>
      </div>
    </div>
  )
}

export default AuthFooterLinks
