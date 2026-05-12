import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "O nas",
  description: "Zakłady Remontowe Energetyki ELKO Sp. z o.o. — produkcja, modernizacja i montaż w energetyce.",
})

export default function ONasPage() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-semibold tracking-tight">O nas</h1>
      <p className="mt-4 text-muted-foreground">Treść strony wkrótce.</p>
    </section>
  )
}
