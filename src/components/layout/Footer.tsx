import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Logo } from "@/components/layout/Logo"
import { company } from "@/content/company"
import { colors } from "@/lib/colors"
import { getTranslations } from "next-intl/server"

export async function Footer() {
  const t = await getTranslations("footer")

  const navLinks: { label: string; href: string }[] = t.raw("links") as { label: string; href: string }[]

  return (
    <footer style={{ backgroundColor: colors.buttonCta, borderTop: "2px solid #000" }}>
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Kolumna 1 — logo + opis */}
          <div className="flex flex-col gap-4">
            <Logo light />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {t("description")}
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-xs text-white/60">{t("nip")} {company.nip}</p>
              <p className="text-xs text-white/60">{t("regon")} {company.regon}</p>
              <p className="text-xs text-white/60">{t("bdo")} {company.bdo}</p>
            </div>
          </div>

          {/* Kolumna 2 — kontakt */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: colors.logo }}>
              {t("contactSection")}
            </p>
            <div className="flex flex-col gap-3">
              {company.phone.map((p) => (
                <a key={p} href={`tel:${p}`} className="flex items-center gap-3 group">
                  <Phone className="size-3.5 shrink-0" style={{ color: colors.logo }} />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">{p}</span>
                </a>
              ))}
              <a href={`tel:${company.fax}`} className="flex items-center gap-3">
                <Phone className="size-3.5 shrink-0 opacity-40" style={{ color: colors.logo }} />
                <span className="text-sm text-white/65">{t("fax")} {company.fax}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 group">
                <Mail className="size-3.5 shrink-0" style={{ color: colors.logo }} />
                <span className="text-sm text-white/70 group-hover:text-white transition-colors">{company.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="size-3.5 shrink-0 mt-0.5" style={{ color: colors.logo }} />
                <span className="text-sm text-white/70">
                  {company.address.street}<br />
                  {company.address.postalCode} {company.address.city}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="size-3.5 shrink-0" style={{ color: colors.logo }} />
                <span className="text-sm text-white/70">{t("workingHours")}</span>
              </div>
            </div>
          </div>

          {/* Kolumna 3 — nawigacja */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: colors.logo }}>
              {t("navigationSection")}
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-white/60 hover:text-white transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>

      {/* Pasek dolny */}
      <div className="border-t px-4 py-5" style={{ borderColor: `${colors.logo}20` }}>
        <div className="container mx-auto flex flex-col items-center gap-2">
          <p className="text-center text-xs text-white/55 leading-relaxed">
            {t("capitalInfo", {
              capital: company.shareCapital,
              krs: company.krs,
              court: company.court,
            })}
          </p>
          <p className="text-center text-xs text-white/60">
            {t("copyright", { year: new Date().getFullYear(), name: company.name })}
          </p>
        </div>
      </div>
    </footer>
  )
}
