"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useContactForm } from "@/lib/hooks/useContactForm"
import { company } from "@/content/company"
import { colors } from "@/lib/colors"

const contactItems = [
  { icon: Phone, items: company.phone },
  { icon: Mail, items: [company.email] },
  { icon: MapPin, items: [`${company.address.street}, ${company.address.postalCode} ${company.address.city}`] },
  { icon: Clock, items: [company.workingHours] },
]

export function ContactSection() {
  const { form, status, onSubmit } = useContactForm()
  const { register, formState: { errors } } = form

  return (
    <section id="kontakt" className="w-full py-20 px-4" style={{ backgroundColor: colors.buttonCta }}>
      <div className="container mx-auto">

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: colors.logo }}>
          Kontakt
        </p>
        <h2 className="text-3xl font-bold text-white md:text-4xl mb-3">
          Napisz do <span style={{ color: colors.logo }}>nas</span>
        </h2>
        <div className="h-px w-24 mb-12" style={{ backgroundColor: colors.logo }} />

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Lewa — dane kontaktowe */}
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base leading-relaxed">
              Wypełnij formularz lub skontaktuj się bezpośrednio.
            </p>

            <div className="flex flex-col gap-4">
              {contactItems.map(({ icon: Icon, items }) => (
                <div key={items[0]} className="flex items-center gap-4">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${colors.logo}18`, border: `1px solid ${colors.logo}30` }}
                  >
                    <Icon className="size-4" style={{ color: colors.logo }} />
                  </div>
                  <div className="flex flex-col justify-center gap-0.5">
                    {items.map((item) => (
                      <span key={item} className="text-sm text-white/80">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prawa — formularz */}
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 rounded-2xl border p-8"
            style={{ backgroundColor: "#1a3535", borderColor: `${colors.logo}30` }}
          >
            {[
              { placeholder: "Imię i nazwisko *", name: "name", type: "text", error: errors.name },
              { placeholder: "Adres e-mail *", name: "email", type: "email", error: errors.email },
              { placeholder: "Telefon (opcjonalnie)", name: "phone", type: "tel", error: errors.phone },
            ].map(({ placeholder, name, type, error }) => (
              <div key={name} className="flex flex-col gap-1">
                <input
                  type={type}
                  placeholder={placeholder}
                  aria-invalid={!!error}
                  {...register(name as "name" | "email" | "phone")}
                  className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-opacity-100 transition-colors"
                  style={{ borderColor: `${colors.logo}30` }}
                  onFocus={(e) => (e.target.style.borderColor = colors.logo)}
                  onBlur={(e) => (e.target.style.borderColor = `${colors.logo}30`)}
                />
                {error && <p className="text-xs text-red-400">{error.message}</p>}
              </div>
            ))}

            <div className="flex flex-col gap-1">
              <textarea
                placeholder="Wiadomość *"
                rows={4}
                aria-invalid={!!errors.message}
                {...register("message")}
                className="w-full rounded-xl border bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none resize-none transition-colors"
                style={{ borderColor: `${colors.logo}30` }}
                onFocus={(e) => (e.target.style.borderColor = colors.logo)}
                onBlur={(e) => (e.target.style.borderColor = `${colors.logo}30`)}
              />
              {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl py-3 text-sm font-semibold transition-opacity hover:opacity-85 disabled:opacity-50"
              style={{ backgroundColor: colors.logo, color: colors.buttonCta }}
            >
              {status === "loading" ? "Wysyłanie…" : "Wyślij wiadomość"}
            </button>

            {status === "success" && (
              <p className="text-sm text-center" style={{ color: colors.logo }}>
                Wiadomość wysłana. Odezwiemy się wkrótce!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-center text-red-400">
                Wystąpił błąd. Spróbuj ponownie lub zadzwoń bezpośrednio.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}
