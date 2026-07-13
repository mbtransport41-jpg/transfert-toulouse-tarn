import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Transfert chauffeur privé Albi | Départs aéroport et gare Toulouse",
  description:
    "Page destination Albi : trouvez votre transfert privé depuis Toulouse-Blagnac ou Matabiau avec chauffeur professionnel, confort premium et coût transparent.",
  path: "/transferts/albi",
  keywords: [
    "destination Albi transfert privé",
    "chauffeur Toulouse Albi",
    "VTC premium Albi réservation",
    "liaison aéroport Blagnac Albi",
    "liaison gare Matabiau Albi",
    "transport privé Albi 24h24",
  ],
  image: "/photo albi.png",
  imageAlt: "Service de transfert vers Albi",
});

export default function AlbiDestinationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Destination</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Chauffeur privé à Albi</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Préparez votre trajet Toulouse vers Albi en comparant nos deux points de départ. Chaque prestation inclut un
          service haut de gamme, un chauffeur ponctuel et un prix fixe communiqué avant validation.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Link
          href="/transfert/aeroport-toulouse-albi"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Aéroport</p>
          <h2 className="mt-3 text-2xl font-bold">Toulouse-Blagnac - Albi</h2>
          <p className="mt-3 text-slate-300">Transfert direct après vol avec suivi en temps réel et prise en charge fluide.</p>
        </Link>

        <Link
          href="/transfert/gare-matabiau-albi"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Gare</p>
          <h2 className="mt-3 text-2xl font-bold">Matabiau - Albi</h2>
          <p className="mt-3 text-slate-300">Parfait pour vos déplacements pros ou perso avec bagages et arrivée ponctuelle.</p>
        </Link>
      </section>
    </main>
  );
}
