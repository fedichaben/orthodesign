 'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { parts } from './componentsData';

const order = [
  'strap',
  'closure',
  'insole',
  'midlayer',
  'outsole',
  'stitching',
];

export default function ExplodedView() {
  const [activeId, setActiveId] = useState<string>('strap');

  const active = parts.find((part) => part.id === activeId) ?? parts[0];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
      <div className="grid items-start gap-8 lg:grid-cols-12">
        {/* Galerie photographique et sélection des composants */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="relative aspect-[4/3] w-full bg-[#F7F5F0]">
              <Image
                key={active.image}
                src={active.image}
                alt={`Photographie du composant : ${active.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain p-3 sm:p-6"
                priority={activeId === 'strap'}
              />
            </div>

            <div className="border-t border-border p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Composant sélectionné
              </p>

              <h2 className="mt-2 font-display text-2xl sm:text-3xl">
                {active.name}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {active.description}
              </p>
            </div>
          </div>

          {/* Boutons de sélection */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {order.map((id) => {
              const part = parts.find((item) => item.id === id);

              if (!part) return null;

              const isActive = part.id === activeId;

              return (
                <button
                  key={part.id}
                  type="button"
                  onClick={() => setActiveId(part.id)}
                  aria-pressed={isActive}
                  className={`flex min-h-[64px] items-center justify-center rounded-2xl border px-3 py-3 text-center text-sm font-semibold transition-colors ${
                    isActive
                      ? 'border-foreground bg-primary text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  {part.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Informations détaillées */}
        <article
          className="rounded-3xl border border-border bg-card p-6 sm:p-8 lg:sticky lg:top-24 lg:col-span-5"
          aria-live="polite"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Anatomie de la claquette
          </p>

          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {active.name}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {active.description}
          </p>

          <div className="mt-7 border-t border-border pt-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Rôle du composant
            </h3>

            <p className="mt-2 text-base leading-relaxed">
              {active.role}
            </p>
          </div>

          <div className="mt-7 border-t border-border pt-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Paramètres de conception
            </h3>

            <ul className="mt-3 flex flex-wrap gap-2">
              {active.params.map((param) => (
                <li
                  key={param}
                  className="rounded-full bg-muted px-3 py-2 text-sm font-medium"
                >
                  {param}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 border-t border-border pt-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contraintes de conception
            </h3>

            <ul className="mt-3 space-y-3">
              {active.constraints.map((constraint) => (
                <li
                  key={constraint}
                  className="flex gap-3 rounded-2xl border border-border p-4 text-sm leading-relaxed"
                >
                  <span
                    className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{constraint}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 rounded-2xl bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
            Chaque composant participe à l’équilibre entre esthétique,
            ergonomie, confort d’usage et durabilité. Les effets dépendent
            des matériaux, de la conception et de l’utilisateur.
          </p>
        </article>
      </div>
    </section>
  );
}