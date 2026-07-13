import Link from "next/link";
import { buildSeoMetadata } from "../lib/seo";

export const metadata = buildSeoMetadata({
  title: "Contact chauffeur privé Toulouse | Réservation 7j/7",
  description:
    "Contactez Toulouse Tarn Transfert pour réserver votre chauffeur privé à Toulouse, organiser un transfert aéroport Toulouse-Blagnac, gare Matabiau ou un trajet vers Castres, Albi, Lavaur, Revel et Mazamet.",
  path: "/contact",
  keywords: [
    "chauffeur privé Toulouse",
    "réservation chauffeur privé",
    "transfert aéroport Toulouse",
    "transfert gare Matabiau",
    "chauffeur privé Occitanie",
    "transport premium",
  ],
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-amber-400 mb-6">Contactez Toulouse Tarn Transfert</h1>
        <p className="text-xl text-gray-300 mb-12">
          Besoin d&apos;un chauffeur privé entre Toulouse, l&apos;aéroport Toulouse-Blagnac, la gare Matabiau, Castres, Albi,
          Lavaur, Revel, Mazamet ou toute autre destination dans le Tarn ? Notre équipe est à votre disposition 7j/7
          sur réservation.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-900 rounded-3xl border border-amber-500/30 p-8">
            <h2 className="text-3xl font-bold text-amber-400 mb-8">Nos coordonnées</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-amber-300">Téléphone</h3>
                <p>+33 6 67 71 11 74</p>
              </div>
              <div>
                <h3 className="font-semibold text-amber-300">Email</h3>
                <p>transport.a.particuliers@outlook.fr</p>
              </div>
              <div>
                <h3 className="font-semibold text-amber-300">Disponibilité</h3>
                <p>Réservation 7 jours sur 7</p>
              </div>
              <div>
                <h3 className="font-semibold text-amber-300">Zone desservie</h3>
                <p>Toulouse • Aéroport Toulouse-Blagnac • Gare Matabiau • Castres • Albi • Lavaur • Revel • Mazamet • Tarn</p>
              </div>
              <div>
                <h3 className="font-semibold text-amber-300">Langues parlées</h3>
                <p>
                  Français
                  <br />
                  Anglais
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl border border-amber-500/30 p-8">
            <h2 className="text-3xl font-bold text-amber-400 mb-8">Demande de réservation</h2>
            <p className="text-gray-300 mb-8">
              Pour toute demande de transfert privé, navette aéroport, transport gare ou mise à disposition d&apos;un
              chauffeur privé, utilisez le formulaire de réservation disponible sur notre site.
            </p>
            <Link
              href="/#booking"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full transition"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>

        <div className="mt-20 bg-zinc-900 rounded-3xl border border-amber-500/30 p-10">
          <h2 className="text-3xl font-bold text-amber-400 mb-6">Pourquoi choisir Toulouse Tarn Transfert ?</h2>
          <ul className="space-y-4 text-gray-300">
            <li>✓ Chauffeur professionnel.</li>
            <li>✓ Véhicule haut de gamme.</li>
            <li>✓ Tarifs fixes sans surprise.</li>
            <li>✓ Paiement sécurisé.</li>
            <li>✓ Accueil personnalisé à l&apos;aéroport et à la gare.</li>
            <li>✓ Service bilingue français / anglais.</li>
            <li>✓ Réservation simple et rapide.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
