# Signal IA

Site de contenu minimal sous Astro pour le projet `ai-blog`.

## Ce qu’il y a
- homepage éditoriale pour **Signal IA**
- index simple des articles
- pages statiques pour les 9 articles markdown existants
- catégories éditoriales et dossiers SEO
- 2 dossiers renforcés en hubs longform maintenables
- metadata SEO de base (`title`, `description`, canonical, Open Graph simple)
- sitemap + RSS
- structure légère et maintenable

## Stack
- Astro
- content collection branchée directement sur `articles/`
- CSS global minimal, sans dépendances UI
- sortie statique compatible GitHub Pages

## Lancer en local
```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:4321`.

## Build de vérification
```bash
npm run build
npm run preview
```

## Déploiement futur sur Cloudflare Pages
Préparation minimale déjà ajoutée :
- `wrangler.toml`
- documentation de handoff dans `docs/cloudflare-pages.md`

Réglages Cloudflare Pages à utiliser plus tard :
- build command : `npm run build`
- output directory : `dist`

## Structure utile
- `articles/` : sources éditoriales markdown
- `src/content.config.ts` : schéma des articles
- `src/pages/` : homepage, listing, pages article, catégories, dossiers
- `src/data/seo.ts` : taxonomie + données des hubs SEO
- `src/layouts/BaseLayout.astro` : layout + SEO de base
- `src/styles/global.css` : styles globaux
- `docs/cloudflare-pages.md` : mode d’emploi pour le handoff Cloudflare Pages

## Points d’attention
- l’URL canonique reste provisoire tant que le domaine final n’est pas choisi
- le domaine final devra être recopié dans `astro.config.mjs` avant mise en ligne publique
- pas de functions Cloudflare ni de secrets à gérer pour la version actuelle
