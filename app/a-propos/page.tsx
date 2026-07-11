export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Toulouse Tarn Transfert</p>
        <h1 className="mt-4 text-5xl font-bold">À propos de TTT</h1>
        <div className="mt-6 mb-10 h-1 w-24 rounded-full bg-amber-400"></div>

        <p className="text-xl leading-9 text-slate-300">
          Toulouse Tarn Transfert (TTT) est votre partenaire de confiance pour tous vos déplacements entre Toulouse et
          les principales villes du Tarn.
        </p>

        <p className="mt-8 text-lg leading-9 text-slate-400">
          Nous assurons des transferts premium depuis l'aéroport Toulouse-Blagnac, la gare Matabiau ainsi que tout
          autre lieu de prise en charge vers Castres, Albi, Mazamet, Lavaur, Revel et l'ensemble de la région
          Occitanie.
        </p>

        <p className="mt-8 text-lg leading-9 text-slate-400">
          Notre mission est d'offrir un service ponctuel, discret, confortable et personnalisé afin que chacun de vos
          trajets soit une expérience agréable.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-amber-500/30 p-8">
            <h2 className="text-2xl font-bold text-amber-400">Pourquoi nous choisir ?</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>✓ Chauffeur professionnel</li>
              <li>✓ Tarifs fixes</li>
              <li>✓ Ponctualité garantie</li>
              <li>✓ Accueil personnalisé</li>
              <li>✓ Paiement sécurisé</li>
              <li>✓ Véhicule confortable</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-amber-500/30 p-8">
            <h2 className="text-2xl font-bold text-amber-400">Service bilingue</h2>
            <p className="mt-6 text-slate-300">
              Nous accueillons notre clientèle en français et en anglais afin d'offrir une expérience de qualité aux
              voyageurs internationaux.
            </p>
            <div className="mt-8 text-5xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
