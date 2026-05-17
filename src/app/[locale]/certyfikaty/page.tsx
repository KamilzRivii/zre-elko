import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { CertyfikatyPage } from "@/components/sections/certyfikaty/CertyfikatyPage"

export const metadata: Metadata = buildMetadata({
  title: "Certyfikaty",
  description: "Certyfikaty i uprawnienia ZRE ELKO Sp. z o.o. — UDT, TÜV, SVTI ASIT, EN ISO 9001:2000.",
})

export default function CertyfikatyRoute() {
  return <CertyfikatyPage />
}
