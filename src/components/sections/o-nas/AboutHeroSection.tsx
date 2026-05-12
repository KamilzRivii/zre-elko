import { Flame, Wrench, Globe } from "lucide-react"
import { colors } from "@/lib/colors"

const tiles = [
  {
    icon: Flame,
    title: "Historia i profil",
    text: "Marzec 1991 roku to początek działalności ZRE ELKO Sp. z o.o. Naszym głównym profilem jest projektowanie od podstaw kotłów wodnych i parowych, ich produkcja, montaż i uruchomienie. Specjalizujemy się w kotłach zasilanych paliwami węglowymi, gazowymi, RDF i biomasą.",
    bg: colors.buttonCta,
    border: colors.logo,
    iconColor: colors.logo,
    textColor: "rgba(255,255,255,0.8)",
    titleColor: "#fff",
  },
  {
    icon: Wrench,
    title: "Pełen zakres usług",
    text: "ZRE ELKO realizuje zadania w pełnym zakresie — od projektowania, przez produkcję, montaż, modernizację i remonty kotłów, rurociągów i instalacji pomocniczych, po uruchomienie, szkolenie obsługi oraz przekazanie do eksploatacji instalacji energetycznych.",
    bg: "#1b3a2a",
    border: "#1b3a2a",
    iconColor: colors.logo,
    textColor: "rgba(255,255,255,0.8)",
    titleColor: "#fff",
  },
  {
    icon: Globe,
    title: "Uprawnienia i zasięg",
    text: "Posiadamy uprawnienia UDT, TÜV oraz ASIT/SVTI. Pracownicy montażowi mają kwalifikacje E i D. Działamy w Polsce i za granicą — Niemcy, Francja, Austria, Czechy, Wielka Brytania, Szwajcaria, Szwecja, Indie, Białoruś, Ukraina i Finlandia.",
    bg: colors.logo,
    border: "#000",
    iconColor: colors.buttonCta,
    textColor: `${colors.buttonCta}cc`,
    titleColor: colors.buttonCta,
  },
] as const

export function AboutHeroSection() {
  return (
    <section
      id="o-nas"
      className="w-full pt-32 pb-20 px-4"
      style={{ backgroundColor: colors.buttonCta }}
    >
      <div className="container mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: colors.logo }}>
          O nas
        </p>

        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          <span className="text-white">Zakłady Remontowe Energetyki</span>
          <br />
          <span style={{ color: colors.logo }}>ELKO</span>
          <span className="text-white"> Sp. z o.o.</span>
        </h2>

        <div className="mt-6 h-px w-24" style={{ backgroundColor: colors.logo }} />

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          Firma z siedzibą w Raciborzu specjalizująca się w produkcji, modernizacji
          i usługach montażowych w energetyce zawodowej i przemysłowej — w Polsce i za granicą.
        </p>

        {/* Kafelki */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiles.map(({ icon: Icon, title, text, bg, border, iconColor, textColor, titleColor }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl p-7 border"
              style={{ backgroundColor: bg, borderColor: border }}
            >
              <div
                className="flex size-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${iconColor}22` }}
              >
                <Icon className="size-5" style={{ color: iconColor }} />
              </div>
              <h3 className="text-lg font-semibold" style={{ color: titleColor }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: textColor }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
