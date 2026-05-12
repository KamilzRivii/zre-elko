import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Logo } from "@/components/layout/Logo"
import { company } from "@/content/company"
import { colors } from "@/lib/colors"

const navLinks = [
  { label: "O nas", href: "#o-nas" },
  { label: "Certyfikaty", href: "#certyfikaty" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Rozwój", href: "/rozwoj" },
  { label: "Kadra", href: "/kadra" },
  { label: "Galeria", href: "/galeria" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: colors.buttonCta, borderTop: "2px solid #000" }}>
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Kolumna 1 — logo + opis */}
          <div className="flex flex-col gap-4">
            <Logo light />
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Produkcja, modernizacja i usługi montażowe w energetyce zawodowej i przemysłowej — w Polsce i za granicą.
            </p>
            <p className="text-xs text-white/35">NIP: {company.nip || "—"}</p>
          </div>

          {/* Kolumna 2 — kontakt */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: colors.logo }}>
              Kontakt
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
                <span className="text-sm text-white/50">fax: {company.fax}</span>
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
                <span className="text-sm text-white/70">{company.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Kolumna 3 — nawigacja */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: colors.logo }}>
              Nawigacja
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
      <div className="border-t px-4 py-4" style={{ borderColor: `${colors.logo}20` }}>
        <p className="text-center text-xs text-white/30">
          © {new Date().getFullYear()} {company.name}. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}
