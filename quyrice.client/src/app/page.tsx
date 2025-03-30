'use server'
import HeroSession from '@/components/hero-session/HeroSession'
import { Body } from './layouts'
import ServiceHomepage from '@/components/service/ServiceHomepage'
import { Suspense } from 'react'
import ProductCard from '@/components/product-card/ProductCard'
import ProductCardSkeleton from '@/components/loading/ProductCardSkeleton'
import ServiceHomepageSkeleton from '@/components/loading/ServiceHomepageSkeleton'

const Home = () => {
  return (
    <Body>
      <div>
        <HeroSession />
        <Suspense fallback={<ServiceHomepageSkeleton />}>
          <ServiceHomepage />
        </Suspense>
        <Suspense fallback={<ProductCardSkeleton />}>
          <ProductCard />
        </Suspense>
      </div>
    </Body>
  )
}

export default Home
