/**
 * MANIFESTE MÉDIA — la seule porte d'entrée des images.
 *
 * Nom de fichier : `<sujet>-labege` — le sujet est ce qu'on voit, la ville est
 * celle du site. Pas de « boxing-center » dans le nom, pas de numéro d'origine.
 *
 * `alt` décrit la scène, jamais un lieu. `legende` dit ce qu'on voit puis le
 * club de destination du site.
 */

export type Media = {
  slug: string;
  source: string;
  alt: string;
  legende?: string;
  focus?: string;
};

const LOT = 'wetransfer_bc-labege_2026-09-08_1014';
const RV = 'Boxing Center Ramonville';

export const MEDIAS = [
  {
    slug: 'club-boxe-labege',
    source: '2023-01-09-Cécile-Domenech-TMBC-270-.jpg',
    alt: 'La salle vue depuis l’étage : le ring bleu à gauche, l’octogone grillagé à droite, et « Boxing Center » peint en bleu sur le mur blanc.',
    legende: `La salle, un soir de cours — ${RV}`,
    focus: '50% 45%',
  },
  {
    slug: 'cage-mma-labege',
    source: '2024-03-14---COMMANDE---TMBC---CcileDomenech-098.jpg',
    alt: 'L’octogone vu de haut, plusieurs binômes travaillant au sol sur le tapis noir.',
    legende: `L’octogone — ${RV}`,
    focus: '50% 50%',
  },
  {
    slug: 'grappling-labege',
    source: '2024-03-14---COMMANDE---TMBC---CcileDomenech-116.jpg',
    alt: 'Deux pratiquants au sol en grappling à l’intérieur de la cage, les drapeaux accrochés au grillage derrière eux.',
    legende: `Travail au sol — ${RV}`,
    focus: '50% 45%',
  },
  {
    slug: 'cours-boxe-labege',
    source: '2023-01-09-Cécile-Domenech-TMBC-205-.jpg',
    alt: 'Un cours sur le ring : plusieurs pratiquants debout entre les cordes, d’autres autour, gants aux mains.',
    legende: `Un cours sur le ring — ${RV}`,
    focus: '50% 40%',
  },
  {
    slug: 'encadrement-boxe-labege',
    source: '2023-01-09-Cécile-Domenech-TMBC-290-.jpg',
    alt: 'Un groupe de dos, mains sur les hanches, écoutant le coach qui parle au milieu du tapis bleu.',
    legende: `La consigne, avant l’exercice — ${RV}`,
    focus: '50% 40%',
  },
  {
    slug: 'entrainement-mma-labege',
    source: '2023-01-09-Cécile-Domenech-TMBC-294-.jpg',
    alt: 'Des pratiquants alignés le long du grillage de la cage, gants et protège-tibias enfilés, attendant le début de l’exercice.',
    legende: `Avant l’exercice, le long de la cage — ${RV}`,
    focus: '50% 40%',
  },
  {
    slug: 'coach-boxe-labege',
    source: 'PHOTOS PUB BOXING CENTER MARDI_059.jpg',
    alt: 'Un coach en t-shirt « Champion », bras croisés, debout devant le grillage de la cage.',
    legende: `L’encadrement — ${RV}`,
    focus: '50% 35%',
  },
  {
    slug: 'preparation-physique-labege',
    source: 'PHOTOS PUB BOXING CENTER MARDI_048.jpg',
    alt: 'Une séance au sol : plusieurs pratiquants en gainage, haltères en main, sous les sacs de frappe.',
    legende: `Renforcement au sol — ${RV}`,
    focus: '45% 50%',
  },
  {
    slug: 'coach-boxe-labege-2',
    source: 'PHOTOS PUB BOXING CENTER MARDI_062.jpg',
    alt: 'Un coach en tenue du club, poing levé, dans la salle.',
    legende: `Au club — ${RV}`,
    focus: '50% 35%',
  },
  {
    slug: 'cardio-labege',
    source: '2023-01-09-Cécile-Domenech-TMBC-273-.jpg',
    alt: 'Le plateau de musculation et de cardio à l’étage : poids, machines, vélo et rameur.',
    legende: `L’étage cardio — ${RV}`,
    focus: '50% 50%',
  },
  {
    slug: 'salle-de-boxe-labege',
    source: '2023-01-09-Cécile-Domenech-TMBC-276-.jpg',
    alt: 'La salle sous sa charpente, sacs de frappe alignés et tapis bleus au sol.',
    legende: `La salle en entier — ${RV}`,
    focus: '50% 45%',
  },
] as const satisfies readonly Media[];

export type MediaSlug = (typeof MEDIAS)[number]['slug'];

const INDEX = new Map(MEDIAS.map((m) => [m.slug, m as Media]));

export function media(slug: MediaSlug): Media {
  const m = INDEX.get(slug);
  if (!m) throw new Error(`Média inconnu : ${slug}`);
  return m;
}

export const DOSSIER_SOURCE = LOT;

/**
 * Les photos par RÔLE, pas par nom de fichier. Les pages partagées de la
 * famille demandent « la photo de hero » ou « la photo de la première
 * séance » ; c'est ce manifeste qui dit laquelle.
 */
export const ROLES = {
  hero: 'club-boxe-labege',
  signature: 'cage-mma-labege',
  premiereSeance: 'encadrement-boxe-labege',
  effort: 'preparation-physique-labege',
  calme: 'cours-boxe-labege',
  salle: 'salle-de-boxe-labege',
} as const satisfies Record<string, MediaSlug>;
