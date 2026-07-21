import { NextResponse } from "next/server";

export const runtime = "nodejs";

type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  passengers: string;
  bags: string;
  trip_type: string;
  message?: string;
  estimated_price?: string;
  request_datetime?: string;
};

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID ?? "service_qq5eacp";
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID ?? "template_72td9cf";
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY ?? "Ei0v13zei0qINODgj";
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

function toStringValue(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizePayload(input: Record<string, unknown>): BookingPayload {
  return {
    name: toStringValue(input.name),
    email: toStringValue(input.email).toLowerCase(),
    phone: toStringValue(input.phone),
    pickup: toStringValue(input.pickup),
    destination: toStringValue(input.destination),
    date: toStringValue(input.date),
    passengers: toStringValue(input.passengers),
    bags: toStringValue(input.bags),
    trip_type: toStringValue(input.trip_type),
    message: toStringValue(input.message),
    estimated_price: toStringValue(input.estimated_price),
    request_datetime: toStringValue(input.request_datetime),
  };
}

function buildHtmlTable(payload: BookingPayload): string {
  const rows = [
    ["Nom et prenom", payload.name],
    ["E-mail", payload.email],
    ["Telephone", payload.phone],
    ["Adresse de prise en charge", payload.pickup],
    ["Destination", payload.destination],
    ["Date et heure souhaitees", payload.date],
    ["Nombre de voyageurs", payload.passengers],
    ["Nombre de bagages", payload.bags],
    ["Type de trajet", payload.trip_type],
    ["Message", payload.message || "Aucun message complementaire."],
    ["Prix estime", payload.estimated_price || "Non calcule"],
    ["Date de la demande", payload.request_datetime || "Non renseignee"],
  ];

  return rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">${escapeHtml(
          label
        )}</td><td style="padding:8px;border:1px solid #e2e8f0;">${escapeHtml(value)}</td></tr>`
    )
    .join("");
}

export async function POST(req: Request) {
  let rawBody: unknown;

  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload JSON invalide." }, { status: 400 });
  }

  if (!rawBody || typeof rawBody !== "object") {
    return NextResponse.json({ error: "Payload manquant." }, { status: 400 });
  }

  const payload = normalizePayload(rawBody as Record<string, unknown>);

  console.log("[booking-request] Donnees recues:", payload);

  const requiredFields: Array<keyof BookingPayload> = [
    "name",
    "email",
    "phone",
    "pickup",
    "destination",
    "date",
    "passengers",
    "bags",
    "trip_type",
  ];

  const missingFields = requiredFields.filter((field) => !payload[field]);
  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Champs manquants: ${missingFields.join(", ")}.` },
      { status: 400 }
    );
  }

  const messageValue = payload.message || "Aucun message complementaire.";
  const estimatedPrice = payload.estimated_price || "Non calcule";
  const requestDateTime = payload.request_datetime || new Date().toISOString();
  const bookingHtmlRows = buildHtmlTable(payload);

  const templateParams = {
    // Noms alignes avec les attributs `name` du formulaire.
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    pickup: payload.pickup,
    destination: payload.destination,
    date: payload.date,
    passengers: payload.passengers,
    bags: payload.bags,
    trip_type: payload.trip_type,
    message: messageValue,

    // Alias de compatibilite avec templates EmailJS existants.
    full_name: payload.name,
    customer_email: payload.email,
    customer_phone: payload.phone,
    pickup_address: payload.pickup,
    destination_address: payload.destination,
    desired_datetime: payload.date,
    passengers_count: payload.passengers,
    bags_count: payload.bags,
    customer_message: messageValue,
    estimated_price: estimatedPrice,
    request_datetime: requestDateTime,
    from_name: payload.name,
    reply_to: payload.email,
    travel_date: payload.date,
    departure: payload.pickup,
    arrival: payload.destination,
    user_message: messageValue,

    // Variables HTML pour templates type tableau.
    booking_rows_html: bookingHtmlRows,
    booking_table_html: `<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;">${bookingHtmlRows}</table>`,
  };

  console.log("[booking-request] Parametres EmailJS:", templateParams);

  const emailJsPayload: Record<string, unknown> = {
    service_id: EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_PUBLIC_KEY,
    template_params: templateParams,
  };

  if (EMAILJS_PRIVATE_KEY) {
    emailJsPayload.accessToken = EMAILJS_PRIVATE_KEY;
  }

  try {
    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailJsPayload),
    });

    if (!emailResponse.ok) {
      const errorBody = await emailResponse.text();
      console.error("[booking-request] Erreur EmailJS:", errorBody);

      // Certains comptes EmailJS bloquent l'appel API serveur.
      // On renvoie alors les params pour un envoi de secours côté navigateur.
      return NextResponse.json({
        ok: true,
        sentBy: "client",
        templateParams,
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
        warning: "EmailJS serveur indisponible: fallback navigateur active.",
      });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    console.error("[booking-request] Exception envoi email:", message);

    return NextResponse.json({
      ok: true,
      sentBy: "client",
      templateParams,
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      publicKey: EMAILJS_PUBLIC_KEY,
      warning: "Exception serveur EmailJS: fallback navigateur active.",
    });
  }

  return NextResponse.json({ ok: true, sentBy: "server" });
}