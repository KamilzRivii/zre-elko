import { NextRequest, NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations/contact.schema"
import { sendContactEmail } from "@/lib/mail/sendContactEmail"
import { checkRateLimit } from "@/lib/rateLimit"

export async function POST(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  if (!checkRateLimit(ip).allowed) {
    return NextResponse.json({ error: "Zbyt wiele prób. Spróbuj za 15 minut." }, { status: 429 })
  }

  const body = await request.json()

  // Honeypot — boty wypełniają ukryte pole, ludzie nie
  if (body._hp) {
    return NextResponse.json({ ok: true }) // udajemy sukces żeby nie ostrzegać bota
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Nieprawidłowe dane" }, { status: 400 })
  }

  await sendContactEmail(parsed.data)
  return NextResponse.json({ ok: true })
}
