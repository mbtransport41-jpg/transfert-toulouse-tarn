import { buildSeoMetadata } from "../lib/seo";

export const metadata = buildSeoMetadata({
  title: "Mentions légales | Toulouse Tarn Transfert",
  description:
    "Consultez les mentions légales du site Toulouse Tarn Transfert et les informations relatives à l'éditeur, à l'hébergement et au contact.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-5xl font-bold">Mentions légales</h1>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-amber-400">Éditeur du site</h2>
            <p className="mt-4"><strong>Toulouse Tarn Transfert</strong></p>
            <p>Gérant : Mboa</p>
            <p>22 Rue Mérigonde</p>
            <p>81100 Castres</p>
            <p>Téléphone : 06 67 71 11 74</p>
            <p>Email : transport.a.particuliers@outlook.fr</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-amber-400">Entreprise</h2>
            <p>E.I MB Transport</p>
            <p>SIRET : 921 290 847 00018</p>
            <p>RCS : Castres</p>
            <p>TVA intracommunautaire : FR46921290847</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-amber-400">Hébergement</h2>
            <p>Vercel Inc.</p>
            <p>440 N Barranca Avenue #4133</p>
            <p>Covina, CA 91723</p>
            <p>États-Unis</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-amber-400">Propriété intellectuelle</h2>
            <p className="mt-4 text-slate-300 leading-8">
              L&apos;ensemble des contenus présents sur ce site (textes, images, photographies, logos, graphismes et
              éléments visuels) est protégé par le Code de la propriété intellectuelle. Toute reproduction,
              représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-amber-400">Données personnelles</h2>
            <p className="mt-4 text-slate-300 leading-8">
              Les informations recueillies via les formulaires sont utilisées uniquement dans le cadre du traitement
              des demandes de réservation ou de contact. Elles ne sont jamais revendues à des tiers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-amber-400">Cookies</h2>
            <p className="mt-4 text-slate-300 leading-8">
              Ce site peut utiliser des cookies nécessaires à son bon fonctionnement ainsi que des outils de mesure
              d&apos;audience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-amber-400">Contact</h2>
            <p className="mt-4">Téléphone : 06 67 71 11 74</p>
            <p>Email : transport.a.particuliers@outlook.fr</p>
          </div>
        </div>
      </section>
    </main>
  );
}
