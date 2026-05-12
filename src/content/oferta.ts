import type { OfertaItem } from "@/types/oferta"

export type { OfertaItem }

export const ofertaContent = {
  heading: "Oferta",
  subheading: "Kompleksowe usługi elektryczne dla domu i firmy.",
  items: [
    {
      id: "instalacje-wewnetrzne",
      title: "Instalacje wewnętrzne",
      description:
        "Projektowanie i wykonanie instalacji elektrycznych w budynkach mieszkalnych i użytkowych.",
      icon: "zap",
    },
    {
      id: "tablice-rozdzielcze",
      title: "Tablice rozdzielcze",
      description:
        "Montaż i modernizacja tablic rozdzielczych, wymiana bezpieczników na automatyczne.",
      icon: "panel-top",
    },
    {
      id: "instalacje-zewnetrzne",
      title: "Instalacje zewnętrzne",
      description:
        "Oświetlenie zewnętrzne, przyłącza elektryczne, instalacje ogrodowe.",
      icon: "sun",
    },
    {
      id: "pomiary",
      title: "Pomiary i odbiory",
      description:
        "Pomiary ochronne, rezystancji izolacji oraz sprawdzanie poprawności wykonania instalacji.",
      icon: "gauge",
    },
    {
      id: "smart-home",
      title: "Inteligentny dom",
      description:
        "Systemy automatyki budynkowej, sterowanie oświetleniem, roletami i ogrzewaniem.",
      icon: "home",
    },
    {
      id: "usuwanie-awarii",
      title: "Usuwanie awarii",
      description:
        "Szybka reakcja na awarie elektryczne, pogotowie elektryczne.",
      icon: "wrench",
    },
  ] satisfies OfertaItem[],
} as const
