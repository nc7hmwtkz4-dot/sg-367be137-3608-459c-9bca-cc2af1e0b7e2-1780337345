---
title: Intégration API World Archery
status: in_progress
priority: high
type: feature
tags:
- api
- page:los-angeles
---

## Notes
- La page los-angeles-2028.tsx doit afficher le classement mondial de chaque athlète via l'API officielle.
- Source de données : `https://api.worldarchery.org/v3/ATHLETEBIOGRAPHY/?Id=[ID]`
- La donnée de rang actuel se trouve dans : `items[0].WorldRankings.Current[0].Rnk`.
- Côté Next.js (Page Router), utiliser `getStaticProps` avec `revalidate` (ex: 86400 pour 24h) pour pré-charger les classements côté serveur.

## Checklist
- [x] Ajouter une propriété `waId` dans le tableau d'objets `athletes` (utiliser les vrais ID, ex: 32836 pour Baptiste Addis, 6131 pour JC Valladont).
- [x] Implémenter la fonction `getStaticProps` dans `los-angeles-2028.tsx` pour appeler l'API World Archery pour chaque athlète possédant un `waId`.
- [x] Gérer les éventuels retours vides ou absences de classement dans l'API.
- [x] Enrichir les objets du tableau avec une propriété `worldRanking` issue de la réponse API.
- [x] Insérer une ligne "Classement Mondial" en première position dans le bloc "Palmarès et Statistiques" sur la fiche de l'athlète dans le JSX.
