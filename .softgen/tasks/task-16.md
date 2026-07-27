---
title: Réorganisation des athlètes LA 2028
status: done
priority: high
type: chore
tags: [content, la-2028]
---
## Notes
Le client a demandé une réorganisation stricte de l'ordre d'affichage des athlètes sur la page dédiée à LA 2028, pour les versions FR et EN.
**Contrainte absolue** : Aucun texte (y compris les biographies passées en `children`), aucune propriété et aucune photo ne doivent être modifiés. Il s'agit d'un simple déplacement des blocs JSX existants.

## Checklist
- [x] Dans le fichier `src/pages/los-angeles-2028.tsx`, réordonner les composants `AthleteCard` pour respecter cet ordre exact : Baptiste Addis, Victoria Sebastian, Jean Charles Valladont, Alexis Renaudineau, Mila Fremery Delestan, Maia Tincu, Iban Bariteaud, Anaelle Florent, Thomas Aubert, Franck Eyeni, Marcelle Diombo.
- [x] Dans le fichier `src/pages/en/los-angeles-2028.tsx`, appliquer exactement le même ordre de tri pour les composants `AthleteCard`.
- [x] Vérifier visuellement dans le code qu'aucune donnée de contenu (nom, pays, images, texte biographique, palmarès) n'a été altérée pendant la manipulation.