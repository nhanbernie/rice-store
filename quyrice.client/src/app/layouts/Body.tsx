'use client'
import { ChildrenProps } from '@/common/models/common/common.model'

const Body = ({ children }: ChildrenProps) => {
  return <div className="container w-full mx-auto">{children}</div>
}

export default Body
