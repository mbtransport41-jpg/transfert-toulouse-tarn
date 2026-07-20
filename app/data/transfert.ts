export type FaqItem = {
  question: string;
  answer: string;
};

export type Transfer = {
  id: string;
  slug: string;
  origin: "aeroport" | "gare";
  depart: string;
  arrivee:
    | "Castres"
    | "Albi"
    | "Lavaur"
    | "Revel"
    | "Mazamet"
    | "Sorèze"
    | "Saint-Ferréol"
    | "Carcassonne"
    | "Castelnaudary"
    | "Montauban"
    | "Moissac"
    | "Castelsarrasin";
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

const airport = "Aéroport Toulouse-Blagnac";
const station = "Gare Toulouse-Matabiau";

function buildSeoParagraphs(
  depart: string,
  city: string,
  prix: number,
  temps: string,
  distanceKm: number
): string[] {
  return [
    `Le transfert ${depart} vers ${city} avec Toulouse Tarn Transfert est pensé pour les voyageurs qui veulent un service premium, fiable et parfaitement organisé. Notre promesse est simple : un chauffeur privé ponctuel, un véhicule haut de gamme propre et confortable, ainsi qu'un tarif fixe annoncé à l'avance. Vous évitez les files d'attente, les incertitudes de disponibilité et les mauvaises surprises tarifaires. En réservant votre trajet vers ${city}, vous choisissez un accompagnement sur mesure avec une prise en charge fluide, une communication claire et une expérience constante du début à la fin.`,
    `Pour ce trajet vers ${city}, le prix de référence est de ${prix} EUR, avec une durée moyenne de ${temps} pour environ ${distanceKm} km selon la circulation. Nous avons construit notre offre pour donner de la visibilité dès la réservation : vous connaissez le coût, vous connaissez le niveau de service et vous connaissez le type de véhicule. Ce positionnement premium est idéal pour les déplacements professionnels, les retours d'aéroport tardifs, les trajets familiaux et les rendez-vous importants où la ponctualité n'est pas négociable.`,
    `Notre organisation opérationnelle repose sur l'anticipation. Quand votre départ est depuis ${depart}, nous planifions la mission avec une marge de sécurité, puis nous ajustons si nécessaire en fonction du contexte du jour. Pour les arrivées aériennes et ferroviaires, le suivi est effectué en temps réel afin de synchroniser la prise en charge au plus juste. Cela permet de réduire le stress, d'éviter les attentes inutiles et de garantir un départ vers ${city} dans les meilleures conditions.`,
    `Le confort à bord fait partie des standards Toulouse Tarn Transfert. Vous profitez d'un habitacle calme, climatisé, avec eau, chargeurs et assistance bagages. Cette qualité de service est essentielle quand on parcourt la liaison Toulouse - ${city}, notamment après un vol, un train ou une journée de travail chargée. Notre objectif est de transformer un simple transport en expérience premium : accueil courtois, conduite souple, discrétion et sens du détail à chaque étape du trajet.`,
    `Sur la partie sécurité et fiabilité, nous appliquons des procédures strictes : vérification des informations de course, confirmation de prise en charge, communication proactive et conduite adaptée. Ce cadre professionnel est la raison pour laquelle de nombreux clients choisissent Toulouse Tarn Transfert pour leurs transferts récurrents vers ${city}. L'engagement est le même sur toutes les courses : ponctualité, transparence, service humain et exécution irréprochable.`,
    `La flexibilité de réservation constitue un autre avantage fort. Vous pouvez réserver à l'avance pour verrouiller votre organisation, ou planifier un trajet en dernière minute selon disponibilité. Notre service est accessible 24h/24 et 7j/7, avec annulation gratuite jusqu'à 2 heures avant le départ. Cette souplesse est particulièrement utile pour les voyageurs qui se déplacent régulièrement entre Toulouse et ${city}, ou pour les situations où le planning change rapidement.`,
    `Côté paiement, nous conservons une approche simple et sécurisée : moyens de paiement modernes, confirmation claire et suivi de réservation précis. Le trajet ${depart} vers ${city} est traité comme une prestation complète, sans coût caché. Vous avez ainsi la tranquillité de savoir exactement ce que vous payez et ce qui est inclus. Pour une clientèle business comme pour une clientèle loisir, cette lisibilité est un facteur de confiance majeur lors du choix d'un chauffeur privé premium.`,
    `Enfin, notre service est pensé pour créer une relation durable avec nos clients. Au-delà du transfert ponctuel vers ${city}, nous cherchons à devenir votre partenaire mobilité entre Toulouse et le Tarn. Qualité constante, service sur mesure et exécution professionnelle font la différence sur le long terme. Si vous recherchez une solution haut de gamme, fluide et orientée résultat pour vos déplacements depuis ${depart}, Toulouse Tarn Transfert est la référence locale à privilégier.`
  ];
}

function buildFaq(depart: string, city: string, prix: number): FaqItem[] {
  return [
    {
      question: `Le chauffeur attend-il en cas de retard sur ${depart} ?`,
      answer:
        "Oui. Nous suivons les horaires en temps réel et ajustons automatiquement la prise en charge en cas de retard annoncé.",
    },
    {
      question: `Le prix de ${prix} EUR vers ${city} est-il fixe ?`,
      answer:
        "Oui, le tarif est fixe au moment de la réservation pour ce trajet. Aucun supplément lié au trafic n'est ajouté.",
    },
    {
      question: "Puis-je réserver la veille ou le jour même ?",
      answer:
        "Oui, selon disponibilité. Nous conseillons de réserver au plus tôt, mais nous traitons aussi les demandes de dernière minute.",
    },
    {
      question: "Acceptez-vous le paiement par carte bancaire ?",
      answer:
        "Oui, le paiement CB est accepté. Vous recevez une confirmation claire de votre réservation et de votre règlement.",
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
    title: "Chauffeur privé Castres depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Castres depuis l'aéroport Toulouse-Blagnac. Tarif fixe 119 EUR, prise en charge 24h/24 et transport premium vers Castres.",
    keywords: [
      "chauffeur privé Castres",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Toulouse Tarn Transfert assure votre transfert premium depuis l'aéroport Toulouse-Blagnac vers Castres avec un chauffeur professionnel, un véhicule haut de gamme et un tarif fixe.",
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
    title: "Chauffeur privé Albi depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Albi depuis l'aéroport Toulouse-Blagnac. Tarif fixe 129 EUR, transport premium et réservation 24h/24 vers Albi.",
    keywords: [
      "chauffeur privé Albi",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Voyagez sereinement de l'aéroport Toulouse-Blagnac vers Albi avec Toulouse Tarn Transfert : ponctualité, confort premium et prix transparent.",
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
    title: "Chauffeur privé Lavaur depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Lavaur depuis l'aéroport Toulouse-Blagnac. Tarif fixe 109 EUR, transport premium et réservation 24h/24 vers Lavaur.",
    keywords: [
      "chauffeur privé Lavaur",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Pour rejoindre Lavaur depuis l'aéroport Toulouse-Blagnac, profitez d'un service premium avec prise en charge personnalisée et trajet confortable.",
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
    title: "Chauffeur privé Revel depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Revel depuis l'aéroport Toulouse-Blagnac. Tarif fixe 109 EUR, transport premium et réservation 24h/24 vers Revel.",
    keywords: [
      "chauffeur privé Revel",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Toulouse Tarn Transfert vous accompagne vers Revel depuis l'aéroport Toulouse-Blagnac avec un chauffeur ponctuel et un service haut de gamme.",
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
    title: "Chauffeur privé Mazamet depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Mazamet depuis l'aéroport Toulouse-Blagnac. Tarif fixe 129 EUR, transport premium et réservation 24h/24 vers Mazamet.",
    keywords: [
      "chauffeur privé Mazamet",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Rejoignez Mazamet depuis l'aéroport Toulouse-Blagnac avec une prestation premium : véhicule confortable, chauffeur discret et organisation fiable.",
  },
  {
    id: "airport-soreze",
    slug: "aeroport-toulouse-soreze",
    origin: "aeroport",
    depart: airport,
    arrivee: "Sorèze",
    prix: 120,
    temps: "1h05",
    distanceKm: 75,
    image: "/Soreze.png",
    title: "Chauffeur privé Sorèze depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Sorèze depuis l'aéroport Toulouse-Blagnac. Tarif fixe 120 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Sorèze",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Tarn",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Depuis l'aéroport Toulouse-Blagnac, rejoignez Sorèze avec un chauffeur privé premium, ponctuel et un prix fixe annoncé à l'avance.",
  },
  {
    id: "airport-carcassonne",
    slug: "aeroport-toulouse-carcassonne",
    origin: "aeroport",
    depart: airport,
    arrivee: "Carcassonne",
    prix: 156,
    temps: "1h10",
    distanceKm: 95,
    image: "/Carcassonne.png",
    title: "Chauffeur privé Carcassonne depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Carcassonne depuis l'aéroport Toulouse-Blagnac. Tarif fixe 156 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Carcassonne",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Aude",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Pour Carcassonne, profitez d'un transfert premium depuis Toulouse-Blagnac avec un chauffeur privé discret et un service fiable.",
  },
  {
    id: "airport-saint-ferreol",
    slug: "aeroport-toulouse-saint-ferreol",
    origin: "aeroport",
    depart: airport,
    arrivee: "Saint-Ferréol",
    prix: 119,
    temps: "1h05",
    distanceKm: 68,
    image: "/St-ferriol.png",
    title: "Chauffeur privé Saint-Ferréol depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Saint-Ferréol depuis l'aéroport Toulouse-Blagnac. Tarif fixe 119 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Saint-Ferréol",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Rejoignez Saint-Ferréol depuis l'aéroport Toulouse-Blagnac avec un service premium, un chauffeur ponctuel et un tarif fixe transparent.",
  },
  {
    id: "airport-castelnaudary",
    slug: "aeroport-toulouse-castelnaudary",
    origin: "aeroport",
    depart: airport,
    arrivee: "Castelnaudary",
    prix: 109,
    temps: "55 min",
    distanceKm: 63,
    image: "/Castelnaudary 2.png",
    title: "Chauffeur privé Castelnaudary depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Castelnaudary depuis l'aéroport Toulouse-Blagnac. Tarif fixe 109 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Castelnaudary",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Toulouse Tarn Transfert assure votre liaison vers Castelnaudary depuis l'aéroport Toulouse-Blagnac avec confort premium et prise en charge fiable.",
  },
  {
    id: "airport-montauban",
    slug: "aeroport-toulouse-montauban",
    origin: "aeroport",
    depart: airport,
    arrivee: "Montauban",
    prix: 99,
    temps: "45 min",
    distanceKm: 58,
    image: "/Montauban.png",
    title: "Chauffeur privé Montauban depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Montauban depuis l'aéroport Toulouse-Blagnac. Tarif fixe 99 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Montauban",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Depuis l'aéroport Toulouse-Blagnac, voyagez vers Montauban avec un chauffeur privé premium, ponctuel et orienté confort.",
  },
  {
    id: "airport-moissac",
    slug: "aeroport-toulouse-moissac",
    origin: "aeroport",
    depart: airport,
    arrivee: "Moissac",
    prix: 109,
    temps: "1h",
    distanceKm: 76,
    image: "/Moissac.png",
    title: "Chauffeur privé Moissac depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Moissac depuis l'aéroport Toulouse-Blagnac. Tarif fixe 109 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Moissac",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Toulouse Tarn Transfert vous accompagne vers Moissac depuis Toulouse-Blagnac avec une prestation premium, fluide et sécurisée.",
  },
  {
    id: "airport-castelsarrasin",
    slug: "aeroport-toulouse-castelsarrasin",
    origin: "aeroport",
    depart: airport,
    arrivee: "Castelsarrasin",
    prix: 109,
    temps: "55 min",
    distanceKm: 72,
    image: "/Castelsarasin.png",
    title: "Chauffeur privé Castelsarrasin depuis Toulouse-Blagnac | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Castelsarrasin depuis l'aéroport Toulouse-Blagnac. Tarif fixe 109 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Castelsarrasin",
      "transfert aéroport Toulouse",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Pour Castelsarrasin, profitez d'un transfert premium depuis l'aéroport Toulouse-Blagnac avec un chauffeur privé et un tarif fixe.",
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
    title: "Chauffeur privé Castres depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Castres depuis la gare Matabiau. Tarif fixe 109 EUR, prise en charge 24h/24 et transport premium vers Castres.",
    keywords: [
      "chauffeur privé Castres",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Depuis la gare Toulouse-Matabiau, Toulouse Tarn Transfert organise votre transfert vers Castres avec ponctualité, confort et prix fixe.",
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
    title: "Chauffeur privé Albi depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Albi depuis la gare Matabiau. Tarif fixe 119 EUR, prise en charge 24h/24 et transport premium vers Albi.",
    keywords: [
      "chauffeur privé Albi",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Choisissez un transfert premium entre la gare Toulouse-Matabiau et Albi avec un chauffeur privé professionnel et un accompagnement personnalisé.",
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
    title: "Chauffeur privé Lavaur depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Lavaur depuis la gare Matabiau. Tarif fixe 99 EUR, prise en charge 24h/24 et transport premium vers Lavaur.",
    keywords: [
      "chauffeur privé Lavaur",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Depuis la gare Toulouse-Matabiau, partez vers Lavaur dans les meilleures conditions avec un chauffeur privé fiable et un tarif transparent.",
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
    title: "Chauffeur privé Revel depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Revel depuis la gare Matabiau. Tarif fixe 99 EUR, prise en charge 24h/24 et transport premium vers Revel.",
    keywords: [
      "chauffeur privé Revel",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Toulouse Tarn Transfert vous propose un trajet premium depuis la gare Toulouse-Matabiau vers Revel, avec un service régulier et haut de gamme.",
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
    title: "Chauffeur privé Mazamet depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Mazamet depuis la gare Matabiau. Tarif fixe 119 EUR, prise en charge 24h/24 et transport premium vers Mazamet.",
    keywords: [
      "chauffeur privé Mazamet",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur aéroport Toulouse",
    ],
    intro:
      "Rejoignez Mazamet depuis la gare Toulouse-Matabiau avec une solution premium orientée ponctualité, confort et sérénité.",
  },
  {
    id: "station-soreze",
    slug: "gare-matabiau-soreze",
    origin: "gare",
    depart: station,
    arrivee: "Sorèze",
    prix: 114,
    temps: "1h",
    distanceKm: 70,
    image: "/Soreze.png",
    title: "Chauffeur privé Sorèze depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Sorèze depuis la gare Matabiau. Tarif fixe 114 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Sorèze",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Tarn",
      "chauffeur gare Toulouse",
    ],
    intro:
      "Depuis la gare Toulouse-Matabiau, partez vers Sorèze avec un service chauffeur privé premium, confortable et sans surprise tarifaire.",
  },
  {
    id: "station-carcassonne",
    slug: "gare-matabiau-carcassonne",
    origin: "gare",
    depart: station,
    arrivee: "Carcassonne",
    prix: 132,
    temps: "1h05",
    distanceKm: 90,
    image: "/Carcassonne.png",
    title: "Chauffeur privé Carcassonne depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Carcassonne depuis la gare Matabiau. Tarif fixe 132 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Carcassonne",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Aude",
      "chauffeur gare Toulouse",
    ],
    intro:
      "Rejoignez Carcassonne depuis la gare Toulouse-Matabiau avec un chauffeur privé premium, ponctuel et orienté confort.",
  },
  {
    id: "station-saint-ferreol",
    slug: "gare-matabiau-saint-ferreol",
    origin: "gare",
    depart: station,
    arrivee: "Saint-Ferréol",
    prix: 109,
    temps: "1h",
    distanceKm: 64,
    image: "/St-ferriol.png",
    title: "Chauffeur privé Saint-Ferréol depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Saint-Ferréol depuis la gare Matabiau. Tarif fixe 109 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Saint-Ferréol",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur gare Toulouse",
    ],
    intro:
      "Depuis la gare Toulouse-Matabiau, rejoignez Saint-Ferréol avec un chauffeur privé premium et une organisation sans stress.",
  },
  {
    id: "station-castelnaudary",
    slug: "gare-matabiau-castelnaudary",
    origin: "gare",
    depart: station,
    arrivee: "Castelnaudary",
    prix: 99,
    temps: "50 min",
    distanceKm: 58,
    image: "/Castelnaudary 2.png",
    title: "Chauffeur privé Castelnaudary depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Castelnaudary depuis la gare Matabiau. Tarif fixe 99 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Castelnaudary",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur gare Toulouse",
    ],
    intro:
      "Toulouse Tarn Transfert assure votre transfert vers Castelnaudary depuis la gare Matabiau avec ponctualité et confort premium.",
  },
  {
    id: "station-montauban",
    slug: "gare-matabiau-montauban",
    origin: "gare",
    depart: station,
    arrivee: "Montauban",
    prix: 89,
    temps: "40 min",
    distanceKm: 50,
    image: "/Montauban.png",
    title: "Chauffeur privé Montauban depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Montauban depuis la gare Matabiau. Tarif fixe 89 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Montauban",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur gare Toulouse",
    ],
    intro:
      "Depuis la gare Toulouse-Matabiau, voyagez vers Montauban avec un service chauffeur privé premium, fiable et confortable.",
  },
  {
    id: "station-moissac",
    slug: "gare-matabiau-moissac",
    origin: "gare",
    depart: station,
    arrivee: "Moissac",
    prix: 99,
    temps: "55 min",
    distanceKm: 70,
    image: "/Moissac.png",
    title: "Chauffeur privé Moissac depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Moissac depuis la gare Matabiau. Tarif fixe 99 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Moissac",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur gare Toulouse",
    ],
    intro:
      "Toulouse Tarn Transfert vous conduit vers Moissac depuis la gare Matabiau avec un niveau de service premium constant.",
  },
  {
    id: "station-castelsarrasin",
    slug: "gare-matabiau-castelsarrasin",
    origin: "gare",
    depart: station,
    arrivee: "Castelsarrasin",
    prix: 99,
    temps: "50 min",
    distanceKm: 66,
    image: "/Castelsarasin.png",
    title: "Chauffeur privé Castelsarrasin depuis la gare Matabiau | Transfert premium",
    metaDescription:
      "Réservez votre chauffeur privé Castelsarrasin depuis la gare Matabiau. Tarif fixe 99 EUR, transport premium et réservation 24h/24.",
    keywords: [
      "chauffeur privé Castelsarrasin",
      "transfert gare Matabiau",
      "VTC Toulouse",
      "réservation chauffeur privé",
      "chauffeur privé Occitanie",
      "chauffeur gare Toulouse",
    ],
    intro:
      "Rejoignez Castelsarrasin depuis la gare Toulouse-Matabiau avec un chauffeur privé premium, ponctuel et discret.",
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
