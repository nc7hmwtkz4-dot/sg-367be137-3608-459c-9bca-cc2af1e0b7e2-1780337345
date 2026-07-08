---
title: Correction du rendu dynamique des biographies
status: done
priority: urgent
type: bug
---
## Notes
L'éditeur visuel a remplacé la biographie dynamique par un texte statique partagé.

## Checklist
- [x] S'assurer que le texte de biographie est passé comme `children` au composant `AthleteCard`.
- [x] Vérifier dans la page `los-angeles-2028.tsx` que les balises `<p>` pour chaque athlète (ex: Alexis Renaudineau) sont distinctes et correspondent strictement aux données de la constante `athletesData`.
