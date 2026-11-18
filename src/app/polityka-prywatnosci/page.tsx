import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Polityka prywatności | BlatyDrewniane.eu",
  description: "Informacja o przetwarzaniu danych osobowych (RODO) na stronie BlatyDrewniane.eu.",
  alternates: { canonical: "/polityka-prywatnosci/" },
};

// Information clause under art. 13 GDPR for the quote form and contact by e-mail/phone.
export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-[72ch] px-4 py-16 sm:px-8 sm:py-24">
      <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brass hover:underline">
        <ArrowLeft className="size-4" aria-hidden />
        Wróć na stronę główną
      </Link>

      <h1 className="mt-8 font-display text-[clamp(2rem,5vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-cream">
        Polityka prywatności
      </h1>
      <p className="mt-4 text-dust">Informacja o przetwarzaniu danych osobowych (RODO)</p>

      <div className="mt-10 space-y-8 leading-relaxed text-sand [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-cream [&_li]:mt-1.5 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
        <section>
          <h2>1. Administrator danych</h2>
          <p className="mt-3">
            Administratorem Twoich danych osobowych jest {company.legalName}, {company.address}, NIP {company.nip}.
            Kontakt w sprawie danych:{" "}
            <a href={`mailto:${company.email}`} className="text-brass underline">
              {company.email}
            </a>
            , tel. {company.phones[0].display}.
          </p>
        </section>

        <section>
          <h2>2. Jakie dane i po co</h2>
          <p className="mt-3">
            Przetwarzamy dane, które podajesz w formularzu wyceny, w e-mailu lub przez telefon: imię, numer telefonu,
            rodzaj projektu i opis z wymiarami. Wykorzystujemy je, żeby:
          </p>
          <ul>
            <li>
              odpowiedzieć na zapytanie i przygotować wycenę, na Twoje żądanie przed zawarciem umowy (art. 6 ust. 1 lit. b
              RODO),
            </li>
            <li>zrealizować zamówienie, jeśli je złożysz (art. 6 ust. 1 lit. b RODO),</li>
            <li>
              ustalić, dochodzić lub bronić się przed roszczeniami, co jest naszym prawnie uzasadnionym interesem (art. 6
              ust. 1 lit. f RODO),
            </li>
            <li>wypełnić obowiązki podatkowe i księgowe, jeśli dojdzie do sprzedaży (art. 6 ust. 1 lit. c RODO).</li>
          </ul>
          <p className="mt-3">
            Podanie danych jest dobrowolne, ale bez imienia i numeru telefonu nie możemy odpowiedzieć na zapytanie.
          </p>
        </section>

        <section>
          <h2>3. Komu przekazujemy dane</h2>
          <p className="mt-3">
            Dane z formularza trafiają do nas przez usługę Web3Forms, która przekazuje wiadomość na nasz adres e-mail.
            Dostęp do danych mogą mieć też firmy, które świadczą nam usługi hostingu strony i poczty oraz księgowe.
            Przetwarzają je wyłącznie na nasze polecenie. Nie sprzedajemy danych i nie przekazujemy ich innym firmom w
            celach marketingowych.
          </p>
        </section>

        <section>
          <h2>4. Jak długo przechowujemy dane</h2>
          <p className="mt-3">
            Dane z zapytania, które nie zakończyło się zamówieniem, przechowujemy do 12 miesięcy od ostatniego kontaktu.
            Dane związane z zamówieniem przechowujemy przez czas jego realizacji, a potem do upływu okresów
            przedawnienia roszczeń i przez okres wymagany przepisami podatkowymi.
          </p>
        </section>

        <section>
          <h2>5. Twoje prawa</h2>
          <p className="mt-3">Masz prawo do:</p>
          <ul>
            <li>dostępu do swoich danych i otrzymania ich kopii,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych lub ograniczenia ich przetwarzania,</li>
            <li>przeniesienia danych,</li>
            <li>sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
            <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
          </ul>
          <p className="mt-3">
            Żeby skorzystać z tych praw, napisz na{" "}
            <a href={`mailto:${company.email}`} className="text-brass underline">
              {company.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2>6. Pliki cookies</h2>
          <p className="mt-3">
            Strona nie używa plików cookies do śledzenia ani reklam. Nie korzystamy z narzędzi analitycznych ani
            reklamowych.
          </p>
        </section>

        <section>
          <h2>7. Decyzje automatyczne</h2>
          <p className="mt-3">Nie podejmujemy wobec Ciebie decyzji w sposób zautomatyzowany ani nie profilujemy danych.</p>
        </section>
      </div>
    </main>
  );
}
