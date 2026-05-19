import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { UplynnieniSection } from "@/components/sections/uplynnienia/UplynnieniSection"

export const metadata: Metadata = buildMetadata({
  title: "Upłynnienia",
  description: "Aktualne upłynnienia ZRE ELKO Sp. z o.o. — pliki do pobrania.",
})

export default function UplynnieniPage() {
  return <UplynnieniSection />
}
