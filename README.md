# Next.js Project

## 🚀 Getting Started

### Installation

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd <project-folder>
npm install # or yarn install or pnpm install or bun install
```

### Run Development Server

Start the development server:

```bash
npm run dev # or yarn dev or pnpm dev or bun dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
📦 quyrice.client
├── 📂 .next (Next.js build folder)
├── 📂 node_modules (Dependencies)
├── 📂 public (Static assets)
├── 📂 src
│   ├── 📂 app (Next.js App Router pages)
│   ├── 📂 common (Shared utilities & constants)
│   ├── 📂 components (Reusable UI components)
│   ├── 📂 contexts (React Context API for state management)
│   ├── 📂 hooks (Custom React hooks)
│   ├── 📂 libs (Third-party library integrations)
│   ├── 📂 middleware (API middlewares)
│   ├── 📂 redux (State management using Redux)
│   ├── 📂 services (API calls & business logic)
│   ├── 📂 utils (Helper functions)
├── 📄 .env
├── 📄 .gitignore
├── 📄 .prettierrc
├── 📄 eslint.config.mjs
├── 📄 next-env.d.ts
├── 📄 next.config.ts
├── 📄 postcss.config.mjs
├── 📄 tailwind.config.ts
├── 📄 tsconfig.json
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md

```

## ✨ Features

- **Next.js 15** – Latest version of Next.js with App Router
- **Tailwind CSS** – Utility-first responsive design
- **Framer Motion** – Smooth animations & transitions
- **Fully Responsive** – Optimized for all screen sizes
- **Optimized Fonts** – Using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with [Geist](https://vercel.com/font)

## 🎨 Styling

This project is styled using **Tailwind CSS**, configured in `tailwind.config.js`. You can customize styles inside `app/styles` or directly within components.

## 🎬 Animations

Animations are handled using **Framer Motion**. Example usage:

```tsx
import { motion } from 'framer-motion'

;<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated Content
</motion.div>
```

## 📜 License

This project is licensed under the [BERNIE License](LICENSE).

---

Made with ❤️ using Next.js, Tailwind CSS & Framer Motion.
