import React from 'react';
import { Config, catalog } from '@/data/catalog';
import OptionGrid from './OptionGrid';

interface Props {
  config: Config;
  update: (patch: Partial<Config>) => void;
}

export default function StepTouches({ config, update }: Props) {
  return (
    <div>
      <h2 className="font-display text-3xl">Touches personnelles</h2>
      <p className="mt-2 mb-6 text-base leading-relaxed text-muted-foreground">Un motif, des initiales, un détail de couleur.</p>
      <OptionGrid legend="Motif" options={catalog.patterns} value={config.pattern} onChange={(id) => update({ pattern: id })} />
      <OptionGrid legend="Détail de couleur" options={catalog.colors} value={config.colorDetail} onChange={(id) => update({ colorDetail: id })} swatches />

      <label className="mt-6 block text-sm font-medium">
        Initiales (3 lettres maximum)
        <input
          maxLength={3}
          value={config.initials}
          onChange={(e) => update({ initials: e.target.value })}
          className="mt-1 min-h-[48px] w-full rounded-xl border border-input bg-background px-4 text-base uppercase tracking-widest sm:w-48"
        />
      </label>

      <label className="mt-6 block text-sm font-medium">
        Demande personnalisée (facultatif)
        <textarea
          value={config.customRequest}
          onChange={(e) => update({ customRequest: e.target.value })}
          className="mt-1 min-h-[110px] w-full rounded-xl border border-input bg-background px-4 py-3 text-base"
        />
      </label>

      <p className="mt-4 rounded-2xl border border-warning/40 bg-muted p-4 text-[15px] leading-relaxed text-foreground">
        <strong className="font-semibold">Attention :</strong> toute modification structurelle (forme de la semelle, soutien,
        correction) nécessite une évaluation séparée par un professionnel. Elle n’est pas traitée par cet outil.
      </p>
    </div>
  );
}