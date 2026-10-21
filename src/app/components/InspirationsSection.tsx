import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import RevealOnScroll from '@/components/RevealOnScroll';
import { catalog } from '@/data/catalog';

export default function InspirationsSection() {
  return (
    <section id="inspirations" className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <RevealOnScroll>
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-display-lg max-w-xl">Quatre inspirations de style</h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Choisissez un point de départ : il préremplit le configurateur, vous ajustez ensuite chaque détail.
            </p>
          </div>
        </RevealOnScroll>

        {/* Grid map — 4 cards: Row1 [col1-2: Minimaliste cs-2] [col3: Chic] [col4: Sportif] / Row2 [col1-4: Contemporain cs-4] — 4/4 placed */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {catalog?.styles?.map((s, i) => (
            <RevealOnScroll
              key={s?.id}
              delay={i * 100}
              className={i === 0 ? 'lg:col-span-2' : i === 3 ? 'sm:col-span-2 lg:col-span-4' : ''}
            >
              <Link
                href={`/sandal-configurator?style=${s?.id}`}
                className="group relative block h-full min-h-[320px] overflow-hidden rounded-3xl bg-foreground"
              >
                <AppImage
                  src={s?.image}
                  alt={s?.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-3xl text-background">{s?.label}</h3>
                    <p className="mt-1 text-base text-background">{s?.tagline}</p>
                  </div>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:translate-x-1">
                    <Icon name="ArrowRightIcon" size={20} />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}