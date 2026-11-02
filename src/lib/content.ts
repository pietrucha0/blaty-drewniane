// Single source of truth for site copy and data.
// Fields marked TODO are placeholders the owner must confirm or replace.

export const company = {
  brand: "BlatyDrewniane.eu",
  tagline: "naturalnie…",
  legalName: "Archsys Krzysztof Wójcik",
  nip: "722-116-60-85",
  email: "info@blatydrewniane.eu",
  phones: [
    { display: "600 233 853", href: "tel:+48600233853" },
    { display: "604 897 259", href: "tel:+48604897259" },
  ],
  // TODO: potwierdzić numer WhatsApp, np. "https://wa.me/48600233853".
  whatsapp: null as string | null,
  // TODO: uzupełnić adres warsztatu.
  address: null as string | null,
  hours: [
    { days: "Poniedziałek – piątek", time: "9:00 – 16:00" },
    { days: "Sobota", time: "10:00 – 14:00" },
  ],
  // TODO: uzupełnić adresy profili.
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
  },
};

export const nav = [
  { label: "O nas", href: "#o-nas" },
  { label: "Oferta", href: "#oferta" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Proces", href: "#proces" },
  { label: "Kontakt", href: "#kontakt" },
];

export type Species = {
  id: string;
  name: string;
  origin: string;
  image: string;
  character: string;
  use: string;
  hardness: number; // 1–5, relative, for the sampler scale
  tone: number; // 1 jasny – 5 ciemny
};

// Photos: real sample boards from meblekw.pl.
export const species: Species[] = [
  {
    id: "dab",
    name: "Dąb",
    origin: "Drewno krajowe",
    image: "/images/real/dab.webp",
    character:
      "Twardy, ciężki i odporny na ścieranie. Wyraźny, spokojny rysunek słojów, który z czasem lekko ciemnieje.",
    use: "Blaty kuchenne, stoły, schody, fronty meblowe.",
    hardness: 4,
    tone: 2,
  },
  {
    id: "jesion",
    name: "Jesion",
    origin: "Drewno krajowe",
    image: "/images/real/jesion.webp",
    character:
      "Twardy i elastyczny, jasny, z wyrazistym słojem. Dobrze przyjmuje olej i bejcę.",
    use: "Blaty, konsole, stoły, regały.",
    hardness: 4,
    tone: 1,
  },
  {
    id: "orzech",
    name: "Orzech amerykański",
    origin: "Ameryka Północna",
    image: "/images/real/orzech.webp",
    character:
      "Ciepła, czekoladowa twardziel i szlachetny, gęsty rysunek. Łatwy w obróbce, ceniony w meblarstwie.",
    use: "Stoły, blaty wysp, meble do salonu.",
    hardness: 3,
    tone: 5,
  },
  {
    id: "tatajuba",
    name: "Tatajuba",
    origin: "Drewno egzotyczne, Ameryka Południowa",
    image: "/images/real/tatajuba.webp",
    character:
      "Złocisto-brązowe drewno, które pod wpływem światła ciemnieje do głębokiego miodowego odcienia. Stabilne i trwałe.",
    use: "Blaty kuchenne i łazienkowe, parapety.",
    hardness: 4,
    tone: 3,
  },
  {
    id: "tauari",
    name: "Tauari",
    origin: "Drewno egzotyczne, Ameryka Południowa",
    image: "/images/real/tauari.webp",
    character:
      "Jasne, kremowo-beżowe drewno o drobnym, równym usłojeniu. Spokojne i stabilne wymiarowo.",
    use: "Blaty, parapety, elementy wnętrz.",
    hardness: 3,
    tone: 1,
  },
];

export const otherSpecies = ["Iroko", "Merbau", "Dąb postarzany"];

export type Offer = {
  title: string;
  lead: string;
  items: string[];
  image: string;
  imageAlt: string;
  placeholder: boolean;
};

export const offers: Offer[] = [
  {
    title: "Blaty z litego drewna",
    lead: "Kuchenne, łazienkowe i barowe. Docięte do Twojej zabudowy, z wycięciami pod zlew i płytę.",
    items: ["Olejowosk lub lakier", "Wyspy i blaty narożne", "Dowolna grubość i kształt"],
    image: "/images/stock/blat-kuchnia.webp",
    imageAlt: "Długi drewniany blat kuchenny w jasnej kuchni",
    placeholder: true,
  },
  {
    title: "Stoły jadalniane i kawowe",
    lead: "Monolity z jednej deski, live-edge z naturalną krawędzią i nowoczesne, proste formy.",
    items: ["Blaty z naturalną krawędzią", "Nogi drewniane lub stalowe", "Wymiar pod pomieszczenie"],
    image: "/images/stock/stol-orzech.webp",
    imageAlt: "Ciemny stół z orzecha w ciepłym świetle",
    placeholder: true,
  },
  {
    title: "Meble i zabudowy na zamówienie",
    lead: "Regały, szafki RTV, konsole, wyspy kuchenne i zabudowy wnęk. Projektujemy pod konkretne miejsce.",
    items: ["Konsole i regały", "Szafki RTV i komody", "Zabudowy wnęk"],
    image: "/images/stock/regal.webp",
    imageAlt: "Regał z ciemnego drewna",
    placeholder: true,
  },
  {
    title: "Drewno egzotyczne",
    lead: "Poza dębem, jesionem i orzechem pracujemy z gatunkami egzotycznymi o wyjątkowej trwałości.",
    items: ["Tatajuba, tauari", "Iroko, merbau", "Do kuchni i łazienki"],
    image: "/images/real/tatajuba.webp",
    imageAlt: "Próbka drewna tatajuba na granitowych kamieniach",
    placeholder: false,
  },
];

export type GalleryCategory = "blaty" | "stoly" | "inne";

export type Project = {
  title: string;
  category: GalleryCategory;
  wood: string;
  image: string;
  alt: string;
  placeholder: boolean;
  tall?: boolean;
};

export const galleryFilters: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "Wszystkie" },
  { id: "blaty", label: "Blaty" },
  { id: "stoly", label: "Stoły" },
  { id: "inne", label: "Inne meble" },
];

// placeholder: true = zdjęcie poglądowe z Unsplash, do podmiany na własną realizację.
export const projects: Project[] = [
  {
    title: "Konsola z jesionu na stalowej ramie",
    category: "inne",
    wood: "Jesion",
    image: "/images/real/konsola-jesion.webp",
    alt: "Wąska konsola z jesionowym blatem i półką na czarnej stalowej ramie",
    placeholder: false,
  },
  {
    title: "Blat wyspy kuchennej",
    category: "blaty",
    wood: "Dąb rustykalny",
    image: "/images/stock/blat-wyspa-jasny.webp",
    alt: "Kuchnia z drewnianą wyspą i zabudową",
    placeholder: true,
  },
  {
    title: "Stół live-edge do jadalni",
    category: "stoly",
    wood: "Dąb",
    image: "/images/stock/stol-live-edge.webp",
    alt: "Masywny stół z naturalną krawędzią widziany z góry",
    placeholder: true,
    tall: true,
  },
  {
    title: "Blaty łazienkowe pod umywalki",
    category: "blaty",
    wood: "Dąb olejowany",
    image: "/images/stock/lazienka.webp",
    alt: "Łazienka z drewnianą szafką i blatem pod umywalkę",
    placeholder: true,
  },
  {
    title: "Stół jadalniany",
    category: "stoly",
    wood: "Orzech europejski",
    image: "/images/stock/stol-jadalnia.webp",
    alt: "Drewniany stół jadalniany z krzesłami",
    placeholder: true,
  },
  {
    title: "Wyspa z ciemnego drewna",
    category: "blaty",
    wood: "Orzech amerykański",
    image: "/images/stock/wyspa.webp",
    alt: "Otwarta kuchnia z wyspą z ciemnego drewna",
    placeholder: true,
  },
  {
    title: "Komoda z frezowanymi frontami",
    category: "inne",
    wood: "Dąb naturalny",
    image: "/images/stock/komoda.webp",
    alt: "Niska komoda z drewna z dekoracjami",
    placeholder: true,
  },
  {
    title: "Stół na skośnych nogach",
    category: "stoly",
    wood: "Orzech",
    image: "/images/stock/stol-detal.webp",
    alt: "Ciemny drewniany stół w pustym, jasnym wnętrzu",
    placeholder: true,
  },
];

export const reasons = [
  {
    title: "Lite drewno, nie okleina na płycie",
    body: "Blat jest z pełnego drewna jednego gatunku. Można go szlifować i odnawiać przez lata, bo pod powierzchnią jest wciąż to samo drewno.",
    icon: "trees",
  },
  {
    title: "Kształt i wymiar pod projekt",
    body: "Wyspy, narożniki, wnęki, wycięcia pod zlew i płytę. Pracujemy na Twoich wymiarach albo na rysunku od architekta.",
    icon: "ruler",
  },
  {
    title: "Zabezpieczenie przed wilgocią",
    body: "Olejowosk albo lakier, dobrany do miejsca. Inaczej wykańczamy blat przy zlewie, inaczej stół w salonie.",
    icon: "droplets",
  },
  {
    title: "Rozmowa bezpośrednio z rzemieślnikiem",
    body: "Dzwonisz do osoby, która dobiera deski i prowadzi obróbkę. Bez pośredników i bez infolinii.",
    icon: "handshake",
  },
] as const;

export const steps = [
  {
    title: "Konsultacja i wymiary",
    body: "Opowiedz, co ma powstać. Wystarczy szkic z wymiarami, zdjęcie miejsca albo projekt od architekta.",
  },
  {
    title: "Dobór drewna i wykończenia",
    body: "Wybieramy gatunek, grubość, krawędź i sposób zabezpieczenia. Dostajesz wycenę przed rozpoczęciem pracy.",
  },
  {
    title: "Ręczna produkcja",
    body: "Selekcja desek, obróbka, szlifowanie i olejowanie. Każdy egzemplarz przechodzi przez ręce stolarza.",
  },
  {
    title: "Odbiór lub transport",
    body: "Gotowy blat lub mebel odbierasz osobiście albo ustalamy z Tobą transport.",
  },
];

export const projectTypes = ["Blat", "Stół", "Mebel na wymiar", "Inne"] as const;
