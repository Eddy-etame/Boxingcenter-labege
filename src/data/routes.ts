/**
 * REGISTRE DES ROUTES — une page = une question que quelqu'un se pose vraiment.
 *
 * Aucune URL n'est écrite en dur ailleurs : on passe par `route('mma')`.
 * Titres et descriptions vivent ici parce qu'ils font partie de
 * l'architecture de recherche, pas de la mise en page.
 *
 * Plannings et Tarifs ne sont PAS des pages : ce sont des liens directs vers
 * les pages réelles du club. Recopier un planning, c'est publier une
 * information fausse à la première modification.
 */

import { DESTINATION } from './verite';

export type RouteId =
  | 'accueil'
  | 'boxe-anglaise'
  | 'mma'
  | 'kick-boxing'
  | 'boxe-enfants'
  | 'boxing-fitness'
  | 'premiere-seance'
  | 'ta-seance'
  | 'transports'
  | 'saint-orens-de-gameville'
  | 'castanet-tolosan'
  | 'contact'
  | 'merci'
  | 'introuvable'
  | 'mentions-legales'
  | 'confidentialite';

export type Route = {
  id: RouteId;
  chemin: string;
  nav: string;
  question: string;
  titre: string;
  description: string;
  menu: boolean;
  index: boolean;
  commune?: true;
  promo?: true;
};

export const ROUTES: readonly Route[] = [
  {
    id: 'accueil',
    chemin: '/',
    nav: 'Accueil',
    question: 'Où boxer quand on habite ou qu’on travaille à Labège ?',
    titre: 'Club de boxe et MMA près de Labège | Boxing Center',
    description:
      'Boxe, MMA, grappling et sports de combat à proximité de Labège : Boxing Center accueille les Labégeois à Ramonville, au terminus du métro B. 300 m² à ciel ouvert.',
    menu: true,
    index: true,
  },
  {
    id: 'boxe-anglaise',
    chemin: '/boxe-anglaise/',
    nav: 'Boxe anglaise',
    question: 'À quoi ressemble un cours de boxe anglaise, et est-ce que je peux commencer ?',
    titre: 'Boxe anglaise près de Labège | Boxing Center',
    description:
      'Cours de boxe anglaise accessibles depuis Labège, au club Boxing Center de Ramonville. Aucun niveau demandé, gants prêtés, six jours sur sept.',
    menu: true,
    index: true,
  },
  {
    id: 'mma',
    chemin: '/mma/',
    nav: 'MMA',
    question: 'Où faire du MMA quand on part de Labège ?',
    titre: 'Club MMA et grappling près de Labège | Boxing Center',
    description:
      'Salle MMA à proximité de Labège : Boxing Center Ramonville entraîne le MMA dans un octogone de sept mètres, à ciel ouvert, avec le grappling. Débutants accueillis.',
    menu: true,
    index: true,
  },
  {
    id: 'kick-boxing',
    chemin: '/kick-boxing/',
    nav: 'Pieds-poings',
    question: 'Je veux frapper avec les jambes aussi. Où ?',
    titre: 'Club de kick-boxing près de Labège | Boxing Center',
    description:
      'Le club publie la Boxe Pieds-Poings : poings et jambes, en garde haute. Accessible depuis Labège par la ligne 79, au terminus du métro B à Ramonville.',
    menu: true,
    index: true,
  },
  {
    id: 'boxe-enfants',
    chemin: '/boxe-enfants/',
    nav: 'Boxe enfants',
    question: 'Quelle boxe pour mon enfant, et à partir de quel âge ?',
    titre: 'Boxe enfant dès 3 ans près de Labège | Boxing Center',
    description:
      'L’École enfants du club accueille dès 3 ans, en trois groupes : 3-6, 7-11 et 12-16 ans. On touche, on ne frappe pas. À Ramonville, accessible depuis Labège.',
    menu: true,
    index: true,
  },
  {
    id: 'boxing-fitness',
    chemin: '/boxing-fitness/',
    nav: 'Fitness',
    question: 'Je veux la forme et le défoulement, sans combattre.',
    titre: 'Lady Punch et Boxing Camp près de Labège | Boxing Center',
    description:
      'Lady Punch entre femmes, Boxing Camp en circuit, et un étage de musculation en accès libre. À Ramonville, à proximité de Labège et de l’Innopole.',
    menu: true,
    index: true,
  },
  {
    id: 'premiere-seance',
    chemin: '/premiere-seance/',
    nav: 'Première séance',
    question: 'Je n’ai jamais boxé. Qu’est-ce qui va m’arriver ?',
    titre: 'Première séance de boxe près de Labège | Boxing Center',
    description:
      'Ce qu’il faut apporter, ce que tu vas faire, et ce que le club te prête : le déroulé d’un premier cours pour un débutant venu de Labège.',
    menu: false,
    index: true,
  },
  {
    id: 'ta-seance',
    chemin: '/ta-seance/',
    nav: 'Ta séance',
    question: 'Quelle discipline, à quel moment, pour moi ?',
    titre: 'Trouver ta séance depuis Labège | Boxing Center',
    description:
      'Deux réponses et tu sais quel cours viser à Boxing Center Ramonville, et à quel moment de la semaine y aller depuis Labège ou depuis l’Innopole.',
    menu: true,
    index: true,
  },
  {
    id: 'transports',
    chemin: '/transports/',
    nav: 'Transports',
    question: 'Comment j’y vais si je n’ai pas de voiture ?',
    titre: 'Y aller en bus depuis Labège | Boxing Center',
    description:
      'La ligne 79 relie Labège à Ramonville sans changement et finit au terminus du métro B. Bus et métro pour rejoindre Boxing Center depuis Labège.',
    menu: true,
    index: true,
    promo: true,
  },
  {
    id: 'saint-orens-de-gameville',
    chemin: '/saint-orens-de-gameville/',
    nav: 'Saint-Orens',
    question: 'Et si je pars de Saint-Orens-de-Gameville ?',
    titre: 'Club de boxe et MMA près de Saint-Orens | Boxing Center',
    description:
      'La ligne 79 dessert Saint-Orens-de-Gameville et finit à Ramonville, au terminus du métro B. Boxing Center y entraîne la boxe, le MMA et le grappling.',
    menu: false,
    index: true,
    commune: true,
  },
  {
    id: 'castanet-tolosan',
    chemin: '/castanet-tolosan/',
    nav: 'Castanet-Tolosan',
    question: 'Et si je pars de Castanet-Tolosan ?',
    titre: 'Club de boxe et MMA près de Castanet-Tolosan | Boxing Center',
    description:
      'La Linéo L6 relie Castanet-Tolosan à Ramonville sans changement. Boxing Center y entraîne la boxe anglaise, le pieds-poings, le MMA et le grappling.',
    menu: false,
    index: true,
    commune: true,
  },
  {
    id: 'contact',
    chemin: '/contact/',
    nav: 'Contact',
    question: 'Je veux poser ma question à quelqu’un.',
    titre: 'Contact | Boxing Center depuis Labège',
    description:
      'Une question avant de te déplacer depuis Labège ? Écris-nous, on te répond avec le cours et le créneau qui correspondent. Téléphone : 09 39 03 67 48.',
    menu: true,
    index: true,
  },
  {
    id: 'merci',
    chemin: '/merci/',
    nav: 'Merci',
    question: 'Message envoyé.',
    titre: 'Message bien reçu | Boxing Center Labège',
    description: 'Ta demande est partie. On te répond rapidement.',
    menu: false,
    index: false,
  },
  {
    id: 'introuvable',
    chemin: '/404/',
    nav: 'Page introuvable',
    question: 'Cette adresse ne mène nulle part.',
    titre: 'Page introuvable | Boxing Center depuis Labège',
    description: 'Cette page n’existe pas ou a changé d’adresse. Voilà les pages du site.',
    menu: false,
    index: false,
  },
  {
    id: 'mentions-legales',
    chemin: '/mentions-legales/',
    nav: 'Mentions légales',
    question: 'Qui édite ce site ?',
    titre: 'Mentions légales | Boxing Center Labège',
    description: 'Mentions légales du site boxingcenter-labege.fr.',
    menu: false,
    index: true,
  },
  {
    id: 'confidentialite',
    chemin: '/confidentialite/',
    nav: 'Confidentialité',
    question: 'Qu’est-ce que vous faites de mes données ?',
    titre: 'Politique de confidentialité | Boxing Center Labège',
    description: 'Ce que devient une demande envoyée depuis boxingcenter-labege.fr.',
    menu: false,
    index: true,
  },
] as const;

export function route(id: RouteId): Route {
  const r = ROUTES.find((x) => x.id === id);
  if (!r) throw new Error(`Route inconnue : ${id}`);
  return r;
}

export const MENU = ROUTES.filter((r) => r.menu);

/** Les entrées de navigation ordinaires, hors pages mises en avant. */
export const MENU_SIMPLE = MENU.filter((r) => !r.promo);

/** La page mise en avant, s'il y en a une. */
export const PROMO = ROUTES.find((r) => r.promo);

/** Les pages de communes satellites, dans l'ordre du pied de page. */
export const ROUTES_COMMUNES = ROUTES.filter((r) => r.commune);

/**
 * Plannings et Tarifs vivent chez le club. Ce sont des liens sortants dans la
 * navigation, pas des pages : la source à jour est toujours la sienne.
 */
export const LIENS_CLUB = [
  { nav: 'Plannings', href: DESTINATION.plannings, titre: `Voir les plannings ${DESTINATION.nom}` },
  { nav: 'Tarifs', href: DESTINATION.tarifs, titre: `Consulter les tarifs ${DESTINATION.nom}` },
] as const;
