/**
 * CONTENU ÉDITORIAL des pages disciplines.
 *
 * Comment on écrit ici : des phrases courtes, adressées au lecteur, dans
 * l'ordre où il se pose les questions. Ce que c'est, où c'est, ce qui va lui
 * arriver, comment il y va, ce qu'il doit apporter. Pas d'images, pas de
 * formules — de l'information.
 *
 * Aucun fait volatil dans ce fichier : horaires, adresses et intitulés vivent
 * dans verite.ts et offres.ts, et n'existent qu'à un seul endroit.
 */

import type { MediaSlug } from './medias';
import type { PageDiscipline } from './offres';

export type Bloc = { titre: string; texte: string };

export type Contenu = {
  id: PageDiscipline;
  h1: string;
  chapeau: string;
  photoHero: MediaSlug;
  photoSecondaire: MediaSlug;
  promesse: string;
  blocs: readonly Bloc[];
  seance: readonly string[];
  faq: readonly Bloc[];
};

export const CONTENUS: readonly Contenu[] = [
  {
    id: 'boxe-anglaise',
    h1: 'Cours de boxe anglaise à proximité de Labège',
    chapeau:
      'La boxe anglaise se pratique aux poings, avec des gants, encadré. Aucun niveau n’est demandé pour commencer, et le club prête les gants. Depuis Labège, la ligne 79 t’emmène à Ramonville sans changement — le club est ouvert du lundi au samedi, de 10h à 21h30.',
    photoHero: 'cours-boxe-labege',
    photoSecondaire: 'coach-boxe-labege',
    promesse: 'Apprendre à boxer, encadré, sans rien avoir à prouver à personne.',
    blocs: [
      {
        titre: 'Quatre coups à apprendre',
        texte:
          'Le direct, le crochet, l’uppercut, et le jab qui prépare tout le reste. Ça paraît peu, et c’est ce qui rend la boxe dense : avec quatre coups, tout se joue dans les appuis, la distance et la garde. C’est un sport de placement plus que de puissance, et c’est pour ça qu’on peut y progresser vite sans avoir jamais fait de sport.',
      },
      {
        titre: 'Tu ne prendras pas de coups le premier jour',
        texte:
          'L’opposition arrive plus tard, et seulement si tu la veux. Un débutant travaille au sac, à la corde, aux pattes d’ours avec un coach, et sur le déplacement à vide. Le club le dit lui-même : tu débutes, tu es le bienvenu.',
      },
      {
        titre: 'Ce que le club prête',
        texte:
          'Les gants. Tu viens avec une tenue de sport, une bouteille d’eau et une serviette, et c’est tout. Si tu continues, tu prendras tes propres gants et tes bandes — le club te dira lesquels.',
      },
      {
        titre: 'Comment tu y vas',
        texte:
          'La ligne 79 part de Labège et finit à Ramonville, au terminus du métro B. Un seul bus, aucun changement. En voiture, la D813 par Auzeville. Le club est au 33 rue des Ormes.',
      },
    ],
    seance: [
      'Échauffement : corde, mobilité, déplacements à vide',
      'Technique : un geste, décomposé, répété lentement puis en rythme',
      'Sac ou pattes d’ours : l’application, avec correction du coach',
      'Renforcement : gainage, abdominaux, poids du corps',
      'Retour au calme et étirements',
    ],
    faq: [
      {
        titre: 'Où ça se passe exactement ?',
        texte:
          'Au 33 rue des Ormes, à Ramonville-Saint-Agne, au terminus du métro B. Le club a 300 m² couverts en plein air, un grand ring et un octogone de sept mètres.',
      },
      {
        titre: 'Je suis débutant complet, à 40 ans passés. C’est trop tard ?',
        texte:
          'C’est le profil le plus fréquent chez les nouveaux inscrits. La même séance existe à trois intensités, et c’est le coach qui règle la tienne. Ce qui compte, c’est le nombre de fois où tu reviens.',
      },
      {
        titre: 'Je travaille à l’Innopole, je peux venir le midi ?',
        texte:
          'Le club publie 22 cours par semaine, du lundi midi au samedi après-midi. Le créneau du midi existe : regarde le planning pour l’horaire exact du jour qui t’arrange.',
      },
      {
        titre: 'Quelle différence avec le pieds-poings ?',
        texte:
          'La boxe anglaise n’utilise que les poings ; la Boxe Pieds-Poings ajoute les jambes. Beaucoup commencent par l’anglaise — quatre coups, une garde — puis ajoutent les jambes une fois les appuis en place. Les deux sont publiées par le club.',
      },
    ],
  },
  {
    id: 'mma',
    h1: 'Club MMA et grappling à proximité de Labège',
    chapeau:
      'Le MMA combine la frappe debout, le corps à corps et le combat au sol. Depuis Labège, il se pratique à Boxing Center Ramonville, dans un octogone de sept mètres — sous 300 m² couverts en plein air. Le grappling y est un cours à part, sans aucune frappe.',
    photoHero: 'cage-mma-labege',
    photoSecondaire: 'grappling-labege',
    promesse: 'S’entraîner dans un vrai octogone, à ciel ouvert, avec des gens dont c’est le métier.',
    blocs: [
      {
        titre: 'Debout, au corps à corps, au sol',
        texte:
          'Le MMA se joue sur trois zones : debout, où l’on frappe ; au corps à corps, où l’on projette ; au sol, où l’on contrôle et où l’on soumet. On progresse en apprenant à passer de l’une à l’autre. La plupart des débutants découvrent qu’ils sont déjà à l’aise sur l’une des trois.',
      },
      {
        titre: 'À quoi sert l’octogone',
        texte:
          'La paroi fait partie du jeu. On y travaille les appuis contre le grillage, les relevés, les sorties de contrôle — des situations qui n’existent pas sur un tatami ouvert. Celui de Ramonville fait sept mètres, et il est sous les 300 m² couverts en plein air du club.',
      },
      {
        titre: 'Le grappling, sans les coups',
        texte:
          'Contrôle, projections, soumissions. Aucun coup n’est porté, jamais. C’est la porte d’entrée de beaucoup de gens qui veulent le combat sans l’impact — et c’est aussi ce qui décide la majorité des combats de MMA.',
      },
      {
        titre: 'Comment tu y vas',
        texte:
          'La ligne 79 part de Labège et finit à Ramonville, au terminus du métro B. Le club est au 33 rue des Ormes. En voiture, la D813 par Auzeville.',
      },
    ],
    seance: [
      'Échauffement spécifique : nuque, hanches, déplacements au sol',
      'Debout : une situation de frappe, en gants, à intensité choisie',
      'Corps à corps : la saisie, l’amenée au sol, la sortie',
      'Sol : un contrôle et une soumission, décomposés',
      'Mise en situation encadrée, puis retour au calme',
    ],
    faq: [
      {
        titre: 'Où est la salle MMA la plus proche de Labège ?',
        texte:
          'À Ramonville-Saint-Agne, au 33 rue des Ormes, au terminus du métro B. L’entraînement se fait dans l’octogone, pas à côté.',
      },
      {
        titre: 'On peut débuter sans rien connaître ?',
        texte:
          'Oui. Le cours s’appelle « MMA tous niveaux » et il est fait pour ça. Un débutant ne fait pas de combat : il apprend à chuter, à se relever, à tenir une position. Le contact est progressif et l’intensité se règle.',
      },
      {
        titre: 'Grappling ou MMA : par lequel commencer ?',
        texte:
          'Si l’idée de recevoir un coup te bloque, commence par le grappling : aucune frappe. Si c’est la frappe qui t’attire, le MMA tous niveaux t’ira directement. Beaucoup finissent par faire les deux.',
      },
      {
        titre: 'Un octogone à ciel ouvert, ça veut dire quoi ?',
        texte:
          'Que les 300 m² d’entraînement sont couverts mais ouverts sur l’extérieur. Tu t’entraînes à l’air libre, à l’abri. C’est la particularité de cette salle dans le réseau.',
      },
    ],
  },
  {
    id: 'kick-boxing',
    h1: 'Boxe pieds-poings et kick-boxing à proximité de Labège',
    chapeau:
      'La Boxe Pieds-Poings ajoute les jambes aux poings. Le club la publie sous ce nom, pour les adultes. Depuis Labège, la ligne 79 t’emmène à Ramonville sans changement, au terminus du métro B.',
    photoHero: 'entrainement-mma-labege',
    photoSecondaire: 'cours-boxe-labege',
    promesse: 'Ajouter les jambes, sans perdre la garde. Le travail debout le plus complet du club.',
    blocs: [
      {
        titre: 'Les jambes en plus des poings',
        texte:
          'Ajouter les jambes ne double pas la difficulté, ça la multiplie. La distance change, la garde doit descendre sans s’ouvrir, et l’appui devient un problème permanent puisqu’on frappe sur une jambe. C’est ce qui rend le pieds-poings si fatigant la première fois — et si efficace ensuite.',
      },
      {
        titre: 'Il faut être souple ?',
        texte:
          'La souplesse vient avec les séances. Les premières semaines, les coups de pied restent bas — et le low kick, qui est bas par définition, est l’arme la plus utilisée. La hauteur arrive toute seule avec les étirements de fin de séance.',
      },
      {
        titre: 'Club de kick-boxing, club de boxe thaï près de Labège : les mots qu’on entend',
        texte:
          'Sous ces noms vivent plusieurs règlements. Le club publie « Boxe Pieds-Poings » : poings et jambes, en garde haute et sur appuis. Si tu cherches précisément la boxe thaï, avec les coudes et les genoux, dis-le dans ton message — on te répond avec ce qui se pratique réellement dans le réseau.',
      },
      {
        titre: 'Quel créneau choisir',
        texte:
          'Le club publie 22 cours par semaine, du lundi midi au samedi après-midi, et ouvre de 10h à 21h30. Si tu travailles à l’Innopole, le midi et la sortie de bureau sont les deux moments qui tiennent le mieux dans une semaine.',
      },
    ],
    seance: [
      'Échauffement : corde, mobilité de hanche, chevilles',
      'Technique : une combinaison poings-jambes, décomposée puis enchaînée',
      'Sac et paos : puissance et placement, avec correction',
      'Renforcement du bas du corps et gainage',
      'Étirements longs — indispensables quand on frappe avec les jambes',
    ],
    faq: [
      {
        titre: 'Où faire du pieds-poings près de Labège ?',
        texte:
          'À Boxing Center Ramonville, 33 rue des Ormes, au terminus du métro B. La ligne 79 y va sans changement depuis Labège.',
      },
      {
        titre: 'C’est réservé aux jeunes ?',
        texte:
          'Le cours accueille tous les âges d’adultes et tous les niveaux. Beaucoup y arrivent après quelques mois de boxe anglaise, d’autres commencent directement là.',
      },
      {
        titre: 'Il faut acheter des protège-tibias ?',
        texte:
          'Pour découvrir, une tenue de sport suffit et le club prête les gants. Si tu continues, il te dira quel matériel prendre.',
      },
      {
        titre: 'Mon fils fait déjà du foot : c’est compatible ?',
        texte:
          'Le pieds-poings travaille exactement ce qui manque au foot : le gainage, la garde des appuis, la coordination haut-bas. Pour les plus jeunes, c’est l’École enfants qu’il faut regarder — trois groupes, dès 3 ans.',
      },
    ],
  },
  {
    id: 'boxe-enfants',
    h1: 'Boxe enfant dès 3 ans à proximité de Labège',
    chapeau:
      'Le club publie une École enfants dès 3 ans, en trois groupes : 3 à 6 ans, 7 à 11 ans, 12 à 16 ans. Le principe y est écrit noir sur blanc — on touche, on ne frappe pas. C’est à Ramonville, au terminus du métro B, et la ligne 79 y va sans changement depuis Labège.',
    photoHero: 'encadrement-boxe-labege',
    photoSecondaire: 'club-boxe-labege',
    promesse: 'Un cadre, une règle, et un enfant qui apprend à se contenir avant de frapper.',
    blocs: [
      {
        titre: 'Ce qu’un enfant apprend d’abord',
        texte:
          'Se tenir, regarder, attendre son tour, et s’arrêter net quand on le lui demande. La frappe vient après, et toujours contrôlée. Les parents qui viennent chercher un défouloir repartent souvent surpris : ce que l’école installe en premier, c’est un cadre — et c’est ce cadre qui calme.',
      },
      {
        titre: 'Trois groupes selon l’âge',
        texte:
          'De 3 à 6 ans, on découvre : le jeu, l’équilibre, la notion de distance. De 7 à 11 ans, on apprend le geste et la règle. De 12 à 16 ans, on ajoute l’intensité et le travail technique. Les jours et les horaires sont sur le planning du club.',
      },
      {
        titre: 'Ton enfant ne prendra pas de coups',
        texte:
          'Le club l’écrit lui-même : on touche, on ne frappe pas. Le travail se fait au touché contrôlé, avec des protections adaptées à la taille, et l’opposition libre n’existe pas dans ces créneaux.',
      },
      {
        titre: 'Le trajet, pour un parent',
        texte:
          'La ligne 79 relie Labège à Ramonville sans changement, et finit au terminus du métro B. En voiture, la D813 par Auzeville. Deux allers-retours par semaine, c’est tenable une année entière.',
      },
    ],
    seance: [
      'Échauffement en jeu : déplacements, réactions, coordination',
      'Rappel de la règle : la garde, la distance, le signal d’arrêt',
      'Technique : un geste simple, répété, corrigé un par un',
      'Application au sac ou aux pattes, en touché contrôlé',
      'Retour au calme, et le mot du coach sur la séance',
    ],
    faq: [
      {
        titre: 'À partir de quel âge ?',
        texte:
          'Dès 3 ans. Le club publie trois groupes : 3 à 6 ans, 7 à 11 ans, 12 à 16 ans. Les jours exacts sont sur le planning.',
      },
      {
        titre: 'Mon enfant est très timide. Ça peut aller ?',
        texte:
          'C’est souvent lui qui en tire le plus. On travaille par deux, sur une consigne précise, et le coach circule. Beaucoup d’enfants réservés y trouvent leur premier sport où l’on n’est pas jugé devant tout le monde.',
      },
      {
        titre: 'Et si c’est justement pour canaliser trop d’énergie ?',
        texte:
          'C’est le cas de figure le plus courant, et il fonctionne — à une condition : que l’enfant accepte la règle. La boxe donne beaucoup à ceux qui ont trop d’énergie, mais elle commence par leur demander de s’arrêter au signal.',
      },
      {
        titre: 'Il faut acheter des gants ?',
        texte:
          'Le club les prête. Une tenue de sport et une bouteille d’eau suffisent pour les premières séances.',
      },
    ],
  },
  {
    id: 'boxing-fitness',
    h1: 'Lady Punch, Boxing Camp et musculation à proximité de Labège',
    chapeau:
      'Le geste de boxe et le cardio, sans opposition. Le club publie Lady Punch entre femmes, Boxing Camp en circuit, et un accès libre à l’étage : poids, machines, vélo et rameur. C’est à Ramonville, au terminus du métro B.',
    photoHero: 'preparation-physique-labege',
    photoSecondaire: 'cardio-labege',
    promesse: 'La forme et le défoulement, sans jamais monter sur un ring si tu n’en as pas envie.',
    blocs: [
      {
        titre: 'De la boxe, sans adversaire',
        texte:
          'On fait tout ce que fait un boxeur — la corde, les déplacements, le sac, les combinaisons, le gainage — sauf la partie où quelqu’un te rend les coups. La dépense est réelle : un round de sac sollicite plus qu’une machine, parce qu’il fait travailler la coordination en même temps que le souffle.',
      },
      {
        titre: 'Lady Punch, entre femmes',
        texte:
          'Un créneau publié sous ce nom, pensé pour un groupe de femmes. Le contenu n’est pas allégé : c’est le même travail technique, dans un groupe où personne n’est la seule de son genre. Beaucoup rejoignent ensuite les créneaux mixtes, et beaucoup restent.',
      },
      {
        titre: 'L’étage, en accès libre',
        texte:
          'Au-dessus des 300 m² d’entraînement, le club a un plateau de musculation et de cardio : poids, machines, vélo, rameur. Il est en accès libre — tu peux venir t’en servir sans cours.',
      },
      {
        titre: 'Reprendre après une longue pause',
        texte:
          'Le premier obstacle n’est jamais physique, il est logistique : trouver un créneau qu’on peut tenir. Depuis Labège, la 79 va au club sans changement. Prends le créneau que ton mois de novembre supportera, pas celui que ta semaine de septembre te fait envie.',
      },
    ],
    seance: [
      'Échauffement cardio : corde, vélo ou rameur',
      'Technique : une combinaison de boxe, apprise puis enchaînée',
      'Circuit au sac : séries chronométrées, intensité choisie',
      'Renforcement : gainage, poids du corps, charges légères',
      'Étirements et retour au calme',
    ],
    faq: [
      {
        titre: 'Je vais devoir combattre ?',
        texte:
          'Lady Punch et Boxing Camp se pratiquent sans opposition, du début à la fin. Tu peux pratiquer des années sans jamais faire face à quelqu’un.',
      },
      {
        titre: 'Lady Punch est réservé aux femmes ?',
        texte:
          'C’est un créneau publié sous ce nom, pensé pour un groupe de femmes. Les autres cours du club sont ouverts à tous. Si tu préfères commencer là puis basculer, c’est possible.',
      },
      {
        titre: 'L’accès libre, ça marche comment ?',
        texte:
          'L’étage de musculation et de cardio est ouvert en dehors des cours. Les conditions font partie de l’abonnement : demande-les au club, elles sont sur sa page tarifs.',
      },
      {
        titre: 'J’ai un genou fragile, je peux venir ?',
        texte:
          'Dis-le au coach dès la première séance : c’est une information utile. Beaucoup d’exercices se substituent — le sac remplace le saut, le rameur remplace la course. En cas de suivi médical, l’avis de ton médecin passe avant le nôtre.',
      },
    ],
  },
] as const;

export const contenu = (id: PageDiscipline): Contenu => {
  const c = CONTENUS.find((x) => x.id === id);
  if (!c) throw new Error(`Contenu inconnu : ${id}`);
  return c;
};
