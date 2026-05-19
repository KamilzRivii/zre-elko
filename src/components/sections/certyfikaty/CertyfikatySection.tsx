import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { ArrowRight } from "lucide-react"
import { colors } from "@/lib/colors"
import { getTranslations } from "next-intl/server"

const certSrcs = [
  "/images/certyficates/UDT -logo.png",
  "/images/certyficates/udt-logo2.png",
  "/images/certyficates/tuv-cert-logo.png",
  "/images/certyficates/svti-asit-vector-logo-small.png",
]

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

export async function CertyfikatySection() {
  const t = await getTranslations("certyfikaty")
  const orgs = t.raw("orgs") as { label: string; description: string }[]

  return (
    <section id="certyfikaty" className="w-full py-20 px-4 bg-black">
      <div className="container mx-auto">

        <div className="flex flex-col gap-4 mb-4">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: colors.logo }}>
            {t("label")}
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {t("headingLine1")} <span style={{ color: colors.logo }}>{t("headingLine2")}</span>
          </h2>
        </div>

        <div className="h-px w-24 mb-8" style={{ backgroundColor: colors.logo }} />

        <p className="max-w-2xl text-white/70 text-base leading-relaxed mb-12">
          {t.rich("description", {
            b: (chunks) => <span className="text-white font-medium">{chunks}</span>,
          })}
        </p>

        <div className="grid grid-cols-1 min-[575px]:grid-cols-2 gap-5 md:grid-cols-4 mb-12">
          {orgs.map(({ label, description }, i) => (
            <div
              key={certSrcs[i]}
              className="flex flex-col rounded-2xl border overflow-hidden"
              style={{ backgroundColor: colors.buttonCta, borderColor: `${colors.logo}40` }}
            >
              <div className="relative flex items-center justify-center p-8 flex-1">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-10 m-6"
                  style={{ backgroundColor: colors.logo }}
                />
                <div className="relative w-24 h-24">
                  <Image src={certSrcs[i]} alt={label} fill className="object-contain" />
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

        <Link
          href="/certyfikaty"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: colors.logo, color: colors.buttonCta }}
        >
          {t("seeAll")}
          <ArrowRight className="size-4" />
        </Link>

      </div>
    </section>
  )
}
