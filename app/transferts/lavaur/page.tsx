import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Transfert chauffeur privé Lavaur | Service premium depuis Toulouse",
  description:
    "Page destination Lavaur : accédez aux transferts privés depuis l'aéroport Toulouse-Blagnac et la gare Matabiau, avec réservation simple, confort premium et tarifs fixes.",
  path: "/transferts/lavaur",
  keywords: [
    "destination Lavaur chauffeur privé",
    "transfert Toulouse vers Lavaur",
    "prix VTC Lavaur fixé à l'avance",
    "réservation chauffeur Lavaur en ligne",
    "aéroport Blagnac Lavaur",
    "gare Matabiau Lavaur",
  ],
  image: "/lavaur.png",
  imageAlt: "Transfert privé premium vers Lavaur",
});

export default function LavaurDestinationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Destination</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Chauffeur privé à Lavaur</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Centralisez vos options de transfert Toulouse vers Lavaur sur une seule page. Vous bénéficiez d'un service
          premium, d'une réservation 24h/24 et d'une expérience de transport fiable sur toute la liaison.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Link
          href="/transfert/aeroport-toulouse-lavaur"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Aéroport</p>
          <h2 className="mt-3 text-2xl font-bold">Toulouse-Blagnac - Lavaur</h2>
          <p className="mt-3 text-slate-300">Trajet optimisé depuis le terminal avec accueil et assistance bagages.</p>
        </Link>

        <Link
          href="/transfert/gare-matabiau-lavaur"
          className="rounded-2xl border border-amber-400/30 bg-white/5 p-6 transition hover:bg-white/10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Gare</p>
          <h2 className="mt-3 text-2xl font-bold">Matabiau - Lavaur</h2>
          <p className="mt-3 text-slate-300">Alternative premium au taxi classique pour vos correspondances ferroviaires.</p>
        </Link>
      </section>
    </main>
  );
}
