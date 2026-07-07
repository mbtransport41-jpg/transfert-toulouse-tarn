import Image from "next/image";

const services = [
  {
    title: "Chauffeur privé",
    description: "Service haut de gamme, discrétion et courtoisie.",
  },
  {
    title: "Aéroport & Gare",
    description: "Suivi des vols et trains en temps réel.",
  },
  {
    title: "Ponctualité",
    description: "Ponctualité garantie, zéro stress.",
  },
  {
    title: "Confort & Prestige",
    description: "Véhicule haut de gamme, eau et chargeurs.",
  },
];

const destinations = [
  {
    name: "Castres",
    slug: "castres",
    image: "/Castres.png",
    prices: ["Aéroport dès 119 €", "Gare dès 109 €"],
  },
  {
    name: "Albi",
    slug: "albi",
    image: "/photo albi.png",
    prices: ["Aéroport dès 129 €", "Gare dès 119 €"],
  },
  {
    name: "Mazamet",
    slug: "mazamet",
    image: "/photo mazamet.png",
    prices: ["Aéroport dès 129 €", "Gare dès 119 €"],
  },
  {
    name: "Lavaur",
    slug: "lavaur",
    image: "/lavaur.png",
    prices: ["Aéroport dès 109 €", "Gare dès 99 €"],
  },
  {
    name: "Revel",
    slug: "revel",
    image: "/revel.png",
    prices: ["Aéroport dès 109 €", "Gare dès 99 €"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-amber-500/30 md:grid-cols-4 md:divide-x md:divide-y-0">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`px-6 py-8 text-center md:px-8 ${index === 0 ? "md:pl-0" : ""}`}
          >
            <h3 className="text-lg font-semibold text-amber-400">{service.title}</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-slate-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div id="transferts" className="mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
            Destinations premium
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Transferts vers les villes du Tarn
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0e0e0e] shadow-2xl transition hover:border-amber-500/50"
            >
              <a href={`/transferts/${destination.slug}`}>
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition hover:scale-105"
                  />
                </div>
              </a>
              <div className="p-5">
                <a href={`/transferts/${destination.slug}`}>
                  <h4 className="text-xl font-semibold text-amber-400 transition hover:text-amber-300">
                    {destination.name}
                  </h4>
                </a>
                <div className="mt-4 space-y-1 text-sm text-slate-300">
                  {destination.prices.map((price) => (
                    <p key={price}>{price}</p>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <a
                    href={`/transferts/${destination.slug}`}
                    className="flex-1 rounded-full border border-amber-400/40 px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-amber-300 transition hover:bg-amber-500 hover:text-black"
                  >
                    Réserver
                  </a>
                </div>
                    
                    
                  
                    
                  
                </div>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}