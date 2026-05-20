"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { galeriaContent } from "@/content/galeria"
import { colors } from "@/lib/colors"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

import type { GaleriaItem } from "@/types/galeria"

function interleaveByCategory(items: GaleriaItem[], categories: string[]): GaleriaItem[] {
  const groups = categories.map((cat) => items.filter((i) => i.category === cat))
  const result: GaleriaItem[] = []
  const maxLen = Math.max(...groups.map((g) => g.length))
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (group[i]) result.push(group[i])
    }
  }
  return result
}

export function GaleriaSection() {
  const t = useTranslations("galeria")
  const { items, categories } = galeriaContent
  // Translated display labels — same order as galeriaContent.categories
  const translatedCategories = t.raw("categories") as string[]

  const [activeCategory, setActiveCategory] = useState<string | null>(null) // null = all
  const [showAll, setShowAll] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const PAGE_SIZE = 20

  const filtered = activeCategory === null
    ? interleaveByCategory(items, categories)
    : items.filter((i) => i.category === activeCategory)

  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE)
  const remaining = filtered.length - PAGE_SIZE

  function selectCategory(cat: string | null) {
    setActiveCategory(cat)
    setShowAll(false)
  }

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  }, [filtered.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))
  }, [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxIndex, prev, next])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightboxIndex])

  return (
    <section className="w-full min-h-screen px-4 pt-32 pb-20 bg-black">
      <div className="container mx-auto max-w-6xl">

        {/* Nagłówek */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.logo }}>
          {t("label")}
        </p>
        <h1 className="text-4xl font-bold text-white md:text-5xl mb-2">
          {t("heading")}
        </h1>
        <div className="h-px w-20 mb-10" style={{ backgroundColor: colors.logo }} />

        {/* Filtry kategorii */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-10">
          {/* "Wszystkie" button */}
          <button
            onClick={() => selectCategory(null)}
            className={cn(
              "w-full rounded-full px-4 py-1.5 text-sm font-medium transition-all cursor-pointer",
              activeCategory === null
                ? "text-[#1b3a2a]"
                : "text-white/60 hover:text-white border border-white/20 hover:border-white/40"
            )}
            style={activeCategory === null ? { backgroundColor: colors.logo } : undefined}
          >
            {t("all")}
          </button>

          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className={cn(
                "w-full rounded-full px-4 py-1.5 text-sm font-medium transition-all cursor-pointer",
                activeCategory === cat
                  ? "text-[#1b3a2a]"
                  : "text-white/60 hover:text-white border border-white/20 hover:border-white/40"
              )}
              style={activeCategory === cat ? { backgroundColor: colors.logo } : undefined}
            >
              {translatedCategories[i] ?? cat}
            </button>
          ))}
        </div>

        {/* Pusta galeria */}
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-white/30 text-lg">{t("noPhotos")}</p>
          </div>
        )}

        {/* Siatka zdjęć */}
        {items.length > 0 && (
          <>
            <div className="columns-1 sm:columns-3 lg:columns-4 gap-3 space-y-3">
              {visible.map((item, i) => (
                <button
                  key={`${item.src}-${i}`}
                  onClick={() => openLightbox(i)}
                  className="group relative w-full overflow-hidden rounded-xl cursor-pointer block"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={80}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}
                  >
                    <span className="text-xs text-white font-medium line-clamp-1">{item.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Pokaż więcej */}
            {!showAll && remaining > 0 && (
              <div className="mt-10 flex flex-col items-center gap-3">
                <p className="text-xs text-white/40">
                  {t("shown", { shown: PAGE_SIZE, total: filtered.length, remaining })}
                </p>
                <button
                  onClick={() => setShowAll(true)}
                  className="rounded-full px-8 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80 cursor-pointer"
                  style={{ backgroundColor: colors.logo, color: "#1b3a2a" }}
                >
                  {t("showMore", { remaining })}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.94)" }}
          onClick={closeLightbox}
        >
          <button
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={closeLightbox}
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
              src={visible[lightboxIndex]?.src ?? ""}
              alt={visible[lightboxIndex]?.alt ?? ""}
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
            <p className="text-white text-sm font-medium">{visible[lightboxIndex]?.title}</p>
            <p className="text-xs mt-1 text-white/40">{lightboxIndex + 1} / {visible.length}</p>
          </div>
        </div>
      )}
    </section>
  )
}
