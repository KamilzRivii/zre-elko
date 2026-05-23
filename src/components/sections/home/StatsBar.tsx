"use client"

import { useEffect, useRef, useState } from "react"
import { colors } from "@/lib/colors"

interface Stat {
  value: string
  label: string
}

function StatValue({ value }: { value: string }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span
      ref={ref}
      className="text-2xl font-bold text-white md:text-3xl transition-opacity duration-700"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {value}
    </span>
  )
}

export function StatsBar({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex w-36 flex-col items-center rounded-xl px-4 py-5 border"
          style={{ backgroundColor: "#254749", borderColor: colors.logo }}
        >
          <StatValue value={stat.value} />
          <span className="mt-1 text-xs text-white/70 text-center">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
