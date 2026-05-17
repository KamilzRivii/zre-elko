import type { OfertaItem } from "@/types/oferta"

export type { OfertaItem }

export const ofertaContent = {
  heading: "Oferta",
  subheading: "Kompleksowe usługi dla energetyki zawodowej i przemysłowej.",
  items: [
    {
      id: "produkcja-kotlow",
      title: "Produkcja kotłów",
      description:
        "Wytwarzanie kotłów parowych i wodnych na węgiel, gaz, biomasę, odpady komunalne oraz paliwa alternatywne (RDF, pre-RDF) o wydajności do 50 MW lub 60 t pary/h.",
      icon: "flame",
    },
    {
      id: "montaz-modernizacja",
      title: "Montaż i modernizacja",
      description:
        "Kompleksowy montaż, remonty i modernizacje kotłów, rurociągów oraz instalacji pomocniczych na obiektach energetycznych — w Polsce i za granicą.",
      icon: "wrench",
    },
    {
      id: "rurociagi",
      title: "Rurociągi technologiczne",
      description:
        "Wykonawstwo rurociągów technologicznych wg PN-EN 13480 — od projektu koncepcyjnego, przez projekt podstawowy, aż po montaż i odbiór z uprawnieniami UDT, TÜV i SVTI.",
      icon: "workflow",
    },
    {
      id: "biuro-projektowe",
      title: "Biuro Projektowe ELKO",
      description:
        "Pełna dokumentacja techniczna kotłów wg PN-EN 12952-3 i PN-EN 12953-3 oraz WUDT/UC/2003 — dla produkcji własnej i partnerów europejskich z Niemiec, Belgii, Austrii, Czech i Francji.",
      icon: "drafting-compass",
    },
  ] satisfies OfertaItem[],
} as const
