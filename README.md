# Yuzuctus Shared Design System

Ce depot est la reference officielle pour reconstruire les sites Yuzuctus.

Priorite des objectifs:
1. charte graphique de reconstruction pour tes vrais projets
2. documentation claire pour humains et IA
3. demo technique montrable dans un portfolio ou sur un CV

## Sources editables

La version habillee a ouvrir dans le navigateur reste `public/readme.html`.
Les sources de reference a maintenir dans le repo sont:

- `README.md` : vue d'ensemble, structure, regles globales
- `docs/layout-shells.md` : shells partages, nav, etats desktop/mobile, largeur
- `docs/responsive-checklist.md` : checklist QA anti-chevauchement et anti-regression
- `docs/page-archetypes.md` : landing, tool, library, auth, densite et usage du personnage
- `design_contract.json` : contrat machine lisible pour les agents et IA

## A ouvrir en premier

- `public/styleguide.html` : vue d'ensemble de la charte
- `public/examples/landing.html` : landing / hub perso
- `public/examples/login.html` : page connexion
- `public/examples/tool-dashboard.html` : exemple dashboard tool
- `public/examples/library.html` : exemple catalogue / library
- `public/readme.html` : version HTML stylee du README

## Ce que ce repo doit permettre

- Refaire `yuzuctus.fr` avec une vraie page d'accueil signature
- Refaire `osurea.yuzuctus.fr` avec une structure d'outil claire et dense
- Refaire `skins.yuzuctus.fr` comme une vraie library editorialisee
- Refaire `zest.yuzuctus.fr` comme un outil court, net et lisible
- Donner une base commune pour les futurs projets sans repartir de zero

## Structure du systeme

- `public/style.css` : point d'entree CSS
- `public/css/core.css` : fondations partagees, composants, themes, utilitaires
- `public/css/profile.css` : accent par type de projet et framing du personnage
- `public/css/showcase.css` : shells et compositions des pages examples
- `public/css/styleguide.css` : shell du guide et mise en page documentaire
- `public/css/fixes.css` : primitives partagees des shells et docs long-form
- `public/js/styleguide.js` : theme, drawer, sidebar, tabs, modals, toasts
- `public/readme.html` : lecture longue stylee pour le README et les futurs contrats
- `docs/*.md` : reference editables pour guider les futures integrations

## Regles de direction artistique

- Une base commune pour tous les projets
- Un accent par projet, pas une identite completement differente
- Yuzu au hero, en empty state ou en petit rappel seulement
- Les tokens `ink` servent au texte lisible
- Les accents servent surtout aux surfaces, CTAs, focus et badges
- Le style doit etre moderne, authored, doux, mais pas generique ni startup template

## Regles pour un humain

Quand tu refais un site:

- commence par le type de page reelle: landing, dashboard, library ou auth
- choisis le bon niveau de presence du personnage
- construis la hierarchie avec surfaces, espacements et encres avant la deco
- verifie que la page reste bonne meme sans illustration
- valide toujours le shell a `390 / 820 / 1024 / 1440 / 1728px`

## Regles pour une IA

Quand une IA genere une page ou du CSS pour ce projet:

- ne pas inventer de nouvelles couleurs hors tokens sans demande explicite
- ne pas utiliser les accents pastel comme petit texte dense
- ne pas transformer la DA en template SaaS ou portfolio generique
- garder des cartes lisibles, des bordures douces et des layouts structures
- limiter le personnage a ses trois usages officiels
- faire passer la coherence responsive avant la decoration

## Usages officiels du personnage

- portrait hero
- mascot / chibi pour onboarding et empty states
- micro sticker pour details affectifs secondaires

## Ce qu'il faut encore faire ensuite

- Integrer ces compositions dans les vrais sites un par un
- Remplacer les placeholders de contenu par tes vraies donnees
- Optimiser les images en WebP / AVIF si tu packages en production
- Ajouter des captures ou GIF pour ton portfolio si tu veux une version recruteur plus narrative
