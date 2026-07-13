import { buildSeoMetadata } from "./lib/seo";
import { Suspense } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reservation from "./components/Reservation";
import BookingForm from "./components/BookingForm";

export const metadata = buildSeoMetadata({
  title: "Chauffeur privé Toulouse, VTC premium et transferts 24h/24",
  description:
    "Réservez un chauffeur privé à Toulouse pour vos transferts aéroport Toulouse-Blagnac, gare Matabiau, Castres, Albi, Lavaur, Revel et Mazamet. Service premium, tarif fixe et réservation simple.",
  path: "/",
  keywords: [
    "chauffeur privé Toulouse",
    "VTC Toulouse",
    "transfert aéroport Toulouse",
    "transfert gare Matabiau",
    "chauffeur privé Occitanie",
    "réservation chauffeur privé",
    "transfert Toulouse Blagnac",
    "chauffeur aéroport Toulouse",
    "transport premium",
  ],
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Reservation />
      <Suspense fallback={null}>
        <BookingForm />
      </Suspense>
    </>
  );
}
