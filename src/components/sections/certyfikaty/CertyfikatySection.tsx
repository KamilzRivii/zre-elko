import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { colors } from "@/lib/colors"

export const certs = [
  {
    label: "UDT",
    description: "Urząd Dozoru Technicznego",
    src: "/images/certyficates/UDT -logo.png",
  },
  {
    label: "UDT",
    description: "Uprawnienia wykonawcze",
    src: "/images/certyficates/udt-logo2.png",
  },
  {
    label: "TÜV",
    description: "Technischer Überwachungsverein",
    src: "/images/certyficates/tuv-cert-logo.png",
  },
  {
    label: "SVTI / ASIT",
    description: "Szwajcarski Instytut Bezpieczeństwa Technicznego",
    src: "/images/certyficates/svti-asit-vector-logo-small.png",
  },
]

export function CertyfikatySection() {
  return (
    <section id="certyfikaty" className="w-full py-20 px-4 bg-black">
      <div className="container mx-auto">

        <div className="flex flex-col gap-4 mb-4">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: colors.logo }}>
            Certyfikaty i uprawnienia
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Jakość potwierdzona <span style={{ color: colors.logo }}>dokumentami</span>
          </h2>
        </div>

        <div className="h-px w-24 mb-8" style={{ backgroundColor: colors.logo }} />

        <p className="max-w-2xl text-white/70 text-base leading-relaxed mb-12">
          Na oferowany zakres produkcji i usług ZRE ELKO Sp. z o.o. posiada uprawnienia{" "}
          <span className="text-white font-medium">UDT, TÜV, SVTI ASIT</span> oraz{" "}
          <span className="text-white font-medium">EN ISO 9001:2000</span>.
          Wszystkie realizowane prace spełniają najwyższe wymagania techniczne
          i bezpieczeństwa obowiązujące w energetyce zawodowej i przemysłowej.
        </p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 mb-12">
          {certs.map(({ label, description, src }) => (
            <div
              key={src}
              className="flex flex-col rounded-2xl border overflow-hidden"
              style={{ backgroundColor: colors.buttonCta, borderColor: `${colors.logo}40` }}
            >
              {/* Górna część — logo na tle z poświatą */}
              <div className="relative flex items-center justify-center p-8 flex-1">
                {/* Poświata za logo */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-10 m-6"
                  style={{ backgroundColor: colors.logo }}
                />
                <div className="relative w-24 h-24">
                  <Image src={src} alt={label} fill className="object-contain" />
                </div>
              </div>

              {/* Dolna część — podpis */}
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

        <Link
          href="/certyfikaty"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: colors.logo, color: colors.buttonCta }}
        >
          Zobacz wszystkie certyfikaty
          <ArrowRight className="size-4" />
        </Link>

      </div>
    </section>
  )
}
