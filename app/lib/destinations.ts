export type Destination = {
  slug: string;
  name: string;
  imagePath: string;
  airportPrice: string;
  stationPrice: string;
  travelTime: string;
  distance: string;
  description: string;
  faqItems: Array<{ question: string; answer: string }>;
};

export const destinations: Record<string, Destination> = {
  castres: {
    slug: 'castres',
    name: 'Castres',
    imagePath: '/Castres.png',
    airportPrice: '119 €',
    stationPrice: '109 €',
    travelTime: '1h15 à 1h30',
    distance: '80 km',
    description:
      'Toulouse Tarn Transfer vous propose un service de chauffeur privé entre Toulouse Aéroport, la gare Matabiau et Castres. Voyagez dans un véhicule haut de gamme avec un chauffeur ponctuel, discret et professionnel. Nos tarifs sont fixes, sans surprise, avec réservation simple et paiement sécurisé.',
    faqItems: [
      {
        question: 'Le chauffeur attend-il en cas de retard d\'avion ?',
        answer:
          'Oui, bien sûr ! Nos chauffeurs suivent en temps réel votre vol et s\'ajustent automatiquement en cas de retard. Vous ne pairez rien de plus.',
      },
      {
        question: 'Le prix affichéest-il fixe ?',
        answer:
          'Absolument. Notre prix de 119 € pour l\'aéroport et 109 € pour la gare est définitif. Aucun supplément ne vous sera facturé en cas de route embouteillée ou de détour.',
      },
      {
        question: 'Puis-je réserver la veille du départ ?',
        answer:
          'Oui, vous pouvez réserver à la dernière minute, même quelques heures avant. Nous restons disponibles 24h/24, 7j/7.',
      },
      {
        question: 'Acceptez-vous les paiements par carte bancaire ?',
        answer:
          'Oui, nous acceptons tous les paiements par carte bancaire, virement et espèces. Le paiement est sécurisé via notre plateforme.',
      },
    ],
  },
  albi: {
    slug: 'albi',
    name: 'Albi',
    imagePath: '/photo albi.png',
    airportPrice: '129 €',
    stationPrice: '119 €',
    travelTime: '1h25 à 1h45',
    distance: '90 km',
    description:
      'Explorez la beauté de la cathédrale Sainte-Cécile avec nos services de transfert de luxe vers Albi. Notre équipe professionnelle assurera un voyage confortable depuis Toulouse Aéroport ou la gare Matabiau. Profitez de nos tarifs transparents et de notre accompagnement personnalisé.',
    faqItems: [
      {
        question: 'Pouvez-vous m\'attendre à Albi si j\'ai un délai ?',
        answer:
          'Bien sûr. Nous avons des délais d\'attente libres pour s\'adapter à vos besoins. Contactez-nous avec les détails de votre itinéraire.',
      },
      {
        question: 'Quels sont les frais supplémentaires ?',
        answer:
          'Il n\'y a aucun frais supplémentaire. Notre tarif est tout compris : essence, péage, chauffeur et assurance.',
      },
      {
        question: 'Puis-je voyager avec des animaux ?',
        answer:
          'Oui, les petits animaux domestiques bien élevés sont acceptés. Veuillez le mentionner lors de votre réservation.',
      },
      {
        question: 'Que dois-je faire si j\'oublie un objet dans le véhicule ?',
        answer:
          'Contactez-nous immédiatement. Nous ferons notre possible pour retrouver votre objet. Nos chauffeurs vérifient les véhicules après chaque trajet.',
      },
    ],
  },
  mazamet: {
    slug: 'mazamet',
    name: 'Mazamet',
    imagePath: '/photo mazamet.png',
    airportPrice: '129 €',
    stationPrice: '119 €',
    travelTime: '1h40 à 2h',
    distance: '105 km',
    description:
      'Découvrez Mazamet avec Toulouse Tarn Transfer. Nos véhicules haut de gamme vous transportent confortablement depuis Toulouse Aéroport ou la gare Matabiau. Service professionnel, tarifs fixes et accompagnement personnalisé pour un trajet en toute sérénité.',
    faqItems: [
      {
        question: 'Combien de bagages puis-je emporter ?',
        answer:
          'Nos véhicules premium peuvent accueillir vos bagages de cabine et de soute. Veuillez mentionner si vous avez des bagages volumineux lors de la réservation.',
      },
      {
        question: 'Y a-t-il des frais supplémentaires pour plus de 4 passagers ?',
        answer:
          'Oui, pour 5 passagers ou plus, nous proposons des véhicules plus grands avec un tarif adapté. Contactez-nous pour un devis personnalisé.',
      },
      {
        question: 'Comment puis-je modifier ma réservation ?',
        answer:
          'Vous pouvez modifier votre réservation jusqu\'à 2 heures avant le départ. Contactez-nous par téléphone ou e-mail.',
      },
      {
        question: 'Que se passe-t-il si je dois annuler ?',
        answer:
          'L\'annulation est gratuite jusqu\'à 2 heures avant votre départ. Après ce délai, des frais peuvent s\'appliquer selon les conditions.',
      },
    ],
  },
  lavaur: {
    slug: 'lavaur',
    name: 'Lavaur',
    imagePath: '/lavaur.png',
    airportPrice: '109 €',
    stationPrice: '99 €',
    travelTime: '55 min à 1h10',
    distance: '70 km',
    description:
      'Voyagez vers Lavaur avec Toulouse Tarn Transfer. Nos chauffeurs professionnels vous offrent un service premium avec véhicules climatisés et confortables. Tarifs fixes et transparents, réservation facile, disponibilité 24h/24.',
    faqItems: [
      {
        question: 'Quel est le meilleur moment pour réserver ?',
        answer:
          'Plus vous réservez tôt, plus vous avez de flexibilité. Cependant, nous acceptons aussi les réservations de dernière minute 24h/24.',
      },
      {
        question: 'Votre chauffeur connaît-il bien la région ?',
        answer:
          'Absolument. Tous nos chauffeurs sont des experts de la région et connaissent les meilleurs itinéraires pour vous arriver à l\'heure.',
      },
      {
        question: 'Puis-je faire un arrêt sur le trajet ?',
        answer:
          'Oui, nous pouvons organiser des arrêts. Mentionnez vos besoins lors de la réservation pour que nous ajustions le prix si nécessaire.',
      },
      {
        question: 'Avez-vous des véhicules électriques ?',
        answer:
          'Actuellement, notre flotte est composée de véhicules essence et diesel haut de gamme. Nous y réfléchissons pour l\'avenir !',
      },
    ],
  },
  revel: {
    slug: 'revel',
    name: 'Revel',
    imagePath: '/revel.png',
    airportPrice: '109 €',
    stationPrice: '99 €',
    travelTime: '45 min à 1h',
    distance: '55 km',
    description:
      'Bienvenue à Revel, la bastide du Tarn. Toulouse Tarn Transfer assure vos transferts vers cette destination charmante. Profitez de nos services haut de gamme, tarifs fixes et équipes professionnelles pour un voyage sans souci.',
    faqItems: [
      {
        question: 'Y a-t-il du stationnement à Revel ?',
        answer:
          'Oui, nous connaissons les meilleurs endroits pour vous déposer et des zones de stationnement fiables.',
      },
      {
        question: 'Pouvez-vous me suggérer des hôtels ?',
        answer:
          'Nous pouvons vous recommander d\'excellents hôtels à Revel. N\'hésitez pas à nous contacter pour obtenir des suggestions.',
      },
      {
        question: 'Qu\'en est-il des trajets vers d\'autres villes du Tarn depuis Revel ?',
        answer:
          'Nous pouvons aussi organiser des transferts entre Revel et d\'autres destinations. Contactez-nous pour un devis.',
      },
      {
        question: 'Votre service inclut-il une visite guidée ?',
        answer:
          'Non, mais nos chauffeurs peuvent vous donner des informations utiles sur la région. Pour une visite guidée complète, nous pouvons vous recommander des partenaires.',
      },
    ],
  },
};

export const cities = Object.values(destinations);
