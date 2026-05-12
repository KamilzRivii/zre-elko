"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/layout/Logo"
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher"
import { CTAButton } from "@/components/layout/CTAButton"
import { cn } from "@/lib/utils"
import { colors } from "@/lib/colors"

const navLinks = [
  { label: "Główna", href: "/" },
  { label: "O nas", href: "#o-nas" },
  { label: "Oferta", href: "/oferta" },
  { label: "Realizacje", href: "/realizacje" },
  { label: "Rozwój", href: "/rozwoj" },
  { label: "Kadra", href: "/kadra" },
  { label: "Galeria", href: "/galeria" },
  { label: "Kontakt", href: "/kontakt" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo light />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isAnchor = link.href.startsWith("#")
            const isActive = pathname === link.href
            const className = cn(
              "text-sm font-medium transition-colors cursor-pointer",
              !isActive && "text-white/80 hover:text-white",
            )
            const style = isActive ? { color: colors.logo } : undefined

            if (isAnchor) {
              return (
                <button
                  key={link.href}
                  className={className}
                  style={style}
                  onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" })}
                >
                  {link.label}
                </button>
              )
            }
            return (
              <Link key={link.href} href={link.href} className={className} style={style}>
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher transparent={transparent} />

          <CTAButton />

          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "flex size-9 items-center justify-center rounded-lg transition-colors lg:hidden",
              "text-white hover:bg-white/10"
            )}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t bg-background/95 backdrop-blur-sm lg:hidden">
          <nav className="container mx-auto flex flex-col px-4 py-4">
            {navLinks.map((link) => {
              const isAnchor = link.href.startsWith("#")
              const isActive = pathname === link.href
              const className = cn(
                "py-3 text-sm font-medium transition-colors border-b border-border last:border-0",
                !isActive && "text-muted-foreground hover:text-foreground"
              )
              const style = isActive ? { color: colors.logo } : undefined

              if (isAnchor) {
                return (
                  <button
                    key={link.href}
                    className={className}
                    style={style}
                    onClick={() => {
                      document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" })
                      setMenuOpen(false)
                    }}
                  >
                    {link.label}
                  </button>
                )
              }
              return (
                <Link key={link.href} href={link.href} className={className} style={style}>
                  {link.label}
                </Link>
              )
            })}
            <Button asChild size="sm" className="mt-4 w-full">
              <Link href="/kontakt">Napisz do nas</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
