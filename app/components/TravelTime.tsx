type TravelTimeProps = {
  city: string;
  travelTime: string;
  distance: string;
};

export default function TravelTime({ city, travelTime, distance }: TravelTimeProps) {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
            Trajets
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Temps de trajet vers {city}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Travel Time Card */}
          <article className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">⏱️</div>
            <h3 className="mb-2 font-semibold text-slate-900">Temps moyen</h3>
            <p className="text-3xl font-bold text-amber-600">{travelTime}</p>
            <p className="mt-2 text-sm text-slate-600">Entre Toulouse et {city}</p>
          </article>

          {/* Distance Card */}
          <article className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">🛣️</div>
            <h3 className="mb-2 font-semibold text-slate-900">Distance</h3>
            <p className="text-3xl font-bold text-amber-600">{distance}</p>
            <p className="mt-2 text-sm text-slate-600">Parcours estimé</p>
          </article>

          {/* Availability Card */}
          <article className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 shadow-sm">
            <div className="mb-4 text-4xl">24/7</div>
            <h3 className="mb-2 font-semibold text-slate-900">Disponibilité</h3>
            <p className="text-3xl font-bold text-amber-600">24h/24</p>
            <p className="mt-2 text-sm text-slate-600">Réservez quand vous voulez</p>
          </article>
        </div>
      </div>
    </section>
  );
}
