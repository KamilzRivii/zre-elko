type Entry = { count: number; resetAt: number }

const store = new Map<string, Entry>()

const WINDOW_MS = 15 * 60 * 1000 // 15 minut
const MAX_REQUESTS = 3

export function checkRateLimit(ip: string): { allowed: boolean } {
  const now = Date.now()
  const entry = store.get(ip)

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true }
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false }
  }

  entry.count++
  return { allowed: true }
}
