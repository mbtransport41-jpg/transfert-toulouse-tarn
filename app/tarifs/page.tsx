import Link from "next/link";
import { buildSeoMetadata } from "../lib/seo";

export const metadata = buildSeoMetadata({
  title: "Tarifs chauffeur privé Toulouse | Prix fixes et devis rapide",
  description:
    "Consultez les tarifs de votre chauffeur privé à Toulouse pour l'aéroport Toulouse-Blagnac, la gare Matabiau et les villes du Tarn. Prix fixes, devis rapide et transport premium.",
  path: "/tarifs",
  keywords: [
    "chauffeur privé Toulouse",
    "VTC Toulouse",
    "tarifs VTC Toulouse",
    "transfert aéroport Toulouse",
    "transfert gare Matabiau",
    "transport premium",
    "réservation chauffeur privé",
  ],
});

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-amber-400 uppercase tracking-[0.3em] text-sm">Tarifs</p>
        <h1 className="mt-4 text-5xl font-bold">Tarifs de nos transferts privés</h1>
        <p className="mt-6 text-gray-300 text-lg leading-8">
          Tarn Transfert propose des tarifs transparents pour tous vos déplacements privés, transferts vers l&apos;aéroport
          Toulouse-Blagnac, la gare Matabiau, Castres, Albi, Lavaur, Revel, Mazamet et toute l&apos;Occitanie.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-amber-500/30 p-8 bg-zinc-900">
          <h2 className="text-2xl font-bold text-amber-400">Transferts sur devis</h2>
          <p className="mt-4 text-gray-300">Chaque trajet est calculé selon :</p>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✓ Distance</li>
            <li>✓ Temps de trajet</li>
            <li>✓ Nombre de passagers</li>
            <li>✓ Aller simple ou aller-retour</li>
            <li>✓ Attente si nécessaire</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-amber-500/30 p-8 bg-zinc-900">
          <h2 className="text-2xl font-bold text-amber-400">Inclus dans le prix</h2>
          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✓ Chauffeur privé professionnel</li>
            <li>✓ Véhicule haut de gamme</li>
            <li>✓ Eau offerte</li>
            <li>✓ Chargeurs téléphone</li>
            <li>✓ Suivi des vols et trains</li>
            <li>✓ Paiement sécurisé</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-amber-500 text-black p-10 text-center">
          <h2 className="text-3xl font-bold">Demandez votre devis gratuitement</h2>
          <p className="mt-4 text-lg">Réponse rapide • Sans engagement • Disponible 7j/7</p>
          <Link href="/#booking" className="mt-8 inline-block rounded-full bg-black text-white px-8 py-4 font-bold">
            Demander un devis
          </Link>
        </div>
      </section>
    </main>
  );
}
