export const homeContent = {
  hero: {
    badge: "Certyfikowani elektrycy",
    headingParts: ["Produkujemy", "Modernizujemy", "Montujemy"],
    subheading:
      "Kompleksowe usługi elektryczne dla klientów indywidualnych i firm. Solidnie, terminowo i zgodnie z normami.",
    ctaPrimary: { label: "Sprawdź ofertę", href: "/oferta" },
    ctaSecondary: { label: "Skontaktuj się", href: "/kontakt" },
    stats: [
      { value: "35+", label: "lat doświadczenia" },
      { value: "1300+", label: "realizacji" },
      { value: "100%", label: "zgodność z normami" },
    ],
    trustCard: {
      heading: "Twój zaufany partner",
      text: "w profesjonalnych instalacjach elektrycznych dla domu i firmy.",
    },
    featureCard: [
      {
        id: "speed",
        icon: "zap",
        title: "Szybka realizacja",
        description: "Termin wykonania uzgodniony indywidualnie z każdym klientem.",
      },
      {
        id: "quality",
        icon: "shield-check",
        title: "Gwarancja jakości",
        description: "Wszystkie prace zgodne z normami PN-HD 60364.",
      },
      {
        id: "quote",
        icon: "file-text",
        title: "Bezpłatna wycena",
        description: "Wycena bez zobowiązań w ciągu 24 godzin.",
      },
      {
        id: "experience",
        icon: "award",
        title: "15 lat na rynku",
        description: "Ponad 1300 zrealizowanych instalacji elektrycznych.",
      },
    ],
  },
  ofertaPreview: {
    heading: "Co oferujemy",
    subheading: "Szeroki zakres usług elektrycznych dopasowany do Twoich potrzeb.",
  },
  realizacjePreview: {
    heading: "Nasze realizacje",
    subheading: "Wybrane projekty, które zrealizowaliśmy dla naszych klientów.",
    cta: { label: "Zobacz wszystkie", href: "/realizacje" },
  },
  cta: {
    heading: "Potrzebujesz wyceny?",
    subheading: "Napisz lub zadzwoń — bezpłatna wycena w ciągu 24 godzin.",
    cta: { label: "Zapytaj o wycenę", href: "/kontakt" },
  },
} as const
