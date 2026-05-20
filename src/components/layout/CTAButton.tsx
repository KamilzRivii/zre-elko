"use client"

import { Mail } from "lucide-react"
import { usePathname, useRouter } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { colors } from "@/lib/colors"

export function CTAButton() {
  const t = useTranslations("nav")
  const pathname = usePathname()
  const router = useRouter()

  function handleClick() {
    if (pathname === "/") {
      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
    } else {
      router.push("/kontakt")
    }
  }

  return (
    <button
      onClick={handleClick}
      className="group hidden lg:inline-flex cursor-pointer items-center justify-between gap-3 rounded-full border px-4 py-2 text-sm font-medium text-white whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-[0_0_18px_rgba(177,233,148,0.35)]"
      style={{ backgroundColor: colors.buttonCta, borderColor: colors.logo }}
    >
      {t("contactUs")}
      <div
        className="flex size-7 shrink-0 aspect-square items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-12"
        style={{ backgroundColor: colors.logo }}
      >
        <Mail className="size-3.5" style={{ color: colors.buttonCta }} />
      </div>
    </button>
  )
}
