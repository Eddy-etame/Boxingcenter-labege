import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Statique par défaut. Seul /api/contact tourne à la demande : il relaie le
// formulaire vers Inlet (JSON + preuve de travail), ce qu'un <form> natif ne
// peut pas faire seul. Tout le reste est pré-rendu.
export default defineConfig({
  site: 'https://www.boxingcenter-labege.fr',
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  compressHTML: true,
  redirects: {
    // Les formes d'URL à mots-clés fonctionnent, mais ne sont pas des pages :
    // fabriquer /club-boxe-cugnaux/ à côté de / serait le schéma de page
    // satellite que Google sanctionne.
    '/club-boxe-labege': '/',
    '/boxe-labege': '/',
    '/sport-combat-labege': '/',
    '/salle-de-boxe-labege': '/',
    '/boxe-anglaise-labege': '/boxe-anglaise/',
    '/club-mma-labege': '/mma/',
    '/salle-mma-labege': '/mma/',
    '/mma-labege': '/mma/',
    '/grappling-labege': '/mma/',
    '/club-boxe-thai-labege': '/kick-boxing/',
    '/boxe-thai-labege': '/kick-boxing/',
    '/club-kick-boxing-labege': '/kick-boxing/',
    '/kick-boxing-labege': '/kick-boxing/',
    '/boxe-pieds-poings-labege': '/kick-boxing/',
    '/boxe-enfant-labege': '/boxe-enfants/',
    '/boxe-femme-labege': '/boxing-fitness/',
    // Les communes satellites : les mêmes motifs, sur leurs pages à elles.
    '/club-boxe-saint-orens': '/saint-orens-de-gameville/',
    '/salle-mma-saint-orens': '/saint-orens-de-gameville/',
    '/club-boxe-castanet': '/castanet-tolosan/',
    '/salle-mma-castanet': '/castanet-tolosan/',
    '/club-boxe-castanet-tolosan': '/castanet-tolosan/',
    '/salle-mma-castanet-tolosan': '/castanet-tolosan/',
    // L'objection « c'est loin » a son adresse.
    '/bus-cugnaux-portet': '/transports/',
    '/acces': '/transports/',
    '/plannings': '/ta-seance/',
    '/tarifs': '/ta-seance/',
  },
});
