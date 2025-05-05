import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/themeContext'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ReduxProvider } from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quy Rice',
  description: 'Rice Store',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-white dark:bg-black transition-colors duration-300 ${inter.className}`}
        suppressHydrationWarning
      >
        <GoogleOAuthProvider clientId="25809794192-f8ci3k7nkk4cl2o9t38dtaoujupq6u70.apps.googleusercontent.com">
          <ThemeProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </ThemeProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}
