'use server'

import { Body } from '@/app/layouts'
import ProductPageSection from '@/components/product/ProductPageSection'
import DetailProduct from '@/components/product/DetailProduct'
import { generateSeoMetadata } from '@/libs/seo/seo'
import { getProducts } from '@/services/auth.service'
export async function generateMetadata() {
  const products = await getProducts()
  console.log(products?.data?.metadata)

  return generateSeoMetadata({
    type: 'product',
    data: {
      slug: 'premium-japanese-rice',
      name: 'Premium Japanese Rice',
      // shortDescription: 'Premium Japanese Rice',
      description:
        'Experience the exquisite taste of our Premium Japanese Rice, sourced from the finest fields in Japan. Perfectly polished and packed with flavor, it elevates every meal.',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1741850820683-b25798ff3164?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
    },
  })
}

export default async function ProductDetail({ params }: { params: { slug: string } }) {
  // Product details
  return (
    <Body>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <DetailProduct />
      </div>
      <div className="mt-16">
        <ProductPageSection />
      </div>
    </Body>
  )
}
