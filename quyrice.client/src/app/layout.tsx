import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/themeContext'
import { GoogleOAuthProvider } from '@react-oauth/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Cửa hàng gạo Quý',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white dark:bg-black transition-colors duration-300`}>
        <GoogleOAuthProvider clientId="25809794192-f8ci3k7nkk4cl2o9t38dtaoujupq6u70.apps.googleusercontent.com">
          <ThemeProvider>{children}</ThemeProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  )
}
