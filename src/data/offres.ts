/**
 * LE GRAPHE RÉEL DES DISCIPLINES — ce que Ramonville publie, mot pour mot.
 *
 * Relevé le 09/09/2026 sur mmatoulouse.com/activites/.
 *
 * Les intitulés exacts comptent : « Boxe Pieds-Poings », « MMA tous niveaux »,
 * « Lady Punch », « École enfants » sont le vocabulaire que les gens tapent et
 * que les moteurs de réponse peuvent citer sans se tromper.
 */

export type Famille =
  | 'boxe-anglaise'
  | 'kick-boxing'
  | 'mma'
  | 'grappling'
  | 'femme'
  | 'physique'
  | 'enfants';

export type Offre = {
  /** l'intitulé publié par le club, mot pour mot */
  intitule: string;
  famille: Famille;
  ages?: string;
  /** ce qui rend cette offre concrète, en une phrase */
  detail: string;
};

const SOURCE = 'https://mmatoulouse.com/activites/';

export const OFFRES: readonly Offre[] = [
  {
    intitule: 'Boxe Anglaise',
    famille: 'boxe-anglaise',
    detail: 'Les poings, la garde, les déplacements. La porte d’entrée la plus simple.',
  },
  {
    intitule: 'Boxe Pieds-Poings',
    famille: 'kick-boxing',
    detail: 'Les jambes en plus des poings, en garde haute et sur appuis.',
  },
  {
    intitule: 'MMA tous niveaux',
    famille: 'mma',
    detail: 'Debout, au corps à corps et au sol — dans l’octogone de sept mètres.',
  },
  {
    intitule: 'Grappling',
    famille: 'grappling',
    detail: 'Contrôle, projections et soumissions. Aucune frappe.',
  },
  {
    intitule: 'Lady Punch',
    famille: 'femme',
    detail: 'Le geste de boxe et le cardio, entre femmes.',
  },
  {
    intitule: 'Boxing Camp',
    famille: 'physique',
    detail: 'Le circuit qui construit le souffle et le gainage.',
  },
  {
    intitule: 'Accès libre',
    famille: 'physique',
    detail: 'L’étage : poids, machines, vélo et rameur, quand tu veux.',
  },
  {
    intitule: 'École enfants',
    famille: 'enfants',
    ages: 'dès 3 ans',
    detail: 'Trois groupes — 3 à 6 ans, 7 à 11 ans, 12 à 16 ans. On touche, on ne frappe pas.',
  },
] as const;

export const SOURCE_OFFRES = SOURCE;

export const offresDe = (f: Famille) => OFFRES.filter((o) => o.famille === f);

/** Les familles portées par chaque page de discipline du site. */
export const FAMILLES_PAR_PAGE = {
  'boxe-anglaise': ['boxe-anglaise'],
  mma: ['mma', 'grappling'],
  'kick-boxing': ['kick-boxing'],
  'boxe-enfants': ['enfants'],
  'boxing-fitness': ['femme', 'physique'],
} as const satisfies Record<string, readonly Famille[]>;

export type PageDiscipline = keyof typeof FAMILLES_PAR_PAGE;

export const offresDeLaPage = (page: PageDiscipline) =>
  OFFRES.filter((o) => (FAMILLES_PAR_PAGE[page] as readonly Famille[]).includes(o.famille));
