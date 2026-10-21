import React from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';
import Image from 'next/image';

const steps = [
  { n: 'I', title: 'Votre profil', text: 'Taille obligatoire, besoins en option, aucune donnée sensible requise.', offset: 'lg:mt-0' },
  { n: 'II', title: 'La silhouette', text: 'Profil de semelle, bout, contour, talon et type de bride.', offset: 'lg:mt-12' },
  { n: 'III', title: 'Matières & couleurs', text: 'Semelles, brides, teintes, textures et finitions.', offset: 'lg:mt-4' },
  { n: 'IV', title: 'Votre concept', text: 'Trois vues, récapitulatif et fiche imprimable.', offset: 'lg:mt-16' },
];

export default function ProcessSection() {
  return (
    <section className="bg-muted py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <RevealOnScroll>
          <h2 className="font-display text-display-lg max-w-xl">Comment ça fonctionne</h2>
        </RevealOnScroll>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps?.map((s, i) => (
            <RevealOnScroll key={s?.n} delay={i * 110} className={s?.offset}>
              <div className="h-full rounded-3xl border border-border bg-card p-7">
                <span className="font-display text-5xl italic text-secondary">{s?.n}</span>
                <h3 className="mt-6 font-display text-2xl">{s?.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{s?.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}