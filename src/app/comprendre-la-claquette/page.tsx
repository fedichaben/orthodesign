import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExplodedView from './components/ExplodedView';
import TradeoffsSection from './components/TradeoffsSection';

export default function ComprendreLaClaquettePage() {
  return (
    <>
      <Header />
      <main className="bg-background pt-16">
        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:pt-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Anatomie</p>
          <h1 className="mt-3 font-display text-hero-xl">Comprendre la claquette</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Six éléments, une même logique : chaque choix de forme ou de matière influence le confort, l’allure et la
            durabilité. Cliquez sur un composant pour en lire le détail.
          </p>
        </section>
        <ExplodedView />
        <TradeoffsSection />
      </main>
      <Footer />
    </>
  );
}