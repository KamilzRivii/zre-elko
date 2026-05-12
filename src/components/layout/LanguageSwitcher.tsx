"use client"

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
  { code: "PL", Flag: FlagPL },
  { code: "EN", Flag: FlagGB },
  { code: "DE", Flag: FlagDE },
] as const

interface Props {
  transparent?: boolean
}

export function LanguageSwitcher({ transparent = false }: Props) {
  const active = "PL"

  return (
    <div className="hidden items-center gap-1 lg:flex">
      {languages.map(({ code, Flag }) => {
        const isActive = code === active
        return (
          <button
            key={code}
            aria-label={code}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-colors",
              isActive
                ? "bg-white/15 text-white"
                : "text-white/60 hover:text-white hover:bg-white/10"
            )}
          >
            <Flag className="h-3.5 w-5 rounded-[2px]" />
            {code}
          </button>
        )
      })}
    </div>
  )
}
