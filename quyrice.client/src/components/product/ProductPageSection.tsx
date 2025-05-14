'use server'

import { COMMON_SIZE } from '@/sizes/common-sizes.constant'
import { titleAnimation } from '@/common/constants/animations/common-animations.constant'
import { TitleMotion } from '@/motions/index'
import ProductCard from './ProductCard'

const ProductPageSection = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="mb-16">
      <TitleMotion
        className={`text-3xl font-bold ${COMMON_SIZE.TITLE_TO_CONTENT}`}
        variants={titleAnimation}
        title="LIST PRODUCTS"
      />

      <article className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(13)].map((_, index) => (
          <ProductCard index={index} key={index} />
        ))}
      </article>
    </div>
  )
}

export default ProductPageSection
