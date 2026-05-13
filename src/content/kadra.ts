export type BoardMember = {
  role: string
  name: string
  phone: string
  email: string
}

export const kadraContent = {
  board: [
    {
      role: "Prezes Zarządu – Dyrektor Generalny",
      name: "Sebastian Bach",
      phone: "+48 510 096 848",
      email: "bach@zre-elko.pl",
    },
    {
      role: "Wiceprezes Zarządu – Dyrektor ds. Realizacji",
      name: "Grzegorz Węgrzyk",
      phone: "+48 504 214 881",
      email: "wegrzyk@zre-elko.pl",
    },
    {
      role: "Wiceprezes Zarządu – Dyrektor Operacyjny",
      name: "Marek Rożnawski",
      phone: "+48 506 567 724",
      email: "mroznawski@zre-elko.pl",
    },
    {
      role: "Wiceprezes Zarządu – Dyrektor Techniczny",
      name: "Zbigniew Pawlus",
      phone: "+48 516 087 963",
      email: "zbigniew.pawlus@zre-elko.pl",
    },
    {
      role: "Dyrektor ds. Finansowych",
      name: "Beata Sojka",
      phone: "+48 516 361 191",
      email: "sojka@zre-elko.pl",
    },
  ] satisfies BoardMember[],
}
