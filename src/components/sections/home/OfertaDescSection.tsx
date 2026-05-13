import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { colors } from "@/lib/colors"

const ITEMS = [
  "Kotły parowe i wodne opalane węglem o wydajnościach do ok. 50 MW lub 60 ton pary/h",
  "Kompleksowe biomasowe kotły parowe opalane zrębkami drewna i RDF",
  "Kompleksowe kotły opalane paliwami gazowymi",
  "Elementy ciśnieniowe: podgrzewacze wody, przegrzewacze pary, ściany szczelne, komory, stacje redukcyjne, trójniki, kołnierze, kolektory i inne",
]

export function OfertaDescSection() {
  return (
    <section id="oferta" className="w-full py-20 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Lewa kolumna — nachodzące na siebie zdjęcia */}
          <div className="relative h-[620px] w-full hidden lg:block">

            {/* Zdjęcie 3 — najniżej, z tyłu */}
            <div
              className="absolute rounded-xl overflow-hidden shadow-xl"
              style={{
                top: 370,
                left: 0,
                transform: "rotate(-4deg)",
                zIndex: 1,
                boxShadow: "0 0 0 4px #1b3a2a, 0 8px 32px rgba(0,0,0,0.35)",
              }}
            >
              <Image
                src="/images/offer/offer_pict3.jpg"
                alt="Realizacja ZRE ELKO 3"
                width={325}
                height={220}
                quality={90}
                className="block"
              />
            </div>

            {/* Zdjęcie 2 — środkowe */}
            <div
              className="absolute rounded-xl overflow-hidden shadow-xl"
              style={{
                top: 185,
                left: 30,
                transform: "rotate(2.5deg)",
                zIndex: 2,
                boxShadow: "0 0 0 4px #1b3a2a, 0 12px 40px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/images/offer/offer_pict2.jpg"
                alt="Realizacja ZRE ELKO 2"
                width={325}
                height={220}
                quality={90}
                className="block"
              />
            </div>

            {/* Zdjęcie 1 — na wierzchu */}
            <div
              className="absolute rounded-xl overflow-hidden shadow-2xl"
              style={{
                top: 0,
                left: 60,
                transform: "rotate(-1.5deg)",
                zIndex: 3,
                boxShadow: "0 0 0 4px #1b3a2a, 0 12px 40px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/images/offer/offer_pict1.jpg"
                alt="Realizacja ZRE ELKO 1"
                width={325}
                height={220}
                quality={90}
                className="block"
              />
            </div>

          </div>

          {/* Prawa kolumna — tekst */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: colors.logo }}
            >
              Oferta
            </p>
            <h2 className="text-3xl font-bold md:text-4xl mb-6 leading-tight">
              Kompleksowa realizacja{" "}
              <span style={{ color: colors.buttonCta }}>instalacji energetycznych</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              ZRE ELKO oferują realizację zadań w pełnym zakresie — od projektowania, przez
              produkcję, montaż, modernizację i remonty kotłów, rurociągów, turbozespołów
              i innych instalacji pomocniczych, aż po uruchomienie, szkolenie obsługi
              i przekazanie do eksploatacji.
            </p>

            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-foreground/50">
              Wykonujemy głównie
            </p>

            <ul className="space-y-3 mb-8">
              {ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 size-2 rounded-full flex-none"
                    style={{ backgroundColor: colors.logo }}
                  />
                  <span className="text-muted-foreground leading-relaxed text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted-foreground mb-8">
              Na wykonawstwo, modernizacje i remonty Zakłady posiadają stosowne uprawnienia
              nadane przez{" "}
              <strong className="text-foreground">UDT</strong>,{" "}
              <strong className="text-foreground">TÜV</strong> oraz{" "}
              <strong className="text-foreground">ASIT/SVTI</strong>.
            </p>

            <Link
              href="/oferta"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: colors.buttonCta, color: "#fff" }}
            >
              Zobacz ofertę
              <ArrowRight className="size-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
