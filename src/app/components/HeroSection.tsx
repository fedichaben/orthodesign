'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const layerA = useRef<HTMLDivElement>(null);
  const layerB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respecte la préférence "réduire les animations"
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reduceMotion) return;

    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      // Pas besoin d'animer une fois le hero hors écran
      if (y < 1200) {
        if (layerA.current) {
          layerA.current.style.transform = `translate3d(0, ${y * 0.12}px, 0)`;
        }
        if (layerB.current) {
          layerB.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
        }
      }
      ticking = false;
    };

    // requestAnimationFrame : un seul calcul par frame, scroll plus fluide
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-background py-20 sm:py-28 lg:min-h-[720px]"
    >
      {/* Photo d'arrière-plan */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 scale-105 bg-cover bg-[65%_center] sm:bg-center"
        style={{ backgroundImage: "url('/assets/images/hero-orthodesign.png')" }}
        aria-hidden="true"
      />

      {/* Voile beige : dégradé directionnel pour mettre le texte en valeur
          tout en laissant la photo respirer sur la droite */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#F7F5F0]/90 via-[#F7F5F0]/60 to-[#F7F5F0]/20 max-sm:bg-[#F7F5F0]/75"
        aria-hidden="true"
      />

      {/* Formes décoratives (parallax) */}
      <div
        ref={layerA}
        className="pointer-events-none absolute -left-24 top-10 -z-[5] h-[420px] w-[420px] will-change-transform anim-blob blob-sand opacity-30"
        aria-hidden="true"
      />
      <div
        ref={layerB}
        className="pointer-events-none absolute -right-28 bottom-0 -z-[5] h-[380px] w-[380px] will-change-transform anim-blob blob-taupe opacity-25"
        aria-hidden="true"
      />

     {/* Contenu */}
{/* Contenu */}
<div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
  <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-white/40 bg-[#F7F5F0]/25 p-7 text-center shadow-[0_20px_60px_-25px_rgba(60,45,30,0.2)] backdrop-blur-sm sm:p-12 lg:px-16 lg:py-16">

    {/* Badge */}
    <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-sm sm:text-[13px]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
      </span>
      Projet de recherche · Master design
    </p>

    {/* Titre */}
<h1
  id="hero-title"
  className="font-display text-hero-xl leading-[1.05] tracking-tight text-foreground text-balance"
>
  Le confort prend{' '}
  <span className="relative inline-block whitespace-nowrap">
    <span className="italic bg-gradient-to-r from-[#7A5420] via-[#A97B2C] to-[#7A5420] bg-clip-text text-transparent">
      votre forme.
    </span>
    <svg
      aria-hidden="true"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      className="absolute -bottom-2 left-0 h-2.5 w-full text-[#A97B2C]/70"
    >
      <path
        d="M2 8 C 50 2, 110 2, 198 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </span>
</h1>

    {/* Texte centré */}
    <p className="mx-auto mt-8 max-w-2xl text-base font-medium leading-relaxed text-foreground/80 text-pretty sm:text-lg lg:text-xl">
      Composez une claquette où{' '}
      <strong className="font-semibold text-foreground">l’ergonomie</strong> et{' '}
      <strong className="font-semibold text-foreground">l’esthétique</strong>{' '}
      ne se font plus concurrence. Choisissez sa silhouette, ses matières et
      ses couleurs, puis obtenez un concept visuel prêt à discuter.
    </p>

    {/* Boutons centrés */}
    <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
      <Link
        href="/sandal-configurator"
        className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-primary px-9 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:translate-y-0"
      >
        Commencer ma création
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </Link>

      <Link
        href="/comprendre-la-claquette"
        className="group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-foreground/20 bg-white/60 px-8 text-base font-semibold text-foreground transition-all duration-200 hover:border-foreground/40 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2"
      >
        Comprendre la claquette
        <span aria-hidden="true" className="text-foreground/50 transition-transform duration-200 group-hover:translate-x-0.5">
          ↗
        </span>
      </Link>
    </div>
  </div>

</div>
    </section>
  );
}