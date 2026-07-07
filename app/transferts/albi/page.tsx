import { Metadata } from 'next';
import DestinationHero from '@/app/components/DestinationHero';
import DestinationIntro from '@/app/components/DestinationIntro';
import WhyChooseTTT from '@/app/components/WhyChooseTTT';
import PricingCard from '@/app/components/PricingCard';
import IncludedServices from '@/app/components/IncludedServices';
import TravelTime from '@/app/components/TravelTime';
import DestinationFAQ from '@/app/components/DestinationFAQ';
import BookingForm from '@/app/components/BookingForm';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { destinations } from '@/app/lib/destinations';

const destination = destinations.albi;

export const metadata: Metadata = {
  title: 'Transfert Toulouse → Albi | Chauffeur privé TTT',
  description:
    'Service de chauffeur privé de luxe entre Toulouse (aéroport, gare) et Albi. Tarifs fixes, véhicule haut de gamme, disponibilité 24h/24.',
  keywords: 'transfert Toulouse Albi, chauffeur privé, VTC, taxi, aéroport',
  openGraph: {
    title: 'Transfert Toulouse → Albi | TTT',
    description: 'Chauffeur privé de luxe avec tarifs fixes et service premium',
    type: 'website',
    url: 'https://ttt-toulouse.fr/transferts/albi',
    images: [
      {
        url: destination.imagePath,
        width: 1200,
        height: 630,
        alt: 'Transfert Toulouse Albi',
      },
    ],
  },
};

export default function AlbiPage() {
  return (
    <>
      <Header />
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
        <section className="bg-white px-6 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
