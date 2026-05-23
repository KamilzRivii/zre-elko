"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { colors } from "@/lib/colors"
import { certs as logoCards } from "@/components/sections/certyfikaty/CertyfikatySection"
import { useTranslations } from "next-intl"

const certSrcs = [
  "/images/certyficates/doc-1.webp",
  "/images/certyficates/doc-2.webp",
  "/images/certyficates/doc-3.webp",
  "/images/certyficates/doc-4.webp",
  "/images/certyficates/doc-5.webp",
  "/images/certyficates/doc-6.webp",
  "/images/certyficates/doc-7.webp",
  "/images/certyficates/doc-8.webp",
  "/images/certyficates/doc-9.webp",
]

export function CertyfikatyPage() {
  const t = useTranslations("certyfikaty.page")
  const tPage = useTranslations("certyfikaty")
  const certDocs = (t.raw("docs") as string[]).map((label, i) => ({
    src: certSrcs[i],
    label,
  }))
  const orgs = tPage.raw("orgs") as { label: string; description: string }[]

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + certDocs.length) % certDocs.length : null))
  }, [certDocs.length])

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % certDocs.length : null))
  }, [certDocs.length])

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
    <div className="min-h-screen bg-black px-4 pt-28 pb-24">
      <div className="container mx-auto max-w-6xl">

        {/* Nagłówek */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.logo }}>
          {t("label")}
        </p>
        <h1 className="text-4xl font-bold text-white md:text-5xl mb-4">
          {t("headingLine1")} <span style={{ color: colors.logo }}>{t("headingLine2")}</span>
        </h1>
        <div className="h-px w-24 mb-8" style={{ backgroundColor: colors.logo }} />
        <p className="max-w-2xl text-white/70 text-base leading-relaxed mb-16">
          {t.rich("description", {
            b: (chunks) => <span className="text-white font-medium">{chunks}</span>,
          })}
        </p>

        {/* Organizacje certyfikujące */}
        <p className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/65">
          {t("certifyingOrgs")}
        </p>
        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4 md:grid-cols-4 mb-20">
          {orgs.map(({ label, description }, i) => (
            <div
              key={logoCards[i]?.src ?? i}
              className="flex flex-col rounded-2xl border overflow-hidden"
              style={{ backgroundColor: colors.buttonCta, borderColor: `${colors.logo}40` }}
            >
              <div className="relative flex items-center justify-center p-8 flex-1">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-10 m-6"
                  style={{ backgroundColor: colors.logo }}
                />
                <div className="relative w-24 h-24">
                  <Image src={logoCards[i]?.src ?? ""} alt={label} fill className="object-contain" />
                </div>
              </div>
              <div
                className="px-4 py-3 border-t"
                style={{ borderColor: `${colors.logo}30`, backgroundColor: `${colors.logo}0d` }}
              >
                <p className="text-sm font-bold text-white break-words">{label}</p>
                <p className="text-xs mt-0.5 leading-snug break-words" style={{ color: colors.logo }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dokumenty */}
        <p className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/65">
          {t("documents")}
        </p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certDocs.map((doc, idx) => (
            <button
              key={doc.src}
              onClick={() => setLightboxIndex(idx)}
              className="group relative overflow-hidden rounded-2xl border text-left transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{ backgroundColor: colors.buttonCta, borderColor: `${colors.logo}30` }}
            >
              <div className="relative w-full" style={{ paddingBottom: "141%" }}>
                <Image
                  src={doc.src}
                  alt={doc.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: `${colors.buttonCta}cc` }}
                >
                  <span
                    className="rounded-full px-5 py-2 text-sm font-semibold"
                    style={{ backgroundColor: colors.logo, color: colors.buttonCta }}
                  >
                    {t("enlarge")}
                  </span>
                </div>
              </div>
              <div
                className="px-4 py-3 border-t"
                style={{ borderColor: `${colors.logo}20`, backgroundColor: `${colors.logo}08` }}
              >
                <p className="text-sm font-medium text-white/80 leading-snug">{doc.label}</p>
              </div>
            </button>
          ))}
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
            className="absolute left-4 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft className="size-6" />
          </button>

          <div
            className="relative w-full max-h-[88vh]"
            style={{ maxWidth: "520px", aspectRatio: "1 / 1.414" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={certDocs[lightboxIndex].src}
              alt={certDocs[lightboxIndex].label}
              fill
              className="object-contain"
              sizes="520px"
              quality={95}
            />
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 flex size-11 items-center justify-center rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight className="size-6" />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-sm font-medium">{certDocs[lightboxIndex].label}</p>
            <p className="text-xs mt-1 text-white/40">{lightboxIndex + 1} / {certDocs.length}</p>
          </div>
        </div>
      )}
    </div>
  )
}
