import Link from "next/link"
import { Cormorant_Garamond, Montserrat } from "next/font/google"
import { cn } from "@/lib/utils"
import { colors } from "@/lib/colors"

const cormorant = Cormorant_Garamond({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
})

const montserrat = Montserrat({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
})

interface LogoProps {
  light?: boolean
  className?: string
}

export function Logo({ light = false, className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 no-underline", className)}>
      {/* Literka E — Cormorant Garamond */}
      <div className="flex size-9 items-center justify-center rounded-lg bg-primary shadow-sm">
        <span
          className={cn("text-[30px] leading-none", cormorant.className)}
          style={{ color: colors.logo }}
        >
          E
        </span>
      </div>

      {/* Wordmark — Montserrat */}
      <span
        className={cn(
          "text-[18px] font-semibold leading-none tracking-[0.08em] transition-colors",
          montserrat.className,
          light ? "text-white" : "text-foreground"
        )}
      >
        ZRE ELKO
      </span>
    </Link>
  )
}
