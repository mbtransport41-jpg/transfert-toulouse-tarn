import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Transfert chauffeur privé Castres | Aéroport et gare de Toulouse",
  description:
    "Page destination Castres : comparez vos transferts privés depuis l'aéroport Toulouse-Blagnac ou la gare Matabiau, avec tarifs fixes, service premium et réservation 24h/24.",
  path: "/transferts/castres",
  keywords: [
    "destination Castres chauffeur privé",
    "transfert Toulouse Castres premium",
    "prix chauffeur privé Castres",
    "réserver VTC Castres",
    "aéroport Toulouse vers Castres",
    "gare Matabiau vers Castres",
  ],
  image: "/Castres.png",
  imageAlt: "Transfert premium vers Castres",
});

export default function CastresDestinationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Destination</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Chauffeur privé à Castres</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Cette page réunit vos deux options de transfert privé vers Castres depuis Toulouse. Choisissez votre point de
          départ, profitez d'un tarif fixe annoncé à la réservation et d'une prise en charge premium adaptée aux
          arrivées vol ou train.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Link
          href="/transfert/aeroport-toulouse-castres"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Aéroport</p>
          <h2 className="mt-3 text-2xl font-bold">Toulouse-Blagnac - Castres</h2>
          <p className="mt-3 text-slate-300">Trajet premium avec accueil personnalisé, tarif fixe et réservation rapide.</p>
        </Link>

        <Link
          href="/transfert/gare-matabiau-castres"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Gare</p>
          <h2 className="mt-3 text-2xl font-bold">Matabiau - Castres</h2>
          <p className="mt-3 text-slate-300">Solution idéale pour vos correspondances train avec chauffeur privé dédié.</p>
        </Link>
      </section>
    </main>
  );
}
