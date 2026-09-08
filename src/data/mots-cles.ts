/**
 * REGISTRE DES MOTS-CLÉS — le territoire de recherche, page par page.
 *
 * Principe : plus de pertinence PAR page, pas plus de pages. Neuf pages de
 * fond, deux pages de commune qui portent chacune une géographie réelle.
 *
 * Un motif n'entre dans une page que si la page répond réellement à la
 * question qu'il porte. Le contrôle de build vérifie chaque prioritaire dans le
 * texte visible : chaque motif gardé est une promesse d'écriture. Les
 * prioritaires sont les composants naturels d'une expression — la requête
 * exacte vit dans le title et la description, où elle ne tord aucune phrase.
 *
 * Particularité de Labège : le site parle à deux publics. Ceux qui habitent la
 * commune, et les milliers de personnes qui travaillent à l'Innopole et
 * cherchent un cours du midi ou de sortie de bureau.
 */

import type { RouteId } from './routes';

export type Cluster = {
  page: RouteId;
  prioritaires: readonly string[];
  secondaires: readonly string[];
};

export const CONTEXTE_GEO = {
  ville: 'Labège',
  codePostal: '31670',
  gentile: 'Labégeois',
  departement: 'Haute-Garonne',
  secteur: 'sud-est toulousain',
} as const;

export const CLUSTERS: readonly Cluster[] = [
  {
    page: 'accueil',
    prioritaires: ['club de boxe', 'Labège', 'sport de combat', 'MMA', 'Ramonville'],
    secondaires: [
      'boxe Labège',
      'club de boxe près de Labège',
      'salle de boxe près de Labège',
      'club MMA Labège',
      'cours de boxe Labège',
      'boxe anglaise Labège',
      'grappling Labège',
      'boxe enfant Labège',
      '31670',
      'Labégeois',
      'Innopole',
      'Enova',
      'métro B',
      'sud-est toulousain',
      'cours du midi Labège',
      'à ciel ouvert',
    ],
  },
  {
    page: 'boxe-anglaise',
    prioritaires: ['boxe anglaise', 'Labège', 'débutant'],
    secondaires: [
      'cours de boxe Labège',
      'club de boxe Labège',
      'boxe loisir',
      'apprendre à boxer',
      'gants prêtés',
      'noble art',
      'pattes d’ours',
    ],
  },
  {
    page: 'mma',
    prioritaires: ['MMA', 'Labège', 'grappling', 'octogone'],
    secondaires: [
      'club MMA Labège',
      'salle MMA Labège',
      'cours MMA Labège',
      'MMA débutant Labège',
      'jiu-jitsu brésilien',
      'arts martiaux mixtes',
      'combat au sol',
      'cage MMA',
      'à ciel ouvert',
    ],
  },
  {
    page: 'kick-boxing',
    prioritaires: ['pieds-poings', 'Labège', 'kick-boxing'],
    secondaires: [
      'boxe pieds poings Labège',
      'kick boxing Labège',
      'boxe thaï Labège',
      'K1',
      'low kick',
      'striking',
    ],
  },
  {
    page: 'boxe-enfants',
    prioritaires: ['boxe enfant', 'Labège', 'École enfants', '3 ans'],
    secondaires: [
      'cours de boxe enfant Labège',
      'boxe ado Labège',
      'sport de combat enfant',
      'boxe éducative',
      '3 à 6 ans',
      '7 à 11 ans',
      '12 à 16 ans',
    ],
  },
  {
    page: 'boxing-fitness',
    prioritaires: ['Lady Punch', 'Labège', 'femme'],
    secondaires: [
      'boxe femme Labège',
      'Boxing Camp',
      'cardio boxing Labège',
      'musculation Labège',
      'accès libre',
      'reprendre le sport',
    ],
  },
  {
    page: 'premiere-seance',
    prioritaires: ['première séance', 'Labège', 'débutant'],
    secondaires: [
      'première séance boxe Labège',
      'cours d’essai boxe Labège',
      'commencer la boxe',
      'jamais fait de boxe',
      'gants prêtés',
      'que faut-il apporter',
    ],
  },
  {
    page: 'ta-seance',
    prioritaires: ['Labège', 'créneau', 'Ramonville'],
    secondaires: [
      'planning boxe Labège',
      'horaires boxe Labège',
      'cours du midi Labège',
      'boxe le soir Labège',
      'boxe le samedi',
      'sortie de bureau',
    ],
  },
  {
    page: 'saint-orens-de-gameville',
    prioritaires: [
      'club de boxe Saint-Orens-de-Gameville',
      'boxe anglaise Saint-Orens-de-Gameville',
      'club MMA Saint-Orens-de-Gameville',
      'salle MMA Saint-Orens-de-Gameville',
      'sport de combat Saint-Orens-de-Gameville',
      'club kick boxing Saint-Orens-de-Gameville',
      'boxe pieds poings Saint-Orens-de-Gameville',
      'club boxe thaï Saint-Orens-de-Gameville',
    ],
    secondaires: [
      'boxe Saint-Orens',
      'salle de boxe Saint-Orens',
      'boxe enfant Saint-Orens',
      'Saint-Orennais',
      '31650',
      'ligne 79',
    ],
  },
  {
    page: 'castanet-tolosan',
    prioritaires: [
      'club de boxe Castanet-Tolosan',
      'boxe anglaise Castanet-Tolosan',
      'club MMA Castanet-Tolosan',
      'salle MMA Castanet-Tolosan',
      'sport de combat Castanet-Tolosan',
      'club kick boxing Castanet-Tolosan',
      'boxe pieds poings Castanet-Tolosan',
      'club boxe thaï Castanet-Tolosan',
    ],
    secondaires: [
      'boxe Castanet',
      'salle de boxe Castanet-Tolosan',
      'boxe enfant Castanet-Tolosan',
      'Castanéens',
      '31320',
      'Linéo L6',
      'RD 813',
    ],
  },
  {
    page: 'contact',
    prioritaires: ['Labège', 'contact'],
    secondaires: [
      'club de boxe près de Labège',
      'inscription boxe Labège',
      'cours d’essai boxe Labège',
    ],
  },
] as const;

export const cluster = (page: RouteId) => CLUSTERS.find((c) => c.page === page);

/**
 * Les motifs exacts, instanciés sur un lieu. Ils servent la liste de questions
 * des pages communes : à gauche la recherche telle qu'elle se tape, à droite le
 * fait qui y répond.
 */
export const motifs = (lieu: string) =>
  [
    `club de boxe ${lieu}`,
    `boxe anglaise ${lieu}`,
    `club MMA ${lieu}`,
    `salle MMA ${lieu}`,
    `sport de combat ${lieu}`,
    `club kick boxing ${lieu}`,
    `boxe pieds poings ${lieu}`,
    `club boxe thaï ${lieu}`,
  ] as const;
