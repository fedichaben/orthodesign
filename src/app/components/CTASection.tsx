import React from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grain" aria-hidden="true" />
      <RevealOnScroll>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-display-lg text-secondary-foreground">À vous de dessiner la prochaine.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-secondary-foreground">
            Cinq étapes, quelques minutes, un concept visuel. Aucun compte, aucun paiement.
          </p>
          <Link
            href="/sandal-configurator"
            className="mt-9 inline-flex min-h-[56px] items-center rounded-full bg-primary px-10 text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Commencer ma création
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}