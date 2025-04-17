'use client'
import { useState } from 'react'
import Link from 'next/link'
import ThemeToggleButton from '@/components/ThemeToggleButton'
import CommonButton from '@/components/button/CommonButton'
import { HEADER_SIZE } from '@/common/constants/styles/sizes/header-sizes.constant'
import { usePathname } from 'next/navigation'
import { COMMON_ICON } from '@/common/constants/styles/icons/icon.constant'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()
  const isServiesPage = pathName === '/services'

  return (
    <header
      id="custom-header"
      className={`${
        isServiesPage && 'backdrop-blur-md bg-white/40'
      } fixed left-0 right-0 top-0 m-auto max-w-screen-2xl w-full z-50 bg-white dark:bg-zinc-900 dark:text-white text-[#292929] shadow-lg bg-opacity-90 rounded-3xl`}
    >
      {/* Web */}
      <div
        className={`flex justify-between items-center w-full px-8 sm:px-24 ${HEADER_SIZE.PADDING_X} py-5`}
      >
        {/* Logo */}
        <div className="w-2/12 text-2xl dark:text-white text-black font-bold">
          <Link href="/">Rice</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-4 w-4/12 space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-xs px-4 rounded-2xl  border-none focus:outline-none focus:ring-1 focus:ring-[#2f663c]"
          />
          <CommonButton
            idIcon={COMMON_ICON.SearchIcon}
            className="hover:bg-[#2f663c] transition-all duration-300"
            styleButton="rounded-none"
          />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-12 w-6/12 justify-center font-semibold">
          <Link href="/" className="hover:text-[#2f663c] transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-[#2f663c] transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-[#2f663c] transition-colors">
            Contact
          </Link>
        </nav>
        {/* Theme Toggle */}
        <div className="justify-center items-center space-x-4 hidden md:flex">
          <CommonButton
            idIcon="shopping-cart-icon"
            className="w-5 h-5 text-black dark:text-white mr-2"
          />
          <CommonButton idIcon="account-icon" className="w-5 h-5 text-black dark:text-white mr-2" />
          <ThemeToggleButton />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-700 dark:bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Link
            href="/"
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Theme Toggle Mobile */}
          <ThemeToggleButton />
        </div>
      </div>

      {/* Overlay when open sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  )
}

export default Header
