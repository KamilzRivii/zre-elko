"use client"

import { ShieldCheck } from "lucide-react"

export function CertBadge({ label }: { label: string }) {
  return (
    <button
      onClick={() => document.getElementById("certyfikaty")?.scrollIntoView({ behavior: "smooth" })}
      className="inline-flex items-center cursor-pointer gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 backdrop-blur-sm hover:bg-white/20 transition-colors"
    >
      <ShieldCheck className="size-4 text-white" />
      <span className="text-sm font-medium text-white">{label}</span>
    </button>
  )
}
