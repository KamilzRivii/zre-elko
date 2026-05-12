import { HeroSection } from "@/components/sections/home/HeroSection"
import { AboutHeroSection } from "@/components/sections/o-nas/AboutHeroSection"
import { CertyfikatySection } from "@/components/sections/certyfikaty/CertyfikatySection"
import { RealizacjeCarousel } from "@/components/sections/realizacje/RealizacjeCarousel"
import { ContactSection } from "@/components/sections/kontakt/ContactSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutHeroSection />
      <CertyfikatySection />
      <RealizacjeCarousel />
      <ContactSection />
    </>
  )
}
