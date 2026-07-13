import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Transfert chauffeur privé Revel | Réservation depuis Toulouse",
  description:
    "Page destination Revel : choisissez votre transfert privé depuis Toulouse-Blagnac ou la gare Matabiau, avec chauffeur premium, disponibilité 24h/24 et tarification sans surprise.",
  path: "/transferts/revel",
  keywords: [
    "destination Revel transfert premium",
    "chauffeur privé Revel depuis Toulouse",
    "VTC Revel réservation 24h24",
    "trajet aéroport Toulouse Revel",
    "trajet gare Toulouse Revel",
    "transport privé Revel tarif fixe",
  ],
  image: "/revel.png",
  imageAlt: "Chauffeur privé pour Revel",
});

export default function RevelDestinationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Destination</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Chauffeur privé à Revel</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Planifiez votre transfert vers Revel avec une offre claire et premium. Sélectionnez l'origine de votre
          déplacement et accédez à une prestation sur mesure avec chauffeur professionnel.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Link
          href="/transfert/aeroport-toulouse-revel"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Aéroport</p>
          <h2 className="mt-3 text-2xl font-bold">Toulouse-Blagnac - Revel</h2>
          <p className="mt-3 text-slate-300">Prise en charge rapide à l'arrivée avec confort haut de gamme à bord.</p>
        </Link>

        <Link
          href="/transfert/gare-matabiau-revel"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Gare</p>
          <h2 className="mt-3 text-2xl font-bold">Matabiau - Revel</h2>
          <p className="mt-3 text-slate-300">Parcours direct et fiable pour vos retours ou départs depuis Toulouse.</p>
        </Link>
      </section>
    </main>
  );
}
