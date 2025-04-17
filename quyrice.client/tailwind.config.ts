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
    // ⚙️ (Flex)
    'flex',
    'items-center',
    'justify-center',

    // ⚙️ (Gap)
    'gap-2',

    // 📏 (Border Radius)
    'rounded-full',
    'rounded-lg',
    'rounded-xl',
    'rounded-3xl',
    'rounded-[50px]',

    // 🎨 (Background Colors)
    'bg-red-300',
    'hover:bg-red-600',
    'bg-white/60',

    // 🎨 (Text Colors)
    'text-white',
    'text-gray-900',
    'text-gray-700',
    'text-3xl',

    // 📏 (Spacing)
    'my-16',
    'mb-16',
    'mx-auto',  
    'mt-1',
    'mt-28',
    'mt-16',
    'pt-16',
    'pt-28',
    'mt-[76px]',
    'mt-0',

    // 📐 (Width & Max Width)
    'w-full',
    'max-w-screen-2xl',

    // 🔤 (Font Weight)
    'font-bold',
    'font-extrabold',
    'font-semibold',
    'font-medium',

    'lg:mt-28',

    'backdrop-blur-md',
  ],
} satisfies Config
