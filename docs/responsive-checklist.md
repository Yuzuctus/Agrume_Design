# Responsive Checklist

Checklist a lancer avant de valider une page ou un changement de shell.

## Largeurs de test

Verifier au minimum:

- `390px`
- `820px`
- `1024px`
- `1440px`
- `1728px`

## Header et navigation

- Le header ferme tient sans depasser:
  - guide `<= 96px`
  - demos / README `<= 88px`
- Aucun lien ne depend d'un wrap spontane pour rester atteignable
- Le drawer s'ouvre et se ferme correctement
- Le theme toggle reste visible en compact
- Le texte d'etat du theme ne surcharge pas le header compact

## Focus et interactions

- Ouverture au clavier possible
- `Escape` ferme le drawer
- Le focus entre dans le drawer a l'ouverture
- Le focus revient au bouton ouvreur a la fermeture
- L'overlay ferme sans laisser l'etat visuel incoherent

## Overflow et chevauchement

- Pas d'overflow horizontal du document
- Pas de collision entre header sticky et contenu
- Pas de collision entre hero image et texte
- Pas de bouton tronque dans toolbar ou footer
- Les tables et panneaux gardent une largeur exploitable

## Contenu dense

- Tool:
  - toolbar lisible
  - boutons d'action empilables
  - table ou liste encore comprehensible
- Library:
  - filtres accessibles
  - colonnes repliees proprement
  - cartes media pas ecrasees
- Auth:
  - formulaire prioritaire
  - visuel secondaire quand l'espace se reduit

## Typographie

- Le `h1` de hero ne cree pas un bloc absurdement haut
- Les paragraphes conservent une mesure lisible
- Les labels et chips restent respirants en compact

## A valider avant merge

- Mesures rapides sur les largeurs cibles
- Test clavier sur drawer et modal
- Verification visuelle du guide, README, landing, login, tool, library
