type PricingCardProps = {
  city: string;
  airportPrice: string;
  stationPrice: string;
};

export default function PricingCard({ city, airportPrice, stationPrice }: PricingCardProps) {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Tarification
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Transferts Toulouse - {city}
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Prix fixes, sans surprise, sans supplément caché.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Aéroport Card */}
          <article className="rounded-3xl border border-amber-200 bg-white p-8 shadow-lg">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Aéroport
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Toulouse Aéroport → {city}
              </h3>
            </div>

            <div className="mb-8 border-t border-slate-200 pt-6">
              <p className="text-6xl font-bold text-amber-600">{airportPrice}</p>
              <p className="mt-2 text-sm text-slate-600">Prix pour 1 à 4 passagers</p>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-amber-600">✓</span>
                <span>Prise en charge à l'aéroport</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600">✓</span>
                <span>Suivi de votre vol en temps réel</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600">✓</span>
                <span>Attente gratuite jusqu'à 15 min</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600">✓</span>
                <span>Aide avec les bagages</span>
              </li>
            </ul>
          </article>

          {/* Station Card */}
          <article className="rounded-3xl border border-amber-200 bg-white p-8 shadow-lg">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                Gare
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Gare Matabiau → {city}
              </h3>
            </div>

            <div className="mb-8 border-t border-slate-200 pt-6">
              <p className="text-6xl font-bold text-amber-600">{stationPrice}</p>
              <p className="mt-2 text-sm text-slate-600">Prix pour 1 à 4 passagers</p>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-amber-600">✓</span>
                <span>Prise en charge à la gare</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600">✓</span>
                <span>Suivi de votre train en temps réel</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600">✓</span>
                <span>Attente gratuite jusqu'à 15 min</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-600">✓</span>
                <span>Aide avec les bagages</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
