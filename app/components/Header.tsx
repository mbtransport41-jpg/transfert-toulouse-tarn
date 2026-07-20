"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/nos-services" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Avis", href: "/avis" },
  { label: "Contact", href: "/contact" },
];

const transferLinks = [
  { label: "Aéroport Toulouse - Castres", href: "/transfert/aeroport-toulouse-castres", group: "Aéroport" },
  { label: "Aéroport Toulouse - Albi", href: "/transfert/aeroport-toulouse-albi", group: "Aéroport" },
  { label: "Aéroport Toulouse - Lavaur", href: "/transfert/aeroport-toulouse-lavaur", group: "Aéroport" },
  { label: "Aéroport Toulouse - Revel", href: "/transfert/aeroport-toulouse-revel", group: "Aéroport" },
  { label: "Aéroport Toulouse - Mazamet", href: "/transfert/aeroport-toulouse-mazamet", group: "Aéroport" },
  { label: "Aéroport Toulouse - Sorèze", href: "/transfert/aeroport-toulouse-soreze", group: "Aéroport" },
  { label: "Aéroport Toulouse - Saint-Ferréol", href: "/transfert/aeroport-toulouse-saint-ferreol", group: "Aéroport" },
  { label: "Aéroport Toulouse - Carcassonne", href: "/transfert/aeroport-toulouse-carcassonne", group: "Aéroport" },
  { label: "Aéroport Toulouse - Castelnaudary", href: "/transfert/aeroport-toulouse-castelnaudary", group: "Aéroport" },
  { label: "Aéroport Toulouse - Montauban", href: "/transfert/aeroport-toulouse-montauban", group: "Aéroport" },
  { label: "Aéroport Toulouse - Moissac", href: "/transfert/aeroport-toulouse-moissac", group: "Aéroport" },
  { label: "Aéroport Toulouse - Castelsarrasin", href: "/transfert/aeroport-toulouse-castelsarrasin", group: "Aéroport" },
  { label: "Gare Matabiau - Castres", href: "/transfert/gare-matabiau-castres", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Albi", href: "/transfert/gare-matabiau-albi", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Lavaur", href: "/transfert/gare-matabiau-lavaur", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Revel", href: "/transfert/gare-matabiau-revel", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Mazamet", href: "/transfert/gare-matabiau-mazamet", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Sorèze", href: "/transfert/gare-matabiau-soreze", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Saint-Ferréol", href: "/transfert/gare-matabiau-saint-ferreol", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Carcassonne", href: "/transfert/gare-matabiau-carcassonne", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Castelnaudary", href: "/transfert/gare-matabiau-castelnaudary", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Montauban", href: "/transfert/gare-matabiau-montauban", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Moissac", href: "/transfert/gare-matabiau-moissac", group: "Gare Matabiau" },
  { label: "Gare Matabiau - Castelsarrasin", href: "/transfert/gare-matabiau-castelsarrasin", group: "Gare Matabiau" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const airportLinks = transferLinks.filter((item) => item.group === "Aéroport");
  const stationLinks = transferLinks.filter((item) => item.group === "Gare Matabiau");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/20 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Accueil">
          <Image
            src="/Logo ttt 2.png"
            alt="Logo TTT"
            width={220}
            height={80}
            priority
            className="h-12 w-auto sm:h-14 lg:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-white lg:flex">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-amber-300">
              <span>Nos transferts</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.92l3.71-3.69a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.2 8.29a.75.75 0 01.03-1.08z" />
              </svg>
            </summary>
            <div className="absolute left-0 top-full mt-3 w-80 rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl shadow-black/40">
              <Link
                href="/nos-transferts"
                className="mb-2 block rounded-xl px-3 py-2 text-sm font-semibold text-amber-300 transition hover:bg-white/10"
              >
                Voir toutes les destinations
              </Link>
              <p className="px-3 pb-1 pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Aéroport</p>
              {airportLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-amber-300"
                >
                  {item.label}
                </Link>
              ))}
              <p className="mt-2 px-3 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Gare Matabiau</p>
              {stationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-amber-300"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-amber-300">
              {item.label}
            </Link>
          ))}

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

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-white/20 p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {mobileOpen ? (
        <nav id="mobile-menu" className="border-t border-white/10 px-4 py-4 text-sm font-medium text-white lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-amber-300"
              >
                {item.label}
              </Link>
            ))}

            <details className="rounded-xl border border-white/10 p-2">
              <summary className="cursor-pointer list-none rounded-lg px-2 py-2 text-amber-300">Nos transferts</summary>
              <div className="mt-2 space-y-1">
                <Link
                  href="/nos-transferts"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2 font-semibold text-amber-300 transition hover:bg-white/10"
                >
                  Toutes les destinations
                </Link>
                {transferLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-slate-300 transition hover:bg-white/10 hover:text-amber-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>

            <a
              href="tel:+33667711174"
              className="mt-2 inline-flex items-center justify-center rounded-full border border-amber-500/60 bg-amber-500/10 px-4 py-2 font-semibold text-amber-300"
            >
              06 67 71 11 74
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}