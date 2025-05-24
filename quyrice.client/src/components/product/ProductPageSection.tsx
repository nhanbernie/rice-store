'use server'

import { COMMON_SIZE } from '@/sizes/common-sizes.constant'
import { titleAnimation } from '@/common/constants/animations/common-animations.constant'
import { TitleMotion } from '@/motions/index'
import ProductCard from './ProductCard'

const ProductPageSection = async () => {
  let listProducts: any[] | null = null

  try {
    const res = await fetch('http://localhost:1901/api/products', {
      next: { revalidate: 60 },
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    listProducts = data?.data?.products || []
  } catch (error) {
    console.error('Lỗi khi gọi API:', error)
    listProducts = null
  }
  return (
    <div className="mb-16">
      <TitleMotion
        className={`text-3xl font-bold ${COMMON_SIZE.TITLE_TO_CONTENT}`}
        variants={titleAnimation}
        title="LIST PRODUCTS"
      />

      <article className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {listProducts ? (
          listProducts.map((product: any, index: number) => (
            <ProductCard index={index} key={index} products={product} />
          ))
        ) : (
          <p>Not found</p>
        )}
      </article>
    </div>
  )
}

export default ProductPageSection
