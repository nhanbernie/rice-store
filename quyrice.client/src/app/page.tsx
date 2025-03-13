import HeroSession from '@/components/hero-session/HeroSession'
import { Body, MainLayout } from './layouts'

const Home = () => {
  return (
    <>
      <MainLayout>
        <Body>
          <HeroSession />
        </Body>
      </MainLayout>
    </>
  )
}

export default Home
