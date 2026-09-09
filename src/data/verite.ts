/**
 * REGISTRE DE VÉRITÉ — Boxing Center depuis Labège.
 *
 * Un fait s'écrit ICI une fois, avec sa source et sa date, puis se projette
 * dans le HTML, les métadonnées, le JSON-LD, llms.txt, le formulaire et le
 * moteur. Aucun composant n'écrit un horaire, une adresse ou une URL en dur —
 * le contrôle de build le refuse.
 *
 * Ce qui n'est pas vérifié ne s'affiche pas. Le prolongement du métro B vers
 * Labège est validé mais sans date d'ouverture : il ne figure nulle part sur
 * ce site tant qu'il n'a pas ouvert.
 */

export type Source = 'site-club' | 'wikipedia' | 'cahier-des-charges' | 'a-verifier';

export type Fait<T = string> = { valeur: T; source: Source; verifie: string };

/** Décidé par le client (Eddy, 2026-09-10) : le numéro et l'adresse que ce site affiche. */
const CDC = (v: string): Fait => ({ valeur: v, source: 'cahier-des-charges', verifie: '2026-09-10' });
const CLUB = (v: string): Fait => ({ valeur: v, source: 'site-club', verifie: '2026-09-09' });
const WIKI = (v: string): Fait => ({ valeur: v, source: 'wikipedia', verifie: '2026-09-09' });

/* ─────────────────────────────  LE SITE  ───────────────────────────── */

export const SITE = {
  origine: 'https://www.boxingcenter-labege.fr',
  nom: 'Boxing Center — depuis Labège',
  nomCourt: 'Boxing Center Labège',
  langue: 'fr-FR',
  /** Labège est le point de départ du visiteur, jamais une adresse de club. */
  ville: 'Labège',
  codePostal: '31670',
  gentile: 'Labégeois',
  departement: 'Haute-Garonne',
  secteur: 'sud-est toulousain',
  /** L'accès en trois mots, pour le pied de hero. Jamais une distance. */
  accesCourt: 'La 79, sans changement',
  /** Le formulaire Inlet de CE site : une demande arrive triée par ville. */
  formulaire: '4c055e64-2bda-423a-9b3e-e55233bd26d8',
} as const;

/* ─────────────────────────────  CONTACT  ───────────────────────────── */

export const CONTACT = {
  telephone: CDC('09 39 03 67 48'),
  telephoneLien: CDC('+33939036748'),
  email: CDC('boxingcenter31@gmail.com'),
} as const;

/* ─────────────────────────────  LE CLUB  ───────────────────────────── */

export type Club = {
  id: 'ramonville';
  nom: string;
  nomCourt: string;
  ville: string;
  codePostal: string;
  adresse: string;
  telephone: string;
  telephoneLien: string;
  site: string;
  activites: string;
  plannings: string;
  tarifs: string;
  horaires: Fait;
  horairesCourt: string;
  ouverture: string;
  fermeture: string;
  ouvertureTexte: string;
  fermetureTexte: string;
  acces: string;
  singularite: string;
  faits: readonly { cle: string; valeur: string; source: string }[];
  angle: string;
};

export const CLUBS: readonly Club[] = [
  {
    id: 'ramonville',
    nom: 'Boxing Center Ramonville',
    nomCourt: 'Ramonville',
    ville: 'Ramonville-Saint-Agne',
    codePostal: '31520',
    adresse: '33 rue des Ormes, 31520 Ramonville-Saint-Agne',
    telephone: '09 39 03 67 48',
    telephoneLien: '+33939036748',
    site: 'https://mmatoulouse.com/',
    activites: 'https://mmatoulouse.com/activites/',
    plannings: 'https://mmatoulouse.com/plannings/',
    tarifs: 'https://mmatoulouse.com/tarifs/',
    horaires: CLUB('du lundi au samedi, de 10h à 21h30'),
    horairesCourt: 'lun–sam, 10h–21h30',
    ouverture: '10:00',
    fermeture: '21:30',
    ouvertureTexte: '10h',
    fermetureTexte: '21h30',
    acces:
      'La 79 part de Labège et finit à Ramonville, au terminus du métro B — c’est l’accès que le club indique. En voiture, la D813 par Auzeville.',
    singularite: '300 m² couverts en plein air, avec un octogone de sept mètres.',
    faits: [
      { cle: 'Ligne directe', valeur: '79', source: 'Tisséo' },
      { cle: 'Surface', valeur: '300 m² à ciel ouvert', source: 'mmatoulouse.com' },
      { cle: 'Équipement', valeur: 'octogone 7 m, grand ring', source: 'mmatoulouse.com' },
      { cle: 'Accueil', valeur: '10h → 21h30, 6 j/7', source: 'mmatoulouse.com' },
      { cle: 'Cours', valeur: '22 par semaine', source: 'mmatoulouse.com' },
    ],
    angle:
      'Le club au terminus du métro B : 300 m² couverts en plein air, un octogone de sept mètres, un grand ring, et un étage de musculation et de cardio.',
  },
] as const;

export const club = (id: Club['id'] = 'ramonville'): Club => {
  const c = CLUBS.find((x) => x.id === id);
  if (!c) throw new Error(`Club inconnu : ${id}`);
  return c;
};

/** Le club de destination du site. Une seule destination ici. */
export const DESTINATION = CLUBS[0];

/* ─────────────────────────  LABÈGE, LES FAITS  ──────────────────────── */

export const VILLE = {
  population: WIKI('4 392 habitants (2023)'),
  statut: WIKI('commune du Sicoval, au sud-est de Toulouse'),
  distance: WIKI('11 km au sud-est de Toulouse'),
  rivieres: WIKI('l’Hers-Mort et le canal du Midi tout près'),
  routes: WIKI('l’A61 à l’échangeur du Palays et la D813, l’ancienne nationale 113'),
  bus: WIKI('les lignes Tisséo 79, 80 et 109, et deux gares TER : Labège-Innopole et Labège-Village'),
  /** Les deux visages de la commune : c'est à eux deux que ce site parle. */
  figure: WIKI(
    'Labège-Innopole et Enova, où travaillent des milliers de personnes chaque jour, et Labège-Village de l’autre côté de la D813'
  ),
  histoire: WIKI('4 392 habitants, et bien plus de monde en journée sur la zone d’activité'),
} as const;

/**
 * La phrase qui relie le secteur au club, quand un fait honnête le permet.
 */
export const NOTE_SECTEUR =
  'Labège touche Ramonville-Saint-Agne. La 79 fait le trajet sans changement et finit au terminus du métro B, où se trouve le club.';

/** Les six communes limitrophes. */
export const LIMITROPHES: readonly { nom: string; note?: string }[] = [
  { nom: 'Auzeville-Tolosane' },
  { nom: 'Castanet-Tolosan', note: 'reliée au club par la Linéo L6' },
  { nom: 'Escalquens' },
  { nom: 'Ramonville-Saint-Agne', note: 'la commune du club' },
  { nom: 'Saint-Orens-de-Gameville', note: 'sur la même ligne 79' },
  { nom: 'Toulouse' },
] as const;

/* ─────────────────────────  CE QU'ON NE DIT PAS  ───────────────────── */

/** Laisser croire qu'une salle est DANS Labège. Refusé au build. */
export const INTERDIT: readonly string[] = [
  'salle de Labège',
  'notre salle à Labège',
  'notre club à Labège',
  'situé à Labège',
  'située à Labège',
  'basé à Labège',
  'Boxing Center Labège vous accueille',
];

/** Vendre l'absence. La faute la plus coûteuse. Refusée au build. */
export const VENTE_NEGATIVE: readonly string[] = [
  'pas de salle',
  'pas de club',
  'aucune salle',
  'aucun club',
  'n’existe pas de salle',
  "n'existe pas de salle",
];

/** Formulations justes, à reprendre telles quelles. */
export const FORMULATIONS = [
  'club de boxe à proximité de Labège',
  'club de MMA près de Labège',
  'cours accessibles depuis Labège',
  'Boxing Center accueille les Labégeois dans son club de Ramonville-Saint-Agne',
] as const;
