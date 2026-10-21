import React from 'react';
import RevealOnScroll from '../../components/RevealOnScroll';
const objectives = [
  'Explorer le rôle du design comme médiateur entre esthétique et ergonomie.',
  'Rendre la personnalisation accessible, lisible et rassurante.',
  'Documenter les compromis de conception d’une claquette.',
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="bg-background py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <RevealOnScroll className="lg:col-span-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">À propos</p>
          <h2 className="mt-3 font-display text-display-lg">Repenser la relation entre esthétique et ergonomie</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            OrthoDesign est un projet de recherche de master. Il adopte une démarche centrée sur l’utilisateur :
            observer les besoins, formuler des hypothèses de conception, puis les rendre manipulables à travers un outil
            visuel.
          </p>
        </RevealOnScroll>
        <RevealOnScroll className="lg:col-span-6" delay={140}>
          <ul className="space-y-3">
            {objectives?.map((o, i) => (
              <li key={o} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="font-display text-2xl italic text-secondary">0{i + 1}</span>
                <span className="text-base leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 rounded-2xl bg-muted p-5 text-[15px] leading-relaxed text-muted-foreground">
            Transparence : ce site ne présente aucun résultat de recherche, partenariat ou validation clinique. Il s’agit
            d’un prototype d’exploration.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}