import Image from "next/image"
import { TrendingUp, Euro, Building2, Calendar, Users, Flame } from "lucide-react"
import { colors } from "@/lib/colors"
import { getTranslations } from "next-intl/server"

const STAT_ICONS = [Building2, TrendingUp, Euro, Calendar, Users, Flame]

const growthLogos = [
  { src: "/images/growth/unia-europejska.jpg", alt: "Unia Europejska" },
  { src: "/images/growth/program-regionalny.jpg", alt: "Regionalny Program Operacyjny" },
  { src: "/images/growth/slaskie.jpg", alt: "Śląskie" },
]

export async function RozwojSection() {
  const t = await getTranslations("rozwoj")
  const projects = t.raw("projects") as Array<{
    badge: string
    title: string
    description?: string
    stats: { label: string; value: string }[]
    program?: string
    source?: string
    url?: string
    tagline?: string
    infoText?: string
    infoText2?: string
    tags?: string[]
  }>

  const p1 = projects[0]
  const p2 = projects[1]

  return (
    <section id="rozwoj" className="w-full pt-28 pb-20 px-4" style={{ backgroundColor: colors.buttonCta }}>
      <div className="container mx-auto">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: colors.logo }}>
          {t("label")}
        </p>
        <h2 className="text-3xl font-bold text-white md:text-4xl max-w-3xl leading-snug mb-3">
          {t("headingLine1")} <span style={{ color: colors.logo }}>{t("headingLine2")}</span> {t("headingLine3")}
        </h2>
        <div className="h-px w-24 mb-16" style={{ backgroundColor: colors.logo }} />

        {/* ── Projekt 1 ── */}
        <div className="mb-16">
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4"
            style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
          >
            {p1.badge}
          </div>
          <h3 className="text-xl font-semibold text-white max-w-3xl leading-snug mb-6">
            {p1.title}
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
            {p1.stats.map(({ label, value }, i) => {
              const Icon = STAT_ICONS[i] ?? Building2
              return (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border px-6 py-5"
                  style={{ backgroundColor: "#1b3a2a", borderColor: `${colors.logo}40` }}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${colors.logo}22` }}>
                    <Icon className="size-5" style={{ color: colors.logo }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-3 gap-5 mb-8 max-w-2xl">
            {growthLogos.map(({ src, alt }) => (
              <div
                key={src}
                className="relative flex items-center justify-center rounded-xl border aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: "#fff", borderColor: `${colors.logo}30` }}
              >
                <Image src={src} alt={alt} fill className="object-contain p-3" />
              </div>
            ))}
          </div>

          <div className="rounded-2xl border p-6 max-w-3xl" style={{ borderColor: `${colors.logo}30`, backgroundColor: `${colors.logo}0a` }}>
            <p className="text-sm text-white/70 leading-relaxed">
              {p1.infoText?.replace("{source}", p1.source ?? "").replace("{program}", p1.program ?? "")}
            </p>
            <p className="text-sm text-white/70 leading-relaxed mt-3">
              {p1.infoText2?.replace("{url}", "")}{" "}
              <span className="font-medium" style={{ color: colors.logo }}>{p1.url}</span>
            </p>
            <p className="text-xs text-white/40 mt-4 italic">{p1.tagline}</p>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full mb-16" style={{ backgroundColor: `${colors.logo}25` }} />

        {/* ── Projekt 2 ── */}
        <div>
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4"
            style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
          >
            {p2.badge}
          </div>
          <h3 className="text-xl font-semibold text-white max-w-3xl leading-snug mb-4">
            {p2.title}
          </h3>
          <p className="max-w-3xl text-white/70 text-sm leading-relaxed mb-8">
            {p2.description}
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {p2.stats.map(({ label, value }, i) => {
              const Icon = STAT_ICONS[i] ?? Building2
              return (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border px-6 py-5"
                  style={{ backgroundColor: "#1b3a2a", borderColor: `${colors.logo}40` }}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${colors.logo}22` }}>
                    <Icon className="size-5" style={{ color: colors.logo }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex gap-2">
            {p2.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
