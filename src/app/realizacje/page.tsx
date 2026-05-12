import type { Metadata } from "next"
import { RealizacjeListSection } from "@/components/sections/realizacje/RealizacjeListSection"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Realizacje",
  description: "Wybrane projekty elektryczne zrealizowane przez ZRE Elko — domy, biura, obiekty przemysłowe.",
})

export default function RealizacjePage() {
  return <RealizacjeListSection />
}
