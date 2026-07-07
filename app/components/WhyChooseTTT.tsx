export default function WhyChooseTTT() {
  const benefits = [
    { icon: '💰', title: 'Tarifs fixes et transparents', description: 'Pas de surprise, prix connu d\'avance' },
    { icon: '👔', title: 'Chauffeur professionnel', description: 'Courtoisie, discrétion et expertise' },
    { icon: '🚗', title: 'Véhicule haut de gamme', description: 'Confort premium, climatisé et bien entretenu' },
    { icon: '✈️', title: 'Suivi des vols et trains', description: 'Nous ajustons votre horaire en temps réel' },
    { icon: '🎉', title: 'Accueil personnalisé', description: 'Assistance avec vos bagages et besoins' },
    { icon: '🔒', title: 'Paiement sécurisé', description: 'Carte bancaire ou virement acceptés' },
    { icon: '24/7', title: 'Disponible 24h/24, 7j/7', description: 'Réservez à toute heure, partez quand vous voulez' },
    { icon: '✓', title: 'Annulation gratuite', description: 'Jusqu\'à 2 heures avant le départ' },
  ];

  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Avantages TTT
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Pourquoi choisir Toulouse Tarn Transfer ?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-6 shadow-sm transition hover:border-amber-300 hover:shadow-md"
            >
              <div className="mb-3 text-4xl">{benefit.icon}</div>
              <h3 className="mb-2 font-semibold text-slate-900">{benefit.title}</h3>
              <p className="text-sm text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
