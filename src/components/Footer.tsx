import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const groupA = [
  { href: '/sandal-configurator', label: 'Créer ma claquette' },
  { href: '/comprendre-la-claquette', label: 'Comprendre la claquette' },
  { href: '/#inspirations', label: 'Inspirations' },
];
const groupB = [
  { href: '/#a-propos', label: 'À propos' },
  { href: '/#contact', label: 'Contact' },
  { href: '/#confidentialite', label: 'Confidentialité' },
];

export default function Footer() {
  return (
    <footer className="no-print border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <AppLogo size={40} />
            <span className="font-display text-xl tracking-tight">OrthoDesign</span>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <ul className="flex flex-col gap-3">
              {groupA?.map((l) => (
                <li key={l?.label}>
                  <Link href={l?.href} className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-muted-foreground hover:text-foreground">
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3">
              {groupB?.map((l) => (
                <li key={l?.label}>
                  <Link href={l?.href} className="inline-flex min-h-[44px] items-center text-[15px] font-medium text-muted-foreground hover:text-foreground">
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="confidentialite" className="mt-12 grid gap-6 border-t border-border pt-8 md:grid-cols-2">
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">Confidentialité.</strong> Vos informations personnelles
            restent sur votre appareil. Aucune donnée de santé n’est envoyée à un service de génération d’images.
          </p>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">Limites médicales.</strong> OrthoDesign est un projet de
            recherche en design. Il ne pose aucun diagnostic et ne remplace pas l’avis d’un professionnel de santé.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-[15px] text-muted-foreground sm:flex-row sm:justify-between">
          <p>© 2026 OrthoDesign — projet de master</p>
          <p>Mentions légales · Conditions</p>
        </div>
      </div>
    </footer>
  );
}