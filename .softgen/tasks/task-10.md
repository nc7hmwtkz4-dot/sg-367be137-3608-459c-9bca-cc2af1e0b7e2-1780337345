---
title: Fiche Franck Eyeni
status: done
priority: high
type: feature
---

## Notes
Mise à jour spécifique de la biographie et du palmarès pour Franck Eyeni sur la page Los Angeles 2028. La modification ne doit affecter aucune autre fiche athlète.
Rappel architectural : La biographie doit être passée en tant que `children` (`<p>`) à l'intérieur de `<AthleteCard>` directement dans la page (pas dans un tableau de données mappé).

## Checklist
- [x] Dans `src/pages/los-angeles-2028.tsx`, mettre à jour l'objet `Franck Eyeni` dans `athletesData` pour inclure son palmarès : "Médaille d'or au Championnat d'Afrique 2025 (individuel)", "Médaille d'argent au Championnat d'Afrique 2023 (par équipe mixte)", "Médaille d'argent au Championnat d'Afrique 2022 (individuel)", "Record d'Afrique en arc classique (660 points)", "Participation aux Jeux Olympiques de la Jeunesse 2018".
- [x] Dans `src/pages/los-angeles-2028.tsx`, localiser l'appel au composant `<AthleteCard>` de Franck Eyeni et y insérer la balise `<p className="text-muted-foreground italic text-sm leading-relaxed">` avec le texte final de sa biographie se terminant par "toute sa précision et sa maîtrise avec un objectif clair...".
---TASK:task-2.md:
