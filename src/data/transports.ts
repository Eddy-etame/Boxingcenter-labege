/**
 * REGISTRE DES TRANSPORTS — les itinéraires qui déposent au club.
 *
 * La règle est stricte : une ligne n'entre ici que si elle fait avancer
 * quelqu'un jusqu'au 33 rue des Ormes. Une ligne qui dessert le secteur sans y
 * mener n'a rien à faire sur cette page.
 *
 * Depuis Labège, c'est simple : la 79 fait le trajet en entier et finit à
 * Ramonville, au terminus du métro B. Depuis Castanet-Tolosan, c'est la
 * Linéo L6, qui finit au même endroit.
 *
 * Ce qu'on n'écrit JAMAIS ici : un horaire, une fréquence à la minute, une
 * durée de trajet. Chaque étape porte le lien vers sa page officielle.
 */

export type Mode = 'bus' | 'metro' | 'train';

export type Etape = {
  mode: Mode;
  code: string;
  de: string;
  a: string;
  precision?: string;
  jours: string;
  href: string;
};

export type Itineraire = {
  id: string;
  onglet: string;
  titre: string;
  resume: string;
  mode: Mode;
  etapes: readonly Etape[];
  meilleur?: true;
};

export const RESEAU = {
  nom: 'Tisséo',
  site: 'https://www.tisseo.fr/',
  itineraire: 'https://www.tisseo.fr/se-deplacer/itineraires',
} as const;

export const LIBELLE_MODE: Record<Mode, string> = {
  bus: 'Bus',
  metro: 'Métro',
  train: 'Train',
};

export const ARRIVEE = {
  arret: 'Ramonville',
  rue: 'rue des Ormes',
  phrase: 'Tu descends au terminus, à Ramonville. Le club est rue des Ormes.',
} as const;

/** Le titre de la page, ligne par ligne. La dernière porte l'accent. */
export const TITRE = [
  'Y aller en bus,',
  'c’est une seule ligne :',
  'la 79.',
] as const;

/** Le chapeau : ce que fait le meilleur trajet, en une phrase. */
export const CHAPEAU =
  'Tu la prends à Labège et tu descends au terminus, à Ramonville — là où s’arrête aussi le métro B. Le club est rue des Ormes. Une seule ligne, aucun changement.';

export const ITINERAIRES: readonly Itineraire[] = [
  {
    id: 'sept-neuf',
    onglet: 'La 79',
    titre: 'La 79, sans changement.',
    resume:
      'Elle traverse Labège — la gare, le centre commercial, le village d’entreprise — et finit à Ramonville, au terminus du métro B. C’est l’accès que le club indique lui-même. Un seul bus, du départ à l’arrivée.',
    mode: 'bus',
    meilleur: true,
    etapes: [
      {
        mode: 'bus',
        code: '79',
        de: 'Labège',
        a: 'Ramonville',
        precision: 'terminus de la ligne, et terminus du métro B',
        jours: 'toute la semaine',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-79',
      },
    ],
  },
  {
    id: 'lineo-six',
    onglet: 'La Linéo L6',
    titre: 'La L6, depuis Castanet-Tolosan.',
    resume:
      'La Linéo L6 relie Castanet-Tolosan à Ramonville et finit au même terminus que la 79. Si tu pars du sud du secteur, c’est elle qu’il faut prendre — et le trajet est direct.',
    mode: 'bus',
    etapes: [
      {
        mode: 'bus',
        code: 'L6',
        de: 'Castanet-Tolosan',
        a: 'Ramonville',
        precision: 'terminus de la ligne, et terminus du métro B',
        jours: 'toute la semaine',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-l6',
      },
    ],
  },
  {
    id: 'metro',
    onglet: 'Le métro B',
    titre: 'Le métro B, si tu arrives de Toulouse.',
    resume:
      'La ligne B finit à Ramonville. Tu descends au terminus et tu es dans le quartier du club. C’est le trajet des gens qui viennent du centre de Toulouse ou qui rejoignent le secteur en fin de journée.',
    mode: 'metro',
    etapes: [
      {
        mode: 'metro',
        code: 'B',
        de: 'Toulouse',
        a: 'Ramonville',
        precision: 'terminus de la ligne',
        jours: 'sept jours sur sept',
        href: 'https://www.tisseo.fr/nos-mobilites/transports-en-commun/ligne-b',
      },
    ],
  },
];

export const itineraire = (id: string) => {
  const i = ITINERAIRES.find((x) => x.id === id);
  if (!i) throw new Error(`Itinéraire inconnu : ${id}`);
  return i;
};

export const MEILLEUR = ITINERAIRES.find((i) => i.meilleur) ?? ITINERAIRES[0];

export const RESUME = 'La 79, de Labège au terminus de Ramonville';

export type Depart = { depuis: string; itineraire: string; texte: string };

export const DEPARTS: readonly Depart[] = [
  {
    depuis: 'Labège',
    itineraire: 'sept-neuf',
    texte:
      'La 79 passe par la gare de Labège, le centre commercial et le village d’entreprise. Tu montes où ça t’arrange et tu descends au terminus.',
  },
  {
    depuis: 'Saint-Orens-de-Gameville',
    itineraire: 'sept-neuf',
    texte:
      'La 79 dessert aussi Saint-Orens. C’est la même ligne, dans le même sens, jusqu’au terminus de Ramonville.',
  },
  {
    depuis: 'Castanet-Tolosan',
    itineraire: 'lineo-six',
    texte:
      'La Linéo L6 relie Castanet à Ramonville et finit au même endroit que la 79. Direct, sans changement.',
  },
  {
    depuis: 'Toulouse',
    itineraire: 'metro',
    texte:
      'Le métro B finit à Ramonville. Tu descends au terminus et tu y es. C’est l’accès que le club met en avant.',
  },
];

export const AVERTISSEMENT =
  'Les horaires changent d’une saison à l’autre. On te dit quelle ligne prendre ; pour l’heure exacte, ouvre la fiche Tisséo — le lien est juste à côté de chaque étape.';

/** Les nombres en lettres, pour les décomptes qui viennent du registre. */
export const NOMBRES = [
  'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
  'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt',
  'vingt et un', 'vingt-deux', 'vingt-trois', 'vingt-quatre', 'vingt-cinq',
] as const;
export const enLettres = (n: number) => NOMBRES[n] ?? String(n);
