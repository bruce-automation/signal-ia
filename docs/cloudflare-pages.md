# Cloudflare Pages handoff

Préparation minimale pour déployer `Signal IA` sur Cloudflare Pages **sans** changer le site en profondeur.

## Pourquoi rien de plus
Le site Astro est entièrement statique.
Il n’a pas besoin d’adapter Cloudflare, de functions ni d’authentification locale pour être prêt au déploiement.
Le bon setup reste donc :
- build Astro standard
- dossier de sortie `dist/`
- config légère `wrangler.toml` pour documenter le handoff

## Commandes locales
```bash
npm install
npm run dev
npm run build
npm run preview
```

- `npm run dev` : développement local sur Astro
- `npm run build` : génère `dist/`
- `npm run preview` : vérifie le build localement avant handoff

## Réglages Cloudflare Pages à créer plus tard
Dans Cloudflare Pages, créer un projet avec ces valeurs :

- **Framework preset** : `Astro`
- **Build command** : `npm run build`
- **Build output directory** : `dist`
- **Node.js version** : `22` (ou la version LTS disponible la plus proche et stable)

## Variables d’environnement
Aucune requise pour la version actuelle du site.

## Domaine personnalisé : handoff futur
Quand le projet Pages existe déjà, faire ensuite :

1. Ajouter le domaine personnalisé dans Cloudflare Pages.
2. Pointer le DNS du domaine vers Cloudflare selon les instructions affichées.
3. Remplacer `site` dans `astro.config.mjs` par l’URL canonique finale.
4. Rebuild et redéployer pour régénérer correctement :
   - canonicals
   - sitemap
   - RSS
5. Vérifier ensuite :
   - homepage
   - une page article
   - une page dossier
   - `/sitemap-index.xml`
   - `/rss.xml`

## Ce qui restera à ajuster au moment du vrai domaine
Dans l’état actuel, le site utilise encore une URL de travail :
- `https://signal-ia.local`

C’est volontaire pour ne pas figer un domaine trop tôt.

## Vérification attendue avant mise en ligne
- build propre sans erreurs
- navigation locale OK
- canonicals cohérents après remplacement du domaine final
- sitemap accessible
- RSS accessible
