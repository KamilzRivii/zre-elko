import Link from "next/link"
import { Button } from "@/components/ui/button"
import { homeContent } from "@/content/home"

export function CTASection() {
  const { heading, subheading, cta } = homeContent.cta

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">{heading}</h2>
        <p className="mt-2 text-muted-foreground">{subheading}</p>
        <Button asChild size="lg" className="mt-6">
          <Link href={cta.href}>{cta.label}</Link>
        </Button>
      </div>
    </section>
  )
}
