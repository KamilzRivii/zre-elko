import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Galeria",
  description: "Galeria zdjęć z realizacji ZRE Elko.",
})

export default function GaleriaPage() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-semibold tracking-tight">Galeria</h1>
      <p className="mt-4 text-muted-foreground">Zdjęcia wkrótce.</p>
    </section>
  )
}
