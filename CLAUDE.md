# CLAUDE.md — WEB (portail web Jardineo)

Règles communes : `CLAUDE.md` du dépôt parent `JARDINEO_`. Détails : `README.md`.

## Stack et commandes

- **Next.js 15** (App Router, `app/`), React, TypeScript, Tailwind CSS 3
- Node **20** (`.nvmrc`)

```bash
npm ci
npm run dev          # http://localhost:3000
npm run lint
npm run build        # à lancer avant de pousser (la CI fait lint + build)
make docker-dev      # alternative Docker (hot reload)
```

## Structure

`app/` (pages, dont `privacy-policy/`, layout, styles) · `components/` · `lib/` · `public/`.

## Règles

1. Le portail sert la vitrine et les pages légales (politique de confidentialité exigée par
   les stores) : ne pas casser leurs URL.
2. Les PR dependabot de ce dépôt ciblent `main` : le merge vers `main` est fait par un humain.
3. Montées majeures en attente (next 16 retire `next lint`, eslint 10, tailwind 4) :
   à traiter comme des migrations dédiées, pas en merge direct.
4. Multi-OS : `make` n'existe pas nativement sous Windows, utiliser les scripts npm ou Git Bash.
