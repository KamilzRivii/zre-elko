"use client"

import { useEffect, useRef, useState } from "react"
import { colors } from "@/lib/colors"

interface Stat {
  value: string
  label: string
}

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (!match) return { num: 0, suffix: value }
  return { num: parseInt(match[1]), suffix: match[2] }
}

function CountUp({ target, suffix, duration = 1600 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let raf: number
    let cancelled = false
    const startTime = performance.now()
    const tick = (now: number) => {
      if (cancelled) return
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => { cancelled = true; cancelAnimationFrame(raf) }
  }, [inView, target, duration])

  return (
    <span ref={ref} className="text-2xl font-bold text-white md:text-3xl">
      {count}{suffix}
    </span>
  )
}

export function StatsBar({ stats }: { stats: readonly Stat[] }) {
  return (
    <div className="flex gap-4 sm:gap-6">
      {stats.map((stat) => {
        const { num, suffix } = parseValue(stat.value)
        return (
          <div
            key={stat.label}
            className="flex w-36 flex-col items-center rounded-xl px-4 py-5 border"
            style={{ backgroundColor: "#254749", borderColor: colors.logo }}
          >
            <CountUp target={num} suffix={suffix} />
            <span className="mt-1 text-xs text-white/70 text-center">{stat.label}</span>
          </div>
        )
      })}
    </div>
  )
}
