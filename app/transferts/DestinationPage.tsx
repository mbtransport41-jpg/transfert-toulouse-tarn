import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOtherTransfers, getTransferBySlug } from "@/app/data/transfert";
import { siteUrl } from "@/app/lib/seo";
import {
  destinationPageSlugs,
  getDestinationPageConfig,
  type DestinationSlug,
} from "./destination-page-data";

function buildNarrative(city: string, region: string, localContext: string, highlights: string[]) {
  return [
    `Pour un chauffeur privé à ${city}, l'attente principale est simple : obtenir un trajet fiable, lisible et confortable, sans perdre de temps à comparer des offres imprécises. Cette page sert précisément à cela. Elle centralise les repères utiles pour réserver un VTC à ${city}, comprendre le positionnement premium du service et identifier rapidement le bon trajet selon votre point de départ. L'objectif n'est pas seulement d'afficher un prix, mais de donner un cadre clair à votre décision de réservation, qu'il s'agisse d'un départ professionnel, d'un retour tardif ou d'un déplacement familial vers ${city} et ses environs dans le ${region}.`,
    `Le service est pensé pour répondre aux intentions de recherche les plus fréquentes autour de ${city} : chauffeur privé ${city}, VTC ${city}, taxi alternatif ${city}, transport privé ${city}, transfert aéroport Toulouse ${city} et transfert gare Toulouse ${city}. Cette combinaison permet de capter des besoins différents avec une seule promesse de valeur : ponctualité, discrétion, véhicule haut de gamme et prix annoncé avant le départ. Pour l'utilisateur, cela signifie un parcours simple. Pour Google, cela renforce la pertinence locale autour de ${city}, du ${region} et des requêtes liées à Toulouse.`,
    `Sur le terrain, ${localContext} Les points d'intérêt comme ${highlights.join(", ")} donnent de la matière à un contenu local utile, sans dupliquer mécaniquement la même page d'une ville à l'autre. C'est important pour le référencement, mais aussi pour la lecture humaine. Un visiteur qui arrive sur cette page doit comprendre immédiatement qu'il peut réserver un transfert adapté à son contexte, que ce soit pour rejoindre une adresse précise, préparer une correspondance ou planifier un retour dans de bonnes conditions.`,
    `La recherche d'un chauffeur privé à ${city} est souvent liée à une exigence de confort. Après un vol, après un train ou après une journée dense, le besoin n'est pas seulement de "se déplacer" ; il s'agit de gagner du temps, de préserver son énergie et de sécuriser l'arrivée. C'est pourquoi les transferts depuis Toulouse-Blagnac et la gare Matabiau restent au cœur de cette page. Les deux options sont mises en avant avec leurs tarifs, leurs durées et leurs informations de trajet afin que chacun puisse choisir le point de départ le plus pertinent.`,
    `Le positionnement local reste également essentiel. Un trajet vers ${city} peut concerner un rendez-vous d'affaires, une visite touristique, une navette hôtelière ou un déplacement récurrent. Dans chacun de ces cas, l'utilisateur attend un service homogène, une réservation rapide et une transparence totale sur le prix. Cette page s'inscrit donc dans une logique de conversion SEO : elle répond à la requête, rassure sur la qualité du service, présente les trajets disponibles et oriente vers les autres pages utiles du site.`,
    `Enfin, cette destination n'est pas isolée. En naviguant vers les autres pages du site, vous pouvez comparer les destinations voisines, consulter la liste complète des transferts et retrouver les informations pratiques sur les tarifs, les services ou le contact. Cette maillage interne aide l'utilisateur à explorer le site de façon logique et renforce aussi l'autorité sémantique de chaque page autour de ${city}, Toulouse et de l'Occitanie.`,
  ];
}

function buildStructuredData(slug: DestinationSlug) {
  const config = getDestinationPageConfig(slug);
  if (!config) return null;

  const airportTransfer = getTransferBySlug(config.airportTransferSlug);
  const stationTransfer = getTransferBySlug(config.stationTransferSlug);

  const startingPrice = Math.min(airportTransfer?.prix ?? Number.POSITIVE_INFINITY, stationTransfer?.prix ?? Number.POSITIVE_INFINITY);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}#business`,
        name: "Toulouse Tarn Transfert",
        url: siteUrl,
        telephone: "+33667711174",
        areaServed: ["Tarn", "Haute-Garonne", "Tarn-et-Garonne", "Aude", "Occitanie"],
      },
      {
        "@type": "Service",
        name: `Chauffeur privé à ${config.city}`,
        serviceType: "Chauffeur privé premium",
        description: config.metaDescription,
        provider: {
          "@id": `${siteUrl}#business`,
        },
        areaServed: config.city,
        url: `${siteUrl}/transferts/${config.slug}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: Number.isFinite(startingPrice) ? startingPrice : undefined,
          availability: "https://schema.org/InStock",
          url: `${siteUrl}/transferts/${config.slug}`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: config.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export default function DestinationPage({ slug }: { slug: DestinationSlug }) {
  const config = getDestinationPageConfig(slug);

  if (!config) {
    notFound();
  }

  const airportTransfer = getTransferBySlug(config.airportTransferSlug);
  const stationTransfer = getTransferBySlug(config.stationTransferSlug);
  const relatedDestinations = config.relatedSlugs
    .map((item) => getDestinationPageConfig(item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const narrative = buildNarrative(config.city, config.region, config.localContext, config.localHighlights);
  const structuredData = buildStructuredData(config.slug);

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full sm:h-[540px]">
          <Image
            src={config.image}
            alt={config.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-10 sm:px-8 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">Destination SEO</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl">
            Chauffeur privé à {config.city}
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
            {config.metaDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-black">
            <span className="rounded-full bg-amber-400 px-4 py-2">Chauffeur privé {config.city}</span>
            <span className="rounded-full bg-white px-4 py-2">VTC {config.city}</span>
            <span className="rounded-full bg-white px-4 py-2">Transfert aéroport Toulouse + {config.city}</span>
            <span className="rounded-full bg-white px-4 py-2">Transfert gare Toulouse + {config.city}</span>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-900 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Un service de chauffeur privé pensé pour {config.city}</h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">
            {narrative.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Les deux trajets disponibles vers {config.city}</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {airportTransfer ? (
              <Link
                href={`/transfert/${airportTransfer.slug}`}
                className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm transition hover:border-amber-300 hover:bg-amber-50"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Aéroport</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{airportTransfer.depart} -&gt; {config.city}</h3>
                <p className="mt-3 text-slate-700">
                  Tarif fixe de {airportTransfer.prix} EUR, durée moyenne {airportTransfer.temps} et distance d'environ {airportTransfer.distanceKm} km.
                </p>
                <p className="mt-4 text-sm font-semibold text-amber-700">Voir la page de réservation dédiée</p>
              </Link>
            ) : null}

            {stationTransfer ? (
              <Link
                href={`/transfert/${stationTransfer.slug}`}
                className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm transition hover:border-amber-300 hover:bg-amber-50"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Gare</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-900">{stationTransfer.depart} -&gt; {config.city}</h3>
                <p className="mt-3 text-slate-700">
                  Tarif fixe de {stationTransfer.prix} EUR, durée moyenne {stationTransfer.temps} et distance d'environ {stationTransfer.distanceKm} km.
                </p>
                <p className="mt-4 text-sm font-semibold text-amber-700">Voir la page de réservation dédiée</p>
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Pourquoi choisir ce transfert privé</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: `Chauffeur privé ${config.city}`,
                text: `Un service direct, discret et fiable pour tous vos déplacements vers ${config.city} et les communes voisines.`,
              },
              {
                title: `VTC ${config.city}`,
                text: `Une alternative premium au taxi classique, avec un tarif connu à l'avance et un suivi de trajet soigné.`,
              },
              {
                title: `Transport privé en Occitanie`,
                text: `Une solution adaptée aux besoins pro, familiaux et touristiques entre Toulouse, le ${config.region} et l'ensemble de la région.`,
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Un contenu utile pour les recherches locales</h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">
            {narrative.slice(2, 5).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Autres pages utiles</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "Nos transferts", href: "/nos-transferts" },
              { label: "Nos services", href: "/nos-services" },
              { label: "Tarifs", href: "/tarifs" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-800 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <h3 className="text-lg font-semibold">{item.label}</h3>
                <p className="mt-2 text-sm text-slate-600">Accéder à la page {item.label.toLowerCase()}.</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {relatedDestinations.map((item) => (
              <Link
                key={item.slug}
                href={`/transferts/${item.slug}`}
                className="rounded-2xl border border-amber-200 bg-white p-5 text-slate-800 transition hover:border-amber-300 hover:bg-amber-50"
              >
                <h3 className="text-lg font-semibold text-slate-900">Chauffeur privé à {item.city}</h3>
                <p className="mt-2 text-sm text-slate-600">Découvrir la page destination associée pour {item.city}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Questions fréquentes sur {config.city}</h2>
          <div className="mt-8 space-y-4">
            {config.faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-800">
                <summary className="cursor-pointer font-semibold">{item.question}</summary>
                <p className="mt-3 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Réserver un chauffeur privé à {config.city}</h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">
            {narrative.slice(5).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {structuredData ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /> : null}
    </main>
  );
}
