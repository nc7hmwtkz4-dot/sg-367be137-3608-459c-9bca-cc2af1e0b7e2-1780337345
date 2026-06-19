---
title: Tri chronologique du palmarès des athlètes
status: todo
priority: high
type: feature
tags:
- data
- sorting
---

## Notes
:
- Le palmarès des athlètes doit être affiché par ordre chronologique décroissant.
- La source de données contient du texte libre avec des années (ex: "Champion d'Europe 2024").
- Une extraction dynamique est nécessaire pour trier l'affichage avant le rendu de chaque carte d'athlète.

## Checklist
:
- [x] Analyser chaque ligne de palmarès pour extraire automatiquement l'année de la compétition.
- [x] Réorganiser l'affichage pour présenter systématiquement la médaille la plus récente en premier.
- [x] Gérer le tri par défaut pour placer les médailles sans année explicite en fin de liste.
