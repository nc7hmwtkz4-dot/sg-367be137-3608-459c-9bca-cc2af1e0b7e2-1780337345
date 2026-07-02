---
title: Language Switcher in Header
status: done
priority: high
type: feature
tags: [navigation, i18n]
position: 11
---

## Notes
Ajouter un sélecteur de langue dans l'en-tête (Header) pour permettre aux utilisateurs de basculer entre la version française et la version anglaise du site.

## Checklist
- [x] Ajouter un bouton ou des liens "FR | EN" dans la barre de navigation du `Header.tsx`.
- [x] Détecter la langue actuelle via le chemin de l'URL (`router.pathname.startsWith('/en')`) pour mettre en surbrillance la langue active.
- [x] Configurer les liens du sélecteur : depuis une page FR, le lien EN doit rediriger vers `/en` ou `/en/los-angeles-2028`. Depuis une page EN, le lien FR doit rediriger vers la racine `/` ou `/los-angeles-2028`.
- [x] S'assurer que le lien "Projet Los Angeles 2028" du header pointe vers la bonne version linguistique en fonction de la page courante.