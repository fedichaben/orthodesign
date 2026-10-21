import { Config } from './catalog';

/**
 * Compatibility rules: only available catalog combinations are selectable.
 * Each rule returns the list of allowed ids for a given field, based on the current config.
 */
export function allowedHeels(c: Config): string[] {
  if (c.soleProfile === 'platform') return ['wedge'];
  if (c.soleProfile === 'rocker') return ['flat', 'wedge'];
  return ['flat', 'low', 'wedge'];
}

export function allowedStraps(c: Config): string[] {
  if (c.soleProfile === 'rocker') return ['single', 'double', 'backstrap'];
  if (c.outline === 'slim') return ['single', 'cross', 'backstrap'];
  return ['single', 'double', 'cross', 'backstrap'];
}

export function allowedToes(c: Config): string[] {
  if (c.outline === 'slim') return ['round', 'almond'];
  if (c.outline === 'wide') return ['round', 'square'];
  return ['round', 'square', 'almond'];
}

export function allowedOuterSoles(c: Config): string[] {
  if (c.soleProfile === 'platform') return ['eva', 'cork'];
  return ['eva', 'rubber', 'cork'];
}

export function allowedTextures(c: Config): string[] {
  if (c.strapMaterial === 'canvas' || c.strapMaterial === 'recycled') return ['woven', 'smooth'];
  return ['smooth', 'grain'];
}

/** Returns a repaired config where incompatible choices fall back to the first allowed option. */
export function normalizeConfig(c: Config): Config {
  const next = { ...c };
  const fix = (key: keyof Config, allowed: string[]) => {
    if (!allowed.includes(next[key] as string)) {
      (next[key] as string) = allowed[0];
    }
  };
  fix('toeShape', allowedToes(next));
  fix('heelProfile', allowedHeels(next));
  fix('strapType', allowedStraps(next));
  fix('outerSole', allowedOuterSoles(next));
  fix('texture', allowedTextures(next));
  return next;
}

export function newConfigId(): string {
  const stamp = Date.now().toString(36).toUpperCase();
  return `OD-${stamp}`;
}