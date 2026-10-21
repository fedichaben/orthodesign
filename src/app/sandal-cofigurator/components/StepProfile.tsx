import React from 'react';
import { Config, needsOptions, sizeOptions } from '@/data/catalog';

interface Props {
  config: Config;
  update: (patch: Partial<Config>) => void;
}

export default function StepProfile({ config, update }: Props) {
  const toggleNeed = (n: string) => {
    const has = config.needs.includes(n);
    update({ needs: has ? config.needs.filter((x) => x !== n) : [...config.needs, n] });
  };

  return (
    <div>
      <h2 className="font-display text-3xl">Profil et besoins</h2>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">
        Seule la pointure est obligatoire. Les autres informations sont facultatives.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Prénom (facultatif)
          <input
            value={config.firstName}
            onChange={(e) => update({ firstName: e.target.value })}
            className="mt-1 min-h-[48px] w-full rounded-xl border border-input bg-background px-4 text-base"
            autoComplete="given-name"
          />
        </label>
        <label className="block text-sm font-medium">
          E-mail ou téléphone (facultatif)
          <input
            value={config.contact}
            onChange={(e) => update({ contact: e.target.value })}
            className="mt-1 min-h-[48px] w-full rounded-xl border border-input bg-background px-4 text-base"
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Pointure (obligatoire)</legend>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
          {sizeOptions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => update({ shoeSize: s })}
              aria-pressed={config.shoeSize === s}
              className={`min-h-[48px] rounded-xl border text-base font-semibold ${
                config.shoeSize === s ? 'border-foreground bg-primary text-primary-foreground' : 'border-border bg-background'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Vos préférences de confort (facultatif)</legend>
        <div className="flex flex-wrap gap-2">
          {needsOptions.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => toggleNeed(n)}
              aria-pressed={config.needs.includes(n)}
              className={`min-h-[44px] rounded-full border px-4 text-[15px] font-medium ${
                config.needs.includes(n) ? 'border-foreground bg-primary text-primary-foreground' : 'border-border bg-background'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </fieldset>

      <p className="mt-6 rounded-2xl bg-muted p-4 text-[15px] leading-relaxed text-muted-foreground">
        Ces informations orientent uniquement le design visuel. Elles ne constituent ni un diagnostic ni une promesse
        médicale, et ne sont jamais transmises au service de génération d’images. En cas de gêne ou de pathologie, consultez
        un professionnel de santé.
      </p>
    </div>
  );
}