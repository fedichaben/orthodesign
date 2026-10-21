'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { Config } from '@/data/catalog';
import { GeneratedImages } from '@/services/imageService';
import { buildRows } from './StepSummary';

interface Props {
  config: Config;
  images: GeneratedImages;
  configId: string;
  date: string;
  onModify: () => void;
  onRegenerate: () => void;
  onRestart: () => void;
}

export default function ResultView({ config, images, configId, date, onModify, onRegenerate, onRestart }: Props) {
  const [view, setView] = useState<'main' | 'front' | 'side'>('main');
  const rows = buildRows(config);
  const tabs: { id: 'main' | 'front' | 'side'; label: string }[] = [
    { id: 'main', label: 'Vue principale' },
    { id: 'front', label: 'Vue de face' },
    { id: 'side', label: 'Vue de profil' },
  ];
  const altByView = {
    main: 'Vue principale du concept de claquette sur fond clair lumineux',
    front: 'Vue de face du concept de claquette sur fond clair lumineux',
    side: 'Vue de profil du concept de claquette sur fond clair lumineux',
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="no-print">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Votre concept</p>
        <h1 className="mt-2 font-display text-4xl sm:text-6xl">Proposition visuelle</h1>
        <p className="mt-3 text-base text-muted-foreground">
          Identifiant {configId} · {date}
        </p>
      </div>

      {images.notice && (
        <p className="no-print mt-5 flex items-start gap-3 rounded-2xl border border-warning/40 bg-muted p-4 text-[15px] leading-relaxed" role="status">
          <Icon name="InformationCircleIcon" size={22} />
          <span>{images.notice}</span>
        </p>
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted">
            <AppImage src={images[view]} alt={altByView[view]} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" priority />
          </div>
          <div className="no-print mt-3 grid grid-cols-3 gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setView(t.id)}
                aria-pressed={view === t.id}
                className={`min-h-[48px] rounded-xl border text-sm font-semibold ${
                  view === t.id ? 'border-foreground bg-primary text-primary-foreground' : 'border-border bg-card'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="font-display text-2xl">Récapitulatif des options</h2>
          <dl className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
            {rows.map((r) => (
              <div key={r.k} className="flex justify-between gap-4 px-4 py-2.5 text-[15px]">
                <dt className="text-muted-foreground">{r.k}</dt>
                <dd className="text-right font-semibold">{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-muted p-5 text-[15px] leading-relaxed text-muted-foreground">
        <strong className="font-semibold text-foreground">Important :</strong> cette image est une proposition visuelle
        et non un modèle de fabrication validé. Elle ne constitue ni un dispositif médical, ni un diagnostic, ni une
        recommandation de santé.
      </div>

      <div className="no-print mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <button type="button" onClick={onModify} className="min-h-[52px] rounded-full border border-foreground/20 px-5 text-base font-semibold">Modifier</button>
        <button type="button" onClick={onRegenerate} className="min-h-[52px] rounded-full border border-foreground/20 px-5 text-base font-semibold">Régénérer</button>
        <button type="button" onClick={() => window.print()} className="min-h-[52px] rounded-full bg-primary px-5 text-base font-semibold text-primary-foreground">Télécharger la fiche</button>
        <Link href="/#contact" className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-foreground/20 px-5 text-base font-semibold">Nous écrire</Link>
        <button type="button" onClick={onRestart} className="min-h-[52px] rounded-full border border-foreground/20 px-5 text-base font-semibold">Recommencer</button>
      </div>
    </div>
  );
}