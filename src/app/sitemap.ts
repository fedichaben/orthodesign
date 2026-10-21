import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  return [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/sandal-configurator`, priority: 0.8 },
    { url: `${base}/comprendre-la-claquette`, priority: 0.8 },
  ];
}