---
title: English LA 2028 Page Translation
status: done
priority: high
type: feature
tags: [pages, i18n]
position: 13
---

## Notes
Créer la version anglaise physique de la page Los Angeles 2028. Les biographies doivent rester structurées en tant que `children` des composants `AthleteCard` pour préserver la compatibilité de l'éditeur visuel.

## Checklist
- [x] Créer le fichier `src/pages/en/los-angeles-2028.tsx`.
- [x] Traduire les métadonnées SEO et la section Hero ("Los Angeles 2028 Project").
- [x] Traduire individuellement les biographies de chaque athlète (Baptiste Addis, Victoria Sebastian, etc.) directement dans les balises `<p>` passées en children.
- [x] Traduire les palmarès (awards/medals) et les statistiques de chaque `AthleteCard`.
- [x] Traduire le CTA de fin de page ("Support our champions", "Back to home").