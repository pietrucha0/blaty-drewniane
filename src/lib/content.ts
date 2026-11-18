import type { StaticImageData } from "next/image";
import dabImg from "../../public/images/real/dab.webp";
import jesionImg from "../../public/images/real/jesion.webp";
import komodaDabImg from "../../public/images/real/komoda-dab.webp";
import konsolaJesionImg from "../../public/images/real/konsola-jesion.webp";
import kuchniaKremowaImg from "../../public/images/real/kuchnia-kremowa.webp";
import kuchniaKremowaFrontImg from "../../public/images/real/kuchnia-kremowa-front.webp";
import kuchniaOrzechDetalImg from "../../public/images/real/kuchnia-orzech-detal.webp";
import kuchniaOrzechJadalniaImg from "../../public/images/real/kuchnia-orzech-jadalnia.webp";
import kuchniaOrzechWyspaImg from "../../public/images/real/kuchnia-orzech-wyspa.webp";
import lazienkaSzafkaImg from "../../public/images/real/lazienka-szafka.webp";
import sypialniaPanelImg from "../../public/images/real/sypialnia-panel.webp";
import sypialniaZabudowaImg from "../../public/images/real/sypialnia-zabudowa.webp";
import szafaSkosImg from "../../public/images/real/szafa-skos.webp";
import orzechImg from "../../public/images/real/orzech.webp";
import tatajubaImg from "../../public/images/real/tatajuba.webp";
import tauariImg from "../../public/images/real/tauari.webp";
import biurkoZabudowaImg from "../../public/images/stock/biurko-zabudowa.webp";
import stolOrzechImg from "../../public/images/stock/stol-orzech.webp";
import stolikKawowyImg from "../../public/images/stock/stolik-kawowy.webp";

// Single source of truth for site copy and data.
// Fields marked TODO are placeholders the owner must confirm or replace.

export const siteUrl = "https://www.blatydrewniane.eu";

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
  address: "Osipy Kolonia 33, 18-200 Wysokie Mazowieckie" as string | null,
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Osipy%20Kolonia%2033%2C%2018-200%20Wysokie%20Mazowieckie" as string | null,
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
    title: "Kuchnie i blaty na wymiar",
    lead: "Całe kuchnie z zabudową i wyspą albo sam blat z litego drewna, docięty do Twoich szafek.",
    items: ["Kuchnie pod klucz", "Wyspy i blaty narożne", "Blaty z litego drewna"],
    image: kuchniaOrzechJadalniaImg,
    imageAlt: "Kuchnia w okleinie orzechowej z marmurową wyspą, otwarta na jadalnię",
    placeholder: false,
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
    title: "Szafy i zabudowy",
    lead: "Szafy wnękowe, panele ścienne i zabudowy dopasowane co do centymetra.",
    items: ["Szafy wnękowe", "Panele za łóżkiem", "Zabudowy wnęk"],
    image: sypialniaZabudowaImg,
    imageAlt: "Sypialnia z drewnianymi panelami za łóżkiem i podświetlaną wnęką oraz szafą wnękową",
    placeholder: false,
  },
  {
    title: "Biurka i gabinety",
    lead: "Biurka z litego blatu, także z regałem lub zabudową wokół.",
    items: ["Biurka do pracy", "Zabudowy gabinetów", "Wymiar pod wnękę"],
    image: biurkoZabudowaImg,
    imageAlt: "Drewniane biurko na tle podświetlonej zabudowy z półkami",
    placeholder: true,
  },
  {
    title: "Stoliki kawowe",
    lead: "Niskie stoliki z grubego drewna do salonu.",
    items: ["Z półką lub bez", "Naturalna krawędź", "Dowolny wymiar"],
    image: stolikKawowyImg,
    imageAlt: "Masywny drewniany stolik kawowy z półką",
    placeholder: true,
  },
  {
    title: "Komody i szafki",
    lead: "Komody, szafki RTV i szafki łazienkowe, z frontami dopasowanymi do wnętrza.",
    items: ["Komody i ławki", "Szafki RTV", "Szafki pod umywalkę"],
    image: komodaDabImg,
    imageAlt: "Długa dębowa szafka połączona z wysokim słupkiem",
    placeholder: false,
  },
];

export type GalleryCategory = "kuchnie" | "stoly" | "inne";

export type Project = {
  title: string;
  category: GalleryCategory;
  wood: string;
  image: StaticImageData;
  alt: string;
  placeholder: boolean;
  tall?: boolean;
  wide?: boolean;
};

export const galleryFilters: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "Wszystkie" },
  { id: "kuchnie", label: "Kuchnie" },
  { id: "inne", label: "Meble i zabudowy" },
];

// placeholder: true = zdjęcie poglądowe z Unsplash, do podmiany na własną realizację.
export const projects: Project[] = [
  {
    title: "Kuchnia z orzecha z marmurową wyspą",
    category: "kuchnie",
    wood: "Nasza realizacja",
    image: kuchniaOrzechWyspaImg,
    alt: "Kuchnia w okleinie orzechowej z wyspą z marmurowym blatem i jadalnią w tle",
    placeholder: false,
    wide: true,
  },
  {
    title: "Zabudowa z piekarnikami w słupku",
    category: "kuchnie",
    wood: "Nasza realizacja",
    image: kuchniaOrzechDetalImg,
    alt: "Wysoka zabudowa kuchenna w okleinie orzechowej z wbudowanymi piekarnikami i wyspą",
    placeholder: false,
    tall: true,
  },
  {
    title: "Szafa i panele za łóżkiem",
    category: "inne",
    wood: "Nasza realizacja",
    image: sypialniaZabudowaImg,
    alt: "Sypialnia z drewnianymi panelami za łóżkiem, podświetlaną wnęką i białą szafą wnękową",
    placeholder: false,
  },
  {
    title: "Kuchnia kremowa z drewnianym blatem",
    category: "kuchnie",
    wood: "Nasza realizacja",
    image: kuchniaKremowaImg,
    alt: "Wąska kuchnia z kremowymi frontami, drewnianym blatem i podświetleniem pod szafkami",
    placeholder: false,
    tall: true,
  },
  {
    title: "Szafka pod umywalkę",
    category: "inne",
    wood: "Nasza realizacja",
    image: lazienkaSzafkaImg,
    alt: "Grafitowa wisząca szafka pod umywalkę w łazience z podświetlanym lustrem",
    placeholder: false,
    tall: true,
  },
  {
    title: "Kuchnia w zabudowie do sufitu",
    category: "kuchnie",
    wood: "Nasza realizacja",
    image: kuchniaKremowaFrontImg,
    alt: "Prosta kuchnia z kremowymi frontami, drewnianym blatem i ścianą z ciemnego drewna",
    placeholder: false,
  },
  {
    title: "Szafa pod skosem",
    category: "inne",
    wood: "Nasza realizacja",
    image: szafaSkosImg,
    alt: "Szara szafa wnękowa na całą ścianę, dopasowana do skosu dachu",
    placeholder: false,
    wide: true,
  },
  {
    title: "Panel ścienny za łóżkiem",
    category: "inne",
    wood: "Nasza realizacja",
    image: sypialniaPanelImg,
    alt: "Drewniany panel ścienny z motywem liści za łóżkiem z kinkietami",
    placeholder: false,
  },
  {
    title: "Dębowa szafka ze słupkiem",
    category: "inne",
    wood: "Nasza realizacja",
    image: komodaDabImg,
    alt: "Długa dębowa szafka połączona z wysokim słupkiem",
    placeholder: false,
  },
  {
    title: "Konsola z jesionu na stalowej ramie",
    category: "inne",
    wood: "Jesion",
    image: konsolaJesionImg,
    alt: "Wąska konsola z jesionowym blatem i półką na czarnej stalowej ramie",
    placeholder: false,
  },];

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

export const projectTypes = ["Blat kuchenny", "Blat łazienkowy", "Stół", "Biurko", "Konsola", "Komoda", "Wyspa"] as const;
