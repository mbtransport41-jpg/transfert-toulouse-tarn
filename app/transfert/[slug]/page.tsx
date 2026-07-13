import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BookingForm from "@/app/components/BookingForm";
import { getOtherTransfers, getTransferBySlug, transfers } from "@/app/data/transfert";
import { buildSeoMetadata } from "@/app/lib/seo";

type Params = Promise<{ slug: string }>;

const siteUrl = "https://toulouse-tarn-transfer.fr";

export async function generateStaticParams() {
  return transfers.map((transfer) => ({ slug: transfer.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const transfer = getTransferBySlug(slug);

  if (!transfer) {
    return buildSeoMetadata({
      title: "Trajet introuvable | Toulouse Tarn Transfert",
      description: "Cette page de transfert n'existe pas.",
      path: "/transfert/introuvable",
    });
  }

  return buildSeoMetadata({
    title: transfer.title,
    description: transfer.metaDescription,
    path: `/transfert/${transfer.slug}`,
    keywords: transfer.keywords,
    image: transfer.image,
    imageAlt: `${transfer.depart} vers ${transfer.arrivee}`,
  });
}

function buildServiceSchema(slug: string) {
  const transfer = getTransferBySlug(slug);
  if (!transfer) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${transfer.depart} vers ${transfer.arrivee}`,
    description: transfer.metaDescription,
    areaServed: "Tarn, Occitanie",
    provider: {
      "@type": "LocalBusiness",
      name: "Toulouse Tarn Transfert",
      telephone: "+33667711174",
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: transfer.prix,
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/transfert/${transfer.slug}`,
    },
    serviceType: "Chauffeur privé premium",
  };
}

function buildFaqSchema(slug: string) {
  const transfer = getTransferBySlug(slug);
  if (!transfer) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: transfer.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export default async function TransferPage({ params }: { params: Params }) {
  const { slug } = await params;
  const transfer = getTransferBySlug(slug);

  if (!transfer) {
    notFound();
  }

  const internalLinks = getOtherTransfers(transfer.slug);
  const serviceSchema = buildServiceSchema(transfer.slug);
  const faqSchema = buildFaqSchema(transfer.slug);

  return (
    <>
      <main className="bg-black text-white">
        <section className="relative overflow-hidden">
          <div className="relative h-[420px] w-full sm:h-[520px]">
            <Image
              src={transfer.image}
              alt={`${transfer.depart} vers ${transfer.arrivee}`}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
          </div>

          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-10 sm:px-8 lg:px-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
              Transfert premium
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-5xl">
              {transfer.depart} -&gt; {transfer.arrivee}
            </h1>
            <p className="mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">{transfer.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-black">
              <span className="rounded-full bg-amber-400 px-4 py-2">Des {transfer.prix} EUR</span>
              <span className="rounded-full bg-white px-4 py-2">Durée moyenne : {transfer.temps}</span>
              <span className="rounded-full bg-white px-4 py-2">Distance : {transfer.distanceKm} km</span>
            </div>
            <Link
              href={`/#booking?destination=${encodeURIComponent(transfer.arrivee)}`}
              className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-400"
            >
              Réserver
            </Link>
          </div>
        </section>

        <section className="bg-white px-6 py-16 text-slate-900 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Pourquoi choisir Toulouse Tarn Transfert</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Tarifs fixes et transparents",
                "Chauffeur professionnel",
                "Véhicule haut de gamme",
                "Suivi des vols et trains",
                "Accueil personnalisé",
                "Paiement sécurisé",
                "Disponible 24h/24",
                "Annulation gratuite jusqu'à 2h avant",
              ].map((item) => (
                <article
                  key={item}
                  className="rounded-2xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">TTT</p>
                  <p className="mt-2 font-medium text-slate-800">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mt-8 space-y-6 text-base leading-8 text-slate-700">
              {transfer.seoParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Tarif</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">Prix de ce trajet</h2>
              <p className="mt-5 text-5xl font-bold text-amber-600">{transfer.prix} EUR</p>
              <p className="mt-3 text-slate-600">Tarif fixe annoncé à la réservation.</p>
            </article>
            <article className="rounded-3xl border border-amber-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Durée</p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">Temps de trajet moyen</h2>
              <p className="mt-5 text-5xl font-bold text-amber-600">{transfer.temps}</p>
              <p className="mt-3 text-slate-600">Distance moyenne : {transfer.distanceKm} km.</p>
            </article>
          </div>
        </section>

        <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">FAQ {transfer.arrivee}</h2>
            <div className="mt-8 space-y-4">
              {transfer.faq.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 p-6 text-slate-800">
                  <summary className="cursor-pointer font-semibold">{item.question}</summary>
                  <p className="mt-3 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Autres destinations</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {internalLinks.map((item) => (
                <Link
                  key={item.slug}
                  href={`/transfert/${item.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-800 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                    {item.origin === "aeroport" ? "Aéroport" : "Gare"}
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    {item.depart} -&gt; {item.arrivee}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">Des {item.prix} EUR</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="bg-white px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <Suspense fallback={null}>
              <BookingForm />
            </Suspense>
          </div>
        </section>
      </main>

      {serviceSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      ) : null}
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}
    </>
  );
}
