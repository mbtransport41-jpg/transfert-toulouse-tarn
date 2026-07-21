import Image from "next/image";
import Link from "next/link";
import { buildBookingHref } from "@/app/lib/booking";

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
    airportSlug: "aeroport-toulouse-castres",
    stationSlug: "gare-matabiau-castres",
    image: "/Castres.png",
    prices: ["Aéroport dès 119 €", "Gare dès 109 €"],
  },
  {
    name: "Albi",
    airportSlug: "aeroport-toulouse-albi",
    stationSlug: "gare-matabiau-albi",
    image: "/photo albi.png",
    prices: ["Aéroport dès 129 €", "Gare dès 119 €"],
  },
  {
    name: "Mazamet",
    airportSlug: "aeroport-toulouse-mazamet",
    stationSlug: "gare-matabiau-mazamet",
    image: "/photo mazamet.png",
    prices: ["Aéroport dès 129 €", "Gare dès 119 €"],
  },
  {
    name: "Lavaur",
    airportSlug: "aeroport-toulouse-lavaur",
    stationSlug: "gare-matabiau-lavaur",
    image: "/lavaur.png",
    prices: ["Aéroport dès 109 €", "Gare dès 99 €"],
  },
  {
    name: "Revel",
    airportSlug: "aeroport-toulouse-revel",
    stationSlug: "gare-matabiau-revel",
    image: "/revel.png",
    prices: ["Aéroport dès 109 €", "Gare dès 99 €"],
  },
  {
    name: "Sorèze",
    airportSlug: "aeroport-toulouse-soreze",
    stationSlug: "gare-matabiau-soreze",
    image: "/Soreze.png",
    prices: ["Aéroport dès 120 €", "Gare dès 114 €"],
  },
  {
    name: "Saint-Ferréol",
    airportSlug: "aeroport-toulouse-saint-ferreol",
    stationSlug: "gare-matabiau-saint-ferreol",
    image: "/St-ferriol.png",
    prices: ["Aéroport dès 119 €", "Gare dès 109 €"],
  },
  {
    name: "Carcassonne",
    airportSlug: "aeroport-toulouse-carcassonne",
    stationSlug: "gare-matabiau-carcassonne",
    image: "/Carcassonne.png",
    prices: ["Aéroport dès 156 €", "Gare dès 132 €"],
  },
  {
    name: "Castelnaudary",
    airportSlug: "aeroport-toulouse-castelnaudary",
    stationSlug: "gare-matabiau-castelnaudary",
    image: "/Castelnaudary 2.png",
    prices: ["Aéroport dès 109 €", "Gare dès 99 €"],
  },
  {
    name: "Montauban, Saint-Nauphary",
    airportSlug: "aeroport-toulouse-montauban",
    stationSlug: "gare-matabiau-montauban",
    image: "/Montauban.png",
    prices: ["Aéroport dès 99 €", "Gare dès 89 €"],
  },
  {
    name: "Moissac",
    airportSlug: "aeroport-toulouse-moissac",
    stationSlug: "gare-matabiau-moissac",
    image: "/Moissac.png",
    prices: ["Aéroport dès 109 €", "Gare dès 99 €"],
  },
  {
    name: "Castelsarrasin",
    airportSlug: "aeroport-toulouse-castelsarrasin",
    stationSlug: "gare-matabiau-castelsarrasin",
    image: "/Castelsarasin.png",
    prices: ["Aéroport dès 109 €", "Gare dès 99 €"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-0 sm:px-8 lg:px-10">
        <div className="mb-8 max-w-2xl">
          <h3 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Transferts vers les villes du Tarn
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0e0e0e] shadow-2xl"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-amber-400">
                  {destination.name}
                </h4>
                <div className="mt-4 space-y-1 text-sm text-slate-300">
                  {destination.prices.map((price) => (
                    <p key={price}>{price}</p>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <Link
                    href={`/transfert/${destination.airportSlug}`}
                    className="inline-flex justify-center rounded-full border border-amber-400/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300 transition hover:bg-amber-500 hover:text-black"
                  >
                    Aéroport
                  </Link>
                  <Link
                    href={`/transfert/${destination.stationSlug}`}
                    className="inline-flex justify-center rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-amber-400"
                  >
                    Gare
                  </Link>
                </div>
                <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4">
                  <div className="inline-flex rounded-full bg-amber-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
                    Transport retour vers Toulouse
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <Link
                      href={buildBookingHref(destination.name, "Aéroport Toulouse-Blagnac")}
                      className="inline-flex justify-center rounded-full border border-amber-400/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300 transition hover:bg-amber-500 hover:text-black"
                    >
                      Aéroport
                    </Link>
                    <Link
                      href={buildBookingHref(destination.name, "Gare Toulouse-Matabiau")}
                      className="inline-flex justify-center rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-amber-400"
                    >
                      Gare
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <article className="overflow-hidden rounded-[1.5rem] border border-amber-400/30 bg-[#14120a] shadow-2xl">
            <div className="relative h-44 w-full overflow-hidden">
              <Image src="/Soreze.png" alt="Sorèze Carcassonne" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h4 className="text-xl font-semibold text-amber-400">Sorèze ↔ Carcassonne</h4>
              <div className="mt-4 space-y-1 text-sm text-slate-300">
                <p>Aller-retour dès 139 € TTC</p>
                <p>Service premium et tarif fixe</p>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-2">
                <Link
                  href="/transfert/soreze-carcassonne"
                  className="inline-flex justify-center rounded-full border border-amber-400/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300 transition hover:bg-amber-500 hover:text-black"
                >
                  Voir le transfert
                </Link>
                <Link
                  href={buildBookingHref("Sorèze", "Carcassonne")}
                  className="inline-flex justify-center rounded-full bg-amber-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-amber-400"
                >
                  Réserver
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

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
    </section>
  );
}