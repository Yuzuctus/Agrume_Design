# Layout Shells

Ce guide fixe la structure des shells partages entre le guide, les pages examples et la doc long-form.

## Objectif

Le shell doit rester stable, lisible et previsible avant meme de parler des cartes ou des illustrations.

Il doit resoudre trois choses:

- navigation claire sans wrap accidentel
- largeur utile forte sur grand ecran
- comportements mobile et desktop explicites

## Etats a respecter

### Guide

- `body[data-guide-sidebar="expanded"]` : sidebar visible sur desktop
- `body[data-guide-sidebar="collapsed"]` : sidebar repliee sur desktop, contenu elargi
- `body[data-shell-nav="open"]` : drawer ouvert sur compact
- `body[data-shell-nav="closed"]` : drawer ferme sur compact

### Demos et README

- desktop: topbar + navigation inline + theme visible
- compact: topbar reduite + bouton menu + drawer + overlay

## Regles de navigation

- Aucun shell ne doit compter sur un simple retour a la ligne pour rester utilisable
- Les boutons de menu et de fermeture gardent une cible tactile minimale de `44px`
- Le drawer doit se fermer via bouton, overlay, clic sur lien et `Escape`
- Le focus retourne au bouton declencheur apres fermeture
- Le drawer doit prendre le focus a l'ouverture

## Regles de largeur

- Les demos et le README utilisent un conteneur large base sur `--container-wide`
- Le guide utilise une largeur differente selon l'etat de sidebar:
  - sidebar ouverte: contenu large mais garde un peu d'air
  - sidebar repliee: contenu encore plus large
- Les grandes compositions doivent profiter du gain de largeur:
  - hero split
  - dashboard split
  - library layout
  - grilles de previews

## Breakpoints de reference

- `390px` : mobile etroit
- `820px` : tablette / petit laptop
- `1024px` : seuil compact du shell
- `1440px` : desktop courant
- `1728px` : grand ecran a exploiter pleinement

## Accessibilite minimale

- le bouton de navigation porte `aria-expanded`
- le panneau de nav compact porte un `role="dialog"` et `aria-modal="true"`
- les boutons de fermeture sont identifies par `data-shell-close`
- le bouton desktop du guide porte `data-shell-toggle="guide-sidebar"` et met a jour `aria-pressed`

## Anti-patterns

- nav qui wrappe sur deux ou trois lignes dans le header
- hero qui force un titre trop haut car la typo ne redescend pas en compact
- sidebar visible et header complet en meme temps sur compact
- conteneur central trop etroit sur ecran large
