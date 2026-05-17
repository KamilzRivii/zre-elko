import type { Metadata } from "next"
import { buildMetadata, buildLocalBusinessJsonLd } from "@/lib/seo"
import { ContactSection } from "@/components/sections/kontakt/ContactSection"

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
