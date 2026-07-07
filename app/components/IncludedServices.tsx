export default function IncludedServices() {
  const services = [
    { icon: '👋', title: 'Accueil personnalisé', description: 'Votre chauffeur vous accueille avec le sourire' },
    { icon: '🎒', title: 'Aide avec les bagages', description: 'Transport et rangement de vos valises' },
    { icon: '💧', title: 'Eau à bord', description: 'Bouteille d\'eau fraîche offerte gratuitement' },
    { icon: '🔌', title: 'Chargeurs téléphone', description: 'USB et câbles disponibles pour vos appareils' },
    { icon: '❄️', title: 'Véhicule climatisé', description: 'Confort thermique toute l\'année' },
    { icon: '💳', title: 'Paiement CB', description: 'Carte bancaire acceptée et sécurisée' },
  ];

  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Ce qui est inclus
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Services offerts avec votre transfert
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-3 text-4xl">{service.icon}</div>
              <h3 className="mb-2 font-semibold text-slate-900">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
