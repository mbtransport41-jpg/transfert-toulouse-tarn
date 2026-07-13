import { buildSeoMetadata } from "../lib/seo";

export const metadata = buildSeoMetadata({
	title: "Politique de confidentialité | Toulouse Tarn Transfert",
	description:
		"Consultez notre politique de confidentialité et la manière dont Toulouse Tarn Transfert traite les données personnelles liées aux demandes de réservation et de contact.",
	path: "/confidentialite",
});

export default function ConfidentialitePage() {
	return (
		<main className="min-h-screen bg-zinc-950 text-white px-6 py-20">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-5xl font-bold text-amber-400 mb-10">Politique de confidentialité</h1>
				<p className="mb-8">
					  MB Transport s&apos;engage à protéger les données personnelles de ses clients conformément au Règlement Général
					sur la Protection des Données (RGPD).
				</p>
				<h2 className="text-2xl font-semibold mt-8 mb-3">Données collectées</h2>
				<p>
					Nous pouvons collecter votre nom, votre numéro de téléphone, votre adresse e-mail ainsi que les
					  informations nécessaires à l&apos;organisation de votre transport.
				</p>
				<h2 className="text-2xl font-semibold mt-8 mb-3">Utilisation des données</h2>
				<p>
					Les données sont utilisées uniquement pour répondre à vos demandes, gérer les réservations et améliorer la
					qualité de nos services.
				</p>
				<h2 className="text-2xl font-semibold mt-8 mb-3">Conservation</h2>
				<p>
					Les données sont conservées uniquement pendant la durée nécessaire à leur traitement et conformément aux
					obligations légales.
				</p>
				<h2 className="text-2xl font-semibold mt-8 mb-3">Vos droits</h2>
				<p>
					  Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition et de
					portabilité de vos données personnelles.
				</p>
				<h2 className="text-2xl font-semibold mt-8 mb-3">Contact</h2>
				<p>
					MB Transport
					<br />
					22 rue Mérigonde
					<br />
					81100 Castres
					<br />
					transport.a.particuliers@outlook.fr
					<br />
					06 67 71 11 74
				</p>
			</div>
		</main>
	);
}