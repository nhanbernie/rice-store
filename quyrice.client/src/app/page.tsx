"use server"
import HeroSession from '@/components/hero-session/HeroSession'
import { Body } from './layouts'
import ServiceHomepage from '@/components/service/ServiceHomepage'
import ProductCard from '@/components/product-card/ProductCard'

const Home = () => {
  return (
    <Body>
      <div>
        <HeroSession />
        <ServiceHomepage />
        <ProductCard />
      </div>
    </Body>
  )
}

export default Home
