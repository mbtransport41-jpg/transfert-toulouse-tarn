import type { Metadata } from "next";
import { buildSeoMetadata } from "@/app/lib/seo";
import type { FaqItem } from "@/app/data/transfert";

export type DestinationSlug =
  | "albi"
  | "castres"
  | "lavaur"
  | "mazamet"
  | "revel"
  | "saint-ferreol"
  | "castelnaudary"
  | "montauban"
  | "moissac"
  | "castelsarrasin";

export type DestinationPageConfig = {
  slug: DestinationSlug;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  airportTransferSlug: string;
  stationTransferSlug: string;
  localContext: string;
  localHighlights: string[];
  relatedSlugs: DestinationSlug[];
  faq: FaqItem[];
};

const genericFaq = (city: string, airportPrice: number, stationPrice: number): FaqItem[] => [
  {
    question: `Peut-on réserver un chauffeur privé pour ${city} le jour même ?`,
    answer:
      "Oui, selon disponibilité. Nous acceptons les demandes anticipées comme les trajets urgents, avec confirmation rapide et prise en charge organisée.",
  },
  {
    question: `Le tarif vers ${city} est-il fixe ?`,
    answer: `Oui, le prix est communiqué à l'avance et reste fixe au moment de la réservation. Pour référence, le trajet aéroport est affiché dès ${airportPrice} EUR et le trajet gare dès ${stationPrice} EUR selon la liaison choisie.`,
  },
  {
    question: `Le service couvre-t-il aussi les départs depuis Toulouse vers ${city} ?`,
    answer:
      "Oui. Les transferts sont disponibles dans les deux sens, avec chauffeur professionnel, confort premium et assistance bagages si nécessaire.",
  },
];

const destinationPagesData = {
  albi: {
    slug: "albi",
    city: "Albi",
    region: "Tarn",
    metaTitle: "Chauffeur privé Albi | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Réservez un chauffeur privé à Albi depuis Toulouse-Blagnac ou la gare Matabiau. Prix fixes, confort premium, prise en charge fiable et réservation simple 24h/24.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Albi",
      "VTC Albi",
      "taxi alternatif Albi",
      "transport privé Albi",
      "chauffeur privé Tarn",
    ],
    image: "/photo albi.png",
    imageAlt: "Chauffeur privé à Albi avec transfert premium depuis Toulouse",
    airportTransferSlug: "aeroport-toulouse-albi",
    stationTransferSlug: "gare-matabiau-albi",
    localContext:
      "Albi concentre des trajets touristiques, familiaux et professionnels autour de la Cité épiscopale, du centre historique et des axes qui relient Toulouse au Tarn.",
    localHighlights: ["Cité épiscopale", "centre historique", "liaison Toulouse-Albi"],
    relatedSlugs: ["castres", "lavaur", "mazamet", "revel"],
    faq: genericFaq("Albi", 129, 119),
  },
  castres: {
    slug: "castres",
    city: "Castres",
    region: "Tarn",
    metaTitle: "Chauffeur privé Castres | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Réservez votre chauffeur privé à Castres depuis Toulouse-Blagnac ou Matabiau avec tarif fixe, service haut de gamme et disponibilité 24h/24.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Castres",
      "VTC Castres",
      "taxi alternatif Castres",
      "transport privé Castres",
      "chauffeur privé Tarn",
    ],
    image: "/Castres.png",
    imageAlt: "Chauffeur privé à Castres pour transfert depuis Toulouse",
    airportTransferSlug: "aeroport-toulouse-castres",
    stationTransferSlug: "gare-matabiau-castres",
    localContext:
      "Castres reste une destination fréquente pour les trajets d'affaires, les retours vers le centre-ville et les correspondances vers les communes du sud du Tarn.",
    localHighlights: ["centre-ville de Castres", "Sud du Tarn", "correspondances professionnelles"],
    relatedSlugs: ["albi", "mazamet", "revel", "lavaur"],
    faq: genericFaq("Castres", 119, 109),
  },
  lavaur: {
    slug: "lavaur",
    city: "Lavaur",
    region: "Tarn",
    metaTitle: "Chauffeur privé Lavaur | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Chauffeur privé à Lavaur depuis Toulouse-Blagnac ou Matabiau : tarifs fixes, véhicule premium, disponibilité 24h/24 et réservation rapide en ligne.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Lavaur",
      "VTC Lavaur",
      "taxi alternatif Lavaur",
      "transport privé Lavaur",
      "chauffeur privé Occitanie",
    ],
    image: "/lavaur.png",
    imageAlt: "Transfert chauffeur privé vers Lavaur au départ de Toulouse",
    airportTransferSlug: "aeroport-toulouse-lavaur",
    stationTransferSlug: "gare-matabiau-lavaur",
    localContext:
      "Lavaur attire des trajets domicile-travail, des déplacements familiaux et des liaisons régulières vers le Lauragais et le cœur du Tarn.",
    localHighlights: ["Lauragais", "cœur du Tarn", "trajets domicile-travail"],
    relatedSlugs: ["revel", "castres", "albi", "castelnaudary"],
    faq: genericFaq("Lavaur", 109, 99),
  },
  mazamet: {
    slug: "mazamet",
    city: "Mazamet",
    region: "Tarn",
    metaTitle: "Chauffeur privé Mazamet | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Réservez un chauffeur privé à Mazamet depuis Toulouse-Blagnac ou Matabiau avec prix fixe, confort premium et suivi de trajet 24h/24.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Mazamet",
      "VTC Mazamet",
      "taxi alternatif Mazamet",
      "transport privé Mazamet",
      "chauffeur privé Tarn",
    ],
    image: "/photo mazamet.png",
    imageAlt: "Chauffeur privé pour Mazamet avec prise en charge depuis Toulouse",
    airportTransferSlug: "aeroport-toulouse-mazamet",
    stationTransferSlug: "gare-matabiau-mazamet",
    localContext:
      "Mazamet se prête bien aux transferts privés vers la Montagne Noire, le centre-ville et les déplacements vers les activités touristiques et professionnelles du secteur.",
    localHighlights: ["Montagne Noire", "centre-ville de Mazamet", "activités touristiques"],
    relatedSlugs: ["revel", "saint-ferreol", "castres", "albi"],
    faq: genericFaq("Mazamet", 129, 119),
  },
  revel: {
    slug: "revel",
    city: "Revel",
    region: "Haute-Garonne",
    metaTitle: "Chauffeur privé Revel | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Voyagez vers Revel avec un chauffeur privé depuis Toulouse-Blagnac ou Matabiau. Tarif fixe, réservation 24h/24, confort premium et service fiable.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Revel",
      "VTC Revel",
      "taxi alternatif Revel",
      "transport privé Revel",
      "chauffeur privé Haute-Garonne",
    ],
    image: "/revel.png",
    imageAlt: "Service de chauffeur privé vers Revel au départ de Toulouse",
    airportTransferSlug: "aeroport-toulouse-revel",
    stationTransferSlug: "gare-matabiau-revel",
    localContext:
      "Revel est un point stratégique pour les trajets vers le bassin de Saint-Ferréol, les communes du Lauragais et les correspondances liées à la Montagne Noire.",
    localHighlights: ["bassin de Saint-Ferréol", "Lauragais", "Montagne Noire"],
    relatedSlugs: ["saint-ferreol", "lavaur", "castelnaudary", "mazamet"],
    faq: genericFaq("Revel", 109, 99),
  },
  "saint-ferreol": {
    slug: "saint-ferreol",
    city: "Saint-Ferréol",
    region: "Haute-Garonne",
    metaTitle: "Chauffeur privé Saint-Ferréol | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Réservez un chauffeur privé à Saint-Ferréol depuis Toulouse-Blagnac ou Matabiau avec prix fixe, service premium et trajet confortable 24h/24.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Saint-Ferréol",
      "VTC Saint-Ferréol",
      "taxi alternatif Saint-Ferréol",
      "transport privé Saint-Ferréol",
      "chauffeur privé Haute-Garonne",
    ],
    image: "/St-ferriol.png",
    imageAlt: "Transfert premium vers Saint-Ferréol depuis Toulouse",
    airportTransferSlug: "aeroport-toulouse-saint-ferreol",
    stationTransferSlug: "gare-matabiau-saint-ferreol",
    localContext:
      "Saint-Ferréol attire des déplacements saisonniers, des visites au lac et des trajets vers le secteur de Revel, Sorèze et les villages du Lauragais.",
    localHighlights: ["lac de Saint-Ferréol", "Revel", "Sorèze"],
    relatedSlugs: ["revel", "lavaur", "castelnaudary", "mazamet"],
    faq: genericFaq("Saint-Ferréol", 119, 109),
  },
  castelnaudary: {
    slug: "castelnaudary",
    city: "Castelnaudary",
    region: "Aude",
    metaTitle: "Chauffeur privé Castelnaudary | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Chauffeur privé à Castelnaudary depuis Toulouse-Blagnac ou Matabiau : prix fixes, confort premium, réservation simple et service fiable.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Castelnaudary",
      "VTC Castelnaudary",
      "taxi alternatif Castelnaudary",
      "transport privé Castelnaudary",
      "chauffeur privé Aude",
    ],
    image: "/Castelnaudary 2.png",
    imageAlt: "Chauffeur privé vers Castelnaudary depuis Toulouse",
    airportTransferSlug: "aeroport-toulouse-castelnaudary",
    stationTransferSlug: "gare-matabiau-castelnaudary",
    localContext:
      "Castelnaudary est une liaison logique pour les trajets professionnels et familiaux vers le Lauragais, le canal du Midi et les axes de l'Aude.",
    localHighlights: ["canal du Midi", "Lauragais", "Aude"],
    relatedSlugs: ["revel", "lavaur", "moissac", "montauban"],
    faq: genericFaq("Castelnaudary", 109, 99),
  },
  montauban: {
    slug: "montauban",
    city: "Montauban",
    region: "Tarn-et-Garonne",
    metaTitle: "Chauffeur privé Montauban | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Réservez votre chauffeur privé à Montauban depuis Toulouse-Blagnac ou Matabiau avec tarif fixe, véhicule premium et disponibilité 24h/24.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Montauban",
      "VTC Montauban",
      "taxi alternatif Montauban",
      "transport privé Montauban",
      "chauffeur privé Tarn-et-Garonne",
    ],
    image: "/Montauban.png",
    imageAlt: "Service de chauffeur privé vers Montauban au départ de Toulouse",
    airportTransferSlug: "aeroport-toulouse-montauban",
    stationTransferSlug: "gare-matabiau-montauban",
    localContext:
      "Montauban est un marché important pour les trajets business, les déplacements vers le centre historique et les connexions avec le Tarn-et-Garonne.",
    localHighlights: ["centre historique de Montauban", "Tarn-et-Garonne", "trajets business"],
    relatedSlugs: ["moissac", "castelsarrasin", "castelnaudary", "albi"],
    faq: genericFaq("Montauban", 99, 89),
  },
  moissac: {
    slug: "moissac",
    city: "Moissac",
    region: "Tarn-et-Garonne",
    metaTitle: "Chauffeur privé Moissac | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Transfert privé à Moissac depuis Toulouse-Blagnac ou Matabiau : chauffeur professionnel, tarifs fixes, service premium et réservation rapide.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Moissac",
      "VTC Moissac",
      "taxi alternatif Moissac",
      "transport privé Moissac",
      "chauffeur privé Tarn-et-Garonne",
    ],
    image: "/Moissac.png",
    imageAlt: "Chauffeur privé pour Moissac avec départ depuis Toulouse",
    airportTransferSlug: "aeroport-toulouse-moissac",
    stationTransferSlug: "gare-matabiau-moissac",
    localContext:
      "Moissac combine des trajets vers le patrimoine, les rendez-vous privés et les liaisons utiles pour le Tarn-et-Garonne et les axes du sud-ouest.",
    localHighlights: ["abbaye Saint-Pierre", "Tarn-et-Garonne", "sud-ouest"],
    relatedSlugs: ["castelsarrasin", "montauban", "castelnaudary", "lavaur"],
    faq: genericFaq("Moissac", 109, 99),
  },
  castelsarrasin: {
    slug: "castelsarrasin",
    city: "Castelsarrasin",
    region: "Tarn-et-Garonne",
    metaTitle: "Chauffeur privé Castelsarrasin | VTC premium depuis Toulouse-Blagnac et Matabiau",
    metaDescription:
      "Réservez un chauffeur privé à Castelsarrasin depuis Toulouse-Blagnac ou Matabiau avec tarif fixe, confort premium et prise en charge fiable.",
    keywords: [
      "chauffeur privé",
      "VTC",
      "transport privé",
      "taxi alternatif",
      "transfert aéroport Toulouse",
      "transfert gare Toulouse",
      "chauffeur privé Castelsarrasin",
      "VTC Castelsarrasin",
      "taxi alternatif Castelsarrasin",
      "transport privé Castelsarrasin",
      "chauffeur privé Tarn-et-Garonne",
    ],
    image: "/Castelsarasin.png",
    imageAlt: "Transfert chauffeur privé vers Castelsarrasin depuis Toulouse",
    airportTransferSlug: "aeroport-toulouse-castelsarrasin",
    stationTransferSlug: "gare-matabiau-castelsarrasin",
    localContext:
      "Castelsarrasin est adapté aux trajets réguliers vers les entreprises locales, les rendez-vous familiaux et les connexions avec Moissac et Montauban.",
    localHighlights: ["Moissac", "Montauban", "entreprises locales"],
    relatedSlugs: ["moissac", "montauban", "castelnaudary", "albi"],
    faq: genericFaq("Castelsarrasin", 109, 99),
  },
} as const;

export const destinationPages: Record<DestinationSlug, DestinationPageConfig> = destinationPagesData as unknown as Record<
  DestinationSlug,
  DestinationPageConfig
>;

export const destinationPageSlugs = Object.keys(destinationPages) as DestinationSlug[];

export function getDestinationPageConfig(slug: string): DestinationPageConfig | undefined {
  return destinationPages[slug as DestinationSlug];
}

export function buildDestinationMetadata(slug: string): Metadata {
  const config = getDestinationPageConfig(slug);

  if (!config) {
    return buildSeoMetadata({
      title: "Destination introuvable | Toulouse Tarn Transfert",
      description: "Cette destination n'existe pas.",
      path: "/transferts/introuvable",
    });
  }

  return buildSeoMetadata({
    title: config.metaTitle,
    description: config.metaDescription,
    path: `/transferts/${config.slug}`,
    keywords: config.keywords,
    image: config.image,
    imageAlt: config.imageAlt,
  });
}
