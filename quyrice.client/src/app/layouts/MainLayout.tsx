'use client'

import { Footer, Header } from './index'
import { ChildrenProps } from '@/common/models/common/common.model'
import { usePathname } from 'next/navigation'

const MainLayout = ({ children }: ChildrenProps) => {
  const pathName = usePathname()
  return (
    <div className="flex flex-col flex-wrap min-h-screen">
      <div className="container max-w-screen-2xl mx-auto">
        <Header />
        <main className="flex-grow max-sm:px-4">{children}</main>
        {pathName !== '/contact' && <Footer />}
      </div>
    </div>
  )
}

export default MainLayout
