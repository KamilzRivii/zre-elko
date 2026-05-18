import type { RealizacjaItem } from "@/types/realizacje"

// Helpers
const photos = (folder: string, files: string[]): string[] =>
  files.map((f) => `/images/realisation/${folder}/${f}`)

const starter = (name: string) => `/images/realisation/starters/${name}.webp`

export const realizacje: RealizacjaItem[] = [
  // ── First 8 — have dedicated thumbnail (starter) images ─────────────────
  {
    id: "halle",
    year: 2021,
    thumbnail: starter("halle"),
    photos: photos("halle", ["halle_1.webp","halle_2.webp","halle_3.webp","halle_4.webp","halle_5.webp","halle_6.webp"]),
  },
  {
    id: "kluczewo",
    year: 2022,
    thumbnail: starter("kluczewo"),
    photos: photos("kluczewo", ["kluczewo_1.webp","kluczewo_2.webp","kluczewo_3.webp","kluczewo_4.webp","kluczewo_5.webp"]),
  },
  {
    id: "kruszwica_2024",
    year: 2024,
    thumbnail: starter("kruszwica"),
    photos: photos("kruszwica_2024", ["kruczwica_1.webp","kruszwica_2.webp","kruszwica_3.webp","kruszwica_4.webp"]),
  },
  {
    id: "kussnacht",
    year: 2020,
    thumbnail: starter("kussnacht"),
    photos: photos("kussnacht", ["kussnacht_1.webp","kussnacht_2.webp","kussnacht_3.webp","kussnacht_4.webp","kussnacht_5.webp","kussnacht_6.webp","kussnacht_7.webp","kussnacht_8.webp","kussnacht_9.webp","kussnacht_10.webp","kussnacht_11.webp","kussnacht_12.webp"]),
  },
  {
    id: "malbork",
    year: 2020,
    thumbnail: starter("malbork"),
    photos: photos("malbork", ["malbork_1.webp","malbork_2.webp","malbork_3.webp"]),
  },
  {
    id: "munkedal_2022",
    year: 2022,
    thumbnail: starter("munkedal"),
    photos: photos("munkedal_2024", ["munkedal_1.webp","munkedal_2.webp","munkedal_3.webp"]),
  },
  {
    id: "poznan",
    year: 2024,
    thumbnail: starter("poznan"),
    photos: photos("poznan", ["poznan_1.webp","poznan_2.webp","poznan_3.webp","poznan_4.webp","poznan_5.webp","poznan_6.webp","poznan_7.webp","poznan_8.webp","poznan_9.webp"]),
  },
  {
    id: "wyszkow",
    year: 2021,
    thumbnail: starter("wyszkow"),
    photos: photos("wyszkow", ["wyszkow_1.webp","wyszkow_2.webp","wyszkow_3.webp","wyszkow_4.webp","wyszkow_5.webp","wyszkow_6.webp","wyszkow_7.webp","wyszkow_8.webp","wyszkow_9.webp","wyszkow_10.webp","wyszkow_11.webp","wyszkow_12.webp","wyszkow_13.webp","wyszkow_14.webp","wyszkow_15.webp","wyszkow_16.webp"]),
  },
  // ── Remaining 16 projects ────────────────────────────────────────────────
  {
    id: "benkovac",
    year: 2016,
    photos: photos("benkovac", ["benkovac_1.webp","benkovac_2.webp","benkovac_3.webp","benkovac_4.webp","benkovac_5.webp","benkovac_6.webp","benkovac_7.webp","benkovac_8.webp","benkovac_9.webp","benkovac_10.webp","benkovac_11.webp","benkovac_12.webp","benkovac_13.webp","benkovac_14.webp","benkovac_15.webp","benkovac_16.webp","benkovac_17.webp","benkovac_18.webp","benkovac_19.webp","benkovac_20.webp","benkovac_21.webp","benkovac_22.webp"]),
  },
  {
    id: "dabrowa_gornicza",
    year: 2017,
    photos: photos("dabrowa_gornicza", ["dabrowa_gornicza_1.webp","dabrowa_gornicza_2.webp","dabrowa_gornicza_3.webp","dabrowa_gornicza_4.webp","dabrowa_gornicza_5.webp","dabrowa_gornicza_6.webp","dabrowa_gornicza_7.webp","dabrowa_gornicza_8.webp","dabrowa_gornicza_9.webp","dabrowa_gornicza_10.webp","dabrowa_gornicza_11.webp","dabrowa_gornicza_12.webp"]),
  },
  {
    id: "gliwice",
    year: 2017,
    photos: photos("gliwice", ["gliwice_1.webp","gliwice_2.webp","gliwice_3.webp","gliwice_4.webp","gliwice_5.webp","gliwice_6.webp","gliwice_7.webp","gliwice_8.webp","gliwice_9.webp","gliwice_10.webp","gliwice_11.webp","gliwice_12.webp","gliwice_13.webp","gliwice_14.webp"]),
  },
  {
    id: "kruszwica_2010",
    year: 2010,
    photos: photos("kruszwica_2010", ["kruszwica_1.webp","kruszwica_2.webp","kruszwica_3.webp","kruszwica_4.webp","kruszwica_5.webp","kruszwica_6.webp"]),
  },
  {
    id: "lacq_2008",
    year: 2009,
    photos: photos("lacq_2008", ["lacq_1.webp","lacq_2.webp","lacq_3.webp","lacq_4.webp","lacq_5.webp","lacq_6.webp"]),
  },
  {
    id: "lacq_2011",
    year: 2011,
    photos: photos("lacq_2011", ["lacq_1.webp","lacq_2.webp","lacq_3.webp","lacq_4.webp","lacq_5.webp","lacq_6.webp"]),
  },
  {
    id: "lenzing",
    year: 2013,
    photos: photos("lenzing", ["lenzing_1.webp","lenzing_2.webp","lenzing_3.webp","lenzing_4.webp","lenzing_5.webp","lenzing_6.webp","lenzing_7.webp","lenzing_8.webp","lenzing_9.webp","lenzing_10.webp","lenzing_11.webp","lenzing_12.webp","lenzing_13.webp","lenzing_14.webp"]),
  },
  {
    id: "munkedal_2021",
    year: 2021,
    photos: photos("munkedal_2021", ["munkedal_1.webp","munkedal_2.webp","munkedal_3.webp"]),
  },
  {
    id: "plock",
    year: 2015,
    photos: photos("plock", ["plock_1.webp","plock_2.webp","plock_3.webp","plock_4.webp","plock_5.webp","plock_6.webp","plock_7.webp","plock_8.webp","plock_9.webp","plock_10.webp","plock_11.webp","plock_12.webp"]),
  },
  {
    id: "rybnik",
    year: 2021,
    photos: photos("rybnik", ["rybnik_1.webp","rybnik_2.webp","rybnik_3.webp","rybnik_4.webp","rybnik_5.webp"]),
  },
  {
    id: "siekierki",
    year: 2014,
    photos: photos("siekierki", ["siekierki_1.webp","siekierki_2.webp","siekierki_3.webp","siekierki_4.webp","siekierki_5.webp","siekierki_6.webp","siekierki_7.webp","siekierki_8.webp","siekierki_9.webp","siekierki_10.webp","siekierki_11.webp","siekierki_12.webp"]),
  },
  {
    id: "sokolow",
    year: 2008,
    photos: photos("sokolow", ["sokolow_1.webp","sokolow_2.webp","sokolow_3.webp","sokolow_4.webp","sokolow_5.webp","sokolow_6.webp","sokolow_7.webp","sokolow_8.webp","sokolow_9.webp","sokolow_10.webp"]),
  },
  {
    id: "walcz",
    year: 2011,
    photos: photos("walcz", ["walcz_1.webp","walcz_2.webp","walcz_3.webp","walcz_4.webp","walcz_5.webp","walcz_6.webp"]),
  },
  {
    id: "zbiersk",
    year: 2019,
    photos: photos("zbiersk", ["zbiersk_1.webp","zbiersk_2.webp","zbiersk_3.webp","zbiersk_4.webp","zbiersk_5.webp","zbiersk_6.webp","zbiersk_7.webp"]),
  },
  {
    id: "zdunska_wola",
    year: 2019,
    photos: photos("zdunska_wola", ["zduska_wola_1.webp","zduska_wola_2.webp","zduska_wola_3.webp","zduska_wola_4.webp","zduska_wola_5.webp"]),
  },
  {
    id: "zulpich",
    year: 2010,
    photos: photos("zulpich", ["zulpich_1.webp","zulpich_2.webp","zulpich_3.webp","zulpich_4.webp","zulpich_5.webp","zulpich_6.webp"]),
  },
]
