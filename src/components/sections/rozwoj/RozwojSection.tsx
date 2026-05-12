import Image from "next/image"
import Link from "next/link"
import { TrendingUp, Euro, Building2, Calendar, Users, Flame, ArrowLeft } from "lucide-react"
import { colors } from "@/lib/colors"

const projekt1 = {
  title: "Inwestycja w rozwój i wdrożenie innowacyjnej infrastruktury badawczo-rozwojowej, produkcyjnej oraz informatycznej dla produkcji nowoczesnych kotłów energetycznych",
  stats: [
    { icon: Building2, label: "Beneficjent", value: "ZRE ELKO Sp. z o.o." },
    { icon: TrendingUp, label: "Wartość projektu", value: "1 111 305 zł" },
    { icon: Euro, label: "Dofinansowanie", value: "451 750 zł" },
  ],
  funding: {
    program: "Regionalny Program Operacyjny Województwa Śląskiego na lata 2007–2013",
    source: "Europejski Fundusz Rozwoju Regionalnego",
    url: "www.rpo.silesia-region.pl",
    tagline: "Regionalny Program Operacyjny Województwa Śląskiego – realna odpowiedź na realne potrzeby",
  },
  placeholders: ["Logo 1", "Logo 2", "Logo 3"],
}

const projekt2 = {
  title: "Przygotowanie niezbędnego zaplecza projektowo-technologicznego dla wdrożenia do produkcji linii kotłów gazowych z innowatorskim systemem palnikowym",
  description: "Celem projektu jest rozwój działalności produkcyjnej wraz z jej umiędzynarodowieniem poprzez opracowanie konstrukcji i technologii wytwarzania dla kotłów zasilanych paliwem gazowym z zastosowaniem palników multi-paliwowych. Projekt koncentruje się na implementacji rozwiązań umożliwiających osadzenie palnika w specjalistycznym gnieździe oraz nowoczesnych żebrowanych wymiennikach spaliny-woda i spaliny-powietrze — zmniejszając emisję zanieczyszczeń i zwiększając efektywność energetyczną.",
  stats: [
    { icon: Building2, label: "Beneficjent", value: "ZRE ELKO Sp. z o.o." },
    { icon: TrendingUp, label: "Wartość projektu", value: "1 999 600 zł" },
    { icon: Euro, label: "Dofinansowanie UE", value: "777 355 zł" },
    { icon: Calendar, label: "Okres realizacji", value: "10.2024 – 06.2025" },
    { icon: Users, label: "Grupa docelowa", value: "Branża energetyczna, budowlana, produkcyjna, spożywcza" },
    { icon: Flame, label: "Fundusz", value: "Fundusz Sprawiedliwej Transformacji 2021–2027" },
  ],
  tags: ["#FunduszeUE", "#FunduszeEuropejskie"],
}

const growthLogos = [
  { src: "/images/growth/unia-europejska.jpg", alt: "Unia Europejska" },
  { src: "/images/growth/program-regionalny.jpg", alt: "Regionalny Program Operacyjny" },
  { src: "/images/growth/slaskie.jpg", alt: "Śląskie" },
]

export function RozwojSection() {
  return (
    <section id="rozwoj" className="w-full pt-28 pb-20 px-4" style={{ backgroundColor: colors.buttonCta }}>
      <div className="container mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
          style={{ color: colors.logo }}
        >
          <ArrowLeft className="size-4" />
          Powrót do strony głównej
        </Link>

        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: colors.logo }}>
          Rozwój
        </p>
        <h2 className="text-3xl font-bold text-white md:text-4xl max-w-3xl leading-snug mb-3">
          Projekty <span style={{ color: colors.logo }}>dofinansowane</span> ze środków UE
        </h2>
        <div className="h-px w-24 mb-16" style={{ backgroundColor: colors.logo }} />

        {/* ── Projekt 1 ── */}
        <div className="mb-16">
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4"
            style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
          >
            Projekt 1 · RPO WSL 2007–2013
          </div>
          <h3 className="text-xl font-semibold text-white max-w-3xl leading-snug mb-6">
            {projekt1.title}
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
            {projekt1.stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border px-6 py-5"
                style={{ backgroundColor: "#1b3a2a", borderColor: `${colors.logo}40` }}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${colors.logo}22` }}>
                  <Icon className="size-5" style={{ color: colors.logo }} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-5 mb-8 max-w-2xl">
            {growthLogos.map(({ src, alt }) => (
              <div
                key={src}
                className="relative flex items-center justify-center rounded-xl border aspect-[4/3] overflow-hidden"
                style={{ backgroundColor: "#fff", borderColor: `${colors.logo}30` }}
              >
                <Image src={src} alt={alt} fill className="object-contain p-3" />
              </div>
            ))}
          </div>

          <div className="rounded-2xl border p-6 max-w-3xl" style={{ borderColor: `${colors.logo}30`, backgroundColor: `${colors.logo}0a` }}>
            <p className="text-sm text-white/70 leading-relaxed">
              Projekt współfinansowany przez <span className="text-white font-medium">Unię Europejską</span> z{" "}
              {projekt1.funding.source} w ramach {projekt1.funding.program}.
            </p>
            <p className="text-sm text-white/70 leading-relaxed mt-3">
              Informacje źródłowe dostępne na stronie{" "}
              <span className="font-medium" style={{ color: colors.logo }}>{projekt1.funding.url}</span>
            </p>
            <p className="text-xs text-white/40 mt-4 italic">{projekt1.funding.tagline}</p>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full mb-16" style={{ backgroundColor: `${colors.logo}25` }} />

        {/* ── Projekt 2 ── */}
        <div>
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mb-4"
            style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
          >
            Projekt 2 · Fundusz Sprawiedliwej Transformacji 2021–2027
          </div>
          <h3 className="text-xl font-semibold text-white max-w-3xl leading-snug mb-4">
            {projekt2.title}
          </h3>
          <p className="max-w-3xl text-white/70 text-sm leading-relaxed mb-8">
            {projekt2.description}
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            {projekt2.stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border px-6 py-5"
                style={{ backgroundColor: "#1b3a2a", borderColor: `${colors.logo}40` }}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${colors.logo}22` }}>
                  <Icon className="size-5" style={{ color: colors.logo }} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {projekt2.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
