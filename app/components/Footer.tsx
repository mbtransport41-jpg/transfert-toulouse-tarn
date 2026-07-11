import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-amber-500/20 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h2 className="text-3xl font-bold text-amber-400">TTT</h2>
            <p className="mt-5 leading-8 text-slate-400">
              Toulouse Tarn Transfert est votre chauffeur privé premium entre Toulouse, Castres, Albi, Lavaur, Revel,
              Mazamet, l'aéroport Toulouse-Blagnac, la gare Matabiau et toute l'Occitanie.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-amber-400">Liens rapides</h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/a-propos">À propos</Link></li>
              <li><Link href="/nos-services">Nos services</Link></li>
              <li><Link href="/tarifs">Tarifs</Link></li>
              <li><Link href="/avis">Avis</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-amber-400">Destinations</h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="/transfert/aeroport-toulouse-castres">Castres</Link></li>
              <li><Link href="/transfert/aeroport-toulouse-albi">Albi</Link></li>
              <li><Link href="/transfert/aeroport-toulouse-mazamet">Mazamet</Link></li>
              <li><Link href="/transfert/aeroport-toulouse-lavaur">Lavaur</Link></li>
              <li><Link href="/transfert/aeroport-toulouse-revel">Revel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-amber-400">Informations</h3>
            <ul className="mt-5 space-y-3">
              <li><Link href="/cgv">Conditions générales</Link></li>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold text-amber-400">Contact</h4>
              <p className="mt-3 text-slate-400">+33 6 67 71 11 74</p>
              <p className="text-slate-400">transport.a.particuliers@outlook.fr</p>
              <p className="mt-3 text-slate-400">
                Français
                <br />
                Anglais
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-500/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Toulouse Tarn Transfert. Tous droits réservés.</p>
          <p>Chauffeur privé Toulouse • Castres • Albi • Lavaur • Revel • Mazamet • Aéroport Toulouse-Blagnac</p>
        </div>
      </div>
    </footer>
  );
}
