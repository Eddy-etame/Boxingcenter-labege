/**
 * REGISTRE DES COMMUNES SATELLITES.
 *
 * Une page par commune, et le contrat qui les rend légitimes : le test du
 * remplacement. Si l'on remplace le nom de la commune par un autre et que la
 * page reste vraie, la page n'a pas le droit d'exister.
 *
 * Chaque entrée porte donc sa population datée, son gentilé, son code INSEE,
 * son intercommunalité, ses VRAIES communes limitrophes, la ligne qui la relie
 * au club, et une information pratique qui sert à décider.
 *
 * Géographie relevée sur Wikipédia le 2026-09-09.
 */

import type { MediaSlug } from './medias';

export type CommuneId = 'saint-orens-de-gameville' | 'castanet-tolosan';

export type Commune = {
  id: CommuneId;
  nom: string;
  gentile: string;
  codePostal: string;
  insee: string;
  population: string;
  intercommunalite: string;
  limitrophes: readonly string[];
  /** vrai si la commune touche celle du club */
  toucheLeClub: boolean;
  situation: string;
  route: string;
  transport: string;
  faitLocal: string;
  faitLocalEcho: string;
  photo: MediaSlug;
  cotes: readonly { cle: string; valeur: string }[];
  titre: string;
  description: string;
  faq: readonly { titre: string; texte: string }[];
  pont?: { texte: string; ancre: string; href: string };
};

export const COMMUNES: readonly Commune[] = [
  {
    id: 'saint-orens-de-gameville',
    nom: 'Saint-Orens-de-Gameville',
    gentile: 'Saint-Orennais',
    codePostal: '31650',
    insee: '31506',
    population: '14 646 habitants (2023)',
    intercommunalite: 'Toulouse Métropole',
    limitrophes: ['Auzielle', 'Escalquens', 'Labège', 'Lauzerville', 'Quint-Fonsegrives', 'Toulouse'],
    toucheLeClub: false,
    situation:
      'Saint-Orens touche Labège, et la même ligne 79 dessert les deux. Elle part de Saint-Orens Lycée, traverse le secteur et finit à Ramonville, au terminus du métro B : c’est là qu’est le club.',
    route: 'Par l’A61 à la sortie 18 Montaudran, ou par la rocade est.',
    transport:
      'La ligne 79 relie Saint-Orens à Ramonville sans changement. La commune est aussi desservie par les Linéo L7 et L9, et par les lignes 83, 109 et 201.',
    faitLocal:
      'La ligne 79 fait tout le trajet : elle part de Saint-Orens Lycée et finit au terminus du métro B, à Ramonville, où se trouve le club.',
    faitLocalEcho:
      'Un seul bus, aucun changement. C’est le trajet le plus simple du secteur.',
    photo: 'cours-boxe-labege',
    cotes: [
      { cle: 'Ligne', valeur: '79, direct' },
      { cle: 'Route', valeur: 'A61 sortie 18' },
      { cle: 'Arrivée', valeur: 'Ramonville, terminus métro B' },
      { cle: 'Accueil', valeur: '10h → 21h30, 6 j/7' },
    ],
    titre: 'Club de boxe et MMA près de Saint-Orens | Boxing Center',
    description:
      'La ligne 79 dessert Saint-Orens-de-Gameville et finit à Ramonville, au terminus du métro B. Boxing Center y entraîne la boxe, le MMA et le grappling.',
    faq: [
      {
        titre: 'Depuis Saint-Orens, comment on y va ?',
        texte:
          'La ligne 79 part de Saint-Orens Lycée et finit à Ramonville, au terminus du métro B. Un seul bus, aucun changement, et le club est rue des Ormes. En voiture, l’A61 à la sortie 18 Montaudran ou la rocade est.',
      },
      {
        titre: 'Saint-Orens ou Labège : même club ?',
        texte:
          'Le même, et la même ligne pour y aller. Saint-Orens et Labège se touchent, et la 79 les dessert toutes les deux avant de finir à Ramonville.',
      },
      {
        titre: 'Mon enfant peut s’inscrire ?',
        texte:
          'Oui. L’École enfants du club accueille dès 3 ans, en trois groupes : 3 à 6 ans, 7 à 11 ans, 12 à 16 ans. Le principe y est constant — on touche, on ne frappe pas.',
      },
      {
        titre: 'Il faut apporter des gants ?',
        texte:
          'Le club les prête. Pour découvrir, une tenue de sport et une bouteille d’eau suffisent.',
      },
    ],
  },
  {
    id: 'castanet-tolosan',
    nom: 'Castanet-Tolosan',
    gentile: 'Castanéens',
    codePostal: '31320',
    insee: '31113',
    population: '15 317 habitants (2023)',
    intercommunalite: 'Sicoval',
    limitrophes: [
      'Auzeville-Tolosane',
      'Escalquens',
      'Labège',
      'Mervilla',
      'Péchabou',
      'Pompertuzat',
      'Rebigue',
    ],
    toucheLeClub: false,
    situation:
      'Castanet-Tolosan touche Labège, et la Linéo L6 la relie directement à Ramonville. Elle finit au même terminus que la 79 : celui du métro B, où se trouve le club.',
    route: 'Par la RD 813, l’ancienne route narbonnaise, qui traverse la commune.',
    transport:
      'La Linéo L6 relie Castanet-Tolosan à Ramonville sans changement. La commune est aussi desservie par les lignes 81, 109, 350 et 383, et par une gare TER.',
    faitLocal:
      'La Linéo L6 fait tout le trajet : elle part de Castanet-Tolosan et finit à Ramonville, au terminus du métro B, où se trouve le club.',
    faitLocalEcho:
      'C’est une ligne à haut niveau de service : elle passe souvent et roule tard.',
    photo: 'entrainement-mma-labege',
    cotes: [
      { cle: 'Ligne', valeur: 'Linéo L6, direct' },
      { cle: 'Route', valeur: 'RD 813' },
      { cle: 'Arrivée', valeur: 'Ramonville, terminus métro B' },
      { cle: 'Accueil', valeur: '10h → 21h30, 6 j/7' },
    ],
    titre: 'Club de boxe et MMA près de Castanet-Tolosan | Boxing Center',
    description:
      'La Linéo L6 relie Castanet-Tolosan à Ramonville sans changement. Boxing Center y entraîne la boxe anglaise, le pieds-poings, le MMA et le grappling.',
    faq: [
      {
        titre: 'Depuis Castanet-Tolosan, quelle ligne prendre ?',
        texte:
          'La Linéo L6. Elle relie Castanet à Ramonville sans changement et finit au terminus du métro B, où se trouve le club, rue des Ormes. En voiture, la RD 813 traverse la commune.',
      },
      {
        titre: 'Castanet ou Labège : même club ?',
        texte:
          'Le même. Les deux communes se touchent et mènent au même endroit : Castanet par la L6, Labège par la 79. Les deux lignes finissent au terminus de Ramonville.',
      },
      {
        titre: 'Qu’est-ce qu’on peut y pratiquer ?',
        texte:
          'Huit cours : Boxe Anglaise, Boxe Pieds-Poings, MMA tous niveaux, Grappling, Lady Punch, Boxing Camp, École enfants et l’accès libre à l’étage musculation.',
      },
      {
        titre: 'Je n’ai jamais boxé.',
        texte:
          'C’est le cas de la plupart des gens qui poussent la porte. Le club le dit lui-même : « Tu débutes ? Tu es le bienvenu. » Les gants sont prêtés et le premier cours se passe au sac et aux pattes.',
      },
    ],
  },
] as const;

export const commune = (id: CommuneId): Commune => {
  const c = COMMUNES.find((x) => x.id === id);
  if (!c) throw new Error(`Commune inconnue : ${id}`);
  return c;
};

/** Les communes servies, pour `areaServed` de l'Organization. */
export const AIRE_SERVIE: readonly string[] = COMMUNES.map((c) => c.nom);
