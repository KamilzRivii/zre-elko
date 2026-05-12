import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { colors } from "@/lib/colors"
import { certs as certificates } from "@/components/sections/certyfikaty/CertyfikatySection"

export default function CertyfikatyPage() {
  return (
    <div className="min-h-screen bg-black px-4 pt-28 pb-20">
      <div className="container mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
          style={{ color: colors.logo }}
        >
          <ArrowLeft className="size-4" />
          Powrót do strony głównej
        </Link>

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: colors.logo }}>
          Certyfikaty i uprawnienia
        </p>
        <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
          Nasze <span style={{ color: colors.logo }}>uprawnienia</span>
        </h1>
        <div className="h-px w-24 mb-8" style={{ backgroundColor: colors.logo }} />
        <p className="max-w-2xl text-white/70 text-base leading-relaxed mb-14">
          Na oferowany zakres produkcji i usług ZRE ELKO Sp. z o.o. posiada uprawnienia UDT, TÜV, SVTI ASIT
          oraz EN ISO 9001:2000. Wszystkie realizowane prace spełniają najwyższe wymagania techniczne
          i bezpieczeństwa obowiązujące w energetyce zawodowej i przemysłowej.
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {certificates.map(({ label, description, src }) => (
            <div
              key={src}
              className="flex flex-col rounded-2xl border overflow-hidden"
              style={{ backgroundColor: colors.buttonCta, borderColor: `${colors.logo}40` }}
            >
              <div className="relative flex items-center justify-center p-8 flex-1">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-10 m-6"
                  style={{ backgroundColor: colors.logo }}
                />
                <div className="relative w-24 h-24">
                  <Image src={src} alt={label} fill className="object-contain" />
                </div>
              </div>
              <div
                className="px-4 py-3 border-t"
                style={{ borderColor: `${colors.logo}30`, backgroundColor: `${colors.logo}0d` }}
              >
                <p className="text-sm font-bold text-white">{label}</p>
                <p className="text-xs mt-0.5 leading-snug" style={{ color: `${colors.logo}99` }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
