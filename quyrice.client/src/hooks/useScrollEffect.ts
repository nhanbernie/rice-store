import { useEffect } from 'react'

const useScrollEffect = (headerId: string) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById(headerId)
      console.log("check header", header);
      
      if (!header) return

      if (window.scrollY > 0) {
        header.classList.add('border-b', 'border-gray-300', 'dark:border-gray-700', 'shadow-md')
      } else {
        header.classList.remove('border-b', 'border-gray-300', 'dark:border-gray-700', 'shadow-md')
      }
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [headerId])
}

export default useScrollEffect
