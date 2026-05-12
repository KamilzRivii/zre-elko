import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ofertaContent } from "@/content/oferta"

export function OfertaListSection() {
  const { heading, subheading, items } = ofertaContent

  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight">{heading}</h1>
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
      </div>
    </section>
  )
}
