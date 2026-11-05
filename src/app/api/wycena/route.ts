import { NextResponse } from "next/server";

const TYPES = ["Blat", "Stół", "Mebel na wymiar", "Inne"];

export type QuotePayload = {
  name: string;
  phone: string;
  type: string;
  message: string;
  website?: string; // honeypot
};

function validate(body: Partial<QuotePayload>) {
  const errors: Record<string, string> = {};
  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const digits = phone.replace(/\D/g, "");
  if (name.length < 2) errors.name = "Podaj imię.";
  if (digits.length < 9 || digits.length > 15) errors.phone = "Podaj numer telefonu, np. 600 123 456.";
  if (!TYPES.includes(body.type ?? "")) errors.type = "Wybierz typ projektu.";
  if ((body.message ?? "").length > 3000) errors.message = "Opis może mieć najwyżej 3000 znaków.";
  return errors;
}

/**
 * Delivery: set QUOTE_WEBHOOK_URL (e.g. a Make/Zapier/n8n webhook or your mail
 * service endpoint) to receive submissions as JSON. Without it the route answers
 * 503 and the form falls back to opening the visitor's e-mail client.
 */
export async function POST(req: Request) {
  let body: Partial<QuotePayload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Nieprawidłowe dane." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // bot

  const errors = validate(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const target = process.env.QUOTE_WEBHOOK_URL;
  if (!target) {
    return NextResponse.json({ ok: false, fallback: "mailto" }, { status: 503 });
  }

  try {
    const res = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name!.trim(),
        phone: body.phone!.trim(),
        type: body.type,
        message: (body.message ?? "").trim(),
        receivedAt: new Date().toISOString(),
        source: "blatydrewniane.eu / formularz wyceny",
      }),
    });
    if (!res.ok) throw new Error(String(res.status));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, fallback: "mailto" }, { status: 502 });
  }
}
