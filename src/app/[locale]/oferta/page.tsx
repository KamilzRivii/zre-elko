import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { OfertaPage } from "@/components/sections/oferta/OfertaPage"

export const metadata: Metadata = buildMetadata({
  title: "Oferta",
  description: "Kompleksowe usługi dla energetyki zawodowej i przemysłowej — ZRE ELKO Sp. z o.o.",
})

export default function OfertaRoute() {
  return <OfertaPage />
}
