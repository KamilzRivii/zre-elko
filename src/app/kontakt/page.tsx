import type { Metadata } from "next"
import { ContactSection } from "@/components/sections/kontakt/ContactSection"
import { buildMetadata } from "@/lib/seo"
import { buildLocalBusinessJsonLd } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Kontakt",
  description: "Skontaktuj się z nami — bezpłatna wycena w ciągu 24 godzin.",
})

export default function KontaktPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactSection />
    </>
  )
}
