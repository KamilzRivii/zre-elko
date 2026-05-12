import type { Metadata } from "next"
import { OfertaListSection } from "@/components/sections/oferta/OfertaListSection"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Oferta",
  description: "Kompleksowe usługi elektryczne — instalacje wewnętrzne i zewnętrzne, tablice rozdzielcze, smart home i więcej.",
})

export default function OfertaPage() {
  return <OfertaListSection />
}
