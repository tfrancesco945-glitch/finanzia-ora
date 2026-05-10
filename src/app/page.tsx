import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import BanksSlider from '@/components/sections/BanksSlider'
import SolutionPicker from '@/components/sections/SolutionPicker'
import ServicesPreview from '@/components/sections/ServicesPreview'
import HowItWorks from '@/components/sections/HowItWorks'
import AreaRiservataTeaser from '@/components/sections/AreaRiservataTeaser'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BanksSlider />
      <SolutionPicker />
      <ServicesPreview />
      <HowItWorks />
      <AreaRiservataTeaser />
      <FinalCTA />
    </>
  )
}
