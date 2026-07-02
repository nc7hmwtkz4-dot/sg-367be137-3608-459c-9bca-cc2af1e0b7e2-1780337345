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
        title="Los Angeles 2028 Project - Arc Club de Nîmes"
        description="Discover the 8 athletes from Arc Club de Nîmes heading to the Los Angeles 2028 Olympic Games." />
      

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-background to-olympic-gold/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-olympic-gold/10 via-transparent to-transparent"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight fade-in">
              <span className="bg-gradient-to-r from-olympic-gold via-olympic-gold to-amber-600 bg-clip-text text-transparent">
                Los Angeles 2028
              </span>{" "}
              Project
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
              stats={{ discipline: "Recurve Bow", bestScore: "680/720", ranking: "Top 15 France" }}
              palmares={[
              "Silver medal at the Paris 2024 Olympic Games (team event)",
              "Silver medal at the Madrid 2025 World Cup"]
              }
              worldRanking={rankings[32221]}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Silver medalist in the team event at the Paris 2024 Olympic Games, Baptiste confirms his status as a high-level competitor with a remarkable 2025 season. Competing in 3 semifinals out of 4 possible World Cup events, including a silver medal in Madrid, he finished the year ranked 6th in the world, establishing himself as one of the best archers of his generation.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Victoria Sebastian"
              country="FRA"
              flag="🇫🇷"
              profileImage="/IMG_3209.HEIC"
              actionImage="/R3X_2810.jpg"
              stats={{ discipline: "Recurve Bow", bestScore: "665/720", ranking: "Top 20 France" }}
              palmares={[]}
              worldRanking={rankings[27419]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Talented archer in constant progression, Victoria combines rigorous technique and mental strength to aim for Olympic excellence.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Jean-Charles Valladont"
              country="FRA"
              flag="🇫🇷"
              profileImage="/B16_7739.jpg"
              actionImage="/R3X_9396.jpg"
              stats={{ discipline: "Recurve Bow", bestScore: "692/720", ranking: "Top 10 France" }}
              palmares={[
              "Silver medal at the Paris 2024 Olympic Games (team event)",
              "European Champion 2024 (team event)",
              "Gold medal at the Madrid 2025 World Cup (team event)",
              "Bronze medal at the 2024 European Championship"]
              }
              worldRanking={rankings[6403]}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Iconic figure of French archery since 2006, Jean-Charles embodies excellence and consistency at the highest level. Individual silver medalist at the Rio 2016 Olympic Games, then team silver medalist at Paris 2024, he now aims for Olympic gold in Los Angeles 2028 to crown an exceptional career.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Anaëlle Florent"
              country="FRA"
              flag="🇫🇷"
              profileImage="/IMG_6455.JPG"
              actionImage="/IMG_6392.JPG"
              stats={{ discipline: "Compound Bow", bestScore: "701/720" }}
              palmares={[
                "5th in mixed doubles at the 2026 European Championships",
                "4 selections in the 2026 World Cup",
                "Bronze medal at the Medellin 2022 World Cup (team event, Recurve)",
                "French D1 Champion (team event) in 2024"
              ]}
              worldRanking={rankings[19935]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                After a remarkable international career in recurve archery, marked by World Cup podiums and Mediterranean Games, Anaëlle made a lightning transition to compound bow. In just a few months, her natural talent and exacting standards opened the doors to the French national team in her new discipline, where she already achieved the best French performance (701 points). A passionate professional coach, she combines the rigor of the highest level with the art of transmission to aim for the Los Angeles 2028 summit.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Thomas Aubert"
              country="SUI"
              flag="🇨🇭"
              profileImage="/DA6_5642-3.jpg"
              actionImage="/SYG7979.jpg"
              palmares={[
                "Bronze medal at the French D1 Championship (team event) 2026",
                "Silver medal at the French D1 Championship (team event) 2025",
                "Bronze medal at the Swiss Indoor Championship (mixed doubles) 2026"
              ]}
              worldRanking={rankings[5974]}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                After a remarkable first international career, which began in 2006 under the colors of the French national team and then continued from 2015 to 2016 under the Swiss banner with numerous podiums, Thomas devoted nearly a decade to managing international competitions for the World Archery Federation. In 2026, he decided to return to competition with a clear objective: secure Olympic qualification for Switzerland and participate in the Los Angeles 2028 Games.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Franck Eyeni"
              country="CIV"
              flag="🇨🇮"
              profileImage="/64b3ea82-8d84-4e68-83e5-6d285ee2b2f0.JPG"
              palmares={[
                "Gold medal at the 2025 African Championship (individual)",
                "Silver medal at the 2023 African Championship (mixed team event)",
                "Silver medal at the 2022 African Championship (individual)",
                "African recurve bow record (660 points)",
                "Participation in the 2018 Youth Olympic Games"
              ]}
              worldRanking={rankings[20443]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Major figure in African archery, Franck Eyeni embodies Ivorian sporting excellence on the continental stage. 2025 African Champion in individual, African record holder and multiple medalist at continental championships, he has already tasted the Olympic experience by participating in the 2018 Youth Olympic Games. Trained at Arc Club de Nîmes, he proudly represents Ivory Coast by putting all his precision and mastery with a clear objective: shine in Los Angeles 2028.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Marcelle Diombo"
              country="CIV"
              flag="🇨🇮"
              profileImage="/IMG_6544.JPG"
              actionImage="/IMG_6515.JPG"
              stats={{ discipline: "Recurve Bow" }}
              palmares={[
                "Gold medal at the 2019 African Games – Individual recurve bow",
                "Silver medal at the 2019 African Games – Team recurve bow",
                "Gold medal at the 2022 African Championship – Team recurve bow",
                "Silver medal at the 2022 African Championship – Mixed team recurve bow",
                "Silver medal at the 2023 African Championship – Mixed team recurve bow"
              ]}
              worldRanking={null}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Born on January 31, 2003 in Toupah, Esmei Anne-Marcelle Diombo has established herself as one of the best archers on the African continent. Recurve bow specialist, she made an impression in 2019 at the African Games in Rabat, where she won the individual gold medal and secured a historic Olympic qualification for Ivory Coast at the Tokyo Games. Recognized for her consistency and mental strength at major events, she has accumulated continental podiums and asserts herself as a major figure in Ivorian archery. True ambassador of African sport, she inspires an entire generation and proudly carries the colors of Ivory Coast with Los Angeles 2028 as her objective.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Alexis Renaudineau"
              country="FRA"
              flag="🇫🇷"
              profileImage="/IMG_6321_copy.jpg"
              actionImage="/YWC23_R3X_3247.jpg"
              palmares={[
              "Gold medal at the Ruse (BUL) 2026 Youth Cup",
              "Gold medal at the 2024 European Championship (team event)",
              "Gold medal at the 2023 Youth World Championship (team event)"]
              }
              worldRanking={rankings[46647]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Prodigy of French archery, Alexis accumulates international gold medals in the youth category while joining the senior French national team as early as 2026, a performance for an athlete still competing as a junior. This dual role testifies to exceptional talent and technical maturity that already position him as a serious contender for Olympic selection for Los Angeles 2028.
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
              isEven={true} />
            

            <AthleteCard
              name="Maia Tincu"
              country="FRA"
              flag="🇫🇷"
              profileImage="/WhatsApp_Image_2026-06-22_at_14.52.12.jpeg"
              actionImage="/WhatsApp_Image_2026-06-21_at_14.18.31.jpeg"
              palmares={[
                "French Champion (team event) 2026",
                "Elite French Champion in mixed doubles 2025 (with Jean-Charles Valladont)",
                "Double U21 European Champion in 2024 (mixed and women's team)",
                "Bronze medal (team event) in European Grand Prix senior"
              ]}
              worldRanking={rankings[43740]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Member of the Bordeaux France development center since 2022, Maia has established herself as one of the revelations of French archery. Unbeatable in European Junior Cup since 2023 and accumulating national medals in U18 and U21, she made an impression with her double 2024 Junior European Champion title. Now focused on the senior French national team, she displays a clear ambition: join the European and world elite to aim for Los Angeles 2028.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Iban Bariteaud"
              country="FRA"
              flag="🇫🇷"
              profileImage="/IMG_6366.JPG"
              actionImage="/IMG_6292.JPG"
              palmares={[]}
              worldRanking={rankings[41671]}
              isEven={true} />
            
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-to-br from-olympic-gold/5 to-background border-t border-olympic-gold/20">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Support Our Champions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in this Olympic adventure and help our athletes achieve their dream.
          </p>
          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-8 py-4 bg-olympic-gold text-olympic-gold-foreground font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-olympic-gold/90 transition-all duration-300 hover:scale-105">
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>);

}