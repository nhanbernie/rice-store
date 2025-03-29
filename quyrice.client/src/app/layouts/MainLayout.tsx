'use client'

import { Footer, Header } from './index'
import { ChildrenProps } from '@/common/models/common/common.model'

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-col flex-wrap min-h-screen">
      <></>
      <div className="container max-w-screen-2xl mx-auto">
        <Header />
        <main className="flex-grow max-sm:px-4">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
