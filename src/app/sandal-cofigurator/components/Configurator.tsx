'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SandalPreview from '@/components/SandalPreview';
import { Config, catalog, defaultConfig } from '@/data/catalog';
import { normalizeConfig, newConfigId } from '@/data/rules';
import { generateImages, GeneratedImages } from '@/services/imageService';
import StepProfile from './StepProfile';
import StepSilhouette from './StepSilhouette';
import StepMaterials from './StepMaterials';
import StepTouches from './StepTouches';
import StepSummary from './StepSummary';
import ResultView from './ResultView';

const stepTitles = ['Profil', 'Silhouette', 'Matières & couleurs', 'Touches personnelles', 'Récapitulatif'];

export default function Configurator() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<Config>(defaultConfig);
  const [phase, setPhase] = useState<'edit' | 'loading' | 'result'>('edit');
  const [images, setImages] = useState<GeneratedImages | null>(null);
  const [configId, setConfigId] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const styleId = params.get('style');
    if (styleId) {
      const style = catalog.styles.find((s) => s.id === styleId);
      if (style) setConfig((c) => normalizeConfig({ ...c, ...style.preset }));
    }
    const preset = params.get('preset');
    if (preset) {
      try {
        const parsed = JSON.parse(decodeURIComponent(preset)) as Partial<Config>;
        setConfig((c) => normalizeConfig({ ...c, ...parsed }));
      } catch {
        /* ignore malformed preset */
      }
    }
  }, [params]);

  const update = (patch: Partial<Config>) => setConfig((c) => normalizeConfig({ ...c, ...patch }));

  const canNext = useMemo(() => (step === 0 ? config.shoeSize !== '' : true), [step, config.shoeSize]);
  const progress = ((step + 1) / stepTitles.length) * 100;

  const generate = async () => {
    setPhase('loading');
    const id = newConfigId();
    setConfigId(id);
    setDate(new Date().toLocaleDateString('fr-FR'));
    const result = await generateImages(config);
    setImages(result);
    setPhase('result');
    try {
      window.sessionStorage.setItem(
        'od-last-result',
        JSON.stringify({ id, summary: `Pointure ${config.shoeSize} · profil ${config.soleProfile} · bride ${config.strapType}` })
      );
    } catch {
      /* ignore */
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (phase === 'loading') {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center" role="status" aria-live="polite">
        <div className="mb-8 h-14 w-14 animate-spin rounded-full border-4 border-secondary border-t-primary" />
        <h1 className="font-display text-4xl">Création de votre concept…</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Nous préparons trois vues de votre claquette. Cela ne prend que quelques instants.
        </p>
      </div>
    );
  }

  if (phase === 'result' && images) {
    return (
      <ResultView
        config={config}
        images={images}
        configId={configId}
        date={date}
        onModify={() => {
          setPhase('edit');
          setStep(4);
        }}
        onRegenerate={generate}
        onRestart={() => {
          setConfig(defaultConfig);
          setImages(null);
          setStep(0);
          setPhase('edit');
        }}
      />
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
      <div className="mb-8">
        <div className="flex items-end justify-between gap-4">
          <h1 className="font-display text-3xl sm:text-5xl">Créer ma claquette</h1>
          <span className="text-sm font-semibold text-muted-foreground">
            Étape {step + 1} / {stepTitles.length}
          </span>
        </div>
        <div
          className="mt-5 h-2 w-full overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progression du configurateur"
        >
          <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
        <ol className="mt-3 hidden gap-2 text-sm font-medium text-muted-foreground sm:flex">
          {stepTitles.map((t, i) => (
            <li key={t} className={`flex-1 ${i === step ? 'text-foreground' : ''}`}>
              {i + 1}. {t}
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-5 sm:p-8">
            {step === 0 && <StepProfile config={config} update={update} />}
            {step === 1 && <StepSilhouette config={config} update={update} />}
            {step === 2 && <StepMaterials config={config} update={update} />}
            {step === 3 && <StepTouches config={config} update={update} />}
            {step === 4 && <StepSummary config={config} onGenerate={generate} />}

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
              <button
                type="button"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-foreground/20 px-7 text-base font-semibold disabled:opacity-40"
              >
                Retour
              </button>
              {step < stepTitles.length - 1 && (
                <button
                  type="button"
                  disabled={!canNext}
                  onClick={() => setStep((s) => s + 1)}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground disabled:opacity-40"
                >
                  Continuer
                </button>
              )}
            </div>
            {!canNext && <p className="mt-3 text-sm text-destructive">Veuillez choisir votre pointure pour continuer.</p>}
          </div>
        </div>

        <aside className="order-1 lg:order-2 lg:col-span-5">
          <div className="sticky top-24 rounded-3xl border border-border bg-muted p-5 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Aperçu en direct</p>
            <div className="mt-4 rounded-2xl bg-card p-4">
              <SandalPreview config={config} className="h-auto w-full" />
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Schéma indicatif mis à jour à chaque choix. Il ne représente pas un modèle de fabrication validé.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}