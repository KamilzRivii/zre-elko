"use client"

import { useState, useRef } from "react"
import { Link } from "@/i18n/navigation"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { colors } from "@/lib/colors"
import { realizacje } from "@/content/realizacje"
import { useTranslations } from "next-intl"

const CARD_W = 288 // w-72
const GAP    = 24  // gap-6
const STEP   = CARD_W + GAP

export function RealizacjeCarousel() {
  const t       = useTranslations("realizacje")
  const tPreview = useTranslations("realizacjePreview")
  const allItems = t.raw("items") as {
    id: string; title: string; description: string; category: string
  }[]
  const items = allItems.slice(0, 8)
  const n = items.length

  // Trzy kopie → startujemy w środkowej (index n)
  const extended = [...items, ...items, ...items]

  const [idx, setIdx]           = useState(n)
  const [animated, setAnimated] = useState(true)
  const busy = useRef(false)
  const touchStartX = useRef<number | null>(null)

  function move(dir: 1 | -1) {
    if (busy.current) return
    const next = idx + dir
    setIdx(next)

    // Po zakończeniu animacji — cicha teleportacja do środkowej kopii
    const needsJump = next >= n * 2 || next < n
    if (needsJump) {
      busy.current = true
      setTimeout(() => {
        setAnimated(false)
        setIdx(next >= n * 2 ? n : n * 2 - 1)
        setTimeout(() => {
          setAnimated(true)
          busy.current = false
        }, 20)
      }, 320)
    }
  }

  return (
    <section id="realizacje" className="w-full py-20 px-4" style={{ backgroundColor: "#1b3a2a" }}>
      <div className="container mx-auto">

        {/* Nagłówek */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.logo }}>
              {tPreview("label")}
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {tPreview("headingLine1")} <span style={{ color: colors.logo }}>{tPreview("headingLine2")}</span>
            </h2>
          </div>
          <div className="flex gap-2">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                onClick={() => move(dir)}
                className="flex size-10 items-center justify-center rounded-full border transition-colors hover:bg-white/10 cursor-pointer"
                style={{ borderColor: `${colors.logo}50`, color: colors.logo }}
              >
                {dir === -1 ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
              </button>
            ))}
          </div>
        </div>

        <div className="h-px w-24 mb-10" style={{ backgroundColor: colors.logo }} />

        {/* Track */}
        <div
          className="overflow-hidden"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const delta = touchStartX.current - e.changedTouches[0].clientX
            if (Math.abs(delta) > 40) move(delta > 0 ? 1 : -1)
            touchStartX.current = null
          }}
        >
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(calc(-1 * ${idx} * ${STEP}px))`,
              transition: animated ? "transform 320ms ease" : "none",
            }}
          >
            {extended.map((item, i) => {
              const real = realizacje.find((r) => r.id === item.id)
              return (
                <Link
                  key={i}
                  href={`/realizacje/${item.id}`}
                  className="flex-none rounded-2xl border overflow-hidden transition-colors duration-200"
                  style={{
                    width: CARD_W,
                    backgroundColor: colors.buttonCta,
                    borderColor: `${colors.logo}30`,
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = `${colors.logo}22`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.backgroundColor = colors.buttonCta
                  }}
                >
                  <div
                    className="h-48 w-full flex items-center justify-center"
                    style={{ backgroundColor: "#1b3a2a" }}
                  >
                    {(real?.thumbnail ?? real?.photos[0]) ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={real.thumbnail ?? real.photos[0]} alt={item.title} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-xs text-white/50 uppercase tracking-widest">
                        {tPreview("noPhoto")}
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                        style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
                      >
                        {item.category}
                      </span>
                      <span className="text-xs text-white/65">{real?.year}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed line-clamp-2">{item.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/realizacje"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: colors.logo, color: colors.buttonCta }}
          >
            {tPreview("cta")}
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
