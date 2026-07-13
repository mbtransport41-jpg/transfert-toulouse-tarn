import { buildSeoMetadata } from "../lib/seo";

export const metadata = buildSeoMetadata({
  title: "Conditions générales de vente | Toulouse Tarn Transfert",
  description:
    "Consultez les conditions générales de vente applicables à nos prestations de chauffeur privé, transferts aéroport et trajets sur réservation.",
  path: "/cgv",
});

export default function CGVPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-amber-400 mb-10">
          Conditions Générales de Vente
        </h1>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. Objet
        </h2>

        <p>
          Les présentes Conditions Générales de Vente régissent les prestations
          de transport privé proposées par MB Transport sous l&apos;enseigne
          Toulouse Tarn Transfert.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. Réservation
        </h2>

        <p>
          Toute réservation doit être effectuée à l&apos;avance par téléphone,
          e-mail ou via le site internet.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          3. Tarifs
        </h2>

        <p>
          Les tarifs sont communiqués avant la réservation et peuvent varier
          selon la distance, l&apos;heure, les péages et les demandes particulières.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          4. Paiement
        </h2>

        <p>
          Le paiement peut être effectué par carte bancaire, espèces ou tout
          autre moyen accepté par MB Transport.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          5. Annulation
        </h2>

        <p>
          Toute annulation doit être signalée dès que possible. Des frais
          peuvent être appliqués en cas d&apos;annulation tardive.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          6. Responsabilité
        </h2>

        <p>
          MB Transport s&apos;engage à assurer les prestations avec ponctualité,
          professionnalisme et sécurité. La responsabilité ne pourra être
          engagée en cas de force majeure ou d&apos;événement indépendant de sa
          volonté.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          7. Contact
        </h2>

        <p>
          MB Transport<br />
          22 rue Mérigonde<br />
          81100 Castres<br />
          Tél. : 06 67 71 11 74<br />
          transport.a.particuliers@outlook.fr
        </p>

      </div>
    </main>
  );
}