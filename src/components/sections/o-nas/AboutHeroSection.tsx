import { Flame, Wrench, Globe } from "lucide-react"
import { colors } from "@/lib/colors"
import { getTranslations } from "next-intl/server"

const TILE_ICONS = [Flame, Wrench, Globe] as const
const TILE_STYLES = [
  { bg: colors.buttonCta, border: colors.logo, iconColor: colors.logo, textColor: "rgba(255,255,255,0.8)", titleColor: "#fff" },
  { bg: "#1b3a2a", border: "#1b3a2a", iconColor: colors.logo, textColor: "rgba(255,255,255,0.8)", titleColor: "#fff" },
  { bg: colors.logo, border: "#000", iconColor: colors.buttonCta, textColor: `${colors.buttonCta}cc`, titleColor: colors.buttonCta },
] as const

export async function AboutHeroSection() {
  const t = await getTranslations("about")
  const tiles = t.raw("tiles") as { title: string; text: string }[]

  return (
    <section
      id="o-nas"
      className="w-full py-20 px-4"
      style={{ backgroundColor: colors.buttonCta }}
    >
      <div className="container mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: colors.logo }}>
          {t("label")}
        </p>

        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          <span className="text-white">{t("headingLine1")}</span>
          <br />
          <span style={{ color: colors.logo }}>{t("headingLine2")}</span>
          <span className="text-white"> {t("headingLine3")}</span>
        </h2>

        <div className="mt-6 h-px w-24" style={{ backgroundColor: colors.logo }} />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          {t("description")}
        </p>

        {/* Kafelki */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiles.map((tile, i) => {
            const Icon = TILE_ICONS[i]
            const { bg, border, iconColor, textColor, titleColor } = TILE_STYLES[i]
            return (
              <div
                key={tile.title}
                className="flex flex-col gap-4 rounded-2xl p-7 border"
                style={{ backgroundColor: bg, borderColor: border }}
              >
                <div
                  className="flex size-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${iconColor}22` }}
                >
                  <Icon className="size-5" style={{ color: iconColor }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: titleColor }}>
                  {tile.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: textColor }}>
                  {tile.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
