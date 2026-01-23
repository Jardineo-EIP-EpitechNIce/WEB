# 🔄 Synchronisation Automatique des Releases

## Comment ça fonctionne ?

Votre portail web est **automatiquement mis à jour** à chaque nouvelle release stable grâce au workflow GitHub Actions `.github/workflows/sync-web-release.yml`.

## 🎯 Workflow Automatique

### Déclencheur
Le workflow se déclenche automatiquement quand :
- ✅ Une **release stable** est publiée (ex: `v1.0`, `v1.2.0`)
- ❌ **PAS** pour les pré-releases (ex: `v1.0-beta.1`, `v1.0-alpha.2`)

### Actions effectuées automatiquement

1. **📥 Téléchargement de l'APK**
   - Essaie de télécharger depuis la release principale
   - Si pas trouvé, télécharge depuis FrontMobile release

2. **📦 Copie de l'APK**
   - Copie l'APK vers `WEB/public/apk/{version}.apk`
   - Exemple: `WEB/public/apk/1.0.0.apk`

3. **📝 Mise à jour du changelog**
   - Extrait automatiquement les bullet points du corps de la release
   - Met à jour `WEB/public/apk/latest.json`
   - Format JSON avec version, date et changelog

4. **🗑️ Nettoyage**
   - Garde uniquement les **3 dernières versions** d'APK
   - Supprime automatiquement les anciennes versions

5. **💾 Commit & Push**
   - Commit les changements avec un message descriptif
   - Push vers la branche `main`

6. **🚀 Déploiement**
   - Vercel/Netlify détecte le push
   - Redéploie automatiquement le site (1-2 minutes)

7. **📢 Notification Discord** (optionnel)
   - Notifie sur Discord en cas de succès ou d'échec
   - Nécessite le secret `DISCORD_WEBHOOK`

## 📋 Exemple de Workflow Complet

```
1. Vous créez une release v1.2.0 sur GitHub
   ↓
2. GitHub Actions détecte la release
   ↓
3. Workflow vérifie que c'est stable (pas de -beta)
   ↓
4. Télécharge app-release.apk depuis la release
   ↓
5. Copie vers WEB/public/apk/1.2.0.apk
   ↓
6. Extrait changelog depuis release notes
   ↓
7. Met à jour latest.json:
   {
     "version": "1.2.0",
     "file": "1.2.0.apk",
     "releaseDate": "2026-01-23",
     "changelog": ["Feature 1", "Fix bug 2", ...]
   }
   ↓
8. Supprime les APK > 3 versions
   ↓
9. Commit + Push vers main
   ↓
10. Vercel redéploie automatiquement
    ↓
11. Votre site affiche la nouvelle version ! 🎉
```

## 🔍 Vérifier que ça fonctionne

### Après une release, vérifiez :

1. **GitHub Actions**
   - Allez sur https://github.com/Jardineo-EIP-EpitechNIce/JARDINEO_/actions
   - Cherchez le workflow "Sync APK to Web Portal"
   - Vérifiez qu'il est ✅ success

2. **Fichiers mis à jour**
   - `WEB/public/apk/latest.json` → nouvelle version
   - `WEB/public/apk/{version}.apk` → nouveau fichier APK

3. **Git History**
   - Un nouveau commit "chore(web): sync APK v..."
   - Par GitHub Actions Bot

4. **Site Web**
   - Attendez 1-2 minutes pour le redéploiement
   - Vérifiez que la nouvelle version apparaît
   - Testez le téléchargement de l'APK

## ⚙️ Configuration

### Secrets GitHub nécessaires

Le workflow utilise ces secrets (déjà configurés) :

- **`JARDINEO_PAT`** *(requis)*
  - Personal Access Token pour télécharger les releases
  - Permet de commit et push les changements

- **`DISCORD_WEBHOOK`** *(optionnel)*
  - URL du webhook Discord pour les notifications
  - Peut être omis si vous ne voulez pas de notifications

### Modifier le comportement

#### Changer le nombre d'APK conservés

Éditez `.github/workflows/sync-web-release.yml`, ligne ~130 :

```yaml
# Garder les 3 derniers → Changer '4' pour conserver plus/moins
ls -t *.apk | tail -n +4 | xargs rm -f
```

#### Désactiver les notifications Discord

Supprimez ou commentez le job `notify-discord` dans le workflow.

#### Ajouter d'autres actions

Ajoutez des steps dans le job `sync-to-web` :

```yaml
- name: Mon action custom
  run: |
    echo "Action personnalisée ici"
```

## 🐛 Dépannage

### Le workflow ne se déclenche pas

**Cause possible:** C'est une pré-release
- ✅ Solution: Créez une release stable sans suffixe `-beta`, `-alpha`, `-rc`

### L'APK n'est pas trouvé

**Cause possible:** Pas d'APK dans la release
- ✅ Solution: Vérifiez que le workflow `submodule-release.yml` a bien buildé l'APK
- ✅ Alternative: Uploadez manuellement l'APK à la release

### Le site n'est pas mis à jour

**Cause possible:** Vercel/Netlify n'a pas détecté le push
- ✅ Solution: Vérifiez que auto-deploy est activé dans Vercel/Netlify
- ✅ Alternative: Déclenchez un redéploiement manuel

### Erreur "Permission denied"

**Cause possible:** `JARDINEO_PAT` n'a pas les bonnes permissions
- ✅ Solution: Vérifiez que le PAT a les scopes `repo`, `workflow`

## 📚 Ressources

- Workflow principal: `.github/workflows/sync-web-release.yml`
- Changelog actuel: `WEB/public/apk/latest.json`
- APK stockés: `WEB/public/apk/*.apk`
- GitHub Actions logs: https://github.com/Jardineo-EIP-EpitechNIce/JARDINEO_/actions

## 🎉 Avantages

- ✅ **Zéro intervention manuelle** après configuration
- ✅ **Toujours synchronisé** avec les releases GitHub
- ✅ **Historique propre** avec commits automatiques
- ✅ **Économie d'espace** (nettoyage automatique)
- ✅ **Traçabilité** via GitHub Actions logs
- ✅ **Gratuit** (GitHub Actions free tier)

---

**Note:** Ce système fonctionne de manière totalement autonome. Une fois configuré, vous n'avez plus qu'à créer des releases et tout le reste est automatique ! 🚀
