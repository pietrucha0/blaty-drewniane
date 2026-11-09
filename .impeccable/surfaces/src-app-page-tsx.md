---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

## Scope

Strona główna (one-page) BlatyDrewniane.eu — `src/app/page.tsx`. Mode: Persuade. Build path: code-led (brak generatora obrazów).

## Audience & action

Klient indywidualny planujący kuchnię/łazienkę i projektant wnętrz, głównie na telefonie. Akcja: telefon (tel:) lub formularz wyceny. Dowód: prawdziwe próbki gatunków (zdjęcia z meblekw.pl) i konsola z jesionu; reszta galerii to oznaczone placeholdery Unsplash.

## Constraints

Paleta, sekcje i stack przypięte w briefie użytkownika. Prawdziwe dane kontaktowe z meblekw.pl. Potwierdzone tylko: lite drewno, ręczna obróbka, dowolny kształt i wymiar, polska produkcja. NIE obiecywać: projektu 3D, montażu, dostawy własnej, renowacji. Adres warsztatu, WhatsApp, social media: placeholdery do uzupełnienia.

## Direction contract

THESIS: Strona jest próbnikiem drewna. Odmawia szablonu „headline + trzy karty”: głównym dowodem są prawdziwe gatunki (dąb, jesion, orzech, tatajuba, tauari) pokazane jak deski w warsztacie.

OWN-WORLD: Grunt espresso #16110e→#2a1f18, powierzchnie #34271f/#3d2f25, krawędzie #4a392d, mosiądz #d4a373/#c89666 tylko na akcje i aktywne stany, krem #fbf8f5 nagłówki, piasek #d6cec7 tekst. Bricolage Grotesque (display, wycięte kontury jak wypalany znak) + Hanken Grotesk (tekst). Ostre, prostokątne kadry jak przycięte deski, cienkie linie 1px zamiast kart, liczby i wymiary jak oznaczenia ołówkiem stolarskim.

STORY: Odwiedzający widzi drewno, rozumie, że blat i mebel powstają na wymiar z litego drewna, wybiera gatunek, przegląda realizacje i dzwoni albo wysyła wycenę.

FIRST VIEWPORT: Mobile: zdjęcie grubej krawędzi blatu w górnych ~44% ekranu (logo i menu na nim), pod nim nagłówek, jedno zdanie i jeden przycisk „Zobacz nasze realizacje”. Bez cech i paska próbek (od 640px wracają). Dolny pasek Zadzwoń / Wycena pojawia się dopiero po hero, przy przewijaniu w górę. (Zmiana na prośbę użytkownika 2026-11-09: „mało tekstu naraz, elegancko”; na telefonie jeden element na ekran.) Desktop: nagłówek po lewej 7/12, po prawej pionowy stos próbek gatunków jak deski w stojaku.

FORM: Próbnik gatunków jako sygnaturowa interakcja: wybór gatunku podmienia zdjęcie i opis (hero → sekcja „Gatunki drewna”). Ruch: płynne przejście clip-path przy zmianie gatunku; reszta wejść jest powściągliwa. Pozycja 1 z listy (kierunek przypięty briefem użytkownika; przypięcie wygrywa z losowaniem, które przydzieliło pozycję 7). seed:e5c15f6737f7f050

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open

Adres warsztatu, link WhatsApp, profile social, docelowy backend formularza, zdjęcia realizacji do podmiany placeholderów.
