import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { RozwojSection } from "@/components/sections/rozwoj/RozwojSection"

export const metadata: Metadata = buildMetadata({
  title: "Rozwój",
  description: "Projekty dofinansowane ze środków UE realizowane przez ZRE ELKO Sp. z o.o.",
})

export default function RozwojPage() {
  return <RozwojSection />
}
