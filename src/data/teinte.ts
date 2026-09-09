/**
 * LA TEINTE DU SITE — les mêmes valeurs que `styles/jetons.css`, lisibles
 * depuis un script de build : la vignette OG et le favicon se dessinent avec
 * la couleur du site, pas avec une couleur retapée.
 *
 * Une valeur change ici ET dans jetons.css, jamais dans un seul des deux.
 */
export const TEINTE = {
  papier: '#eef0f5',
  papierCreuse: '#e0e5ef',
  papierVif: '#f8f9fc',
  encre: '#10233f',
  graphite: '#575f74',
  trait: 'rgba(16, 35, 63, 0.16)',
  signal: '#1f6fd0',
  signalTexte: '#14528f',
  signalProfond: '#0e3a66',
} as const;
