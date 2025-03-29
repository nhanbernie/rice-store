import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      primary: {},
      transitionProperty: {
        colors: 'background-color, color, border-color',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
  safelist: [
    // 🎨 (Background Colors)
    'bg-red-300',
    'hover:bg-red-600',

    // 🎨 (Text Colors)
    'text-white',
    'text-gray-900',
    'text-gray-700',

    // 📏 (Spacing)
    'my-16',
    'mb-16',
    'mx-auto',
    'mt-28',
    'mt-16',  

    // 📐 (Width & Max Width)
    'w-full',
    'max-w-screen-2xl',

    // 🔤 (Font Weight)
    'font-bold',
    'font-extrabold',
    'font-semibold',
    'font-medium',

    'lg:mt-28',
  ],
} satisfies Config
