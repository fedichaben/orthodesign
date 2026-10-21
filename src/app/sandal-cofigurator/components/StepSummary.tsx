import React from 'react';
import { Config, catalog, getLabel } from '@/data/catalog';

interface Props {
  config: Config;
  onGenerate: () => void;
}

export function buildRows(c: Config): { k: string; v: string }[] {
  return [
    { k: 'Pointure', v: c.shoeSize || '—' },
    { k: 'Profil de semelle', v: getLabel(catalog.soleProfiles, c.soleProfile) },
    { k: 'Contour', v: getLabel(catalog.outlines, c.outline) },
    { k: 'Bout', v: getLabel(catalog.toeShapes, c.toeShape) },
    { k: 'Talon', v: getLabel(catalog.heelProfiles, c.heelProfile) },
    { k: 'Bride', v: getLabel(catalog.strapTypes, c.strapType) },
    { k: 'Semelle extérieure', v: getLabel(catalog.outerSoles, c.outerSole) },
    { k: 'Semelle intérieure', v: getLabel(catalog.insoles, c.insole) },
    { k: 'Matière de bride', v: getLabel(catalog.strapMaterials, c.strapMaterial) },
    { k: 'Couleur principale', v: getLabel(catalog.colors, c.primaryColor) },
    { k: 'Couleur secondaire', v: getLabel(catalog.colors, c.secondaryColor) },
    { k: 'Texture / finition', v: `${getLabel(catalog.textures, c.texture)} · ${getLabel(catalog.finishes, c.finish)}` },
    { k: 'Motif', v: getLabel(catalog.patterns, c.pattern) },
    { k: 'Initiales', v: c.initials ? c.initials.toUpperCase() : '—' },
  ];
}

export default function StepSummary({ config, onGenerate }: Props) {
  const rows = buildRows(config);
  return (
    <div>
      <h2 className="font-display text-3xl">Récapitulatif</h2>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">Vérifiez vos choix avant de générer votre concept.</p>
      <dl className="mt-6 divide-y divide-border rounded-2xl border border-border">
        {rows.map((r) => (
          <div key={r.k} className="flex justify-between gap-4 px-4 py-3 text-[15px]">
            <dt className="text-muted-foreground">{r.k}</dt>
            <dd className="text-right font-semibold">{r.v}</dd>
          </div>
        ))}
      </dl>
      {config.customRequest && (
        <p className="mt-4 rounded-2xl bg-muted p-4 text-[15px] leading-relaxed">
          <strong className="font-semibold">Demande :</strong> {config.customRequest}
        </p>
      )}
      <button
        type="button"
        onClick={onGenerate}
        disabled={!config.shoeSize}
        className="mt-8 inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground disabled:opacity-40 sm:w-auto"
      >
        Générer mon concept
      </button>
      <p className="mt-3 text-sm text-muted-foreground">
        Seules les options de design sont utilisées. Votre prénom, vos contacts, votre pointure et vos préférences de
        confort ne sont pas transmis.
      </p>
    </div>
  );
}