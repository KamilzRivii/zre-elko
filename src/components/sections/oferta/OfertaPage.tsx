"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Flame, Wrench, Workflow, PenLine, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react"
import { colors } from "@/lib/colors"
import { useTranslations } from "next-intl"

const ICONS = {
  flame: Flame,
  wrench: Wrench,
  workflow: Workflow,
  "drafting-compass": PenLine,
} as const

const PHOTO_SRCS = [
  "/images/office/biuro-1.webp",
  "/images/office/biuro-2.webp",
  "/images/office/biuro-3.webp",
  "/images/office/biuro-4.webp",
]

export function OfertaPage() {
  const t = useTranslations("oferta.page")
  const tItems = useTranslations("oferta")

  const items = tItems.raw("items") as {
    id: string; title: string; description: string; icon: string
  }[]
  const biuroParagraphs = t.raw("biuroParagraphs") as string[]
  const biuroHighlights = t.raw("biuroHighlights") as string[]
  const biuroPhotoAlts = t.raw("biuroPhotos") as string[]

  const photos = PHOTO_SRCS.map((src, i) => ({ src, alt: biuroPhotoAlts[i] ?? "" }))

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null))
  }, [photos.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : null))
  }, [photos.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape") setLightboxIndex(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxIndex, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightboxIndex])

  return (
    <>
    <div className="min-h-screen bg-black px-4 pt-28 pb-24">
      <div className="container mx-auto max-w-6xl">

        {/* Nagłówek */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.logo }}>
          {t("label")}
        </p>
        <h1 className="text-4xl font-bold text-white md:text-5xl mb-4">
          {t("headingLine1")}{" "}
          <span style={{ color: colors.logo }}>{t("headingLine2")}</span>
        </h1>
        <div className="h-px w-24 mb-8" style={{ backgroundColor: colors.logo }} />
        <p className="max-w-2xl text-white/70 text-base leading-relaxed mb-16">
          {t("intro")}
        </p>

        {/* Karty usług */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mb-24">
          {items.map((item) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS]
            return (
              <div
                key={item.id}
                className="flex gap-5 rounded-2xl border p-6"
                style={{ backgroundColor: colors.buttonCta, borderColor: `${colors.logo}30` }}
              >
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-xl mt-0.5"
                  style={{ backgroundColor: `${colors.logo}18` }}
                >
                  {Icon && <Icon className="size-5" style={{ color: colors.logo }} />}
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white mb-2">{item.title}</h2>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ─── Biuro Projektowe ELKO ─── */}
        <div
          className="rounded-3xl border overflow-hidden"
          style={{ borderColor: `${colors.logo}25` }}
        >
          {/* Nagłówek sekcji */}
          <div
            className="px-8 py-6 border-b"
            style={{ backgroundColor: `${colors.logo}0a`, borderColor: `${colors.logo}20` }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-1 text-white/40">
              {t("biuroLabel")}
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {t("biuroHeading")} <span style={{ color: colors.logo }}>ELKO</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Lewa — tekst */}
            <div
              className="px-8 py-8 lg:border-r"
              style={{ borderColor: `${colors.logo}20` }}
            >
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {t("biuroIntro")}
              </p>

              {biuroParagraphs.map((p, i) => (
                <p key={i} className="text-white/60 text-sm leading-relaxed mb-5 last:mb-8">
                  {p}
                </p>
              ))}

              <ul className="space-y-2.5">
                {biuroHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="size-4 shrink-0 mt-0.5"
                      style={{ color: colors.logo }}
                    />
                    <span className="text-sm text-white/70">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prawa — siatka 2×2 zdjęć */}
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 min-[400px]:grid-rows-2 self-stretch">
              {photos.map((photo, idx) => (
                <button
                  key={photo.src}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative overflow-hidden cursor-pointer"
                  style={{
                    borderRight: idx % 2 === 0 ? `1px solid ${colors.logo}20` : undefined,
                    borderBottom: idx < 3 ? `1px solid ${colors.logo}20` : undefined,
                    minHeight: "200px",
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    quality={90}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ backgroundColor: `${colors.buttonCta}bb` }}
                  >
                    <span
                      className="rounded-full px-4 py-1.5 text-xs font-semibold"
                      style={{ backgroundColor: colors.logo, color: colors.buttonCta }}
                    >
                      {t("enlarge")}
                    </span>
                  </div>
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.94)" }}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={() => setLightboxIndex(null)}
          >
            <X className="size-5" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="size-6" />
          </button>

          <div
            className="relative max-w-4xl w-full max-h-[85vh]"
            style={{ aspectRatio: "4/3" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={95}
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-sm font-medium">{photos[lightboxIndex].alt}</p>
            <p className="text-xs mt-1 text-white/40">{lightboxIndex + 1} / {photos.length}</p>
          </div>
        </div>
      )}
    </>
  )
}
