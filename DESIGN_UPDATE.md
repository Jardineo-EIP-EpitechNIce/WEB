# 🎨 Design Update - ADN Jardineo

Le portail web a été mis à jour pour correspondre exactement à l'identité visuelle de l'application mobile Jardineo.

---

## ✨ Changements Apportés

### 1. Couleurs Exactes de l'App Mobile

Toutes les couleurs proviennent maintenant de `FrontMobile/lib/ui/theme/app_palette.dart`:

#### Couleurs Principales
- **Primary**: `#1FA951` (vert vif Jardineo)
- **Primary Dark**: `#176B3A`
- **Primary Mid**: `#1F8A4C`
- **Primary Soft**: `#E8F4EC`
- **Primary Tint**: `#F3FBF5`

#### Variations de Vert
- **Green**: `#16A34A`
- **Green Dark**: `#14532D`
- **Green Soft**: `#E6F8EE`
- **Mint**: `#8EE4B7`

#### Surfaces & UI
- **Surface**: `#FFFFFF` (fond blanc)
- **Surface Variant**: `#F3F4F6` (gris très clair)
- **Border**: `#E3E7DD`
- **Gray**: `#4B5563` (texte principal)

#### Accents
- **Sky**: `#E6F7FF` (bleu clair)
- **Gold**: `#F6B93B`
- **Success**: `#10B981`
- **Error**: `#B91C1C`
- **Warning**: `#FFD166`

### 2. Typographie

Correspondance avec `FrontMobile/lib/ui/theme/app_text.dart`:

- **Font Weights**:
  - Normal: 400
  - Medium (Semi-Bold): 600
  - Bold: 700

- **Tailles**: 10px à 32px (identiques à l'app)

### 3. Style UI

#### Border Radius
- **12px partout** (`rounded-jardineo`) - exactement comme l'app Flutter

#### Boutons
- Padding: `px-6 py-3` (24px horizontal, 12px vertical)
- Font weight: 600 (medium)
- Pas de shadow agressive, juste des transitions douces
- Couleurs: Primary pour les actions principales, Surface avec border pour secondaires

#### Cartes
- Background: `jardineo-primary-soft` (vert très clair)
- Border: `jardineo-border`
- Pas d'ombre portée forte
- Transition sur border au hover

---

## 📁 Fichiers Modifiés

### `/tailwind.config.ts`
- Ajout de toutes les couleurs Jardineo dans `theme.extend.colors.jardineo`
- Border radius personnalisé: `rounded-jardineo = 12px`
- Font weights personnalisés: `font-jardineo-normal/medium/bold`

### `/components/Hero.tsx`
- Logo en vert Jardineo Primary (`#1FA951`)
- Titre en français: "Bienvenue sur Jardineo"
- Couleur titre: `jardineo-green-dark` (#14532D)
- Info version: fond `jardineo-primary-soft`
- Cartes features: border `jardineo-border` avec hover sur `jardineo-primary`

### `/components/DownloadButton.tsx`
- Bouton primaire: `bg-jardineo-primary` + `hover:bg-jardineo-primary-dark`
- Bouton secondaire: `bg-jardineo-surface` avec border `jardineo-border`
- Texte en français: "Télécharger pour Android", "Tester sur iOS"
- Border radius: `rounded-jardineo` (12px)
- Font weight: `font-jardineo-medium` (600)

### `/app/page.tsx`
- Background: `bg-jardineo-surface`
- Footer: `bg-jardineo-green-dark` avec texte blanc et mint
- Texte en français: "Gestion intelligente de jardin"

### `/app/globals.css`
- Variables CSS mises à jour avec couleurs Jardineo
- Utilitaires personnalisés: `.btn-jardineo`, `.card-jardineo`

---

## 🎯 Correspondances Visuelles

### App Flutter → Web Portal

| Élément Flutter | Couleur Flutter | Web Tailwind | Hex |
|----------------|-----------------|--------------|-----|
| AppPalette.primary | `#1FA951` | `jardineo-primary` | `#1FA951` |
| AppPalette.greenPrimaryDark | `#14532D` | `jardineo-green-dark` | `#14532D` |
| AppPalette.greenSoft | `#E6F8EE` | `jardineo-green-soft` | `#E6F8EE` |
| AppPalette.gray600 | `#4B5563` | `jardineo-gray` | `#4B5563` |
| AppPalette.surface | `#FFFFFF` | `jardineo-surface` | `#FFFFFF` |
| AppPalette.surfaceVariant | `#F3F4F6` | `jardineo-surface-variant` | `#F3F4F6` |

### Typographie

| Flutter | Web |
|---------|-----|
| `AppText.headlineLarge` (32px, bold) | `text-4xl md:text-5xl font-bold` |
| `AppText.bodyLarge` (16px, normal) | `text-base font-normal` |
| `AppText.button` (16px, w600) | `text-base font-jardineo-medium` |

### Border Radius

| Flutter | Web |
|---------|-----|
| `BorderRadius.circular(12)` | `rounded-jardineo` |

---

## 🌐 Langue

Tout le contenu a été traduit en français pour correspondre à l'app:
- "Bienvenue sur Jardineo"
- "Télécharger pour Android"
- "Tester sur iOS"
- "Gestion du jardin"
- "Visualisation AR"
- "Communauté"
- "Dernière version"
- "Publié le"
- "Nouveautés"

---

## 📊 Avant / Après

### Avant
- Couleurs génériques (Tailwind green-600, stone, etc.)
- Textes en anglais
- Border radius variable (rounded-xl = 16px)
- Shadows importantes
- Design générique

### Après
- **Couleurs exactes de l'app** (#1FA951, #14532D, #E6F8EE, etc.)
- **Textes en français**
- **Border radius fixe** (12px partout)
- **Shadows subtiles** (comme Flutter)
- **Design cohérent avec l'app mobile**

---

## ✅ Checklist de Cohérence

- [x] Couleurs identiques à `AppPalette.dart`
- [x] Border radius 12px (`rounded-jardineo`)
- [x] Font weights identiques (400, 600, 700)
- [x] Textes en français
- [x] Style de boutons cohérent
- [x] Cartes avec border subtile
- [x] Footer en vert foncé
- [x] Logo vert Jardineo
- [x] Pas de shadows agressives
- [x] Transitions douces (300ms)

---

## 🚀 Tester

Le serveur de dev est lancé :
```
http://localhost:3000
```

Comparez visuellement avec:
- `FrontMobile/lib/ui/home/widgets/home_page.dart` - Page d'accueil
- `FrontMobile/lib/ui/core/widgets/custom_button.dart` - Boutons
- `FrontMobile/lib/ui/theme/app_palette.dart` - Couleurs
- `FrontMobile/lib/ui/theme/app_text.dart` - Typographie

---

## 🎨 Utiliser les Couleurs Jardineo

### Dans vos composants futurs:

```tsx
// Texte
<h1 className="text-jardineo-green-dark">Titre</h1>
<p className="text-jardineo-gray">Texte</p>

// Boutons
<button className="bg-jardineo-primary text-white rounded-jardineo px-6 py-3">
  Action
</button>

// Cartes
<div className="bg-jardineo-primary-soft border border-jardineo-border rounded-jardineo p-6">
  Contenu
</div>

// Accents
<span className="text-jardineo-mint">Accent</span>
<div className="bg-jardineo-sky">Sky background</div>
```

---

## 📝 Notes pour le Futur

Si vous ajoutez de nouvelles couleurs dans `AppPalette.dart`:
1. Ajoutez-les dans `tailwind.config.ts` sous `theme.extend.colors.jardineo`
2. Utilisez le format: `'nom-couleur': '#HEXCODE'`
3. Rebuild: `npm run build`

---

**Le portail web reflète maintenant parfaitement l'ADN visuel de Jardineo ! 🌿**
