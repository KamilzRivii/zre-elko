"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { realizacjeContent } from "@/content/realizacje"
import { colors } from "@/lib/colors"

export function RealizacjeCarousel() {
  const { items } = realizacjeContent
  const trackRef = useRef<HTMLDivElement>(null)

  function scroll(dir: "left" | "right") {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector("[data-card]") as HTMLElement
    const gap = 24
    const amount = (card?.offsetWidth ?? 320) + gap
    track.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section className="w-full py-20 px-4" style={{ backgroundColor: "#1b3a2a" }}>
      <div className="container mx-auto">

        {/* Nagłówek */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.logo }}>
              Realizacje
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Nasze <span style={{ color: colors.logo }}>projekty</span>
            </h2>
          </div>

          {/* Strzałki */}
          <div className="hidden sm:flex gap-2">
            {(["left", "right"] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                className="flex size-10 items-center justify-center rounded-full border transition-colors hover:bg-white/10"
                style={{ borderColor: `${colors.logo}50`, color: colors.logo }}
              >
                {dir === "left" ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px w-24 mb-10" style={{ backgroundColor: colors.logo }} />

        {/* Karuzela */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              data-card
              className="flex-none w-72 snap-start rounded-2xl border overflow-hidden"
              style={{ backgroundColor: colors.buttonCta, borderColor: `${colors.logo}30` }}
            >
              {/* Placeholder zdjęcia */}
              <div
                className="h-48 w-full flex items-center justify-center"
                style={{ backgroundColor: "#1b3a2a" }}
              >
                <span className="text-xs text-white/20 uppercase tracking-widest">Zdjęcie wkrótce</span>
              </div>

              {/* Treść */}
              <div className="p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs text-white/40">{item.year}</span>
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/realizacje"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: colors.logo, color: colors.buttonCta }}
          >
            Zobacz wszystkie realizacje
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
