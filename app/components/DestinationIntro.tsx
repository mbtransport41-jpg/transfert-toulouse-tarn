type DestinationIntroProps = {
  description: string;
  city: string;
};

export default function DestinationIntro({ description, city }: DestinationIntroProps) {
  return (
    <section className="bg-black px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-base leading-8 text-slate-300">{description}</p>

        <a
          href={`/#booking?destination=${city}`}
          className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-400"
        >
          Réserver ce transfert
        </a>
      </div>
    </section>
  );
}
