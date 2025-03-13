import { ChildrenProps } from '@/models/common/common.model'

const Body = ({ children }: ChildrenProps) => {
  return (
    <main className={`mx-auto max-w-screen-2xl w-full`}>
      <div className="container mx-auto">{children}</div>
    </main>
  )
}

export default Body
