"use client"

import { useEffect, useRef, useState } from "react"
import { colors } from "@/lib/colors"

interface Stat {
  value: string
  label: string
}

function parseValue(value: string): { num: number; suffix: string } | null {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return null
  return { num: parseInt(match[1], 10), suffix: match[2] }
}

function StatValue({ value }: { value: string }) {
  const parsed = parseValue(value)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || !parsed) return
    const { num } = parsed
    const duration = 1200
    const start = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * num))
      if (progress < 1) {
        raf.current = requestAnimationFrame(tick)
      }
    }

    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [started, parsed?.num])

  if (!parsed) {
    return (
      <span ref={ref} className="text-2xl font-bold text-white md:text-3xl">
        {value}
      </span>
    )
  }

  return (
    <span ref={ref} className="text-2xl font-bold text-white md:text-3xl">
      {count}{parsed.suffix}
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
