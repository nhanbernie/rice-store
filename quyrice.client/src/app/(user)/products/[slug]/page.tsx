'use server'

import { Body } from '@/app/layouts'
import ProductPageSection from '@/components/product/ProductPageSection'
import DetailProduct from '@/components/product/DetailProduct'
import { generateSeoMetadata } from '@/libs/seo/seo'

export async function generateMetadata() {
  return generateSeoMetadata({
    type: 'product',
    data: {
      slug: 'premium-japanese-rice',
      name: 'Premium Japanese Rice',
      shortDescription: 'Premium Japanese Rice',
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


export default async function ProductDetail() {
  const productImages = [
    'https://images.unsplash.com/photo-1741850820683-b25798ff3164?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://c4.wallpaperflare.com/wallpaper/382/296/41/nature-food-wallpaper-preview.jpg',
    'https://media.gettyimages.com/id/1370684454/video/jasmine-brown-rice-pouring-from-wooden-spoon.jpg?s=640x640&k=20&c=ax7gsBoRci0qhUWYXOcisNchLzNoTijLGqnAySgdoMc=',
    'https://t4.ftcdn.net/jpg/00/91/51/91/360_F_91519135_DlbNcDSnqJAbD53UKqkddnFg0LV2gKSj.jpg',
  ]
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
