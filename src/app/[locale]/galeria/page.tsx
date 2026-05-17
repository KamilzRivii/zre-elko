import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { GaleriaSection } from "@/components/sections/galeria/GaleriaSection"

export const metadata: Metadata = buildMetadata({
  title: "Galeria",
  description: "Galeria zdjęć z realizacji ZRE ELKO — kotły, montaż, rurociągi i instalacje energetyczne.",
})

export default function GaleriaPage() {
  return <GaleriaSection />
}
