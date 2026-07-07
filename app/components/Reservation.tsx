import Image from "next/image";

export default function Reservation() {
  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.82) 100%), url('/photo reservation menu.png')",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[360px_minmax(320px,1fr)_360px]">
        <div className="flex flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-black/35 p-4 shadow-2xl backdrop-blur-sm">
          <Image
            src="/a propos.png"
            alt="À propos"
            width={360}
            height={480}
            className="h-auto w-full object-contain"
          />
          <a
            href="/a-propos"
            className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-400"
          >
            En savoir plus
          </a>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-black/40 px-8 py-12 text-center shadow-2xl backdrop-blur-sm sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            Réservation rapide et sécurisée
          </p>
          <h2 className="mt-4 text-xl font-medium italic text-white sm:text-2xl">
            Réservez en quelques clics votre chauffeur privé
          </h2>
          <a
            href="#booking"
            className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-400"
          >
            Réserver maintenant
          </a>
          <div className="mt-8 flex justify-center">
            <Image
              src="/reserve 2424.png"
              alt="Réservation"
              width={380}
              height={180}
              className="h-auto w-full max-w-[380px] object-contain"
            />
          </div>
          <p className="mt-4 text-sm text-slate-200">
            Demandez un transfert effacé : pour recevoir une estimation rapide et un accompagnement personnalisé.
          </p>
        </div>

        <div className="flex items-center justify-center rounded-[2rem] border border-white/10 bg-black/35 p-4 shadow-2xl backdrop-blur-sm">
          <Image
            src="/photo pencarte.png"
            alt="Photo pencarte"
            width={360}
            height={480}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
