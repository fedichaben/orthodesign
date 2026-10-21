import React from 'react';
import { Option } from '@/data/catalog';

interface Props {
  legend: string;
  options: Option[];
  value: string;
  onChange: (id: string) => void;
  allowed?: string[];
  swatches?: boolean;
}

export default function OptionGrid({ legend, options, value, onChange, allowed, swatches }: Props) {
  return (
    <fieldset className="mt-6 first:mt-0">
      <legend className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">{legend}</legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {options.map((o) => {
          const disabled = allowed ? !allowed.includes(o.id) : false;
          const active = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              disabled={disabled}
              onClick={() => onChange(o.id)}
              aria-pressed={active}
              title={disabled ? 'Combinaison non disponible au catalogue' : undefined}
              className={`flex min-h-[52px] items-center gap-2 rounded-2xl border px-3 py-3 text-left text-[15px] font-medium transition-colors ${
                active ? 'border-foreground bg-primary text-primary-foreground' : 'border-border bg-background hover:border-accent'
              } ${disabled ? 'cursor-not-allowed opacity-35' : ''}`}
            >
              {swatches && o.hex && <span className="h-5 w-5 shrink-0 rounded-full border border-border" style={{ backgroundColor: o.hex }} />}
              <span>{o.label}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}