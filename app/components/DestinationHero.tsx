import Image from 'next/image';

type DestinationHeroProps = {
  city: string;
  imagePath: string;
};

export default function DestinationHero({ city, imagePath }: DestinationHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black pt-20">
      <div className="relative h-96 w-full sm:h-[500px] lg:h-[600px]">
        <Image
          src={imagePath}
          alt={`Transfert Toulouse vers ${city}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            Transfert premium
          </p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Toulouse → {city}
          </h1>
        </div>
      </div>
    </section>
  );
}
