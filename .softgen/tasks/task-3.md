---
title: Liste Alternée des 8 Athlètes
status: done
priority: high
type: feature
tags: [athletes, layout]
created_by: softgen
created_at: 2026-05-31
position: 3
---

## Notes
Génération des 8 profils avec les noms réels fournis. Les photos et le texte de palmarès seront générés sous forme de placeholders pour l'instant.

## Checklist
- [x] Configurer le jeu de données avec les noms fournis : FRA (Baptiste Addis, Victoria Sebastian, Jean-Charles Valladont, Anaëlle Florent, + 1 profil générique FR), CIV (Franck Eyeni, Marcelle Diombo), SUI (Thomas Aubert)
- [x] Utiliser des placeholders pour les photos de profil, les photos d'action, et les textes/statistiques
- [x] Implémenter une disposition en liste où chaque athlète occupe une ligne entière
- [x] Alterner l'alignement pour chaque ligne : photo de profil à gauche/texte à droite, puis l'inverse au profil suivant
- [x] Intégrer dans la section texte : le drapeau correspondant à la nationalité, le nom, et une liste de statistiques/palmarès
- [x] Ajouter une image d'action estompée (effet filigrane/watermark) en arrière-plan exclusif de la zone de texte de chaque athlète

## Acceptance
La page affiche les 8 athlètes l'un en dessous de l'autre de manière alternée avec les noms demandés. Les nationalités sont respectées (5 FR, 2 CIV, 1 SUI) et l'effet filigrane est visible derrière les textes.