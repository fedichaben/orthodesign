import raw from './catalog.json';

export interface Option {
  id: string;
  label: string;
  description?: string;
  hex?: string;
}

export interface Config {
  firstName: string;
  contact: string;
  shoeSize: string;
  needs: string[];
  soleProfile: string;
  toeShape: string;
  outline: string;
  heelProfile: string;
  strapType: string;
  outerSole: string;
  insole: string;
  strapMaterial: string;
  primaryColor: string;
  secondaryColor: string;
  texture: string;
  finish: string;
  pattern: string;
  initials: string;
  colorDetail: string;
  customRequest: string;
}

export interface StyleItem {
  id: string;
  label: string;
  tagline: string;
  image: string;
  alt: string;
  preset: Partial<Config>;
}

export const catalog = raw as unknown as {
  soleProfiles: Option[];
  toeShapes: Option[];
  outlines: Option[];
  heelProfiles: Option[];
  strapTypes: Option[];
  outerSoles: Option[];
  insoles: Option[];
  strapMaterials: Option[];
  colors: Option[];
  textures: Option[];
  finishes: Option[];
  patterns: Option[];
  styles: StyleItem[];
  fallbackImages: { main: string; front: string; side: string };
};

export const defaultConfig: Config = {
  firstName: '',
  contact: '',
  shoeSize: '',
  needs: [],
  soleProfile: 'contoured',
  toeShape: 'round',
  outline: 'regular',
  heelProfile: 'flat',
  strapType: 'single',
  outerSole: 'eva',
  insole: 'memory',
  strapMaterial: 'leather',
  primaryColor: 'sand',
  secondaryColor: 'ivory',
  texture: 'smooth',
  finish: 'matte',
  pattern: 'none',
  initials: '',
  colorDetail: 'taupe',
  customRequest: '',
};

export const needsOptions: string[] = [
  'Marche prolongée',
  'Station debout',
  'Pieds sensibles',
  'Usage quotidien',
  'Usage estival',
  'Maintien renforcé',
];

export const sizeOptions: string[] = Array.from({ length: 12 }, (_, i) => String(36 + i));

export function getLabel(list: Option[], id: string): string {
  return list.find((o) => o.id === id)?.label ?? id;
}

export function getHex(id: string): string {
  return catalog.colors.find((c) => c.id === id)?.hex ?? '#D8C7AF';
}