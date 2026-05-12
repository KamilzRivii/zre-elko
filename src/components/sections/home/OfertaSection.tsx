import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { homeContent } from "@/content/home"
import { ofertaContent } from "@/content/oferta"

const PREVIEW_COUNT = 3

export function OfertaSection() {
  const { heading, subheading } = homeContent.ofertaPreview
  const items = ofertaContent.items.slice(0, PREVIEW_COUNT)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-2 text-muted-foreground">{subheading}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/oferta" className="text-sm font-medium underline-offset-4 hover:underline">
            Zobacz pełną ofertę →
          </Link>
        </div>
      </div>
    </section>
  )
}
