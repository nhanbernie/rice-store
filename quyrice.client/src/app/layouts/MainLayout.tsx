'use client'

import { Footer, Header } from './index'
import { ChildrenProps } from '@/models/common/common.model'

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-col flex-wrap min-h-screen">
      <div>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
