"use client"

import { useState } from "react"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"
import { colors } from "@/lib/colors"
import { realizacje } from "@/content/realizacje"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

export function RealizacjeListSection() {
  const t = useTranslations("realizacje")
  const items = t.raw("items") as {
    id: string; title: string; description: string; category: string
  }[]

  const categories = [t("all"), ...Array.from(new Set(items.map((i) => i.category)))]
  const [active, setActive] = useState(categories[0])

  const filtered = active === categories[0]
    ? items
    : items.filter((i) => i.category === active)

  return (
    <div className="min-h-screen bg-black px-4 pt-28 pb-24">
      <div className="container mx-auto max-w-6xl">

        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.logo }}>
          {t("heading")}
        </p>
        <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
          Nasze <span style={{ color: colors.logo }}>realizacje</span>
        </h1>
        <div className="h-px w-24 mb-8" style={{ backgroundColor: colors.logo }} />
        <p className="text-white/60 text-base mb-12 max-w-2xl">{t("subheading")}</p>

        {/* Filtry */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer",
                active === cat ? "text-black" : "border text-white/60 hover:text-white"
              )}
              style={
                active === cat
                  ? { backgroundColor: colors.logo }
                  : { borderColor: `${colors.logo}40` }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Siatka */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const real = realizacje.find((r) => r.id === item.id)
            return (
              <Link
                key={item.id}
                href={`/realizacje/${item.id}`}
                className="group flex flex-col rounded-2xl border overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
                style={{ backgroundColor: colors.buttonCta, borderColor: `${colors.logo}25` }}
              >
                <div
                  className="h-48 w-full flex items-center justify-center border-b"
                  style={{ backgroundColor: "#1b3a2a", borderColor: `${colors.logo}20` }}
                >
                  {(real?.thumbnail ?? real?.photos[0]) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={real.thumbnail ?? real.photos[0]} alt={item.title} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-xs text-white/20 uppercase tracking-widest">
                      {t("noPhoto")}
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
                    >
                      {item.category}
                    </span>
                    <span className="text-xs text-white/40">{real?.year}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:opacity-80 transition-opacity">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed line-clamp-2 flex-1">
                    {item.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-1 text-xs font-medium mt-2"
                    style={{ color: colors.logo }}
                  >
                    Zobacz szczegóły <ArrowRight className="size-3" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  )
}
