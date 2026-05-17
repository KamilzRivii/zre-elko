import { Phone, Mail } from "lucide-react"
import { kadraContent } from "@/content/kadra"
import { colors } from "@/lib/colors"
import { getTranslations } from "next-intl/server"

export async function KadraSection() {
  const t = await getTranslations("kadra")
  const roles = t.raw("roles") as string[]
  const board = kadraContent.board.map((member, i) => ({
    ...member,
    role: roles[i] ?? member.role,
  }))
  const [ceo, ...rest] = board

  return (
    <section className="w-full min-h-screen px-4 pt-32 pb-20" style={{ backgroundColor: "#1b3a2a" }}>
      <div className="container mx-auto max-w-5xl">

        {/* Nagłówek */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: colors.logo }}>
          {t("label")}
        </p>
        <h1 className="text-4xl font-bold text-white md:text-5xl mb-2">
          {t("heading")}
        </h1>
        <div className="h-px w-20 mb-12" style={{ backgroundColor: colors.logo }} />

        {/* Karta Prezesa — wyróżniona */}
        <div
          className="relative mb-6 rounded-2xl p-8 overflow-hidden"
          style={{ backgroundColor: colors.buttonCta, border: `1px solid ${colors.logo}30` }}
        >
          <span
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[120px] font-black leading-none select-none pointer-events-none"
            style={{ color: `${colors.logo}08` }}
          >
            01
          </span>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between relative z-10">
            <div>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: `${colors.logo}18`, color: colors.logo }}
              >
                {ceo.role}
              </span>
              <h2 className="text-3xl font-bold text-white tracking-tight">{ceo.name}</h2>
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              <a
                href={`tel:${ceo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="size-4 flex-none" style={{ color: colors.logo }} />
                {ceo.phone}
              </a>
              <a
                href={`mailto:${ceo.email}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="size-4 flex-none" style={{ color: colors.logo }} />
                {ceo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Pozostałe karty */}
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((member, i) => (
            <div
              key={member.email}
              className="relative rounded-2xl p-7 overflow-hidden group"
              style={{
                backgroundColor: colors.buttonCta,
                border: `1px solid ${colors.logo}20`,
              }}
            >
              <span
                className="absolute right-4 bottom-3 text-[80px] font-black leading-none select-none pointer-events-none transition-opacity group-hover:opacity-100"
                style={{ color: `${colors.logo}07` }}
              >
                {String(i + 2).padStart(2, "0")}
              </span>

              <div className="relative z-10 flex flex-col gap-4">
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: colors.logo }}
                >
                  {member.role}
                </span>

                <div className="h-px w-10" style={{ backgroundColor: `${colors.logo}40` }} />

                <h3 className="text-xl font-bold text-white tracking-tight">{member.name}</h3>

                <div className="flex flex-col gap-2 mt-1">
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <Phone className="size-3.5 flex-none" style={{ color: colors.logo }} />
                    {member.phone}
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <Mail className="size-3.5 flex-none" style={{ color: colors.logo }} />
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
