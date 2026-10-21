import React from 'react';
import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

const tradeoffs = [
  {
    title: 'Amorti ↔ stabilité',
    text: 'Une semelle épaisse absorbe davantage mais s’éloigne du sol : elle peut réduire la sensation de stabilité.',
  },
  {
    title: 'Légèreté ↔ durabilité',
    text: 'Les matières légères allègent le pas, mais s’usent plus vite que des gommes denses.',
  },
  {
    title: 'Ajustement ↔ épure visuelle',
    text: 'Chaque point de réglage améliore l’adaptation au pied tout en ajoutant un élément visible.',
  },
  {
    title: 'Souplesse ↔ maintien',
    text: 'Une bride très souple est agréable, mais elle retient moins le pied lors de la marche.',
  },
];

export default function TradeoffsSection() {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <RevealOnScroll>
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80">Comprendre les compromis</p>
          <h2 className="mt-3 max-w-2xl font-display text-display-lg">Concevoir, c’est arbitrer.</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-90">
            Aucune claquette ne maximise tout à la fois. Le design consiste à choisir en conscience ce que l’on privilégie.
          </p>
        </RevealOnScroll>

        {/* Grid map — 4 cards: Row1 [col1: Amorti] [col2: Légèreté] / Row2 [col1: Ajustement] [col2: Souplesse] — 4/4 placed */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {tradeoffs?.map((t, i) => (
            <RevealOnScroll key={t?.title} delay={i * 100}>
              <article className="h-full rounded-3xl border border-background/25 p-7">
                <h3 className="font-display text-2xl">{t?.title}</h3>
                <p className="mt-3 text-base leading-relaxed opacity-90">{t?.text}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <p className="mt-10 max-w-2xl rounded-2xl border border-background/25 p-5 text-[15px] leading-relaxed opacity-90">
          Ces repères relèvent de la conception et non de la médecine. Ils ne remplacent pas l’avis d’un professionnel de
          santé en cas de douleur ou de pathologie du pied.
        </p>

        <Link
          href="/sandal-configurator"
          className="mt-8 inline-flex min-h-[52px] items-center rounded-full bg-background px-8 text-base font-semibold text-foreground transition-transform hover:-translate-y-0.5"
        >
          Appliquer ces choix dans le configurateur
        </Link>
      </div>
    </section>
  );
}