import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { AthleteCard } from "@/components/AthleteCard";

interface WorldRankings {
  [waId: number]: number | null;
}

const athleteIds = [32221, 27419, 6403, 19935, 5974, 20443, 46647, 45361, 43740, 41671];

export const getStaticProps: GetStaticProps = async () => {
  const rankings: WorldRankings = {};

  await Promise.all(
    athleteIds.map(async (waId) => {
      try {
        const response = await fetch(
          `https://api.worldarchery.org/v3/WORLDRANKINGS/?Id=${waId}`
        );

        if (!response.ok) {
          console.error(`API error for waId ${waId}: ${response.status}`);
          rankings[waId] = null;
          return;
        }

        const data = await response.json();
        rankings[waId] = data?.items?.[0]?.Rnk || null;
      } catch (error) {
        console.error(`Error fetching ranking for waId ${waId}:`, error);
        rankings[waId] = null;
      }
    })
  );

  return {
    props: {
      rankings
    },
    revalidate: 604800
  };
};

interface PageProps {
  rankings: WorldRankings;
}

export default function LosAngeles2028({ rankings }: PageProps) {
  return (
    <>
      <SEO
        title="Projet Los Angeles 2028 - Arc Club de Nîmes"
        description="Découvrez les 8 athlètes de l'Arc Club de Nîmes en route vers les Jeux Olympiques de Los Angeles 2028."
      />

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
            <AthleteCard
              name="Baptiste Addis"
              country="FRA"
              flag="🇫🇷"
              profileImage="/R3X_2643.jpg"
              actionImage="/media_51380562_50966596_compressed.jpg"
              stats={{ discipline: "Arc Classique", bestScore: "680/720", ranking: "Top 15 France" }}
              palmares={[
                "Médaille d'argent aux Jeux Olympiques de Paris 2024 par équipe",
                "Médaille d'argent Coupe du Monde Madrid 2025"
              ]}
              worldRanking={rankings[32221]}
              isEven={true}
            >
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Médaillé d'argent par équipe aux Jeux Olympiques de Paris 2024, Baptiste confirme son statut de compétiteur de haut niveau avec une saison 2025 remarquable. Disputant 3 demi-finales sur 4 possibles en Coupe du Monde, dont une médaille d'argent à Madrid, il termine l'année au 6e rang mondial, s'imposant comme l'un des meilleurs archers de sa génération.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Victoria Sebastian"
              country="FRA"
              flag="🇫🇷"
              profileImage="/IMG_3209.HEIC"
              actionImage="/R3X_2810.jpg"
              stats={{ discipline: "Arc Classique", bestScore: "665/720", ranking: "Top 20 France" }}
              palmares={[]}
              worldRanking={rankings[27419]}
              isEven={false}
            >
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Archère talentueuse en constante progression, Victoria combine technique rigoureuse et mental d'acier pour viser l'excellence olympique.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Jean-Charles Valladont"
              country="FRA"
              flag="🇫🇷"
              profileImage="/B16_7739.jpg"
              actionImage="/R3X_9396.jpg"
              stats={{ discipline: "Arc Classique", bestScore: "692/720", ranking: "Top 10 France" }}
              palmares={[
                "Médaille d'argent aux Jeux Olympiques de Paris 2024 par équipe",
                "Champion d'Europe 2024 par équipe",
                "Médaille d'or à la Coupe du Monde de Madrid 2025 par équipe",
                "Médaille de bronze au Championnat d'Europe 2024"
              ]}
              worldRanking={rankings[6403]}
              isEven={true}
            >
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Figure emblématique du tir à l'arc français depuis 2006, Jean-Charles incarne l'excellence et la constance au plus haut niveau. Médaillé d'argent individuel aux Jeux Olympiques de Rio 2016, puis médaillé d'argent par équipe à Paris 2024, il vise désormais l'or olympique à Los Angeles 2028 pour couronner une carrière exceptionnelle.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Anaëlle Florent"
              country="FRA"
              flag="🇫🇷"
              palmares={[]}
              worldRanking={rankings[19935]}
              isEven={false}
            />

            <AthleteCard
              name="Thomas Aubert"
              country="SUI"
              flag="🇨🇭"
              profileImage="/DA6_5642-3.jpg"
              actionImage="/SYG7979.jpg"
              palmares={[]}
              worldRanking={rankings[5974]}
              isEven={true}
            />

            <AthleteCard
              name="Franck Eyeni"
              country="CIV"
              flag="🇨🇮"
              profileImage="/64b3ea82-8d84-4e68-83e5-6d285ee2b2f0.JPG"
              palmares={["Champion d'Afrique 2025"]}
              worldRanking={rankings[20443]}
              isEven={false}
            >
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Biographie à venir
              </p>
            </AthleteCard>

            <AthleteCard
              name="Alexis Renaudineau"
              country="FRA"
              flag="🇫🇷"
              profileImage="/WhatsApp_Image_2026-06-04_at_15.43.06_1_.jpeg"
              actionImage="/YWC23_R3X_3247.jpg"
              palmares={[
                "Médaille d'or à la Youth Cup de Ruse (BUL) 2026",
                "Médaille d'or au Championnat d'Europe par équipe 2024",
                "Médaille d'or au Championnat du monde jeune par équipe 2023"
              ]}
              worldRanking={rankings[46647]}
              isEven={true}
            >
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Prodige du tir à l'arc français, Alexis cumule les médailles d'or internationales en catégorie jeune (Champion du monde et d'Europe par équipe, vainqueur de la Youth Cup) tout en intégrant l'équipe de France senior dès 2026, une performance rare pour un athlète encore junior. Cette double casquette témoigne d'un talent exceptionnel et d'une maturité technique précoce qui le positionnent déjà comme un sérieux prétendant à la sélection olympique pour Los Angeles 2028.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Mila Fremery-Delestan"
              country="FRA"
              flag="🇫🇷"
              profileImage="/R3X_6040.jpg"
              actionImage="/SYG2932.jpg"
              palmares={[]}
              worldRanking={rankings[45361]}
              isEven={false}
            />

            <AthleteCard
              name="Maia Tincu"
              country="FRA"
              flag="🇫🇷"
              profileImage="/IMG_5182.JPG"
              palmares={[]}
              worldRanking={rankings[43740]}
              isEven={true}
            />

            <AthleteCard
              name="Iban Bariteaud"
              country="FRA"
              flag="🇫🇷"
              palmares={[]}
              worldRanking={rankings[41671]}
              isEven={false}
            />
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
    </>
  );
}