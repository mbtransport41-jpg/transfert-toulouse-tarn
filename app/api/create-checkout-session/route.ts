import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

function getStripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return null;
  }

  return new Stripe(key, {
    apiVersion: "2026-06-24.dahlia",
  });
}

export async function POST(req: Request) {
  const stripe = getStripeClient();
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe n'est pas configuré (STRIPE_SECRET_KEY manquant)." },
      { status: 500 }
    );
  }

  let body: { prix?: number | string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Payload JSON invalide." }, { status: 400 });
  }

  const { prix } = body;
  const amount = Number(prix);
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ error: "Montant invalide." }, { status: 400 });
  }

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Réservation TTT",
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: "https://www.transfert-toulouse-tarn.fr/success",
      cancel_url: "https://www.transfert-toulouse-tarn.fr/reservation",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur Stripe inconnue.";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  return NextResponse.json({ url: session.url });
}