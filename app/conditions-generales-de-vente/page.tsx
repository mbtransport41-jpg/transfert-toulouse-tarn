import { buildSeoMetadata } from "@/app/lib/seo";

export const metadata = buildSeoMetadata({
  title: "Conditions Générales de Vente (CGV) | Toulouse Tarn Transfert",
  description:
    "Consultez les Conditions Générales de Vente et la Politique d'annulation de Toulouse Tarn Transfert pour les prestations de transport privé avec chauffeur.",
  path: "/conditions-generales-de-vente",
  keywords: [
    "conditions générales de vente VTC",
    "CGV Toulouse Tarn Transfert",
    "politique d'annulation chauffeur privé",
    "transport privé Toulouse",
    "chauffeur privé Castres",
  ],
});

export default function ConditionsGeneralesDeVentePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white sm:px-8 sm:py-20">
      <article className="mx-auto max-w-4xl rounded-3xl border border-amber-500/20 bg-black/30 p-6 shadow-2xl shadow-black/40 sm:p-10">
        <h1 className="text-3xl font-bold text-amber-400 sm:text-5xl">Conditions Générales de Vente (CGV)</h1>

        <p className="mt-6 text-sm text-slate-300">Dernière mise à jour : 16 juillet 2026</p>

        <p className="mt-6 leading-8 text-slate-200">
          Les présentes Conditions Générales de Vente (CGV) régissent les prestations de transport de personnes
          proposées par Toulouse Tarn Transfert, exploité par MB Transport.
        </p>

        <section className="mt-10 space-y-6 text-slate-200">
          <div>
            <h2 className="text-2xl font-semibold text-amber-300">1. Objet</h2>
            <p className="mt-3 leading-8">
              Toulouse Tarn Transfert propose des prestations de transport privé avec chauffeur (VTC) sur réservation
              préalable, notamment pour les transferts vers les aéroports, gares, hôtels, hébergements touristiques,
              entreprises et tout autre déplacement privé ou professionnel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">2. Réservation</h2>
            <p className="mt-3 leading-8">
              Les réservations peuvent être effectuées par téléphone, e-mail, WhatsApp ou via le site internet.
            </p>
            <p className="mt-2 leading-8">
              La réservation est considérée comme confirmée après acceptation par Toulouse Tarn Transfert.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">3. Tarifs</h2>
            <p className="mt-3 leading-8">
              Les tarifs affichés sont exprimés en euros et correspondent au prix annoncé lors de la réservation.
            </p>
            <p className="mt-2 leading-8">
              Les éventuels frais supplémentaires (arrêt supplémentaire, attente exceptionnelle, modification du trajet
              demandée par le client) sont communiqués avant leur application.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">4. Paiement</h2>
            <p className="mt-3 leading-8">
              Le paiement peut être effectué selon les modalités proposées lors de la réservation : carte bancaire,
              espèces, virement bancaire ou tout autre moyen accepté.
            </p>
            <p className="mt-2 leading-8">
              Sauf accord particulier, le paiement est exigible à la réalisation de la prestation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">5. Attente</h2>
            <p className="mt-3 leading-8">
              Une période d'attente raisonnable est incluse lors de la prise en charge.
            </p>
            <p className="mt-2 leading-8">
              Au-delà, des frais d'attente peuvent être appliqués après information du client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">6. Annulation</h2>
            <p className="mt-3 leading-8">
              Les conditions d'annulation sont précisées dans la Politique d'annulation ci-dessous.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">7. Obligations du client</h2>
            <p className="mt-3 leading-8">Le client s'engage à :</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-8 text-slate-200">
              <li>communiquer des informations exactes lors de la réservation ;</li>
              <li>respecter le chauffeur et le véhicule ;</li>
              <li>porter sa ceinture de sécurité ;</li>
              <li>ne pas transporter de produits ou objets interdits par la loi.</li>
            </ul>
            <p className="mt-3 leading-8">
              Tout comportement mettant en danger la sécurité pourra entraîner l'interruption immédiate de la
              prestation sans remboursement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">8. Bagages</h2>
            <p className="mt-3 leading-8">
              Les bagages sont transportés sous la responsabilité de leur propriétaire.
            </p>
            <p className="mt-2 leading-8">
              Le client doit signaler tout bagage volumineux ou équipement particulier lors de la réservation.
            </p>
            <p className="mt-2 leading-8">
              Les objets oubliés dans le véhicule pourront être restitués sur rendez-vous ou expédiés aux frais du
              client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">9. Retards et cas de force majeure</h2>
            <p className="mt-3 leading-8">
              Toulouse Tarn Transfert met tout en œuvre pour assurer la ponctualité des prestations.
            </p>
            <p className="mt-2 leading-8">
              Toutefois, la responsabilité du transporteur ne pourra être engagée en cas de retard lié notamment à :
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-8 text-slate-200">
              <li>circulation exceptionnelle ;</li>
              <li>accident ;</li>
              <li>intempéries ;</li>
              <li>fermeture de routes ;</li>
              <li>événements indépendants de sa volonté.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">10. Responsabilité</h2>
            <p className="mt-3 leading-8">
              Toulouse Tarn Transfert est couvert par les assurances professionnelles obligatoires applicables à
              l'activité de VTC.
            </p>
            <p className="mt-2 leading-8">
              La responsabilité est limitée aux dommages directement imputables à la prestation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">11. Données personnelles</h2>
            <p className="mt-3 leading-8">
              Les informations recueillies sont utilisées uniquement dans le cadre des réservations et ne sont jamais
              revendues à des tiers.
            </p>
            <p className="mt-2 leading-8">
              Le client peut exercer ses droits conformément au Règlement Général sur la Protection des Données
              (RGPD).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-amber-300">12. Droit applicable</h2>
            <p className="mt-3 leading-8">Les présentes CGV sont soumises au droit français.</p>
            <p className="mt-2 leading-8">
              En cas de litige, une solution amiable sera recherchée avant toute procédure judiciaire.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-amber-500/20 pt-10 text-slate-200">
          <h2 className="text-3xl font-semibold text-amber-300">Politique d'annulation</h2>

          <p className="mt-5 leading-8">
            Afin de garantir la disponibilité des chauffeurs de Toulouse Tarn Transfert et la qualité des prestations,
            les conditions suivantes s'appliquent :
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 leading-8">
            <li>Annulation plus de 24 heures avant la prise en charge : remboursement intégral.</li>
            <li>
              Annulation entre 24 heures et 2 heures avant la prise en charge : facturation de 50 % du montant de la
              réservation.
            </li>
            <li>
              Annulation moins de 2 heures avant la prise en charge ou absence du client au lieu de rendez-vous
              (« no-show ») : la prestation est due à 100 %.
            </li>
          </ul>

          <p className="mt-4 leading-8">
            En cas de retard du client, le chauffeur attend dans une limite raisonnable. Au-delà, la prestation pourra
            être considérée comme annulée selon les conditions ci-dessus.
          </p>

          <p className="mt-2 leading-8">
            En cas d'annulation imputable à Toulouse Tarn Transfert, le client sera intégralement remboursé des sommes
            versées, sauf accord pour un report de la prestation.
          </p>
        </section>
      </article>
    </main>
  );
}
