import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { siteUrl } from "@/lib/content";

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
  metadataBase: new URL(siteUrl),
  title: "Blaty z litego drewna i meble na wymiar | BlatyDrewniane.eu",
  description:
    "Blaty kuchenne i łazienkowe z litego drewna, kuchnie, szafy, zabudowy i stoły na wymiar. Dąb, jesion, orzech. Własny warsztat, bezpłatna wycena, realizacje w całej Polsce.",
  alternates: { canonical: "/" },
  applicationName: "BlatyDrewniane.eu",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Blaty z litego drewna i meble na wymiar | BlatyDrewniane.eu",
    description:
      "Blaty, kuchnie, szafy i meble z litego drewna robione na wymiar. Dąb, jesion, orzech i gatunki egzotyczne.",
    url: "/",
    siteName: "BlatyDrewniane.eu",
    locale: "pl_PL",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
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
