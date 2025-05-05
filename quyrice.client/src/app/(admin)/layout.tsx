'use client'

import React from 'react'
import AdminRouteGuard from '@/components/route-guards/AdminRouteGuard'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminRouteGuard>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    </AdminRouteGuard>
  )
}
