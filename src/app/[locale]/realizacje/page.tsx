import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { RealizacjeListSection } from "@/components/sections/realizacje/RealizacjeListSection"

export const metadata: Metadata = buildMetadata({
  title: "Realizacje",
  description: "Wybrane projekty zrealizowane przez ZRE ELKO — kotły, rurociągi i instalacje energetyczne.",
})

export default function RealizacjePage() {
  return <RealizacjeListSection />
}
