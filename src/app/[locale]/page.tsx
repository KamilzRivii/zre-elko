import dynamic from "next/dynamic"
import { HeroSection } from "@/components/sections/home/HeroSection"
import { AboutHeroSection } from "@/components/sections/o-nas/AboutHeroSection"
import { CertyfikatySection } from "@/components/sections/certyfikaty/CertyfikatySection"
import { RealizacjeCarousel } from "@/components/sections/realizacje/RealizacjeCarousel"
import { OfertaDescSection } from "@/components/sections/home/OfertaDescSection"

const ContactSection = dynamic(() =>
  import("@/components/sections/kontakt/ContactSection").then((m) => m.ContactSection)
)

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutHeroSection />
      <CertyfikatySection />
      <RealizacjeCarousel />
      <OfertaDescSection />
      <ContactSection />
    </>
  )
}
