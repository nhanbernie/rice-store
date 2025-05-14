'use server'
import HeroSession from '@/components/hero-session/HeroSession'
import { Body, MainLayout } from './layouts'
import ServiceHomepage from '@/components/service/ServiceHomepage'
import { Suspense } from 'react'
import ProductCard from '@/components/product/ProductPageSection'
import ProductCardSkeleton from '@/components/loading/ProductCardSkeleton'
import ServiceHomepageSkeleton from '@/components/loading/ServiceHomepageSkeleton'

const Home = () => {
  return (
    <MainLayout>
      <Body>
        <HeroSession />
        <Suspense fallback={<ServiceHomepageSkeleton />}>
          <ServiceHomepage />
        </Suspense>
        <Suspense fallback={<ProductCardSkeleton />}>
          <ProductCard />
        </Suspense>
      </Body>
    </MainLayout>
  )
}

export default Home
