## Vision
Création d'une page dédiée "Projet Los Angeles 2028" pour présenter 8 athlètes du club en route pour les Jeux Olympiques (5 Français, 2 Ivoiriens, 1 Suisse). La page d'accueil existante ne subira aucune altération de contenu, seule l'intégration d'un bouton d'accès dans le header est requise.

## Design
Thème "Édition Spéciale" basé sur l'esthétique existante, mais rehaussé pour l'événement olympique.
--primary: 43 74% 49% (Or olympique / Gold)
--background: 0 0% 100% (Blanc pur ou fond sombre existant)
--foreground: 222 47% 11% (Texte sombre existant)
--accent: 43 74% 49% (Nuances dorées discrètes)
--muted: 210 40% 96% (Gris neutre léger)
Typographie: Titres en Geist, Corps de texte en GeistMono.
Style: Prestigieux, sportif, avec utilisation d'images en filigrane (watermark) pour créer de la profondeur.

## Features
- Bouton d'accès unique "Projet LA 2028" intégré dans le header existant.
- Section Hero d'introduction spécifique à la page LA 2028.
- Disposition en liste alternée (Image à gauche / Texte à droite) pour les athlètes.
- Fiches athlètes : drapeau, photo de profil, zone de statistiques, palmarès trié chronologiquement et photo en filigrane.

## Architecture Technique
**IMPORTANT - Compatibilité avec l'éditeur visuel :**
Les biographies des athlètes DOIVENT être passées comme `children` au composant `AthleteCard`, et NON comme prop `bio`. Chaque balise `<p>` contenant une biographie doit être déclarée individuellement dans le fichier `src/pages/los-angeles-2028.tsx`.

**Raison :** L'éditeur visuel de Softgen modifie le fichier source où la balise HTML est définie. Si les biographies sont dans le composant `AthleteCard.tsx` (fichier partagé), modifier une biographie via l'éditeur affecte toutes les cartes d'athlètes. En passant les biographies comme children depuis la page principale, chaque athlète possède sa propre balise `<p>` distincte dans le code source, permettant des modifications isolées.

**Structure correcte :**
```tsx
<AthleteCard name="..." country="..." ...>
  <p className="text-muted-foreground italic text-sm leading-relaxed">
    Biographie unique de cet athlète
  </p>
</AthleteCard>
```

**À NE PAS FAIRE :**
- Ne jamais utiliser une boucle `.map()` pour générer les cartes d'athlètes
- Ne jamais passer la biographie comme prop `bio="..."`
- Ne jamais définir le texte de la biographie à l'intérieur du composant `AthleteCard.tsx`