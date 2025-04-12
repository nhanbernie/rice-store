'use server'
import HeroSession from '@/components/hero-session/HeroSession'
import { Body } from '@/app/layouts'
import ServiceHomepage from '@/components/service/ServiceHomepage'
import { Suspense } from 'react'
import ProductCard from '@/components/product-card/ProductCard'
import ProductCardSkeleton from '@/components/loading/ProductCardSkeleton'
import ServiceHomepageSkeleton from '@/components/loading/ServiceHomepageSkeleton'

const HomePage = () => {
  return (
    <Body>
      <HeroSession />
      <Suspense fallback={<ServiceHomepageSkeleton />}>
        <ServiceHomepage />
      </Suspense>
      <Suspense fallback={<ProductCardSkeleton />}>
        <ProductCard />
      </Suspense>
    </Body>
  )
}

export default HomePage
