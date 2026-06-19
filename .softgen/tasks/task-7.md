---
title: Correction du rendu dynamique des biographies
status: todo
priority: urgent
type: bug
---

## Notes
Suite à une modification via l'éditeur visuel, la variable dynamique appelée pour afficher la biographie a été remplacée par un texte en dur (la bio d'Alexis Renaudineau). Ce code étant situé dans la boucle `.map()` qui génère les cartes, toutes les fiches affichent désormais la même biographie. Il faut restaurer l'indépendance des fiches.

## Checklist
- [x] Dans `src/pages/los-angeles-2028.tsx`, localiser la boucle de rendu des athlètes et la section de la biographie (`<div className="pt-4">`).
- [x] Remplacer le paragraphe de texte en dur (commençant par "Prodige du tir à l'arc français...") par la variable dynamique `{athlete.bio}` afin de lier la vue aux données individuelles.
- [x] Vérifier que l'affichage conditionnel `{athlete.bio && ...}` enveloppe bien la variable dynamique pour n'afficher le bloc que si l'athlète possède une bio.

## Acceptance
Les biographies affichées sur les fiches de Jean-Charles Valladont, Baptiste Addis et Alexis Renaudineau sont distinctes et correspondent strictement aux données de la constante `athletesData`.
