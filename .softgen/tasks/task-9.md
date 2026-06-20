---
title: Fiche Athlète - Anaëlle Florent
status: done
priority: high
type: feature
tags: [athlete-card, content-update]
created_by: agent
created_at: 2026-06-20T14:38:00Z
position: 9
---
## Notes
- **Target File**: `src/pages/los-angeles-2028.tsx`
- **Scope**: Update ONLY Anaëlle Florent's `AthleteCard` component. Do not modify any other athlete card.
- **Biography Format Requirement**: The biography MUST be passed as `children` to the `AthleteCard` component (using `<p>` tag), NOT as a `bio` prop, to preserve visual editor compatibility.
- **Content Provided**:
  - **Palmarès (Chronological & notable)**: 
    - 5e en double mixte aux Championnats d'Europe 2026
    - 4 sélections en Coupe du Monde 2026
    - Médaille de Bronze à la Coupe du Monde de Medellin 2022 par équipes (Classique)
    - Championne de France D1 par équipes en 2024
  - **Biography (Option A chosen)**: "Après une carrière internationale remarquable en arc classique, marquée par des podiums en Coupe du Monde et aux Jeux Méditerranéens, Anaëlle a opéré une transition fulgurante vers l'arc à poulies. En quelques mois seulement, son talent naturel et son exigence lui ont ouvert les portes de l'équipe de France dans sa nouvelle discipline, où elle signe déjà la meilleure performance française (701 points). Entraîneure professionnelle passionnée, elle allie la rigueur du très haut niveau à l'art de la transmission pour viser les sommets de Los Angeles 2028."
  - **Stats (to add if applicable via `stats` prop)**: Discipline: "Arc à Poulies", Best Score: "701/720"

## Checklist
- [x] Locate Anaëlle Florent's `AthleteCard` in `src/pages/los-angeles-2028.tsx`.
- [x] Add the `stats` prop with her current discipline ("Arc à Poulies") and best score ("701/720").
- [x] Populate the `palmares` array prop with the 4 achievements listed in the notes.
- [x] Inject the chosen narrative biography text wrapped in a `<p className="text-muted-foreground italic text-sm leading-relaxed">` tag as the `children` of the `AthleteCard`.

## Acceptance
- Anaëlle Florent's card displays her updated stats, palmarès list, and the new biography.
- The biography text is editable via the Softgen visual editor (because it is passed as a child `<p>` tag).
- No other athlete cards are modified in the file.