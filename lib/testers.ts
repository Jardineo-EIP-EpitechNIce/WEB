// Liens d'inscription aux tests Google Play pour la campagne de comparaison
// (version actuelle vs version 1.3.3). Les deux fiches utilisent la même liste
// de testeurs « Testeurs Dev » (Play Console > Tests > Test interne > Testeurs) :
// un testeur doit y être ajouté (avec son adresse Google) pour que les liens marchent.
export const PLAY_TEST_LINKS = {
  // Fiche com.jardineo.app (version actuelle, piste Test interne)
  current: 'https://play.google.com/apps/internaltest/4701504988112943221',
  // Fiche com.jardineo.app.beta « Jardineo 1.3.3 (comparaison) », serveur legacy-api.jardineo.eu
  legacy: 'https://play.google.com/apps/internaltest/4701708102862091929',
} as const;
