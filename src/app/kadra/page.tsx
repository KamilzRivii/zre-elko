import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { KadraSection } from "@/components/sections/kadra/KadraSection"

export const metadata: Metadata = buildMetadata({
  title: "Kadra",
  description: "Zarząd i kadra zarządzająca ZRE ELKO Sp. z o.o.",
})

export default function KadraPage() {
  return <KadraSection />
}
