import Image from 'next/image';

const navItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Nos transferts', href: '#transfers' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Nos services', href: '/nos-services' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Avis', href: '/avis' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
    <header className="relative sticky top-0 z-[9999] overflow-visible w-full border-b border-amber-500/20 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        

        <a href="#hero" className="flex shrink-0 items-center" aria-label="Accueil">
          <Image
            src="/Logo ttt 2.png"
            alt="Logo TTT"
            width={220}
            height={80}
            priority
            className="h-12 w-auto sm:h-14 lg:h-20"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white lg:flex">
          {navItems.map((item) =>
            item.label === 'Nos transferts' ? (
              <details key={item.label} className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-amber-300">
                  <span>{item.label}</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.69a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.2 8.29a.75.75 0 01.03-1.08z" />
                  </svg>
                </summary>
                <div className="absolute left-0 top-full mt-2 w-56 rounded-xl border border-white/10 bg-black p-2 shadow-2xl z-50">
                  <a href="/transferts/castres" className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-amber-300">
                    Castres
                  </a>
                  <a href="/transferts/albi" className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-amber-300">
                    Albi
                  </a>
                  <a href="/transferts/mazamet" className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-amber-300">
                    Mazamet
                  </a>
                  <a href="/transferts/lavaur" className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-amber-300">
                    Lavaur
                  </a>
                  <a href="/transferts/revel" className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-amber-300">
                    Revel
                  </a>
                </div>
              </details>
            ) : (
                <a key={item.label} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-amber-300">
                  {item.label}
                </a>
              )
            )}

            <a
              href="tel:+33667711174"
              className="inline-flex items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-500/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L7.59 8.7a16 16 0 0 0 6.71 6.71l.27-.27a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span>06 67 71 11 74</span>
            </a>
        </nav>

        
      </div>

      <nav className="flex flex-wrap items-center justify-center gap-3 border-t border-white/10 px-4 py-3 text-sm font-medium text-white lg:hidden">{navItems.map((item) => item.label === "Nos transferts" ? (<details key={item.label} className="relative"><summary className="cursor-pointer list-none rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-amber-300">Nos transferts</summary>
      <div className="absolute left-0 top-full mt-2 w-48 rounded-xl border border-white/10 bg-black p-2 shadow-2xl z-[9999]"><a href="/transferts/castres" className="block rounded-lg px-3 py-2 hover:bg-white/10">Castres</a><a href="/transferts/albi" className="block rounded-lg px-3 py-2 hover:bg-white/10">Albi</a><a href="/transferts/mazamet" className="block rounded-lg px-3 py-2 hover:bg-white/10">Mazamet</a><a href="/transferts/lavaur" className="block rounded-lg px-3 py-2 hover:bg-white/10">Lavaur</a><a href="/transferts/revel" className="block rounded-lg px-3 py-2 hover:bg-white/10">Revel</a></div></details>) : (<a key={item.label} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-amber-300" >{item.label} </a>))}</nav>
    </header>
  );
}