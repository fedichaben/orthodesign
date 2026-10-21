import { Config, catalog } from '@/data/catalog';

export interface GeneratedImages {
  main: string;
  front: string;
  side: string;
  source: 'api' | 'fallback';
  notice?: string;
}

/**
 * Image-generation service layer.
 * Calls the server route /api/generate-image (to be implemented by the future backend),
 * which holds the API key server-side. Only non-personal design options are sent:
 * no name, no contact, no shoe size, no health-related needs.
 * If the backend is unavailable, rate limited or fails, predefined images are returned.
 */
export async function generateImages(config: Config, signal?: AbortSignal): Promise<GeneratedImages> {
  const payload = {
    soleProfile: config.soleProfile,
    toeShape: config.toeShape,
    outline: config.outline,
    heelProfile: config.heelProfile,
    strapType: config.strapType,
    outerSole: config.outerSole,
    insole: config.insole,
    strapMaterial: config.strapMaterial,
    primaryColor: config.primaryColor,
    secondaryColor: config.secondaryColor,
    texture: config.texture,
    finish: config.finish,
    pattern: config.pattern,
  };

  try {
    const res = await fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal,
    });

    if (res.status === 429) {
      return fallback('Trop de demandes pour le moment : des images prédéfinies sont affichées.');
    }
    if (!res.ok) {
      return fallback('Le service de génération est indisponible : des images prédéfinies sont affichées.');
    }
    const data = (await res.json()) as { main?: string; front?: string; side?: string };
    if (!data.main || !data.front || !data.side) {
      return fallback('Réponse incomplète du service : des images prédéfinies sont affichées.');
    }
    return { main: data.main, front: data.front, side: data.side, source: 'api' };
  } catch (err) {
    if ((err as Error).name === 'AbortError') throw err;
    return fallback('Connexion impossible : des images prédéfinies sont affichées.');
  }
}

function fallback(notice: string): GeneratedImages {
  return { ...catalog.fallbackImages, source: 'fallback', notice };
}