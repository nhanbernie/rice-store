'use server'

import { COMMON_SIZE } from '@/sizes/common-sizes.constant'
import { titleAnimation } from '@/common/constants/animations/common-animations.constant'
import { TitleMotion } from '@/motions/index'
import ProductCard from './ProductCard'

const ProductPageSection = async () => {
  const res = await fetch('http://localhost:1901/api/products').then((res) => res.json())
  const listProducts = res?.data?.products

  return (
    <div className="mb-16">
      <TitleMotion
        className={`text-3xl font-bold ${COMMON_SIZE.TITLE_TO_CONTENT}`}
        variants={titleAnimation}
        title="LIST PRODUCTS"
      />

      <article className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {listProducts?.map((product: any, index: number) => (
          <ProductCard index={index} key={index} products={product} />
        ))}
      </article>
    </div>
  )
}

export default ProductPageSection
