import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { ArrowRight, Target, Trophy } from "lucide-react";
import Link from "next/link";
import { GetStaticProps } from "next";

interface Athlete {
  name: string;
  country: string;
  flag: string;
  waId?: number;
  profileImage?: string;
  actionImage?: string;
  stats?: {
    discipline?: string;
    competitions?: string;
    bestScore?: string;
    ranking?: string;
  };
  palmares?: string[];
  bio?: string;
  worldRanking?: number | null;
}

const athletesData: Athlete[] = [
{ name: "Baptiste Addis", country: "FRA", flag: "🇫🇷", waId: 32221, profileImage: "/R3X_2643.jpg", actionImage: "/media_51380562_50966596_compressed.jpg", stats: { discipline: "Arc Classique", bestScore: "680/720", ranking: "Top 15 France" }, palmares: ["Médaille d'argent aux Jeux Olympiques de Paris 2024 par équipe", "Médaille d'argent Coupe du Monde Madrid 2025"], bio: "Médaillé d'argent par équipe aux Jeux Olympiques de Paris 2024, Baptiste confirme son statut de compétiteur de haut niveau avec une saison 2025 remarquable. Disputant 3 demi-finales sur 4 possibles en Coupe du Monde, dont une médaille d'argent à Madrid, il termine l'année au 6e rang mondial, s'imposant comme l'un des meilleurs archers de sa génération." },
{ name: "Victoria Sebastian", country: "FRA", flag: "🇫🇷", waId: 27419, profileImage: "/IMG_3209.HEIC", actionImage: "/R3X_2810.jpg", stats: { discipline: "Arc Classique", bestScore: "665/720", ranking: "Top 20 France" }, palmares: [], bio: "Archère talentueuse en constante progression, Victoria combine technique rigoureuse et mental d'acier pour viser l'excellence olympique." },
{ name: "Jean-Charles Valladont", country: "FRA", flag: "🇫🇷", waId: 6403, profileImage: "/B16_7739.jpg", actionImage: "/R3X_9396.jpg", stats: { discipline: "Arc Classique", bestScore: "692/720", ranking: "Top 10 France" }, palmares: ["Médaille d'argent aux Jeux Olympiques de Paris 2024 par équipe", "Champion d'Europe 2024 par équipe", "Médaille d'or à la Coupe du Monde de Madrid 2025 par équipe", "Médaille de bronze au Championnat d'Europe 2024"], bio: "Figure emblématique du tir à l'arc français depuis 2006, Jean-Charles incarne l'excellence et la constance au plus haut niveau. Médaillé d'argent individuel aux Jeux Olympiques de Rio 2016, puis médaillé d'argent par équipe à Paris 2024, il vise désormais l'or olympique à Los Angeles 2028 pour couronner une carrière exceptionnelle." },
{ name: "Anaëlle Florent", country: "FRA", flag: "🇫🇷", waId: 19935, palmares: [] },
{ name: "Thomas Aubert", country: "SUI", flag: "🇨🇭", waId: 5974, profileImage: "/DA6_5642-3.jpg", actionImage: "/SYG7979.jpg", palmares: [] },
{ name: "Franck Eyeni", country: "CIV", flag: "🇨🇮", waId: 20443, profileImage: "/64b3ea82-8d84-4e68-83e5-6d285ee2b2f0.JPG", palmares: ["Champion d'Afrique 2025"], bio: "Biographie à venir" },
{ name: "Marcelle Diombo", country: "CIV", flag: "🇨🇮", palmares: [] },
{ name: "Alexis Renaudineau", country: "FRA", flag: "🇫🇷", waId: 46647, profileImage: "/WhatsApp_Image_2026-06-04_at_15.43.06_1_.jpeg", actionImage: "/YWC23_R3X_3247.jpg", palmares: ["Médaille d'or à la Youth Cup de Ruse (BUL) 2026", "Médaille d'or au Championnat d'Europe par équipe 2024", "Médaille d'or au Championnat du monde jeune par équipe 2023"], bio: "Prodige du tir à l'arc français, Alexis cumule les médailles d'or internationales en catégorie jeune (Champion du monde et d'Europe par équipe, vainqueur de la Youth Cup) tout en intégrant l'équipe de France senior dès 2026, une performance rare pour un athlète encore junior. Cette double casquette témoigne d'un talent exceptionnel et d'une maturité technique précoce qui le positionnent déjà comme un sérieux prétendant à la sélection olympique pour Los Angeles 2028." },
{ name: "Mila Fremery-Delestan", country: "FRA", flag: "🇫🇷", waId: 45361, profileImage: "/R3X_6040.jpg", actionImage: "/SYG2932.jpg", palmares: [] },
{ name: "Maia Tincu", country: "FRA", flag: "🇫🇷", waId: 43740, profileImage: "/IMG_5182.JPG", palmares: [] },
{ name: "Iban Bariteaud", country: "FRA", flag: "🇫🇷", waId: 41671, palmares: [] }];


export const getStaticProps: GetStaticProps = async () => {
  const athletesWithRankings = await Promise.all(
    athletesData.map(async (athlete) => {
      if (!athlete.waId) {
        return { ...athlete, worldRanking: null };
      }

      try {
        const response = await fetch(
          `https://api.worldarchery.org/v3/WORLDRANKINGS/?Id=${athlete.waId}`
        );

        if (!response.ok) {
          console.error(`API error for ${athlete.name}: ${response.status}`);
          return { ...athlete, worldRanking: null };
        }

        const data = await response.json();
        const ranking = data?.items?.[0]?.Rnk || null;

        return { ...athlete, worldRanking: ranking };
      } catch (error) {
        console.error(`Error fetching ranking for ${athlete.name}:`, error);
        return { ...athlete, worldRanking: null };
      }
    })
  );

  return {
    props: {
      athletes: athletesWithRankings
    },
    revalidate: 604800
  };
};

interface PageProps {
  athletes: Athlete[];
}

const getMedalColor = (palmares: string): string => {
  const lowerText = palmares.toLowerCase();
  if (lowerText.includes("bronze")) return "text-[#CD7F32]";
  if (lowerText.includes("argent") || lowerText.includes("silver")) return "text-[#C0C0C0]";
  if (lowerText.includes("or") || lowerText.includes("gold") || lowerText.includes("champion")) return "text-[#FFD700]";
  return "text-olympic-gold";
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

export default function LosAngeles2028({ athletes }: PageProps) {
  return (
    <>
      <SEO
        title="Projet Los Angeles 2028 - Arc Club de Nîmes"
        description="Découvrez les 8 athlètes de l'Arc Club de Nîmes en route vers les Jeux Olympiques de Los Angeles 2028." />
      

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-olympic-gold/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-olympic-gold/10 via-transparent to-transparent"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight fade-in">
              Projet{" "}
              <span className="bg-gradient-to-r from-olympic-gold via-olympic-gold to-amber-600 bg-clip-text text-transparent">
                Los Angeles 2028
              </span>
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-olympic-gold/50 to-transparent"></div>
      </section>

      {/* Athletes Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-24">
            {athletes.map((athlete, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}>
                  
                  {/* Photo de profil */}
                  <div className="w-full lg:w-2/5">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-olympic-gold/20 group hover:border-olympic-gold/40 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-olympic-gold/20 to-transparent"></div>
                      {athlete.profileImage ?
                      <img
                        src={athlete.profileImage}
                        alt={athlete.name}
                        className={`w-full h-full object-cover ${
                        athlete.name === "Maia Tincu" ? "object-[center_40%]" : ""}`
                        } /> :


                      <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
                          <div className="text-center space-y-3">
                            <div className="text-6xl">{athlete.flag}</div>
                            <p className="text-2xl font-bold text-foreground">{athlete.name}</p>
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
                        {athlete.actionImage ?
                        <img
                          src={athlete.actionImage}
                          alt={`${athlete.name} en action`}
                          className="w-full h-full object-cover" /> :


                        <div className="absolute inset-0 flex items-center justify-center">
                            <Target className="w-64 h-64 text-olympic-gold rotate-12" />
                          </div>
                        }
                      </div>

                      {/* Contenu */}
                      <div className="relative z-10 p-8 lg:p-10 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="text-5xl">{athlete.flag}</div>
                          <div className="flex-1">
                            <h3 className="text-3xl font-bold text-foreground">{athlete.name}</h3>
                            <p className="text-sm text-muted-foreground uppercase tracking-wide">
                              {athlete.country}
                            </p>
                          </div>
                          {athlete.worldRanking && athlete.worldRanking <= 50 &&
                          <div className="flex flex-col items-center justify-center p-4 bg-olympic-gold/10 rounded-lg border border-olympic-gold/30 min-w-[120px]">
                              <span className="font-bold text-4xl text-foreground">#{athlete.worldRanking}</span>
                              <span className="text-xs text-muted-foreground italic mt-1">Classement Mondial</span>
                            </div>
                          }
                        </div>

                        <div className="h-px bg-gradient-to-r from-olympic-gold/50 via-olympic-gold/20 to-transparent"></div>

                        <div className="space-y-4">
                          <div className="grid gap-3">
                            {athlete.palmares && athlete.palmares.length > 0 ?
                            sortPalmaresByYear(athlete.palmares).map((titre, idx) =>
                            <div key={idx} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                                  <Trophy className={`w-4 h-4 ${getMedalColor(titre)} flex-shrink-0`} />
                                  <span className="font-semibold text-foreground">{titre}</span>
                                </div>
                            ) :

                            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                                <span className="text-sm text-muted-foreground">Compétitions Internationales</span>
                                <span className="font-semibold text-foreground">
                                  {athlete.stats?.competitions || "[À compléter]"}
                                </span>
                              </div>
                            }
                          </div>
                        </div>

                        <div className="pt-4">
                          {athlete.bio && (
                            <p className="text-muted-foreground italic text-sm leading-relaxed">
                              {athlete.bio}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-br from-olympic-gold/5 to-background border-t border-olympic-gold/20">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Soutenez nos champions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez-nous dans cette aventure olympique et aidez nos athlètes à atteindre leur rêve.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-olympic-gold text-olympic-gold-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-olympic-gold/90 transition-all duration-300 hover:scale-105">
            
            Retour à l'accueil
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>);

}