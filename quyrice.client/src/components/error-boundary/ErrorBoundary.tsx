'use client'

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

const ErrorFallback = () => (
  <div className="text-center text-red-500 p-4">
    <h2>Something went wrong.</h2>
    <p>Please try again later.</p>
  </div>
)

interface Props {
  children: React.ReactNode
}

export default function ErrorBoundary({ children }: Props) {
  return <ReactErrorBoundary FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>
}
