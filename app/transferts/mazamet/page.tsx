import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Transfert chauffeur privé Mazamet | Navette premium depuis Toulouse",
  description:
    "Page destination Mazamet : découvrez les transferts privés depuis Toulouse-Blagnac et la gare Matabiau, avec chauffeur expérimenté, véhicule premium et réservation sécurisée.",
  path: "/transferts/mazamet",
  keywords: [
    "destination Mazamet chauffeur",
    "transfert Toulouse Mazamet haut de gamme",
    "réserver chauffeur privé Mazamet",
    "aéroport Toulouse vers Mazamet VTC",
    "gare Matabiau vers Mazamet VTC",
    "service transport privé Mazamet",
  ],
  image: "/photo mazamet.png",
  imageAlt: "Transfert premium vers Mazamet",
});

export default function MazametDestinationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Destination</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Chauffeur privé à Mazamet</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Retrouvez ici vos parcours privés vers Mazamet depuis les deux hubs toulousains. Chaque trajet est conçu pour
          offrir ponctualité, discrétion et qualité de service constante.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Link
          href="/transfert/aeroport-toulouse-mazamet"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Aéroport</p>
          <h2 className="mt-3 text-2xl font-bold">Toulouse-Blagnac - Mazamet</h2>
          <p className="mt-3 text-slate-300">Option privilégiée après vol avec gestion proactive des horaires d'arrivée.</p>
        </Link>

        <Link
          href="/transfert/gare-matabiau-mazamet"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Gare</p>
          <h2 className="mt-3 text-2xl font-bold">Matabiau - Mazamet</h2>
          <p className="mt-3 text-slate-300">Solution confortable pour rejoindre Mazamet dès la sortie du train.</p>
        </Link>
      </section>
    </main>
  );
}
