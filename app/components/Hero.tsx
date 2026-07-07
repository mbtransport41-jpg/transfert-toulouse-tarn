export default function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.52) 46%, rgba(0,0,0,0.86) 100%), url('/Ford vignale.png')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,215,0,0.12),_transparent_35%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-lg font-semibold uppercase tracking-[0.35em] text-amber-300 sm:text-xl">
            CONFORT • PONCTUALITÉ • SÉRÉNITÉ
          </p>

          <ul className="mt-8 space-y-4 text-base text-slate-200 sm:text-lg">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-amber-400">✓</span>
              <span>Transferts Aéroport Toulouse-Blagnac</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-amber-400">✓</span>
              <span>Transferts Gare Matabiau</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-amber-400">✓</span>
              <span>Mise à disposition</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-amber-400">✓</span>
              <span>Suivi des vols et trains inclus</span>
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#booking"
              className="rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-[0_10px_30px_rgba(245,158,11,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-amber-400"
            >
              Réserver maintenant
            </a>
            <a
              href="#services"
              className="rounded-full border border-amber-400/70 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Nos destinations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}