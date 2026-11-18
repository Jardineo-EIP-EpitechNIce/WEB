// Liens d'inscription aux tests Google Play pour la campagne de comparaison
// (version actuelle vs version 1.3.3). Chaque lien ouvre la page « Devenir testeur »
// de la fiche Play correspondante ; le testeur doit utiliser un compte Google
// ajouté à la liste des testeurs dans la Play Console.
export const PLAY_TEST_LINKS = {
  // Fiche com.jardineo.app (version actuelle)
  current: 'https://play.google.com/apps/testing/com.jardineo.app',
  // Fiche com.jardineo.app.beta (version 1.3.3, serveur legacy-api.jardineo.eu)
  legacy: 'https://play.google.com/apps/testing/com.jardineo.app.beta',
} as const;
