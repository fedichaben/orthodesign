import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

const parts = [
  'Bride / tige',
  'Semelle intérieure',
  'Couche intermédiaire',
  'Semelle extérieure',
  'Système de fermeture',
  'Coutures & finitions',
];

export default function ComponentsIntroSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        {/* Introduction */}
        <RevealOnScroll className="lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
            Anatomie du produit
          </p>

          <h2 className="mt-3 font-display text-display-lg">
            Chaque couche a un rôle.
          </h2>

          <p className="mt-6 max-w-md text-lg leading-relaxed opacity-90">
            Une claquette se compose de six éléments qui dialoguent.
            Explorez sa structure et découvrez comment chaque choix de
            conception influence l’esthétique, le confort d’usage et la
            durabilité.
          </p>

          <Link
            href="/comprendre-la-claquette"
            className="mt-8 inline-flex min-h-[52px] items-center rounded-full bg-background px-8 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Explorer les composants
          </Link>
        </RevealOnScroll>

        {/* Photo réelle en vue éclatée */}
        <RevealOnScroll className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-background/20 bg-[#F1E7DA]">
            <div className="relative w-full">
              <Image
                src="/assets/images/claquette/vue-eclatee.png"
                alt="Vue éclatée de la claquette OrthoDesign présentant la bride, la semelle intérieure, la couche intermédiaire, la semelle extérieure, le système de fermeture et les finitions"
                width={1536}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="h-auto w-full object-contain"
                priority={false}
              />
            </div>

            <div className="border-t border-black/10 px-4 py-3 text-center text-sm text-[#514338]">
              Les six composants d’une même claquette
            </div>
          </div>

          {/* Liste des composants */}
          <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {parts.map((part, index) => (
              <li
                key={part}
                className="flex min-h-[44px] items-center gap-2 rounded-xl border border-background/25 px-3 py-2 text-sm font-medium"
              >
                <span className="text-xs opacity-70">
                  0{index + 1}
                </span>
                <span>{part}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}