"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

function FlagPL({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="7" fill="#fff" />
      <rect y="7" width="20" height="7" fill="#DC143C" />
    </svg>
  )
}

function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="30" fill="#012169" />
      {/* White saltire */}
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      {/* Red saltire (counterchanged, simplified) */}
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="3" />
      {/* White cross */}
      <rect x="25" y="0" width="10" height="30" fill="#fff" />
      <rect x="0" y="11" width="60" height="8" fill="#fff" />
      {/* Red cross */}
      <rect x="27" y="0" width="6" height="30" fill="#C8102E" />
      <rect x="0" y="12.5" width="60" height="5" fill="#C8102E" />
    </svg>
  )
}

function FlagDE({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="4.67" fill="#000" />
      <rect y="4.67" width="20" height="4.67" fill="#DD0000" />
      <rect y="9.33" width="20" height="4.67" fill="#FFCE00" />
    </svg>
  )
}

const languages = [
  { code: "pl", label: "PL", Flag: FlagPL },
  { code: "en", label: "EN", Flag: FlagGB },
  { code: "de", label: "DE", Flag: FlagDE },
] as const

interface Props {
  transparent?: boolean
  mobile?: boolean
}

export function LanguageSwitcher({ transparent = false, mobile = false }: Props) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchLocale(code: string) {
    router.replace(pathname, { locale: code })
  }

  return (
    <div className={mobile ? "flex items-center gap-1" : "hidden items-center gap-1 lg:flex"}>
      {languages.map(({ code, label, Flag }) => {
        const isActive = code === locale
        return (
          <button
            key={code}
            aria-label={label}
            onClick={() => switchLocale(code)}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-colors cursor-pointer",
              isActive
                ? "bg-white/15 text-white"
                : "text-white/60 hover:text-white hover:bg-white/10"
            )}
          >
            <Flag className="h-3.5 w-5 rounded-[2px]" />
            {label}
          </button>
        )
      })}
    </div>
  )
}
