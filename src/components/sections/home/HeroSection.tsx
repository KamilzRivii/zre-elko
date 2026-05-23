import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react"
import { CertBadge } from "@/components/sections/home/CertBadge"
import { company } from "@/content/company"
import { colors } from "@/lib/colors"
import { StatsBar } from "@/components/sections/home/StatsBar"
import { getTranslations } from "next-intl/server"

export async function HeroSection() {
  const t = await getTranslations("hero")
  const headingParts = t.raw("headingParts") as string[]
  const stats = t.raw("stats") as { value: string; label: string }[]

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      <Image
        src="/images/hero.webp"
        alt={t("logoAlt")}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 35% 55%, transparent 20%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2020/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      <div className="relative z-10 container mx-auto flex h-full flex-col justify-between px-4 py-8">
        <div className="h-16" />

        {/* Środkowy rząd — nagłówek po lewej, karta kontaktowa po prawej */}
        <div className="flex items-center justify-between gap-8">
          {/* Heading */}
          <h1 className="mt-36 sm:mt-0 max-[420px]:text-3xl text-4xl sm:text-5xl font-bold uppercase tracking-widest leading-tight md:text-6xl lg:text-7xl">
            <span className="text-white">{headingParts[0]}</span>
            <br />
            <span style={{ color: colors.logo }}>{headingParts[1]}</span>
            <br />
            <span className="text-white">{headingParts[2]}</span>
          </h1>

          {/* Karta kontaktowa — xl+ w środkowym rzędzie */}
          <Link
            href="/#kontakt"
            className="hidden xl:flex flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-7 py-6 w-72 shrink-0 hover:bg-white/15 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">{t("contactLabel")}</span>
              <ArrowRight className="size-4 text-white/40 group-hover:text-white/70 transition-colors" />
            </div>

            <div className="h-px bg-white/15" />

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: colors.buttonCta }}>
                  <Phone className="size-3.5" style={{ color: colors.logo }} />
                </div>
                <div className="flex flex-col">
                  {company.phone.map((p) => (
                    <span key={p} className="text-sm text-white">{p}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: colors.buttonCta }}>
                  <Mail className="size-3.5" style={{ color: colors.logo }} />
                </div>
                <span className="text-sm text-white">{company.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: colors.buttonCta }}>
                  <MapPin className="size-3.5" style={{ color: colors.logo }} />
                </div>
                <span className="text-sm text-white leading-snug">
                  {company.address.street}<br />
                  {company.address.postalCode} {company.address.city}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: colors.buttonCta }}>
                  <Clock className="size-3.5" style={{ color: colors.logo }} />
                </div>
                <span className="text-sm text-white">{company.workingHours}</span>
              </div>
            </div>

            <div className="h-px bg-white/15" />

            <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
              {t("contactMsg")}
            </span>
          </Link>
        </div>

        {/* Karta kontaktowa — lg–xl: przy dolnej krawędzi po prawej */}
        <Link
          href="/#kontakt"
          className="hidden lg:flex xl:hidden absolute bottom-28 right-0 flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-7 py-6 w-72 shrink-0 hover:bg-white/15 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60">{t("contactLabel")}</span>
            <ArrowRight className="size-4 text-white/40 group-hover:text-white/70 transition-colors" />
          </div>
          <div className="h-px bg-white/15" />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: colors.buttonCta }}>
                <Phone className="size-3.5" style={{ color: colors.logo }} />
              </div>
              <div className="flex flex-col">
                {company.phone.map((p) => (
                  <span key={p} className="text-sm text-white">{p}</span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: colors.buttonCta }}>
                <Mail className="size-3.5" style={{ color: colors.logo }} />
              </div>
              <span className="text-sm text-white">{company.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: colors.buttonCta }}>
                <MapPin className="size-3.5" style={{ color: colors.logo }} />
              </div>
              <span className="text-sm text-white leading-snug">
                {company.address.street}<br />
                {company.address.postalCode} {company.address.city}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: colors.buttonCta }}>
                <Clock className="size-3.5" style={{ color: colors.logo }} />
              </div>
              <span className="text-sm text-white">{company.workingHours}</span>
            </div>
          </div>
          <div className="h-px bg-white/15" />
          <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
            {t("contactMsg")}
          </span>
        </Link>

        {/* Dolny pasek — statystyki po lewej, badge po prawej */}
        <div className="flex flex-col-reverse items-start gap-4 pb-10 md:flex-row md:items-end md:justify-between">
          <StatsBar stats={stats} />

          <CertBadge label={t("badge")} />
        </div>
      </div>
    </section>
  )
}
