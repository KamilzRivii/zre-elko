import { Download, FileSpreadsheet, Calendar } from "lucide-react"
import { colors } from "@/lib/colors"
import { getTranslations } from "next-intl/server"

const FILES = [
  {
    name: "elko_uplynnienia_25_02_2020.xlsx",
    href: "/assets/liquefaction/elko_uplynnienia_25_02_2020.xlsx",
    dateKey: "fileDate" as const,
    labelKey: "fileLabel" as const,
  },
]

export async function UplynnieniSection() {
  const t = await getTranslations("uplynnienia")

  return (
    <section className="w-full min-h-screen px-4 pt-32 pb-20" style={{ backgroundColor: "#1b3a2a" }}>
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.logo }}>
          {t("label")}
        </p>
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          {t("headingLine1")}{" "}
          <span style={{ color: colors.logo }}>{t("headingLine2")}</span>
        </h1>
        <div className="h-px w-20 mt-6 mb-8" style={{ backgroundColor: colors.logo }} />

        <p className="text-white/70 text-base leading-relaxed mb-12 max-w-xl">
          {t("description")}
        </p>

        {/* Download cards */}
        <div className="flex flex-col gap-4">
          {FILES.map((file) => (
            <a
              key={file.href}
              href={file.href}
              download
              className="group flex items-center gap-6 rounded-2xl p-6 transition-all duration-200 hover:scale-[1.01]"
              style={{
                backgroundColor: colors.buttonCta,
                border: `1px solid ${colors.logo}25`,
              }}
            >
              {/* Icon */}
              <div
                className="flex size-14 flex-none items-center justify-center rounded-xl transition-colors"
                style={{ backgroundColor: `${colors.logo}15` }}
              >
                <FileSpreadsheet className="size-7" style={{ color: colors.logo }} />
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col gap-1 min-w-0">
                <span className="text-white font-semibold text-base leading-tight">
                  {t(file.labelKey)}
                </span>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <span
                    className="flex items-center gap-1.5 text-xs font-medium"
                    style={{ color: colors.logo }}
                  >
                    <Calendar className="size-3.5" />
                    {t(file.dateKey)}
                  </span>
                  <span className="text-xs text-white/40">
                    {t("fileFormat")}
                  </span>
                </div>
              </div>

              {/* Download button */}
              <div
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 group-hover:brightness-110 flex-none"
                style={{ backgroundColor: colors.logo, color: "#1b3a2a" }}
              >
                <Download className="size-4" />
                <span className="hidden sm:inline">{t("downloadLabel")}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
