export interface PartInfo {
  id: string;
  name: string;
  description: string;
  role: string;
  params: string[];
  constraints: string[];
  image: string;
}

export const parts: PartInfo[] = [
  {
    id: 'strap',
    name: 'Bride / tige',
    description:
      'La bride est la partie supérieure de la claquette. Elle recouvre une partie du dessus du pied et contribue à son identité esthétique.',
    role:
      'Maintenir le pied dans la claquette, limiter les mouvements indésirables et participer au style général du produit.',
    params: ['Type de bride', 'Matière', 'Couleur', 'Texture', 'Largeur'],
    constraints: [
      'Une bride trop serrée peut créer des points de pression.',
      'Une matière trop rigide peut réduire le confort.',
      'La largeur et la forme doivent être adaptées au pied.',
    ],
    image: '/assets/images/claquette/bride.jpg',
  },
  {
    id: 'insole',
    name: 'Semelle intérieure',
    description:
      'La semelle intérieure constitue la surface sur laquelle repose la plante du pied. Sa forme et sa texture influencent directement la sensation au contact.',
    role:
      'Offrir une surface de contact confortable et contribuer au maintien du pied selon sa forme et les matériaux utilisés.',
    params: ['Matière', 'Épaisseur', 'Texture', 'Couleur', 'Forme ergonomique'],
    constraints: [
      'Une surface trop dure peut être inconfortable pour certains utilisateurs.',
      'Une mousse très souple peut se déformer avec le temps.',
      'La texture doit être compatible avec l’usage prévu et l’entretien.',
    ],
    image: '/assets/images/claquette/semelle-interieure.jpg',
  },
  {
    id: 'midlayer',
    name: 'Couche intermédiaire',
    description:
      'La couche intermédiaire se situe entre la surface d’appui du pied et la semelle extérieure. Elle contribue au volume et à la structure de la semelle.',
    role:
      'Participer à l’amorti, à la répartition des pressions et à la structure générale de la claquette.',
    params: ['Matière', 'Densité', 'Épaisseur', 'Hauteur', 'Profil'],
    constraints: [
      'Une couche plus épaisse peut augmenter le volume de la claquette.',
      'Une matière trop souple peut réduire la stabilité.',
      'Le choix doit tenir compte du poids, de la durabilité et de l’usage.',
    ],
    image: '/assets/images/claquette/couche-intermediaire.jpg',
  },
  {
    id: 'outsole',
    name: 'Semelle extérieure',
    description:
      'La semelle extérieure est la partie inférieure de la claquette, directement exposée au sol. Son relief et sa matière influencent son comportement à l’usage.',
    role:
      'Contribuer à l’adhérence, protéger les couches supérieures de l’usure et assurer une base adaptée à la marche.',
    params: ['Matière', 'Motif de la semelle', 'Épaisseur', 'Couleur', 'Relief'],
    constraints: [
      'Le motif doit être adapté aux surfaces sur lesquelles la claquette sera utilisée.',
      'Une matière dense peut augmenter le poids.',
      'L’usure dépend de la matière, du relief et des conditions d’utilisation.',
    ],
    image: '/assets/images/claquette/semelle-exterieure.jpg',
  },
  {
    id: 'closure',
    name: 'Système de fermeture',
    description:
      'Le système de fermeture permet d’ajuster la bride. Il peut prendre la forme d’une boucle, d’une bande autoagrippante ou d’un autre mécanisme de réglage.',
    role:
      'Faciliter l’ajustement de la claquette au volume du pied et permettre une mise en place adaptée à l’utilisateur.',
    params: ['Type de fermeture', 'Position', 'Niveau de réglage', 'Matière', 'Finition'],
    constraints: [
      'Un mécanisme trop complexe peut rendre l’utilisation moins pratique.',
      'Les éléments de fermeture doivent limiter les frottements gênants.',
      'La solidité du mécanisme doit être cohérente avec l’usage prévu.',
    ],
    image: '/assets/images/claquette/fermeture.jpg',
  },
  {
    id: 'stitching',
    name: 'Coutures & finitions',
    description:
      'Les coutures et les finitions concernent l’assemblage des éléments, le traitement des bords et les détails visibles de fabrication.',
    role:
      'Contribuer à la cohésion des éléments, à la qualité visuelle et à la durabilité de l’assemblage.',
    params: ['Couleur du fil', 'Type de couture', 'Finition des bords', 'Régularité', 'Détails décoratifs'],
    constraints: [
      'Une couture mal positionnée peut créer des zones de frottement.',
      'Une finition régulière demande une fabrication précise.',
      'Les matériaux et les techniques d’assemblage doivent être compatibles.',
    ],
    image: '/assets/images/claquette/coutures-finitions.jpg',
  },
];