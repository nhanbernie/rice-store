import ThemeToggleButton from "@/components/ThemeToggleButton";
// <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center">
//   <h1 className="text-4xl text-black dark:text-white mb-4">
//     Chào mừng bạn đến với Rice Store
//   </h1>
//   <ThemeToggleButton />
// </div>
Home page

## tailwind
min-h-screen: kế thừa kích thước h của viewport
.min-h-screen {
  min-height: 100vh;
}

flex-grow auto giãn hết phần con lại kết thừa cha đã define w và h

space-x-4

<div className="sm:flex sm:items-center sm:justify-between">
=> khi để sm:flex thì > sm:640px thì flex

max-w-screen-xl

mx-auto max-w-screen-2xl: Khi có 2 thuộc tính này thì mx-auto nó giúp ta căn đều 2 bên side vì max-w chỉ giới hạn kích thuớc

<div>
bg-gray-100: màu xám nhẹ
</div>

<div>
flex flex-col md:flex-row  => flex-direction: column
</div>

## tìm hiểu các dạng import 
export { default as Header } from './Header'
export { default as Footer } from './Footer'

import { Header, Footer } from ".Layout"


tsconfig.json
    "paths": {
      "@/*": ["./src/*"],
      "@/messages/*": ["./src/constants/messages/*"],
      "@/components/*": ["./src/components/*"],
      "@models/*": ["./src/models/*"],
    }
import { ABC } from "@messages"


## tìm hiểu các dạng define data
export interface SeoType {
  [key: string]: SeoItems
}

export interface AddressType {
  title: string
  subLinks: {
    name: string
    href: string
  }[]
}
đọan sublink có [] để define subLinks có có nhiều phần tử 'mảng object'


## syntax

<div>
import { ChildrenProps } from "@/models/common/common.model"
const Body = ({ children }: ChildrenProps) => 
define props
</div>



## layout
session
    // <div className="relative min-h-screen flex items-center justify-center bg-purple-100 p-6">
    //   <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
    //     {/* Left Side - Text Content */}
    //     <div className="lg:w-2/5 text-center lg:text-left space-y-4">
    //       <h1 className="text-4xl md:text-5xl font-bold text-black">
    //         The most <span className="text-purple-600">delicious cakes</span>
    //       </h1>
    //       <p className="text-gray-600">
    //         Collect, eat, give. The choice is yours!
    //       </p>
    //       <button className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition">
    //         Go to the catalog
    //       </button>

    //       {/* Social Icons */}
    //       <div className="flex justify-center lg:justify-start space-x-4 mt-4">
    //         <a href="#" className="text-gray-600 text-xl hover:text-purple-600">
    //           <i className="fab fa-instagram"></i>
    //         </a>
    //         <a href="#" className="text-gray-600 text-xl hover:text-purple-600">
    //           <i className="fab fa-twitter"></i>
    //         </a>
    //         <a href="#" className="text-gray-600 text-xl hover:text-purple-600">
    //           <i className="fab fa-facebook"></i>
    //         </a>
    //       </div>
    //     </div>

    //     {/* Right Side - Image */}
    //     <div className="lg:w-3/5 flex justify-center relative mt-10 lg:mt-0">
    //       <div className="relative w-full max-w-lg">
    //         {/* Blurred Background */}
    //         <div className="absolute -top-10 -left-10 w-full h-full bg-purple-300 rounded-full blur-2xl opacity-50"></div>
    //         {/* Main Cake Image */}
    //         <img
    //           src="/cake.png"
    //           alt="Cupcake"
    //           className="relative w-full max-w-md mx-auto shadow-lg rounded-xl"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section className="flex flex-col md:flex-row items-center justify-between py-16">
     <motion.div
      className="w-full md:w-2/5 text-center md:text-left"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Welcome to Bernie Page
      </h1>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui nisi suscipit, dignissimos harum odit, amet magnam nemo modi, perferendis pariatur. Alias, sapiente saepe? Alias saepe possimus repellat labore consequuntur.
      </p>
      <motion.button
        className="bg-green-900 text-white px-6 py-3 rounded-3xl text-lg hover:bg-blue-700 transition"
        whileHover={{ scale: 1.05 }}
      >
        Start now
      </motion.button>
    </motion.div>

    {/* Bên phải - Banner (Ẩn trên màn hình nhỏ) */}
    <motion.div
      className="w-full md:w-3/5 hidden md:block"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
        alt="Banner"
        className="w-full h-auto object-cover"
      />
    </motion.div>
  </section>