import React from 'react';
import { Config, catalog } from '@/data/catalog';
import { allowedOuterSoles, allowedTextures } from '@/data/rules';
import OptionGrid from './OptionGrid';

interface Props {
  config: Config;
  update: (patch: Partial<Config>) => void;
}

export default function StepMaterials({ config, update }: Props) {
  return (
    <div>
      <h2 className="font-display text-3xl">Matières et couleurs</h2>
      <p className="mt-2 mb-6 text-base leading-relaxed text-muted-foreground">Composez l’ensemble de vos matériaux et de votre palette.</p>
      <OptionGrid legend="Semelle extérieure" options={catalog.outerSoles} value={config.outerSole} onChange={(id) => update({ outerSole: id })} allowed={allowedOuterSoles(config)} />
      <OptionGrid legend="Semelle intérieure" options={catalog.insoles} value={config.insole} onChange={(id) => update({ insole: id })} />
      <OptionGrid legend="Matière de la bride" options={catalog.strapMaterials} value={config.strapMaterial} onChange={(id) => update({ strapMaterial: id })} />
      <OptionGrid legend="Couleur principale" options={catalog.colors} value={config.primaryColor} onChange={(id) => update({ primaryColor: id })} swatches />
      <OptionGrid legend="Couleur secondaire" options={catalog.colors} value={config.secondaryColor} onChange={(id) => update({ secondaryColor: id })} swatches />
      <OptionGrid legend="Texture" options={catalog.textures} value={config.texture} onChange={(id) => update({ texture: id })} allowed={allowedTextures(config)} />
      <OptionGrid legend="Finition" options={catalog.finishes} value={config.finish} onChange={(id) => update({ finish: id })} />
    </div>
  );
}