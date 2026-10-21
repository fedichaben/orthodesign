import React from 'react';
import { Config, catalog } from '@/data/catalog';
import { allowedHeels, allowedStraps, allowedToes } from '@/data/rules';
import OptionGrid from './OptionGrid';

interface Props {
  config: Config;
  update: (patch: Partial<Config>) => void;
}

export default function StepSilhouette({ config, update }: Props) {
  return (
    <div>
      <h2 className="font-display text-3xl">Silhouette</h2>
      <p className="mt-2 mb-6 text-base leading-relaxed text-muted-foreground">
        Seules les combinaisons disponibles au catalogue restent sélectionnables.
      </p>
      <OptionGrid legend="Profil de semelle" options={catalog.soleProfiles} value={config.soleProfile} onChange={(id) => update({ soleProfile: id })} />
      <OptionGrid legend="Contour" options={catalog.outlines} value={config.outline} onChange={(id) => update({ outline: id })} />
      <OptionGrid legend="Forme du bout" options={catalog.toeShapes} value={config.toeShape} onChange={(id) => update({ toeShape: id })} allowed={allowedToes(config)} />
      <OptionGrid legend="Profil du talon" options={catalog.heelProfiles} value={config.heelProfile} onChange={(id) => update({ heelProfile: id })} allowed={allowedHeels(config)} />
      <OptionGrid legend="Type de bride" options={catalog.strapTypes} value={config.strapType} onChange={(id) => update({ strapType: id })} allowed={allowedStraps(config)} />
    </div>
  );
}