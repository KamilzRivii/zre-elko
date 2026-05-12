import type { RealizacjaItem } from "@/types/realizacje"

export type { RealizacjaItem }

export const realizacjeContent = {
  heading: "Realizacje",
  subheading: "Projekty, które zrealizowaliśmy z pełnym zaangażowaniem.",
  items: [
    {
      id: "dom-jednorodzinny-warszawa",
      title: "Instalacja w domu jednorodzinnym",
      description:
        "Kompleksowe wykonanie instalacji elektrycznej w nowo budowanym domu jednorodzinnym.",
      category: "Budownictwo mieszkaniowe",
      year: 2024,
      imageAlt: "Instalacja elektryczna w domu jednorodzinnym",
    },
    {
      id: "biuro-modernizacja",
      title: "Modernizacja biura",
      description:
        "Wymiana starej instalacji i montaż nowej tablicy rozdzielczej w biurze 200 m².",
      category: "Komercyjne",
      year: 2024,
      imageAlt: "Modernizacja instalacji elektrycznej w biurze",
    },
    {
      id: "hala-produkcyjna",
      title: "Instalacja hali produkcyjnej",
      description:
        "Zasilanie maszyn produkcyjnych, oświetlenie przemysłowe LED, instalacja odgromowa.",
      category: "Przemysłowe",
      year: 2023,
      imageAlt: "Instalacja elektryczna hali produkcyjnej",
    },
  ] satisfies RealizacjaItem[],
} as const
