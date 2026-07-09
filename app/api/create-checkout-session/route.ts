import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-06-24.dahlia",
});

export async function POST(req: Request) {
  const { prix } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Réservation TTT",
          },
          unit_amount: prix * 100,
        },
        quantity: 1,
      },
    ],
    success_url: "https://www.transfert-toulouse-tarn.fr/success",
    cancel_url: "https://www.transfert-toulouse-tarn.fr/reservation",
  });

  return NextResponse.json({ url: session.url });
}