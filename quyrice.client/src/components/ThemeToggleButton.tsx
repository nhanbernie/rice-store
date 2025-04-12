/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useTheme } from '@/contexts/themeContext'
import Icon from './icons/Icon'
import { COMMON_ICON } from '@/common/constants/styles/icons/icon.constant'

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} className="p-1 rounded-md transition-colors duration-300">
      <Icon id={COMMON_ICON.IconSun} className="w-5 h-5 dark:text-white text-black" />
    </button>
  )
}

export default ThemeToggleButton
