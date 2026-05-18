import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { buildMetadata } from "@/lib/seo"
import { realizacje } from "@/content/realizacje"
import { getTranslations } from "next-intl/server"
import { RealizacjaDetailSection } from "@/components/sections/realizacje/RealizacjaDetailSection"

export function generateStaticParams() {
  return realizacje.map((r) => ({ id: r.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const t = await getTranslations("realizacje")
  const items = t.raw("items") as { id: string; title: string }[]
  const item = items.find((i) => i.id === id)
  if (!item) return {}
  return buildMetadata({ title: item.title })
}

export default async function RealizacjaPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { id } = await params
  const realizacja = realizacje.find((r) => r.id === id)
  if (!realizacja) notFound()

  const t = await getTranslations("realizacje")
  const items = t.raw("items") as {
    id: string; title: string; description: string; category: string; longDescription?: string
  }[]
  const item = items.find((i) => i.id === id)
  if (!item) notFound()

  return <RealizacjaDetailSection realizacja={realizacja} item={item} />
}
