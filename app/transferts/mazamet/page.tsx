import { Metadata } from 'next';
import DestinationHero from '@/app/components/DestinationHero';
import DestinationIntro from '@/app/components/DestinationIntro';
import WhyChooseTTT from '@/app/components/WhyChooseTTT';
import PricingCard from '@/app/components/PricingCard';
import IncludedServices from '@/app/components/IncludedServices';
import TravelTime from '@/app/components/TravelTime';
import DestinationFAQ from '@/app/components/DestinationFAQ';
import { destinations } from '@/app/lib/destinations';

const destination = destinations.mazamet;

export const metadata: Metadata = {
  title: 'Transfert Toulouse → Mazamet | Chauffeur privé TTT',
  description:
    'Service de chauffeur privé de luxe entre Toulouse (aéroport, gare) et Mazamet. Tarifs fixes, véhicule haut de gamme, disponibilité 24h/24.',
  keywords: 'transfert Toulouse Mazamet, chauffeur privé, VTC, taxi, aéroport',
  openGraph: {
    title: 'Transfert Toulouse → Mazamet | TTT',
    description: 'Chauffeur privé de luxe avec tarifs fixes et service premium',
    type: 'website',
    url: 'https://ttt-toulouse.fr/transferts/mazamet',
    images: [
      {
        url: destination.imagePath,
        width: 1200,
        height: 630,
        alt: 'Transfert Toulouse Mazamet',
      },
    ],
  },
};

export default function MazametPage() {
  return (
    <main className="bg-black">
      <DestinationHero city={destination.name} imagePath={destination.imagePath} />
      <DestinationIntro description={destination.description} city={destination.name} />
      <WhyChooseTTT />
      <PricingCard
        city={destination.name}
        airportPrice={destination.airportPrice}
        stationPrice={destination.stationPrice}
      />
      <IncludedServices />
      <TravelTime
        city={destination.name}
        travelTime={destination.travelTime}
        distance={destination.distance}
      />
      <DestinationFAQ city={destination.name} items={destination.faqItems} />
    </main>
  );
}
