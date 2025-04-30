'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeContextType, ThemeProviderProps } from '@/common/models/theme/theme.modal'
import { ERROR_MESSAGE } from '@/common/constants/messages/error-message..constants'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(ERROR_MESSAGE.EM001)
  }
  return context
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<ThemeContextType['theme']>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      setTheme(storedTheme as ThemeContextType['theme'])
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
