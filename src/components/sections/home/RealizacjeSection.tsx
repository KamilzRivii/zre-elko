import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { homeContent } from "@/content/home"
import { realizacjeContent } from "@/content/realizacje"

const PREVIEW_COUNT = 3

export function RealizacjeSection() {
  const { heading, subheading, cta } = homeContent.realizacjePreview
  const items = realizacjeContent.items.slice(0, PREVIEW_COUNT)

  return (
    <section className="bg-muted/30 py-16">
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
                <p className="text-xs text-muted-foreground">
                  {item.category} · {item.year}
                </p>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
