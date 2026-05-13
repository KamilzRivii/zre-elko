import type { GaleriaItem } from "@/types/galeria"

export const galeriaContent = {
  categories: ["Kotły", "Montaż", "Rurociągi", "Elementy", "Inne"],
  items: [] as GaleriaItem[],
}

// Aby dodać zdjęcia, uzupełnij tablicę items, np.:
// {
//   src: "/images/galeria/kotly/kociol_01.jpg",
//   alt: "Kocioł parowy opalany węglem",
//   category: "Kotły",
//   title: "Kocioł parowy 50 MW",
// },
