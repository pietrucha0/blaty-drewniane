import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlatyDrewniane.eu — blaty i meble z litego drewna na wymiar",
  description:
    "Blaty kuchenne i łazienkowe, stoły, konsole, regały i zabudowy z litego drewna. Ręczna obróbka, dowolny kształt i wymiar, polska produkcja.",
  metadataBase: new URL("https://www.blatydrewniane.eu"),
  openGraph: {
    title: "BlatyDrewniane.eu — naturalnie…",
    description:
      "Blaty i meble z litego drewna robione na wymiar. Dąb, jesion, orzech i gatunki egzotyczne.",
    locale: "pl_PL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#16110e",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${bricolage.variable} ${hanken.variable}`}>
      <body className="antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
