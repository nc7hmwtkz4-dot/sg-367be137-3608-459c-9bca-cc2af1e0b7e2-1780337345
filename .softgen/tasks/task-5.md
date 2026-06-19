---
title: Restauration des biographies des athlètes
status: todo
priority: urgent
type: bug
tags:
- data
- fix
created_by: agent
created_at: 2026-06-19 08:15:00+00:00
position: 5
---

## Notes
Suite à une erreur d'édition, la biographie d'Alexis Renaudineau a écrasé celle des autres athlètes dans le tableau `athletesData` du fichier `src/pages/los-angeles-2028.tsx`. Il faut rétablir l'intégrité de ces données.

## Checklist
- [x] Restaurer la bio de Baptiste Addis : "Médaillé d'argent par équipe aux Jeux Olympiques de Paris 2024, Baptiste confirme son statut de compétiteur de haut niveau avec une saison 2025 remarquable. Disputant 3 demi-finales sur 4 possibles en Coupe du Monde, dont une médaille d'argent à Madrid, il termine l'année au 6e rang mondial, s'imposant comme l'un des meilleurs archers de sa génération."
- [x] Restaurer la bio de Victoria Sebastian : "Archère talentueuse en constante progression, Victoria combine technique rigoureuse et mental d'acier pour viser l'excellence olympique."
- [x] Restaurer la bio de Jean-Charles Valladont : "Figure emblématique du tir à l'arc français depuis 2006, Jean-Charles incarne l'excellence et la constance au plus haut niveau. Médaillé d'argent individuel aux Jeux Olympiques de Rio 2016, puis médaillé d'argent par équipe à Paris 2024, il vise désormais l'or olympique à Los Angeles 2028 pour couronner une carrière exceptionnelle."
- [x] Maintenir la bio d'Alexis Renaudineau : "Prodige du tir à l'arc français, Alexis cumule les médailles d'or internationales en catégorie jeune (Champion du monde et d'Europe par équipe, vainqueur de la Youth Cup) tout en intégrant l'équipe de France senior dès 2026, une performance rare pour un athlète encore junior. Cette double casquette témoigne d'un talent exceptionnel et d'une maturité technique précoce qui le positionnent déjà comme un sérieux prétendant à la sélection olympique pour Los Angeles 2028."
- [x] S'assurer que les autres athlètes (Anaëlle, Thomas, Franck, Marcelle, Mila, Maia, Iban) n'ont pas de biographie assignée.

## Acceptance
- Chaque athlète possède sa propre biographie unique sur la page "Projet LA 2028".
- Aucun athlète n'affiche la biographie d'un autre en doublon.
