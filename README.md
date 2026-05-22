# Manuel de la cuisson

> *Les trois piliers de la maîtrise de la cuisson* — température, humidité, inertie thermique. Atlas des épices, protocoles par viande et par famille de légumes.

Site statique multi-pages installable en PWA (Progressive Web App) — fonctionne hors-ligne et s'ajoute à l'écran d'accueil d'un téléphone comme une vraie application.

## Structure

```
manuel-cuisson/
├── index.html              # Accueil
├── pilier-1-temperature.html
├── pilier-2-humidite.html
├── pilier-3-inertie.html
├── epices.html             # Chapitre IV — Atlas des épices
├── viandes.html            # Chapitre V — Protocoles viandes
├── legumes.html            # Chapitre VI — Protocoles légumes
├── biblio.html             # Bibliographie & ressources
├── 404.html
├── manifest.json           # PWA manifest
├── service-worker.js       # Cache offline
├── robots.txt
├── sitemap.xml
└── assets/
    ├── style.css
    ├── icon-192.png
    ├── icon-512.png
    ├── icon-maskable-512.png
    ├── apple-touch-icon.png
    └── favicon.png
```

Aucune dépendance, aucun build, aucun framework. Trois polices chargées depuis Google Fonts (Cormorant Garamond, Inter, JetBrains Mono).

## Déploiement

### Option A — GitHub + Vercel (recommandé)

```bash
cd manuel-cuisson
git init
git add .
git commit -m "Manuel de la cuisson v1"
gh repo create manuel-cuisson --public --source=. --push
```

Puis sur [vercel.com](https://vercel.com) → *Add New Project* → importe le repo → *Deploy*. URL en 30 secondes. Chaque `git push` redéploie automatiquement.

### Option B — GitHub Pages

Repo GitHub → *Settings* → *Pages* → *Source: branch main / root* → *Save*. URL `https://<user>.github.io/manuel-cuisson` en ~1 minute.

### Option C — Netlify Drop

[app.netlify.com/drop](https://app.netlify.com/drop) → glisse-dépose le dossier `manuel-cuisson/`.

## Installation comme app sur téléphone

1. Ouvre l'URL de production dans Safari (iOS) ou Chrome (Android)
2. Bouton *Partager* → *Sur l'écran d'accueil* (iOS) ou menu *⋮* → *Ajouter à l'écran d'accueil* (Android)
3. L'app s'ouvre en plein écran avec son icône, et fonctionne hors-ligne après la première visite (cache service worker)

## Maintenance

Pour éditer un chapitre : modifier le fichier `.html` correspondant. Pour ajouter un fichier dans la sidebar : éditer `assets/style.css` n'est pas nécessaire — il faut copier-coller le bloc `<aside class="sidebar">` mis à jour dans toutes les pages, ou (mieux) régénérer le site avec le script Python `build_pages.py` (à conserver à part).

Pour forcer la mise à jour du cache des utilisateurs déjà installés : changer `CACHE_VERSION` en haut de `service-worker.js`.

## Crédits

Manuel technique compilé à partir des sources citées dans la bibliographie. Tous droits aux auteurs respectifs.
