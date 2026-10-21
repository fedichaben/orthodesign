'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/sandal-configurator', label: 'Créer ma claquette' },
  { href: '/comprendre-la-claquette', label: 'Comprendre la claquette' },
  { href: '/#inspirations', label: 'Inspirations' },
  { href: '/#a-propos', label: 'À propos' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">        <Link href="/" className="flex items-center gap-2" aria-label="OrthoDesign — accueil">
          <AppLogo size={50} className="shrink-0" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {links?.map((l) => (
            <Link
              key={l?.label}
              href={l?.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l?.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/sandal-configurator"
            className="hidden min-h-[44px] items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Commencer ma création
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 h-[calc(100vh-4rem)] bg-background/95 px-6 py-8 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            {links?.map((l) => (
              <Link
                key={l?.label}
                href={l?.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center border-b border-border font-display text-2xl text-foreground"
              >
                {l?.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/sandal-configurator"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground"
          >
            Commencer ma création
          </Link>
        </div>
      )}
    </header>
  );
}