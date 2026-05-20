"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { usePathname } from "@/i18n/navigation"
import { Link } from "@/i18n/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/layout/Logo"
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher"
import { CTAButton } from "@/components/layout/CTAButton"
import { useTranslations, useLocale } from "next-intl"
import { cn } from "@/lib/utils"
import { colors } from "@/lib/colors"

const ANCHOR_IDS = ["o-nas", "certyfikaty", "realizacje", "oferta", "kontakt"]

const SECTION_TO_HREF: Record<string, string> = {
  "o-nas": "#o-nas",
  "certyfikaty": "#certyfikaty",
  "realizacje": "#realizacje",
  "oferta": "#oferta",
  "kontakt": "#kontakt",
}

function useActiveSection(enabled: boolean, lockRef: React.RefObject<boolean>) {
  const [active, setActive] = useState<string | null>(null)

  const compute = useCallback(() => {
    const threshold = window.innerHeight * 0.5
    let current: string | null = null
    for (const id of ANCHOR_IDS) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= threshold) {
        current = id
      }
    }
    setActive(current)
  }, [])

  useEffect(() => {
    if (!enabled) return

    function update() {
      if (lockRef.current) return
      compute()
    }

    compute()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [enabled, lockRef, compute])

  return { active, setActive, compute }
}

export function Header() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const isDE = locale === "de"
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollLockRef = useRef(false)
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const { active: activeSection, setActive: setActiveSection, compute: refreshSection } = useActiveSection(isHome, scrollLockRef)

  const navLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#o-nas" },
    { label: t("offer"), href: "#oferta" },
    { label: t("projects"), href: "#realizacje" },
    { label: t("development"), href: "/rozwoj" },
    { label: t("staff"), href: "/kadra" },
    { label: t("gallery"), href: "/galeria" },
    { label: t("liquefaction"), href: "/uplynnienia" },
    { label: t("contact"), href: "#kontakt" },
  ]

  function scrollTo(target: string | "top") {
    setActiveSection(target === "top" ? null : target)
    scrollLockRef.current = true
    clearTimeout(scrollTimerRef.current)
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })
    }
    scrollTimerRef.current = setTimeout(() => {
      scrollLockRef.current = false
      refreshSection()
    }, 900)
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const transparent = !scrolled && !menuOpen

  function isActive(link: { href: string }) {
    if (isHome) {
      if (link.href === "/") return activeSection === null
      const activHref = activeSection ? SECTION_TO_HREF[activeSection] : null
      return activHref === link.href
    }
    return pathname === link.href
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-all duration-300",
        !transparent && "backdrop-blur-sm shadow-sm"
      )}
      style={{
        backgroundColor: transparent ? "transparent" : colors.buttonCta,
        borderColor: transparent ? "transparent" : "#000",
      }}
    >
      <div className="container mx-auto px-4">

        {/* Wiersz 1: Logo · Nav · (Język+CTA przy xl+) · hamburger (mobile) */}
        <div className="flex h-16 items-center justify-between">
          <Logo light />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => {
              const isAnchor = link.href.startsWith("#")
              const active = isActive(link)
              const className = cn(
                "text-sm font-medium transition-colors cursor-pointer whitespace-nowrap",
                !active && "text-white/80 hover:text-white",
              )
              const style = active ? { color: colors.logo } : undefined

              if (link.href === "/" && isHome) {
                return (
                  <button key={link.href} className={className} style={style}
                    onClick={() => scrollTo("top")}>
                    {link.label}
                  </button>
                )
              }

              if (isAnchor) {
                if (isHome) {
                  return (
                    <button key={link.href} className={className} style={style}
                      onClick={() => scrollTo(link.href.slice(1))}>
                      {link.label}
                    </button>
                  )
                }
                return (
                  <Link key={link.href} href={`/${link.href}`} className={className} style={style}>
                    {link.label}
                  </Link>
                )
              }
              return (
                <Link key={link.href} href={link.href} className={className} style={style}>
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Język + CTA w wierszu 1 — tylko xl+ (≥1280px) lub min-[1500px] dla DE */}
          <div className={isDE ? "hidden min-[1500px]:flex items-center gap-3" : "hidden xl:flex items-center gap-3"}>
            <LanguageSwitcher transparent={transparent} />
            <CTAButton />
          </div>

          {/* Mobile: język + CTA + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher transparent={transparent} />
            <CTAButton />
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
              className={cn(
                "flex size-9 items-center justify-center rounded-lg transition-colors cursor-pointer",
                "text-white hover:bg-white/10"
              )}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Wiersz 2: Język + CTA po prawej — lg–xl dla PL/EN, lg–1500px dla DE */}
        <div className={isDE ? "hidden lg:max-[1499px]:flex justify-end items-center gap-3 pb-3" : "hidden lg:max-[1279px]:flex justify-end items-center gap-3 pb-3"}>
          <LanguageSwitcher transparent={transparent} />
          <CTAButton />
        </div>

      </div>

      {/* Mobile menu — animacja grid */}
      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out lg:hidden",
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 backdrop-blur-sm" style={{ backgroundColor: colors.buttonCta }}>
            <nav className="container mx-auto flex flex-col items-center px-4 py-6 gap-1">
              {navLinks.map((link) => {
                const isAnchor = link.href.startsWith("#")
                const active = isActive(link)
                const className = cn(
                  "w-full py-3 text-base font-medium text-center transition-colors rounded-lg cursor-pointer",
                  active ? "" : "text-white/70 hover:text-white hover:bg-white/5"
                )
                const style = active ? { color: colors.logo } : undefined

                if (link.href === "/" && isHome) {
                  return (
                    <button key={link.href} className={className} style={style}
                      onClick={() => { scrollTo("top"); setMenuOpen(false) }}>
                      {link.label}
                    </button>
                  )
                }

                if (isAnchor) {
                  if (isHome) {
                    return (
                      <button key={link.href} className={className} style={style}
                        onClick={() => { scrollTo(link.href.slice(1)); setMenuOpen(false) }}>
                        {link.label}
                      </button>
                    )
                  }
                  return (
                    <Link key={link.href} href={`/${link.href}`} className={className} style={style}
                      onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </Link>
                  )
                }
                return (
                  <Link key={link.href} href={link.href} className={className} style={style}
                    onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                )
              })}
              <div className="h-px w-24 my-3" style={{ backgroundColor: `${colors.logo}40` }} />
              <Button asChild size="sm" className="w-48">
                <Link href="/kontakt" onClick={() => setMenuOpen(false)}>{t("contactUs")}</Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
