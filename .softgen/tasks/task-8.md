---
title: Restructuration des données athlètes pour l'éditeur visuel
status: done
priority: high
type: chore
---
## Notes
Le problème actuel vient du fait que l'éditeur visuel modifie le code source. Avec une boucle de génération, modifier un texte à l'écran remplace la variable dynamique par du texte en dur dans l'unique template partagé, ce qui affecte tous les athlètes.
La solution est de "dérouler" la boucle : créer un composant de présentation isolé et l'instancier manuellement 11 fois dans la page. Ainsi, chaque biographie sera une propriété indépendante que l'éditeur pourra modifier sans toucher aux autres.

## Checklist
- [x] Extraire le bloc d'affichage d'un athlète (image de profil, filigrane, statistiques, palmarès, biographie) dans un composant de présentation dédié pour isoler sa logique. Y inclure les fonctions de formatage associées (couleur des médailles, tri des années).
- [x] Sur la page Los Angeles 2028, supprimer la boucle de rendu et la constante des données centralisées.
- [x] Déclarer individuellement chaque athlète à la suite dans la page, en passant ses informations (nom, bio, palmarès, images, etc.) directement au nouveau composant de présentation. Maintenir l'alternance visuelle (gauche/droite) d'un athlète à l'autre.
- [x] Adapter la logique de récupération des classements mondiaux depuis l'API pour qu'elle produise un dictionnaire (clé: identifiant, valeur: classement) au lieu de modifier un tableau, puis injecter ce classement dans les composants individuels correspondants.