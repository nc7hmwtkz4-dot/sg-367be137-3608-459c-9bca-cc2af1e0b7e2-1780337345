import React from "react";
import { Trophy, Target, Shirt } from "lucide-react";

interface AthleteCardProps {
  name: string;
  country: string;
  flag: string;
  profileImage?: string;
  actionImage?: string;
  stats?: {
    discipline?: string;
    competitions?: string;
    bestScore?: string;
    ranking?: string;
  };
  palmares?: string[];
  worldRanking?: number | null;
  isEven: boolean;
  children?: React.ReactNode;
}

const getMedalColor = (palmares: string): string => {
  const lowerText = palmares.toLowerCase();
  if (lowerText.includes("bronze")) return "text-[#CD7F32]";
  if (lowerText.includes("argent") || lowerText.includes("silver")) return "text-[#C0C0C0]";
  if (lowerText.includes("or") || lowerText.includes("gold") || lowerText.includes("champion")) return "text-[#FFD700]";
  return "text-olympic-gold";
};

const isNonPodiumPlacement = (palmares: string): boolean => {
  const lowerText = palmares.toLowerCase();
  return lowerText.match(/\b[4-6](ème|th|e)\b/) !== null;
};

const extractYear = (palmares: string): number => {
  const yearMatch = palmares.match(/\b(20\d{2})\b/);
  return yearMatch ? parseInt(yearMatch[1], 10) : 0;
};

const sortPalmaresByYear = (palmares: string[]): string[] => {
  return [...palmares].sort((a, b) => {
    const yearA = extractYear(a);
    const yearB = extractYear(b);
    return yearB - yearA;
  });
};

const extractSelectionNumber = (palmares: string): number | null => {
  const match = palmares.match(/(\d+)\s*sélection/i);
  return match ? parseInt(match[1], 10) : null;
};

export function AthleteCard({
  name,
  country,
  flag,
  profileImage,
  actionImage,
  stats,
  palmares,
  worldRanking,
  isEven,
  children
}: AthleteCardProps) {
  return (
    <div
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}>
      
      {/* Photo de profil */}
      <div className="w-full lg:w-2/5">
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-olympic-gold/20 group hover:border-olympic-gold/40 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-olympic-gold/20 to-transparent"></div>
          {profileImage ?
          <img
            src={profileImage}
            alt={name}
            className={`w-full h-full object-cover ${
            name === "Maia Tincu" ? "object-[center_40%]" : ""}`
            } /> :


          <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
              <div className="text-center space-y-3">
                <div className="text-6xl">{flag}</div>
                <p className="text-2xl font-bold text-foreground">{name}</p>
                <p className="text-sm text-muted-foreground uppercase tracking-widest">
                  [Photo de profil]
                </p>
              </div>
            </div>
          }
        </div>
      </div>

      {/* Zone de texte avec filigrane */}
      <div className="w-full lg:w-3/5">
        <div className="relative rounded-2xl overflow-hidden border-2 border-olympic-gold/20 bg-card shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-olympic-gold/40">
          {/* Image d'action en filigrane */}
          <div className="absolute inset-0 opacity-[0.12] group-hover:opacity-[0.16] transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-olympic-gold/30 via-transparent to-transparent"></div>
            {actionImage ?
            <img
              src={actionImage}
              alt={`${name} en action`}
              className="w-full h-full object-cover" /> :


            <div className="absolute inset-0 flex items-center justify-center">
                <Target className="w-64 h-64 text-olympic-gold rotate-12" />
              </div>
            }
          </div>

          {/* Contenu */}
          <div className="relative z-10 p-8 lg:p-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{flag}</div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  {country}
                </p>
              </div>
              {worldRanking && worldRanking <= 50 &&
              <div className="flex flex-col items-center justify-center p-4 bg-olympic-gold/10 rounded-lg border border-olympic-gold/30 min-w-[120px]">
                  <span className="font-bold text-4xl text-foreground">#{worldRanking}</span>
                  <span className="text-xs text-muted-foreground italic mt-1">Classement Mondial</span>
                </div>
              }
            </div>

            <div className="h-px bg-gradient-to-r from-olympic-gold/50 via-olympic-gold/20 to-transparent"></div>

            <div className="space-y-4">
              <div className="grid gap-3">
                {palmares && palmares.length > 0 ?
                sortPalmaresByYear(palmares).map((titre, idx) => {
                  const selectionNumber = extractSelectionNumber(titre);
                  const isSelection = selectionNumber !== null;
                  const isNonPodium = isNonPodiumPlacement(titre);

                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        {isSelection ?
                      <div className="relative w-5 h-5 flex-shrink-0">
                            <Shirt className="w-5 h-5 text-blue-600" />
                            <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-foreground">
                              {selectionNumber}
                            </span>
                          </div> :
                      !isNonPodium ?
                      <Trophy className={`w-4 h-4 ${getMedalColor(titre)} flex-shrink-0`} /> :

                      <div className="w-4 flex-shrink-0"></div>
                      }
                        <span className="font-semibold text-foreground">{titre}</span>
                      </div>);

                }) :

                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Compétitions Internationales</span>
                    <span className="font-semibold text-foreground">
                      {stats?.competitions || "[À compléter]"}
                    </span>
                  </div>
                }
              </div>
            </div>

            <div className="pt-4">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>);

}