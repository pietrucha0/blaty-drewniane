"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, LoaderCircle, Mail, Send } from "lucide-react";
import { company, projectTypes } from "@/lib/content";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status ="idle" | "sending" | "sent" | "fallback" | "error";
type Errors = Partial<Record<"name" | "phone" | "type" | "message", string>>;

const field =
  "w-full border border-seam bg-espresso px-4 py-3.5 text-base text-cream placeholder:text-dust/80 transition-colors hover:border-board-hi focus:border-brass focus:outline-none aria-[invalid=true]:border-[#e08a6c]";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [mailto, setMailto] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    const next: Errors = {};
    if ((data.name ?? "").trim().length < 2) next.name = "Podaj imię.";
    const digits = (data.phone ?? "").replace(/\D/g, "");
    if (digits.length < 9) next.phone = "Podaj numer telefonu, np. 600 123 456.";
    if (!data.type) next.type = "Wybierz typ projektu.";
    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(`q-${Object.keys(next)[0]}`)?.focus();
      return;
    }

    const body = `Imię: ${data.name}\nTelefon: ${data.phone}\nTyp projektu: ${data.type}\n\n${data.message ?? ""}`;
    const link = `mailto:${company.email}?subject=${encodeURIComponent(`Wycena: ${data.type}`)}&body=${encodeURIComponent(body)}`;
    setMailto(link);

    setStatus("sending");

    // Primary channel: Web3Forms (client-side by design; the access key is public).
    if (WEB3FORMS_KEY) {
      if (data.website) return setStatus("sent"); // honeypot hit: pretend success
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `Zapytanie o wycenę: ${data.type} — ${data.name}`,
            from_name: "BlatyDrewniane.eu — formularz",
            Imię: data.name.trim(),
            Telefon: data.phone.trim(),
            "Typ projektu": data.type,
            "Opis i wymiary": (data.message ?? "").trim() || "—",
          }),
        });
        const json = await res.json().catch(() => ({}));
        return setStatus(res.ok && json.success ? "sent" : "fallback");
      } catch {
        return setStatus("fallback");
      }
    }

    // Secondary channel: own API route forwarding to QUOTE_WEBHOOK_URL.
    try {
      const res = await fetch("/api/wycena", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) return setStatus("sent");
      if (json.errors) {
        setErrors(json.errors);
        return setStatus("idle");
      }
      setStatus(json.fallback ? "fallback" : "error");
    } catch {
      setStatus("fallback");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 border border-seam bg-walnut p-8"
        role="status"
      >
        <span className="flex size-12 items-center justify-center bg-brass text-espresso">
          <Check className="size-6" aria-hidden />
        </span>
        <h3 className="font-display text-2xl font-semibold text-cream">Dziękujemy, mamy Twoje zapytanie</h3>
        <p className="max-w-[48ch] leading-relaxed text-sand">
          Oddzwonimy w godzinach pracy warsztatu. Jeśli masz rysunek lub zdjęcie miejsca, wyślij je na{" "}
          <a href={`mailto:${company.email}`} className="text-brass underline">
            {company.email}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 border border-seam bg-walnut p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="q-name" label="Imię" error={errors.name}>
          <input
            id="q-name"
            name="name"
            autoComplete="given-name"
            placeholder="np. Anna"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "q-name-err" : undefined}
            className={field}
          />
        </Field>
        <Field id="q-phone" label="Telefon" error={errors.phone}>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="600 123 456"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "q-phone-err" : undefined}
            className={field}
          />
        </Field>
      </div>

      <Field id="q-type" label="Typ projektu" error={errors.type}>
        <div className="relative">
          <select
            id="q-type"
            name="type"
            defaultValue=""
            aria-invalid={!!errors.type}
            aria-describedby={errors.type ? "q-type-err" : undefined}
            className={`${field} appearance-none pr-12`}
          >
            <option value="" disabled>
              Wybierz…
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-dust" aria-hidden />
        </div>
      </Field>

      <Field id="q-message" label="Krótki opis i wymiary" hint="Opcjonalnie" error={errors.message}>
        <textarea
          id="q-message"
          name="message"
          rows={4}
          maxLength={3000}
          placeholder="np. blat kuchenny w kształcie litery L, 260 × 62 cm i 180 × 62 cm, dąb, wycięcie pod zlew"
          className={`${field} resize-y`}
        />
      </Field>

      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-primary inline-flex w-full items-center justify-center gap-2 px-6 py-4 font-semibold disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Wysyłanie…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden />
            Wyślij zapytanie
          </>
        )}
      </button>

      <AnimatePresence>
        {(status === "fallback" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            className="overflow-hidden border border-brass/40 p-4 text-sm leading-relaxed text-sand"
          >
            Nie udało się wysłać formularza z tej strony. Twoja wiadomość jest gotowa —{" "}
            <a href={mailto} className="inline-flex items-center gap-1 font-semibold text-brass underline">
              <Mail className="size-4" aria-hidden />
              wyślij ją e-mailem
            </a>{" "}
            albo zadzwoń:{" "}
            <a href={company.phones[0].href} className="font-semibold text-cream underline">
              {company.phones[0].display}
            </a>
            .
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs leading-relaxed text-dust">
        Dane z formularza wykorzystamy wyłącznie, żeby odpowiedzieć na Twoje zapytanie.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-medium text-cream">
        {label}
        {hint && <span className="font-normal text-dust">{hint}</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-2 text-sm text-[#f0a488]">
          {error}
        </p>
      )}
    </div>
  );
}
