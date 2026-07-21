import type { Metadata } from "next";
import Link from "next/link";
import { buildSeoMetadata } from "../lib/seo";
import { transfers } from "@/app/data/transfert";

export const metadata: Metadata = buildSeoMetadata({
  title: "Nos transferts | Chauffeur privé Toulouse-Blagnac et Matabiau vers 13 destinations",
  description:
    "Découvrez la liste complète des transferts privés depuis Toulouse-Blagnac et la gare Matabiau vers Castres, Albi, Lavaur, Revel, Sorèze, Saint-Ferréol, Carcassonne, Castelnaudary, Montauban, Saint-Nauphary, Moissac, Castelsarrasin et Sorèze ↔ Carcassonne.",
  path: "/nos-transferts",
  keywords: [
    "transfert aéroport Toulouse",
    "transfert gare Matabiau",
    "chauffeur privé Castres",
    "chauffeur privé Albi",
    "chauffeur privé Lavaur",
    "chauffeur privé Revel",
    "chauffeur privé Mazamet",
    "chauffeur privé Toulouse",
  ],
});

export default function NosTransfertsPage() {
  const airport = transfers.filter((item) => item.origin === "aeroport");
  const station = transfers.filter((item) => item.origin === "gare");
  const special = transfers.filter((item) => item.origin === "special");
  const totalTransfers = transfers.length;

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Nos transferts</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Toutes les destinations disponibles</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Consultez la liste complète des {totalTransfers} liaisons privées proposées par Toulouse Tarn Transfert pour
          vos trajets vers Castres, Albi, Lavaur, Revel, Sorèze, Saint-Ferréol, Carcassonne, Castelnaudary, Montauban,
          Moissac, Castelsarrasin et Sorèze ↔ Carcassonne.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 sm:px-8 lg:grid-cols-2 lg:px-10">
        <article>
          <h2 className="text-2xl font-bold text-amber-300">Depuis l&apos;aéroport Toulouse-Blagnac</h2>
          <div className="mt-6 space-y-4">
            {airport.map((item) => (
              <Link
                key={item.slug}
                href={`/transfert/${item.slug}`}
                className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-300 hover:bg-white/10"
              >
                <p className="text-lg font-semibold">{item.depart} -&gt; {item.arrivee}</p>
                <p className="mt-2 text-sm text-slate-300">Des {item.prix} EUR • {item.temps}</p>
              </Link>
            ))}
          </div>
        </article>

        <article>
          <h2 className="text-2xl font-bold text-amber-300">Depuis la gare Matabiau</h2>
          <div className="mt-6 space-y-4">
            {station.map((item) => (
              <Link
                key={item.slug}
                href={`/transfert/${item.slug}`}
                className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-300 hover:bg-white/10"
              >
                <p className="text-lg font-semibold">{item.depart} -&gt; {item.arrivee}</p>
                <p className="mt-2 text-sm text-slate-300">Des {item.prix} EUR • {item.temps}</p>
              </Link>
            ))}
          </div>
        </article>

        {special.length ? (
          <article className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-amber-300">Liaisons spéciales</h2>
            <div className="mt-6 space-y-4">
              {special.map((item) => (
                <Link
                  key={item.slug}
                  href={`/transfert/${item.slug}`}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-amber-300 hover:bg-white/10"
                >
                  <p className="text-lg font-semibold">
                    {item.depart} -&gt; {item.arrivee}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">Des {item.prix} € TTC • {item.temps}</p>
                </Link>
              ))}
            </div>
          </article>
        ) : null}
      </section>
    </main>
  );
}
