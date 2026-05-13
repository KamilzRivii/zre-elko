"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { galeriaContent } from "@/content/galeria"
import { colors } from "@/lib/colors"
import { cn } from "@/lib/utils"

const PAGE_SIZE = 12
const LOAD_MORE = 9

export function GaleriaSection() {
  const { items, categories } = galeriaContent
  const [activeCategory, setActiveCategory] = useState("Wszystkie")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const allCategories = ["Wszystkie", ...categories]

  const filtered = activeCategory === "Wszystkie"
    ? items
    : items.filter((i) => i.category === activeCategory)

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function selectCategory(cat: string) {
    setActiveCategory(cat)
    setVisibleCount(PAGE_SIZE)
  }

  // Lightbox navigation — operates on filtered array
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

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [lightboxIndex])

  return (
    <section className="w-full min-h-screen px-4 pt-32 pb-20 bg-black">
      <div className="container mx-auto max-w-6xl">

        {/* Nagłówek */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.logo }}>
          Galeria
        </p>
        <h1 className="text-4xl font-bold text-white md:text-5xl mb-2">
          Nasze realizacje w obrazach
        </h1>
        <div className="h-px w-20 mb-10" style={{ backgroundColor: colors.logo }} />

        {/* Filtry kategorii */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-10">
          {allCategories.map((cat) => (
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
              {cat}
            </button>
          ))}
        </div>

        {/* Pusta galeria */}
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-white/30 text-lg">Zdjęcia wkrótce</p>
            <p className="text-white/20 text-sm text-center max-w-sm">
              Dodaj zdjęcia do folderów w{" "}
              <code className="font-mono text-xs" style={{ color: colors.logo }}>
                public/images/galeria/
              </code>{" "}
              i uzupełnij tablicę w{" "}
              <code className="font-mono text-xs" style={{ color: colors.logo }}>
                src/content/galeria.ts
              </code>
            </p>
          </div>
        )}

        {/* Masonry grid */}
        {visible.length > 0 && (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {visible.map((item, idx) => (
              <div
                key={item.src + idx}
                className="break-inside-avoid mb-4 group relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <div className="relative w-full" style={{ paddingBottom: "75%" }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    {item.title && (
                      <p className="text-white text-sm font-semibold leading-snug">{item.title}</p>
                    )}
                    <span
                      className="mt-1 text-xs font-medium uppercase tracking-widest"
                      style={{ color: colors.logo }}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Załaduj więcej */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount((v) => v + LOAD_MORE)}
              className="rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: colors.buttonCta, color: "#fff", border: `1px solid ${colors.logo}40` }}
            >
              Załaduj więcej ({filtered.length - visibleCount} pozostało)
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          {/* Zamknij */}
          <button
            className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={closeLightbox}
          >
            <X className="size-5" />
          </button>

          {/* Poprzednie */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Zdjęcie */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh]"
            style={{ aspectRatio: "4/3" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              quality={95}
            />
          </div>

          {/* Następne */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Licznik */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/40">
            {lightboxIndex + 1} / {filtered.length}
          </div>

          {/* Tytuł */}
          {(filtered[lightboxIndex].title || filtered[lightboxIndex].category) && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
              {filtered[lightboxIndex].title && (
                <p className="text-white text-sm font-medium">{filtered[lightboxIndex].title}</p>
              )}
              <p className="text-xs mt-0.5" style={{ color: colors.logo }}>
                {filtered[lightboxIndex].category}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
