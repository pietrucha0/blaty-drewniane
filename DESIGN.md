---
name: BlatyDrewniane.eu
description: Solid-wood countertops and furniture made to measure, shown as a wood sampler from the workshop.
colors:
  espresso: "#16110e"
  umber: "#221813"
  walnut: "#2a1f18"
  board: "#34271f"
  board-hi: "#3d2f25"
  seam: "#4a392d"
  brass: "#d4a373"
  brass-deep: "#c08a58"
  cream: "#fbf8f5"
  sand: "#d6cec7"
  dust: "#a89c92"
  label-ink: "#5a2e24"
  ember: "#e08a6c"
  ember-text: "#f0a488"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 9vw, 5.75rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5.5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\", \"kern\""
  lead:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
  caption:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: "0px"
  focus: "2px"
spacing:
  gutter-mobile: "16px"
  gutter: "32px"
  container: "1440px"
  section-mobile: "96px"
  section: "128px"
  seam: "1px"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-primary-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.espresso}"
  button-outline:
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-outline-hover:
    textColor: "{colors.brass}"
  link-underlined:
    textColor: "{colors.brass}"
    padding: "0 0 4px 0"
  input:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
  form-panel:
    backgroundColor: "{colors.walnut}"
    rounded: "{rounded.none}"
    padding: "32px"
  board-label:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.label-ink}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  placeholder-label:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.dust}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  filter-chip:
    textColor: "{colors.sand}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  filter-chip-selected:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.espresso}"
  offer-tag:
    textColor: "{colors.brass}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
  species-swatch:
    backgroundColor: "{colors.board}"
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    height: "56px"
---

# Design System: BlatyDrewniane.eu

## Overview

**Creative North Star: "The Workshop Sample Rack"**

The site is a wood sampler, not a brochure. Dark roasted-wood grounds stand in for the dim workshop wall, and the real sample boards from the workshop (dąb, jesion, orzech amerykański, tatajuba, tauari) are the main evidence. They show up as cropped planks in a rack, in a horizontal rail and in a picker. Everything around them is held back: sharp rectangular frames like cut boards, 1px seams instead of cards, and numbers and dimensions treated like a joiner's pencil marks.

Density is calm and generous. Sections run full width inside a 1440px container, alternating between two near-black browns, so the eye reads one continuous dark surface split by grain, not a stack of boxes. Brass is the only warm accent. It marks every action and active state and almost nothing else. Cream is for headings and for the paper labels that the workshop sticks onto its samples, and the logo sits on one of those labels.

Honesty is part of the look. Stock imagery is allowed only with a visible "Zdjęcie poglądowe" (or "Poglądowe") tag. In the gallery it is also slightly dimmed and warmed, so it never passes for the workshop's own work.

**Key Characteristics:**
- Espresso-to-walnut dark grounds, cream headings, sand body text, brass only for action.
- Zero corner radius everywhere. Frames are cut boards.
- 1px seam lines and seam-filled grid gaps replace cards and boxes.
- Real sample-board photos cropped into swatches carry the species story.
- Cream paper labels (logo, gallery wood tags) as the one "applied" object on the surface.
- Motion is restrained and starts from an already visible state. The one signature move is the species clip-path wipe.

## Colors

A warm, low-chroma brown ladder from near-black to board-brown, with one brass accent and two light neutrals. All hues sit between 48 and 68 degrees, the range of wood and oil.

### Primary
- **Workshop Brass** (#d4a373): primary buttons, the mobile action bar's quote button, the selected gallery filter, the selected species outline, the active segments of the hardness and tone scales, small icons in lists, the brass dash before hero features, underlined text links, `::selection`, caret and focus rings. Hover on brass fills goes to cream, not to a darker brass.
- **Brass Deep** (#c08a58): only the hover/focus fill of primary buttons.

### Neutral
- **Espresso** (#16110e): the page ground, `theme-color`, input fill, translucent scrims behind labels and the scrolled header (80–90% opacity), and the dark end of every image gradient.
- **Umber** (#221813): the alternate section ground (Oferta, Realizacje, Kontakt) and the mobile menu sheet. Sections alternate espresso / umber.
- **Walnut** (#2a1f18): the raised panel for the quote form and its success state.
- **Board** (#34271f): the empty well behind images (species panel, gallery tiles) before the photo loads.
- **Board Highlight** (#3d2f25): input hover border.
- **Seam** (#4a392d): every 1px dividing line, grid gap fill, input rest border, inactive scale segments, the tick-rule marks, and the scrollbar thumb.
- **Cream** (#fbf8f5): headings, emphasized values (phone numbers, hours, species use), and the paper-label fill.
- **Sand** (#d6cec7): body text and inactive nav/filter text.
- **Dust** (#a89c92): secondary text such as scale end labels, hints, captions, footer column headings, the "Zdjęcie poglądowe" text and the privacy note.

### Accent-only
- **Label Ink** (#5a2e24): text on the cream gallery wood tags, a deep red-brown that matches the printed logo label.
- **Ember** (#e08a6c) / **Ember Text** (#f0a488): form validation only. Ember is the invalid-field border and Ember Text the error message under the field.

### Named Rules
**The Brass Means Act Rule.** Brass appears only on things you can press or on the current state (selected filter, selected species, filled scale segments). Decorative brass is limited to the small hero dash markers and list icons that sit beside actionable or factual rows. Brass is never a background for a section.

**The Two Grounds Rule.** Page sections alternate espresso and umber. Walnut is used only for a contained panel (the form). Board is used only as an image well. No other surface colors.

## Typography

**Display Font:** Bricolage Grotesque (with ui-sans-serif, system-ui)
**Body Font:** Hanken Grotesk (with ui-sans-serif, system-ui), `font-feature-settings: "ss01", "kern"`

**Character:** Bricolage's cut, slightly irregular contours read like a branded or burned-in mark. Hanken is quiet and even, so it reads like the plain text on a workshop order sheet. Both load the `latin-ext` subset because Polish diacritics are required.

### Hierarchy
- **Display** (600, clamp(2.4rem, 9vw, 5.75rem), 0.98, -0.035em, cream): the hero h1 only. It is capped at 14ch on mobile and runs full width at lg. Short words are bound with non-breaking spaces ("z litego", "na pokolenia") so they never strand at a line end.
- **Headline** (600, clamp(2rem, 5.5vw, 3.75rem), 1.02, -0.03em, cream): section h2s, always followed by the tick-rule and an optional lead.
- **Species Name** (600, 2.25rem to 3rem at sm, -0.03em, cream): the selected species in the sampler panel. Lead offer titles use 600 at 1.875rem to 2.25rem, -0.02em.
- **Title** (500 or 600, 1.25rem to 1.5rem at sm, cream): h3s in reason lists, process steps, offer items and the form heading. Phone numbers in Kontakt use this face at 1.5rem to 1.875rem with tabular numerals.
- **Lead** (400, 1.125rem, 1.625, sand, max 52–58ch): the paragraph under section headings and in the hero (1.05rem on mobile).
- **Body** (400, 1rem, 1.625, sand, max 40–60ch).
- **Label** (500, 0.875rem, cream for form labels, sand/dust elsewhere): form labels, filter chips, hero features. Always sentence case, never tracked uppercase.
- **Caption** (400, 0.7rem to 0.75rem, dust): placeholder labels, the privacy note and scale end labels.

### Named Rules
**The Numbers Are Pencil Marks Rule.** Step numbers, phone numbers and hours are set in the display face (steps in brass, 600 at 1.5rem) or with `tabular-nums`. They work as measurements, not as decorative oversized numerals.

**The Balanced Heading Rule.** h1–h3 use `text-wrap: balance` and paragraphs use `text-wrap: pretty`. Headings never break before a one-letter Polish preposition. Bind it with a non-breaking space.

## Layout

The container is 1440px wide with 16px gutters on mobile and 32px from 640px. Sections are 96px tall in vertical padding on mobile and 128px from 640px. Desktop compositions use a 12-column grid. Common splits are 7/12 text with a rack at columns 9–12 (hero), 5 + 6 starting at column 7 (O nas, Kontakt), 7 + 5 (Oferta), and 3 + 9 (species picker + panel, the panel subdivided into 5 + 4). Breakpoints are Tailwind's defaults: sm 640, md 768, lg 1024.

Section headings are left-aligned with a fixed sequence: h2, then a 160px tick-rule 20px below, then a lead 20px below that. Below 1024px every grid becomes a single column, and horizontal sets (hero species rail, species picker, gallery filters) become snap-scrolling rails with hidden scrollbars that bleed to the screen edge.

The hero is `100svh`. On mobile the countertop-edge photo takes the top 34svh under the logo and menu, and the h1, lead, two stacked full-width buttons, features and species rail all fit above the fixed action bar at 390×844. On desktop the photo is full bleed behind a left-to-right espresso gradient.

The gallery is a dense grid: 2 columns on mobile (rows minmax(11rem, 26vw), 8px gaps), 18rem rows from 640px, and 3 columns with 20rem rows at lg, where tall items span two rows.

### Named Rules
**The Seam Not Card Rule.** Groups are divided by 1px seam lines, never boxed. Lists use a seam top border plus a seam bottom border on each row (O nas reasons, Kontakt details, mobile menu). Grid groups use a 1px gap over a seam-filled parent, so the seams appear between tiles (Oferta). Timelines use a seam left border on mobile and a seam top border on desktop (Jak pracujemy). The quote form is the only bordered panel, because it is a working surface.

**The Measuring Rule.** The tick-rule (1px seam ticks every 12px, 8px tall, fading out over its last 30%) sits under every section heading. It is the only ornamental line in the system.

## Elevation & Depth

The system is flat. Depth comes from the tonal ladder (espresso, umber, walnut, board) and from photographic gradients that fade images into espresso. Soft, low-offset shadows appear only where a physical object sits on top of another surface: a paper label on wood, or a plank lifted out of the rack.

### Shadow Vocabulary
- **Label lift** (`box-shadow: 0 2px 8px rgba(0,0,0,0.35)` for the logo, `0 2px 6px rgba(0,0,0,0.35)` for gallery tags): a cream label stuck onto a surface.
- **Plank lift** (`box-shadow: 0 6px 18px rgba(0,0,0,0.45)`): hero rack swatches.
- **Selected plank** (`box-shadow: inset 0 0 0 2px #d4a373, 0 8px 20px rgba(0,0,0,0.5)` at lg, the inset ring alone below lg): the active species tab.

### Named Rules
**The Objects Only Rule.** Shadows belong to things that could physically be picked up, such as labels and boards. Sections, panels, buttons and inputs cast no shadows.

## Shapes

All corners are square (0px). This covers buttons, inputs, swatches, images, chips, labels and the form panel. The only rounding is the 2px on the focus outline (2px brass, 3px offset). Images are cut to fixed aspect ratios (4/3 for the species panel and offers, 4/5 for the O nas figure) with `object-cover`, like boards cut to length. Borders are 1px with no exceptions. The selected species uses a 2px inset ring rather than a thicker border.

## Components

### Buttons
Solid and plain, like a stamped tag.
- **Shape:** square (0px).
- **Primary:** brass fill, espresso text, 600 weight, 24px horizontal padding, 14px vertical on mobile and 16px from 640px. Header variant is 20px by 12px at 0.875rem. The trailing arrow appears only on hover (see below).
- **Hover / Focus:** an arrow (1em, lucide arrow-right drawn as a CSS mask in `currentColor`) slides out after the label: width 0 → 1em, 8px gap, fade and 6px slide-in over 0.4s ease-out-expo. On primary, the fill deepens from brass to brass-deep (#c08a58). On outline, the text and the 1px inset border turn brass. `:focus-visible` shows the same state plus the global 2px brass outline. Hover only applies under `(hover: hover)`, and touch gets a 1px press-down on `:active`. Buttons that already carry an icon, or are touch-only (form submit, phone buttons), use `.btn-noarrow`. Implemented as `.btn` + `.btn-primary` / `.btn-outline` in `globals.css`.
- **Outline:** a 1px inset cream border at 40% (an inset box-shadow, not a border), cream text. Hover as above.
- **Underlined link:** brass text with a 1px brass bottom border and 4px padding below. On hover both go to cream ("Zapytaj o ten gatunek").
- **Disabled (submit while sending):** 70% opacity, wait cursor, spinner and "Wysyłanie…".

### Chips
- **Gallery filters** ("Wszystkie", "Blaty", "Stoły", "Inne meble"): text-only, 12px by 16px, 0.875rem/500, sand. The selected chip is espresso on a brass block that slides between chips through a shared layout animation (0.4s, ease-out-expo). Uses `aria-pressed`.
- **Offer tags:** 1px brass border at 35%, brass text, 4px by 10px, 0.875rem. Not interactive.

### Cards / Containers
None in the card sense. Offers are tiles separated by seams (see Layout). The form panel is the only container: walnut fill, 1px seam border, 20px padding on mobile and 32px from 640px, no radius, no shadow.

### Inputs / Fields
- **Style:** espresso fill, 1px seam border, 14px by 16px padding, 1rem cream text, dust placeholders at 80%. The label (0.875rem/500 cream) sits 8px above. An optional hint ("Opcjonalnie") is right-aligned in dust. The select uses a custom 20px dust chevron with 48px right padding.
- **Hover:** the border changes to board-hi.
- **Focus:** the border changes to brass and the default outline is suppressed. The brass caret is global.
- **Error:** validation runs on submit and focus moves to the first invalid field. The field gets `aria-invalid` with an ember border, and the message ("Podaj imię.", "Podaj numer telefonu, np. 600 123 456.", "Wybierz typ projektu.") appears 8px below in ember-text at 0.875rem, linked with `aria-describedby`.
- **Sent:** the form is replaced by a walnut panel with a 48px brass square holding a check icon, the heading "Dziękujemy, mamy Twoje zapytanie", and an email link (`role="status"`).
- **Fallback / error:** a 1px brass-at-40% bordered notice expands in height ("Nie udało się wysłać formularza z tej strony…") with a prefilled mailto link "wyślij ją e-mailem" and the phone number (`role="alert"`).

### Navigation
- **Header:** fixed and full width, 64px tall (80px from 640px). Its content is inset from the screen edges by 20px on mobile, 40px from 640px and 56px from 1024px. It is transparent over the hero. Past 24px of scroll it turns espresso at 80% with `backdrop-blur-md` and a seam bottom border at 70%. Desktop links are 0.95rem sand and turn brass on hover. The phone number and a primary "Wycena projektu" sit on the right.
- **Mobile menu:** a 44px hamburger opens a right-side umber sheet (min(88vw, 380px), seam left border) that slides in over 0.45s over a blurred espresso scrim. Links are 1.5rem display type in seam-ruled rows, with trailing arrows in seam color. Outline and primary actions sit at the foot, padded for the safe area. Escape closes it.

### Board Label (signature)
A cream paper label applied to a surface, the label the workshop puts on its samples. The logo always sits on one (cream, 8px by 4px padding, label lift shadow). The raster logo is 36px tall, 40px from 640px. In the gallery, each tile's wood species ("Dąb", "Jesion", "Orzech amerykański"…) is a cream tag with label-ink text at 0.75rem/600, sitting above the tile title.

### Species Swatch (signature)
Swatches are cut from the real sample-board photos, not flat color fills or textures. The photo is set as a background enlarged 320–400% (`background-size`) and positioned at 58% 50%, so only the plain wood face of the board shows. A left-to-right espresso gradient (75–80% to clear) keeps the cream name legible. There are three uses: the hero rack (64px planks with plank lift that slide 12px left on hover and show an arrow), the mobile hero rail (48 × 128px, zoom 4, bottom gradient), and the sampler tabs (56px tall, 144px wide on mobile, full width at lg, zoom 3.6). Unselected tabs sit at 80% opacity. The selected tab gets the brass inset ring and shifts 12px at lg. Clicking a hero swatch selects that species in the sampler through a `select-species` window event.

### Species Sampler (signature)
A tablist of swatches drives a panel. When the species changes, the new photo wipes in from the left over the previous one (`clip-path: inset(0 100% 0 0)` to `inset(0 0% 0 0)`, 0.9s, ease-out-expo) on a board well. The text crossfades (0.35s, 10px rise). Hardness ("Twardość") and tone ("Odcień") are five 8px segments with 4px gaps, brass up to the value and seam after, with dust end labels.

### Placeholder Label
Any stock image carries a dust caption on an espresso scrim (80–85%) with 4px by 8–10px padding, flush to a corner of the frame: "Zdjęcie poglądowe" on large frames (hero, O nas, offers) and "Poglądowe" on gallery tiles. Placeholder gallery photos are also toned with `filter: sepia(0.2) saturate(0.85) brightness(0.82)`. The gallery lead says so in words. Remove the label and the filter only when the photo is replaced with the workshop's own work.

### Mobile Action Bar
Below 640px a fixed bottom bar holds two equal buttons: outline "Zadzwoń teraz" with a phone icon, and brass "Wycena projektu". It is espresso at 90% with `backdrop-blur-md`, has a seam top border and 12px padding plus the safe area. It slides away (translateY 100%, 500ms ease-out-expo) while #kontakt is at least 15% on screen, so it never covers the form. The hero and footer reserve 112px of bottom padding on mobile for it.

### Motion
One easing for everything: ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`). `MotionConfig reducedMotion="user"` wraps the app, and smooth scrolling turns off under `prefers-reduced-motion`.

**The Already Visible Rule.** Entrances never start from invisible. Section reveals go from opacity 0.6 and 18px down to rest (0.8s, once, triggered 10% before the viewport edge). Hero copy rises from opacity 0.35. Gallery tiles settle from opacity 0.3 at scale 0.98 when filters change. Content must stay readable if JavaScript or motion never runs. The single exception is the desktop hero rack (fading in from 0, 24px to the side), which is decorative because the same species are in the sampler.

**The One Signature Move Rule.** The clip-path wipe belongs to the species sampler alone. Elsewhere motion is limited to settling, image hover zoom (1.04–1.06 over 1.4–1.6s), color transitions and sliding sheets and bars.

### Phone Composition (below 640px)

**The One Thing Per Screen Rule.** On phones each screen carries one focal point and spacing does the work. Sections keep 96px vertical padding. Everything from 640px up is unchanged.
- **Hero:** photo in the top 44% of the screen, then the headline, one line and one primary button. The badges and species rail start at 640px.
- **Dlaczego my?:** no workshop photo. The four reasons are icon plus title, and their body text starts at 640px.
- **Oferta:** a native scroll-snap row (`snap-x snap-mandatory`, `scroll-px-4`). Cards are 80% wide so the next one peeks in, each a 4:5 image plus title. One line under the row says it can be swiped and that some photos are placeholders.
- **Gatunki:** five swatches in one row of equal columns, with names kept for screen readers. The panel shows a close crop of the board (`swatchStyle` at 3.4×) instead of the granite photo, then the name, origin, one line and the enquiry link. The meters and "Pracujemy też z" start at 640px.
- **Realizacje:** four tiles plus a "Pokaż wszystkie (n)" outline button. Tiles carry only their title. One line under the grid replaces the per-tile placeholder badges.
- **Jak pracujemy:** number and title only.
- **Kontakt:** phones and e-mail only. Address and hours live in the footer.
- **Footer:** no nav list, since it repeats the header menu.

## Do's and Don'ts

### Do:
- **Do** cut every frame square (0px) and divide groups with 1px seam (#4a392d) lines or seam-filled 1px gaps.
- **Do** keep brass (#d4a373) for actions and current state. On hover, brass fills deepen to brass-deep.
- **Do** build species visuals from the real sample-board photos, cropped with `background-size` 320–400% at 58% 50% and a left espresso gradient behind cream names.
- **Do** put the logo on a cream board label and tag gallery woods with cream labels in label-ink (#5a2e24).
- **Do** tag every stock image "Zdjęcie poglądowe" (or "Poglądowe" on gallery tiles) in a dust caption on an espresso scrim, flush to a corner.
- **Do** start entrances from an already visible state (opacity of at least 0.3) with ease-out-expo, and keep `MotionConfig reducedMotion="user"`.
- **Do** follow every section h2 with the tick-rule and a sand lead.
- **Do** bind Polish one-letter prepositions to the next word with a non-breaking space in headings.

### Don't:
- **Don't** wrap content in rounded or shadowed cards. The form panel is the only bordered container.
- **Don't** use brass as a section background or as decoration on non-interactive surfaces.
- **Don't** add shadows to buttons, inputs, sections or panels. Shadows are only for labels and planks.
- **Don't** substitute flat color chips or generic wood textures for the real sample boards.
- **Don't** show stock photography without the placeholder label, or present it as a realization.
- **Don't** reuse the clip-path wipe outside the species sampler, or animate content in from opacity 0.
- **Don't** set labels in tracked uppercase, and don't add small labels above section headings. The heading, tick-rule and lead sequence is the whole header.
