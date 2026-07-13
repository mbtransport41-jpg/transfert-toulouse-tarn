import Script from "next/script";
import { buildSeoMetadata } from "../lib/seo";

export const metadata = buildSeoMetadata({
  title: "Avis chauffeur privé Toulouse | Service premium recommandé",
  description:
    "Découvrez les avis clients sur notre chauffeur privé à Toulouse, nos transferts aéroport Toulouse-Blagnac, gare Matabiau et nos trajets vers Castres, Albi, Lavaur, Revel et Mazamet.",
  path: "/avis",
  keywords: [
    "avis chauffeur privé Toulouse",
    "avis VTC Toulouse",
    "chauffeur privé Castres",
    "chauffeur privé Albi",
    "chauffeur privé Lavaur",
    "chauffeur privé Revel",
    "chauffeur privé Mazamet",
    "transfert aéroport Toulouse",
    "chauffeur privé Occitanie",
    "transport premium",
  ],
});

export default function AvisPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Toulouse Tarn Transfert",
    description:
      "Service de chauffeur privé premium entre Toulouse, Castres, Albi, Lavaur, Revel, Mazamet et l'aéroport Toulouse-Blagnac.",
    areaServed: "Occitanie",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "28",
    },
  };

  return (
    <>
      <Script
        id="schema-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen bg-zinc-950 text-white">
        <section className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-amber-400 uppercase tracking-[0.35em] font-semibold">
            TOULOUSE TARN TRANSFERT
          </p>
          <h1 className="mt-6 text-5xl md:text-6xl font-bold">Avis de nos clients</h1>
          <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-8">
            Découvrez les témoignages de nos passagers ayant choisi Toulouse Tarn Transfert pour leurs transferts
            privés entre Toulouse, Castres, Albi, Lavaur, Revel, Mazamet, l&apos;aéroport Toulouse-Blagnac, les gares et
            toute l&apos;Occitanie.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8 text-center">
              <div className="text-6xl font-bold text-amber-400">5.0</div>
              <div className="mt-3 text-2xl text-amber-400">★★★★★</div>
              <p className="mt-4 text-slate-300">Note moyenne de satisfaction</p>
              <p className="mt-2 text-sm text-slate-500">Basée sur les avis de nos clients</p>
            </div>

            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
              <h2 className="text-xl font-semibold text-amber-300">Ponctualité</h2>
              <p className="mt-4 text-slate-300">
                Nos chauffeurs arrivent toujours en avance pour garantir un départ serein.
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
              <h2 className="text-xl font-semibold text-amber-300">Véhicule premium</h2>
              <p className="mt-4 text-slate-300">
                Berline confortable, climatisation, chargeurs téléphone, bouteille d&apos;eau et intérieur impeccable.
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
              <h2 className="text-xl font-semibold text-amber-300">Service personnalisé</h2>
              <p className="mt-4 text-slate-300">
                Accueil personnalisé, suivi des vols et des trains, disponibilité 7j/7 sur réservation.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className="text-4xl font-bold">Pourquoi nos clients nous recommandent</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800">⭐ Chauffeur professionnel et discret</div>
            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800">🚘 Véhicule haut de gamme parfaitement entretenu</div>
            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800">✈️ Suivi des vols et des trains en temps réel</div>
            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800">📍 Transferts dans tout le Tarn et l&apos;Occitanie</div>
            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800">💳 Paiement sécurisé</div>
            <div className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800">🕒 Disponibilité sur réservation 7j/7</div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className="text-4xl font-bold text-white">Les derniers avis de nos clients</h2>
            <p className="mt-4 text-slate-400">Chaque avis est laissé par un client ayant utilisé Toulouse Tarn Transfert.</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-amber-400 text-2xl">★★★★★</div>
              <h3 className="mt-4 text-xl font-semibold">Jean D.</h3>
              <p className="text-slate-400">Castres → Aéroport Toulouse-Blagnac</p>
              <p className="mt-5 leading-8 text-slate-300">
                Chauffeur ponctuel, véhicule impeccable, conduite très agréable. Je recommande Toulouse Tarn Transfert
                pour tous les déplacements professionnels.
              </p>
            </article>

            <article className="rounded-3xl bg-zinc-900 border border-zinc-800 p-8">
              <div className="text-amber-400 text-2xl">★★★★★</div>
              <h3 className="mt-4 text-xl font-semibold">Sophie M.</h3>
              <p className="text-slate-400">Albi → Gare Matabiau</p>
              <p className="mt-5 leading-8 text-slate-300">
                Réservation très simple, chauffeur très professionnel et accueil parfait. Je referai appel à Toulouse
                Tarn Transfert.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-10">
            <h2 className="text-4xl font-bold text-white">Déposer votre avis</h2>

            <p className="mt-4 text-slate-400">
              Votre retour nous permet d&apos;améliorer continuellement la qualité de nos services.
            </p>

            <form className="mt-10 space-y-6">
              <input type="text" placeholder="Votre nom" className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4" />
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4"
              />
              <textarea rows={5} placeholder="Votre avis..." className="w-full rounded-xl bg-zinc-800 border border-zinc-700 p-4" />

              <button
                type="submit"
                className="rounded-full bg-amber-500 px-8 py-4 font-bold text-black hover:bg-amber-400 transition"
              >
                Publier mon avis
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
