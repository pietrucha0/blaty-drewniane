import type { StaticImageData } from "next/image";
import dabImg from "../../public/images/real/dab.webp";
import jesionImg from "../../public/images/real/jesion.webp";
import konsolaJesionImg from "../../public/images/real/konsola-jesion.webp";
import orzechImg from "../../public/images/real/orzech.webp";
import tatajubaImg from "../../public/images/real/tatajuba.webp";
import tauariImg from "../../public/images/real/tauari.webp";
import blatKuchniaImg from "../../public/images/stock/blat-kuchnia.webp";
import blatWyspaJasnyImg from "../../public/images/stock/blat-wyspa-jasny.webp";
import komodaImg from "../../public/images/stock/komoda.webp";
import lazienkaImg from "../../public/images/stock/lazienka.webp";
import regalImg from "../../public/images/stock/regal.webp";
import stolDetalImg from "../../public/images/stock/stol-detal.webp";
import stolJadalniaImg from "../../public/images/stock/stol-jadalnia.webp";
import stolLiveEdgeImg from "../../public/images/stock/stol-live-edge.webp";
import stolOrzechImg from "../../public/images/stock/stol-orzech.webp";
import wyspaImg from "../../public/images/stock/wyspa.webp";

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
  image: StaticImageData;
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
    image: dabImg,
    character:
      "Twardy, ciężki i odporny na ścieranie.",
    use: "Blaty kuchenne, stoły, schody, fronty meblowe.",
    hardness: 4,
    tone: 2,
  },
  {
    id: "jesion",
    name: "Jesion",
    origin: "Drewno krajowe",
    image: jesionImg,
    character:
      "Twardy i elastyczny, jasny, z wyrazistym słojem.",
    use: "Blaty, konsole, stoły, regały.",
    hardness: 4,
    tone: 1,
  },
  {
    id: "orzech",
    name: "Orzech amerykański",
    origin: "Ameryka Północna",
    image: orzechImg,
    character:
      "Ciepła, czekoladowa twardziel i szlachetny, gęsty rysunek.",
    use: "Stoły, blaty wysp, meble do salonu.",
    hardness: 3,
    tone: 5,
  },
  {
    id: "tatajuba",
    name: "Tatajuba",
    origin: "Drewno egzotyczne, Ameryka Południowa",
    image: tatajubaImg,
    character:
      "Złocisto-brązowe drewno, które pod wpływem światła ciemnieje do głębokiego miodowego odcienia.",
    use: "Blaty kuchenne i łazienkowe, parapety.",
    hardness: 4,
    tone: 3,
  },
  {
    id: "tauari",
    name: "Tauari",
    origin: "Drewno egzotyczne, Ameryka Południowa",
    image: tauariImg,
    character:
      "Jasne, kremowo-beżowe drewno o drobnym, równym usłojeniu.",
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
  image: StaticImageData;
  imageAlt: string;
  placeholder: boolean;
};

export const offers: Offer[] = [
  {
    title: "Blaty z litego drewna",
    lead: "Kuchenne, łazienkowe i barowe, docięte do Twojej zabudowy.",
    items: ["Olejowosk lub lakier", "Wyspy i blaty narożne", "Dowolna grubość i kształt"],
    image: blatKuchniaImg,
    imageAlt: "Długi drewniany blat kuchenny w jasnej kuchni",
    placeholder: true,
  },
  {
    title: "Stoły jadalniane i kawowe",
    lead: "Monolity, live-edge i proste, nowoczesne formy.",
    items: ["Blaty z naturalną krawędzią", "Nogi drewniane lub stalowe", "Wymiar pod pomieszczenie"],
    image: stolOrzechImg,
    imageAlt: "Ciemny stół z orzecha w ciepłym świetle",
    placeholder: true,
  },
  {
    title: "Meble i zabudowy na zamówienie",
    lead: "Regały, szafki RTV, konsole, wyspy i zabudowy wnęk.",
    items: ["Konsole i regały", "Szafki RTV i komody", "Zabudowy wnęk"],
    image: regalImg,
    imageAlt: "Regał z ciemnego drewna",
    placeholder: true,
  },
  {
    title: "Drewno egzotyczne",
    lead: "Tatajuba, tauari, iroko i merbau.",
    items: ["Tatajuba, tauari", "Iroko, merbau", "Do kuchni i łazienki"],
    image: tatajubaImg,
    imageAlt: "Próbka drewna tatajuba na granitowych kamieniach",
    placeholder: false,
  },
];

export type GalleryCategory = "blaty" | "stoly" | "inne";

export type Project = {
  title: string;
  category: GalleryCategory;
  wood: string;
  image: StaticImageData;
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
    image: konsolaJesionImg,
    alt: "Wąska konsola z jesionowym blatem i półką na czarnej stalowej ramie",
    placeholder: false,
  },
  {
    title: "Blat wyspy kuchennej",
    category: "blaty",
    wood: "Dąb rustykalny",
    image: blatWyspaJasnyImg,
    alt: "Kuchnia z drewnianą wyspą i zabudową",
    placeholder: true,
  },
  {
    title: "Stół live-edge do jadalni",
    category: "stoly",
    wood: "Dąb",
    image: stolLiveEdgeImg,
    alt: "Masywny stół z naturalną krawędzią widziany z góry",
    placeholder: true,
    tall: true,
  },
  {
    title: "Blaty łazienkowe pod umywalki",
    category: "blaty",
    wood: "Dąb olejowany",
    image: lazienkaImg,
    alt: "Łazienka z drewnianą szafką i blatem pod umywalkę",
    placeholder: true,
  },
  {
    title: "Stół jadalniany",
    category: "stoly",
    wood: "Orzech europejski",
    image: stolJadalniaImg,
    alt: "Drewniany stół jadalniany z krzesłami",
    placeholder: true,
  },
  {
    title: "Wyspa z ciemnego drewna",
    category: "blaty",
    wood: "Orzech amerykański",
    image: wyspaImg,
    alt: "Otwarta kuchnia z wyspą z ciemnego drewna",
    placeholder: true,
  },
  {
    title: "Komoda z frezowanymi frontami",
    category: "inne",
    wood: "Dąb naturalny",
    image: komodaImg,
    alt: "Niska komoda z drewna z dekoracjami",
    placeholder: true,
  },
  {
    title: "Stół na skośnych nogach",
    category: "stoly",
    wood: "Orzech",
    image: stolDetalImg,
    alt: "Ciemny drewniany stół w pustym, jasnym wnętrzu",
    placeholder: true,
  },
];

export const reasons = [
  {
    title: "Lite drewno, nie okleina na płycie",
    body: "Pełne drewno, które można szlifować i odnawiać latami.",
    icon: "trees",
  },
  {
    title: "Kształt i wymiar pod projekt",
    body: "Wyspy, narożniki, wnęki i wycięcia pod zlew.",
    icon: "ruler",
  },
  {
    title: "Zabezpieczenie przed wilgocią",
    body: "Olejowosk albo lakier, dobrany do miejsca.",
    icon: "droplets",
  },
  {
    title: "Rozmowa bezpośrednio z rzemieślnikiem",
    body: "Rozmawiasz z osobą, która robi Twój mebel.",
    icon: "handshake",
  },
] as const;

export const steps = [
  {
    title: "Konsultacja i wymiary",
    body: "Wystarczy szkic z wymiarami albo zdjęcie miejsca.",
  },
  {
    title: "Dobór drewna i wykończenia",
    body: "Gatunek, grubość i wykończenie. Wycena przed startem.",
  },
  {
    title: "Ręczna produkcja",
    body: "Selekcja desek, obróbka i olejowanie.",
  },
  {
    title: "Odbiór lub transport",
    body: "Odbierasz sam albo ustalamy transport.",
  },
];

export const projectTypes = ["Blat", "Stół", "Mebel na wymiar", "Inne"] as const;
