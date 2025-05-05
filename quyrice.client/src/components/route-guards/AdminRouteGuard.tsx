'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { ROUTES } from '@/common/constants/routes/routes.constant'

export default function AdminRouteGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(ROUTES.LOGIN)
      return
    }

    if (!isAdmin) {
      router.replace(ROUTES.HOME)
    }
  }, [isAuthenticated, isAdmin, router])

  if (!isAuthenticated || !isAdmin) {
    return null
  }

  return <>{children}</>
}
