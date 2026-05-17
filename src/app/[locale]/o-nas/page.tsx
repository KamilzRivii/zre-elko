import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "O nas",
  description: "Zakłady Remontowe Energetyki ELKO Sp. z o.o. — produkcja, modernizacja i montaż w energetyce.",
})

export default function ONasPage() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-semibold tracking-tight text-white">O nas</h1>
      <p className="mt-4 text-white/60">Treść strony wkrótce.</p>
    </section>
  )
}
