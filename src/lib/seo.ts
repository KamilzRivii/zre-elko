import type { Metadata } from "next"
import { company } from "@/content/company"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://zre-elko.pl"

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: company.name,
      template: `%s | ${company.name}`,
    },
    description: company.tagline,
    openGraph: {
      siteName: company.name,
      locale: "pl_PL",
      type: "website",
    },
    ...overrides,
  }
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: company.tagline,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      postalCode: company.address.postalCode,
      addressCountry: "PL",
    },
    url: baseUrl,
  }
}
