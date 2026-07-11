export type FaqItem = {
  question: string;
  answer: string;
};

export type Transfer = {
  id: string;
  slug: string;
  origin: "aeroport" | "gare";
  depart: string;
  arrivee: "Castres" | "Albi" | "Lavaur" | "Revel" | "Mazamet";
  prix: number;
  temps: string;
  distanceKm: number;
  image: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  seoParagraphs: string[];
  faq: FaqItem[];
};

const airport = "Aeroport Toulouse-Blagnac";
const station = "Gare Toulouse-Matabiau";

function buildSeoParagraphs(
  depart: string,
  city: string,
  prix: number,
  temps: string,
  distanceKm: number
): string[] {
  return [
    `Le transfert ${depart} vers ${city} avec Toulouse Tarn Transfer est pense pour les voyageurs qui veulent un service premium, fiable et parfaitement organise. Notre promesse est simple: un chauffeur prive ponctuel, un vehicule haut de gamme propre et confortable, et un tarif fixe annonce a l'avance. Vous evitez les files d'attente, les incertitudes de disponibilite et les mauvaises surprises tarifaires. En reservant votre trajet vers ${city}, vous choisissez un accompagnement sur mesure avec une prise en charge fluide, une communication claire et une experience qui reste constante du debut a la fin.`,
    `Pour ce trajet vers ${city}, le prix de reference est de ${prix} EUR, avec une duree moyenne de ${temps} pour environ ${distanceKm} km selon la circulation. Nous avons construit notre offre pour donner de la visibilite des la reservation: vous connaissez le cout, vous connaissez le niveau de service, et vous connaissez le type de vehicule. Ce positionnement premium est ideal pour les deplacements professionnels, les retours d'aeroport tardifs, les trajets familiaux et les rendez-vous importants ou la ponctualite n'est pas negociable.`,
    `Notre organisation operationnelle repose sur l'anticipation. Quand votre depart est depuis ${depart}, nous planifions la mission avec une marge de securite, puis nous ajustons si necessaire en fonction du contexte du jour. Pour les arrivees aeriennes et ferroviaires, le suivi est effectue en temps reel afin de synchroniser la prise en charge au plus juste. Cela permet de reduire le stress, d'eviter les attentes inutiles et de garantir un depart vers ${city} dans les meilleures conditions.`,
    `Le confort a bord fait partie des standards Toulouse Tarn Transfer. Vous profitez d'un habitacle calme, climatise, avec eau, chargeurs et assistance bagages. Cette qualite de service est essentielle quand on parcourt la liaison Toulouse - ${city}, notamment apres un vol, un train ou une journee de travail chargee. Notre objectif est de transformer un simple transport en experience premium: accueil courtois, conduite souple, discretion et sens du detail a chaque etape du trajet.`,
    `Sur la partie securite et fiabilite, nous appliquons des procedures strictes: verification des informations de course, confirmation de prise en charge, communication proactive et conduite adaptee. Ce cadre professionnel est la raison pour laquelle de nombreux clients choisissent Toulouse Tarn Transfer pour leurs transferts recurrents vers ${city}. L'engagement est le meme sur toutes les courses: ponctualite, transparence, service humain et execution irreprochable.`,
    `La flexibilite de reservation constitue un autre avantage fort. Vous pouvez reserver a l'avance pour verrouiller votre organisation, ou planifier un trajet en derniere minute selon disponibilite. Notre service est accessible 24h/24 et 7j/7, avec annulation gratuite jusqu'a 2 heures avant le depart. Cette souplesse est particulierement utile pour les voyageurs qui se deplacent regulierement entre Toulouse et ${city}, ou pour les situations ou le planning change rapidement.`,
    `Cote paiement, nous conservons une approche simple et securisee: moyens de paiement modernes, confirmation claire et suivi de reservation precis. Le trajet ${depart} vers ${city} est traite comme une prestation complete, sans cout cache. Vous avez ainsi la tranquillite de savoir exactement ce que vous payez et ce qui est inclus. Pour une clientele business comme pour une clientele loisir, cette lisibilite est un facteur de confiance majeur lors du choix d'un chauffeur prive premium.`,
    `Enfin, notre service est pense pour creer une relation durable avec nos clients. Au-dela du transfert ponctuel vers ${city}, nous cherchons a devenir votre partenaire mobilite entre Toulouse et le Tarn. Qualite constante, service sur mesure et execution professionnelle font la difference sur le long terme. Si vous recherchez une solution haut de gamme, fluide et orientee resultat pour vos deplacements depuis ${depart}, Toulouse Tarn Transfer est la reference locale a privilegier.`
  ];
}

function buildFaq(depart: string, city: string, prix: number): FaqItem[] {
  return [
    {
      question: `Le chauffeur attend-il en cas de retard sur ${depart} ?`,
      answer:
        "Oui. Nous suivons les horaires en temps reel et ajustons automatiquement la prise en charge en cas de retard annonce.",
    },
    {
      question: `Le prix de ${prix} EUR vers ${city} est-il fixe ?`,
      answer:
        "Oui, le tarif est fixe au moment de la reservation pour ce trajet. Aucun supplement lie au trafic n'est ajoute.",
    },
    {
      question: "Puis-je reserver la veille ou le jour meme ?",
      answer:
        "Oui, selon disponibilite. Nous conseillons de reserver au plus tot, mais nous traitons aussi les demandes de derniere minute.",
    },
    {
      question: "Acceptez-vous le paiement par carte bancaire ?",
      answer:
        "Oui, le paiement CB est accepte. Vous recevez une confirmation claire de votre reservation et de votre reglement.",
    },
  ];
}

const baseTransfers: Omit<Transfer, "seoParagraphs" | "faq">[] = [
  {
    id: "airport-castres",
    slug: "aeroport-toulouse-castres",
    origin: "aeroport",
    depart: airport,
    arrivee: "Castres",
    prix: 119,
    temps: "1h20",
    distanceKm: 80,
    image: "/Castres.png",
    title: "Aeroport Toulouse -> Castres | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Aeroport Toulouse vers Castres. Chauffeur prive, tarif fixe 119 EUR, reservation 24h/24.",
    keywords: [
      "aeroport toulouse castres",
      "chauffeur prive castres",
      "transfert toulouse castres",
      "vtc castres",
    ],
    intro:
      "Toulouse Tarn Transfer assure votre transfert premium depuis l'Aeroport Toulouse-Blagnac vers Castres avec un chauffeur professionnel, un vehicule haut de gamme et un tarif fixe.",
  },
  {
    id: "airport-albi",
    slug: "aeroport-toulouse-albi",
    origin: "aeroport",
    depart: airport,
    arrivee: "Albi",
    prix: 129,
    temps: "1h15",
    distanceKm: 90,
    image: "/photo albi.png",
    title: "Aeroport Toulouse -> Albi | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Aeroport Toulouse vers Albi. Chauffeur prive, tarif fixe 129 EUR, reservation 24h/24.",
    keywords: ["aeroport toulouse albi", "chauffeur prive albi", "transfert toulouse albi", "vtc albi"],
    intro:
      "Voyagez sereinement de l'Aeroport Toulouse-Blagnac vers Albi avec Toulouse Tarn Transfer: ponctualite, confort premium et prix transparent.",
  },
  {
    id: "airport-lavaur",
    slug: "aeroport-toulouse-lavaur",
    origin: "aeroport",
    depart: airport,
    arrivee: "Lavaur",
    prix: 109,
    temps: "55 min",
    distanceKm: 70,
    image: "/lavaur.png",
    title: "Aeroport Toulouse -> Lavaur | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Aeroport Toulouse vers Lavaur. Chauffeur prive, tarif fixe 109 EUR, reservation 24h/24.",
    keywords: [
      "aeroport toulouse lavaur",
      "chauffeur prive lavaur",
      "transfert toulouse lavaur",
      "vtc lavaur",
    ],
    intro:
      "Pour rejoindre Lavaur depuis l'Aeroport Toulouse-Blagnac, profitez d'un service premium avec prise en charge personnalisee et trajet confortable.",
  },
  {
    id: "airport-revel",
    slug: "aeroport-toulouse-revel",
    origin: "aeroport",
    depart: airport,
    arrivee: "Revel",
    prix: 109,
    temps: "1h",
    distanceKm: 55,
    image: "/revel.png",
    title: "Aeroport Toulouse -> Revel | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Aeroport Toulouse vers Revel. Chauffeur prive, tarif fixe 109 EUR, reservation 24h/24.",
    keywords: ["aeroport toulouse revel", "chauffeur prive revel", "transfert toulouse revel", "vtc revel"],
    intro:
      "Toulouse Tarn Transfer vous accompagne vers Revel depuis l'Aeroport Toulouse-Blagnac avec un chauffeur ponctuel et un service haut de gamme.",
  },
  {
    id: "airport-mazamet",
    slug: "aeroport-toulouse-mazamet",
    origin: "aeroport",
    depart: airport,
    arrivee: "Mazamet",
    prix: 129,
    temps: "1h35",
    distanceKm: 105,
    image: "/photo mazamet.png",
    title: "Aeroport Toulouse -> Mazamet | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Aeroport Toulouse vers Mazamet. Chauffeur prive, tarif fixe 129 EUR, reservation 24h/24.",
    keywords: [
      "aeroport toulouse mazamet",
      "chauffeur prive mazamet",
      "transfert toulouse mazamet",
      "vtc mazamet",
    ],
    intro:
      "Rejoignez Mazamet depuis l'Aeroport Toulouse-Blagnac avec une prestation premium: vehicule confortable, chauffeur discret et organisation fiable.",
  },
  {
    id: "station-castres",
    slug: "gare-matabiau-castres",
    origin: "gare",
    depart: station,
    arrivee: "Castres",
    prix: 109,
    temps: "1h15",
    distanceKm: 78,
    image: "/Castres.png",
    title: "Gare Matabiau -> Castres | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Gare Matabiau vers Castres. Chauffeur prive, tarif fixe 109 EUR, reservation 24h/24.",
    keywords: [
      "gare matabiau castres",
      "chauffeur prive castres",
      "transfert toulouse castres",
      "vtc castres",
    ],
    intro:
      "Depuis la Gare Toulouse-Matabiau, Toulouse Tarn Transfer organise votre transfert vers Castres avec ponctualite, confort et prix fixe.",
  },
  {
    id: "station-albi",
    slug: "gare-matabiau-albi",
    origin: "gare",
    depart: station,
    arrivee: "Albi",
    prix: 119,
    temps: "1h10",
    distanceKm: 88,
    image: "/photo albi.png",
    title: "Gare Matabiau -> Albi | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Gare Matabiau vers Albi. Chauffeur prive, tarif fixe 119 EUR, reservation 24h/24.",
    keywords: ["gare matabiau albi", "chauffeur prive albi", "transfert toulouse albi", "vtc albi"],
    intro:
      "Choisissez un transfert premium entre la Gare Toulouse-Matabiau et Albi avec un chauffeur prive professionnel et un accompagnement personnalise.",
  },
  {
    id: "station-lavaur",
    slug: "gare-matabiau-lavaur",
    origin: "gare",
    depart: station,
    arrivee: "Lavaur",
    prix: 99,
    temps: "50 min",
    distanceKm: 62,
    image: "/lavaur.png",
    title: "Gare Matabiau -> Lavaur | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Gare Matabiau vers Lavaur. Chauffeur prive, tarif fixe 99 EUR, reservation 24h/24.",
    keywords: [
      "gare matabiau lavaur",
      "chauffeur prive lavaur",
      "transfert toulouse lavaur",
      "vtc lavaur",
    ],
    intro:
      "Depuis la Gare Toulouse-Matabiau, partez vers Lavaur dans les meilleures conditions avec un chauffeur prive fiable et un tarif transparent.",
  },
  {
    id: "station-revel",
    slug: "gare-matabiau-revel",
    origin: "gare",
    depart: station,
    arrivee: "Revel",
    prix: 99,
    temps: "55 min",
    distanceKm: 58,
    image: "/revel.png",
    title: "Gare Matabiau -> Revel | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Gare Matabiau vers Revel. Chauffeur prive, tarif fixe 99 EUR, reservation 24h/24.",
    keywords: [
      "gare matabiau revel",
      "chauffeur prive revel",
      "transfert toulouse revel",
      "vtc revel",
    ],
    intro:
      "Toulouse Tarn Transfer vous propose un trajet premium depuis la Gare Toulouse-Matabiau vers Revel, avec un service regulier et haut de gamme.",
  },
  {
    id: "station-mazamet",
    slug: "gare-matabiau-mazamet",
    origin: "gare",
    depart: station,
    arrivee: "Mazamet",
    prix: 119,
    temps: "1h20",
    distanceKm: 100,
    image: "/photo mazamet.png",
    title: "Gare Matabiau -> Mazamet | Chauffeur prive TTT",
    metaDescription:
      "Transfert premium Gare Matabiau vers Mazamet. Chauffeur prive, tarif fixe 119 EUR, reservation 24h/24.",
    keywords: [
      "gare matabiau mazamet",
      "chauffeur prive mazamet",
      "transfert toulouse mazamet",
      "vtc mazamet",
    ],
    intro:
      "Rejoignez Mazamet depuis la Gare Toulouse-Matabiau avec une solution premium orientee ponctualite, confort et serenite.",
  },
];

export const transfers: Transfer[] = baseTransfers.map((item) => ({
  ...item,
  seoParagraphs: buildSeoParagraphs(item.depart, item.arrivee, item.prix, item.temps, item.distanceKm),
  faq: buildFaq(item.depart, item.arrivee, item.prix),
}));

export function getTransferBySlug(slug: string): Transfer | undefined {
  return transfers.find((transfer) => transfer.slug === slug);
}

export function getOtherTransfers(slug: string): Transfer[] {
  return transfers.filter((transfer) => transfer.slug !== slug);
}
