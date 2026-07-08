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
            <AthleteCard
              name="Baptiste Addis"
              country="FRA"
              flag="🇫🇷"
              profileImage="/R3X_2643.jpg"
              actionImage="/media_51380562_50966596_compressed.jpg"
              stats={{ discipline: "Arc Classique", bestScore: "680/720", ranking: "Top 15 France" }}
              palmares={[
                "Médaille d'argent aux Jeux Olympiques de Paris 2024 par équipe",
                "Médaille d'argent à la Coupe du Monde de Madrid 2025"
              ]}
              worldRanking={rankings[32221]}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Médaillé d'argent par équipe aux Jeux Olympiques de Paris 2024, Baptiste confirme son statut de compétiteur de haut niveau avec une saison 2025 remarquable. Disputant 3 demi-finales sur 4 possibles en Coupe du Monde, dont une médaille d'argent à Madrid, il termine l'année au 6e rang mondial, s'imposant comme l'un des meilleurs archers de sa génération.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Victoria Sebastian"
              country="FRA"
              flag="🇫🇷"
              profileImage="/WhatsApp_Image_2026-07-06_at_18.32.38.jpeg"
              actionImage="/R3X_2810.jpg"
              stats={{ discipline: "Arc Classique", bestScore: "665/720", ranking: "Top 20 France" }}
              palmares={[
                "Championne de la Finale des Indoor World Series 2026",
                "Championne de la Coupe du Monde Indoor de Nîmes 2026",
                "Championne de France Senior Salle 2026",
                "Championne de la Coupe du Monde Indoor de Taipei 2025",
                "Médaille d'argent au Championnat d'Europe Indoor Senior 2025",
                "Championne de France Élite 2024"
              ]}
              worldRanking={rankings[27419]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Initiée au tir à l'arc à Montpellier dès l'âge de 9 ans, Victoria affine sa technique pendant 4 années à Nîmes avant d'intégrer les structures de haut niveau à 17 ans. Son parcours la mène successivement au Pôle Espoirs de Nantes, au Pôle France Relève de Nancy, puis à l'INSEP en 2023 où, à 20 ans, elle rejoint l'équipe de France élite. Avec un classement mondial record à la 7ᵉ place en 2025 et une série de titres internationaux impressionnante en salle, Victoria s'impose comme l'une des archères françaises les plus prometteuses de sa génération. Parallèlement à ses ambitions olympiques pour Los Angeles 2028, elle prépare son diplôme DEJEPS, témoignant de sa volonté de transmettre son expérience et de contribuer durablement au développement du tir à l'arc.
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
                "Champion de la Coupe du Monde de Madrid 2025 par équipe",
                "Médaille de bronze au Championnat d'Europe 2024"
              ]}
              worldRanking={rankings[6403]}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Figure emblématique du tir à l'arc français depuis 2006, Jean-Charles incarne l'excellence et la constance au plus haut niveau. Médaillé d'argent individuel aux Jeux Olympiques de Rio 2016, puis médaillé d'argent par équipe à Paris 2024, il vise désormais l'or olympique à Los Angeles 2028 pour couronner une carrière exceptionnelle.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Anaëlle Florent"
              country="FRA"
              flag="🇫🇷"
              profileImage="/IMG_6455.JPG"
              actionImage="/IMG_6392.JPG"
              stats={{ discipline: "Arc à Poulies", bestScore: "701/720" }}
              palmares={[
                "5e en double mixte aux Championnats d'Europe 2026",
                "4 sélections en Coupe du Monde 2026",
                "Médaille de bronze à la Coupe du Monde de Medellin 2022 par équipes (Classique)",
                "Championne de France D1 par équipes en 2024"
              ]}
              worldRanking={rankings[19935]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Après une carrière internationale remarquable en arc classique, marquée par des podiums en Coupe du Monde et aux Jeux Méditerranéens, Anaëlle a opéré une transition fulgurante vers l'arc à poulies. En quelques mois seulement, son talent naturel et son exigence lui ont ouvert les portes de l'équipe de France dans sa nouvelle discipline, où elle signe déjà la meilleure performance française (701 points). Entraîneure professionnelle passionnée, elle allie la rigueur du très haut niveau à l'art de la transmission pour viser les sommets de Los Angeles 2028.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Thomas Aubert"
              country="SUI"
              flag="🇨🇭"
              profileImage="/DA6_5642-3.jpg"
              actionImage="/SYG7979.jpg"
              palmares={[
                "Médaille de bronze au Championnat de France D1 par équipes 2026",
                "Médaille d'argent au Championnat de France D1 par équipes 2025",
                "Médaille de bronze au Championnat de Suisse Indoor double mixte 2026"
              ]}
              worldRanking={rankings[5974]}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Après une première carrière internationale remarquable, débutée en 2006 sous les couleurs de l'équipe de France puis poursuivie de 2015 à 2016 sous la bannière helvétique avec de nombreux podiums à son actif, Thomas s'est consacré pendant près d'une décennie à la gestion des compétitions internationales pour le compte de la Fédération mondiale de tir à l'arc. En 2026, il décide de reprendre la compétition avec un objectif clair : décrocher la qualification olympique pour la Suisse et participer aux Jeux de Los Angeles 2028.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Franck Eyeni"
              country="CIV"
              flag="🇨🇮"
              profileImage="/64b3ea82-8d84-4e68-83e5-6d285ee2b2f0.JPG"
              actionImage="/IMG_6332.JPG"
              palmares={[
                "Champion d'Afrique 2025 (individuel)",
                "Médaille d'argent au Championnat d'Afrique 2023 (par équipe mixte)",
                "Médaille d'argent au Championnat d'Afrique 2022 (individuel)",
                "Record d'Afrique en arc classique (660 points)",
                "Participation aux Jeux Olympiques de la Jeunesse 2018"
              ]}
              worldRanking={rankings[20443]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Originaire d'Aboisso en Côte d'Ivoire, Franck Eyeni incarne la persévérance et l'ambition. Dans sa quête d'une qualification pour les Jeux Olympiques de Paris 2024, il fait le choix audacieux de quitter son pays natal pour rejoindre l'Arc Club de Nîmes, institution majeure du tir à l'arc européen. S'il échoue de justesse aux portes de la sélection olympique parisienne, cette expérience fondatrice forge chez lui un mental d'acier. Animé d'une détermination intacte, Franck choisit alors de s'installer durablement en France pour concilier études supérieures et sport de haut niveau. Récemment couronné d'or sur le continent africain en 2025 et actuel détenteur du record d'Afrique, il déploie aujourd'hui toute sa précision et sa maîtrise avec un objectif clair : la qualification pour les Jeux Olympiques de Los Angeles 2028.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Marcelle Diombo"
              country="CIV"
              flag="🇨🇮"
              profileImage="/IMG_6544.JPG"
              actionImage="/IMG_6515.JPG"
              stats={{ discipline: "Arc Classique" }}
              palmares={[
                "Championne des Jeux Africains 2019 – Arc classique individuel",
                "Médaille d'argent aux Jeux Africains 2019 – Arc classique par équipes",
                "Championne d'Afrique 2022 – Arc classique par équipes",
                "Médaille d'argent au Championnat d'Afrique 2022 – Arc classique équipe mixte",
                "Médaille d'argent au Championnat d'Afrique 2023 – Arc classique équipe mixte"
              ]}
              worldRanking={null}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Née le 31 janvier 2003 à Toupah, Esmei Anne-Marcelle Diombo s'est imposée comme l'une des meilleures archères du continent africain. Spécialiste de l'arc classique, elle a marqué les esprits en 2019 aux Jeux Africains de Rabat, où elle remporte la médaille d'or individuelle et décroche une qualification olympique historique pour la Côte d'Ivoire aux Jeux de Tokyo. Reconnue pour sa régularité et son mental d'acier lors des grands rendez-vous, elle multiplie les podiums continentaux et s'affirme comme une figure majeure du tir à l'arc ivoirien. Véritable ambassadrice du sport africain, elle inspire toute une génération et porte fièrement les couleurs de la Côte d'Ivoire avec pour objectif Los Angeles 2028.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Alexis Renaudineau"
              country="FRA"
              flag="🇫🇷"
              profileImage="/IMG_6321_copy.jpg"
              actionImage="/YWC23_R3X_3247.jpg"
              palmares={[
                "Champion de la Youth Cup de Ruse (BUL) 2026",
                "Champion d'Europe par équipe 2024",
                "Champion du monde jeune par équipe 2023"
              ]}
              worldRanking={rankings[46647]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">Prodige du tir à l'arc français, Alexis cumule les médailles d'or internationales en catégorie jeune tout en intégrant l'équipe de France senior dès 2026, une performance pour un athlète encore junior. Cette double casquette témoigne d'un talent exceptionnel et d'une maturité technique qui le positionnent déjà comme un sérieux prétendant à la sélection olympique pour Los Angeles 2028.

              </p>
            </AthleteCard>

            <AthleteCard
              name="Mila Fremery-Delestan"
              country="FRA"
              flag="🇫🇷"
              profileImage="/R3X_6040.jpg"
              actionImage="/SYG2932.jpg"
              stats={{ discipline: "Arc Classique", bestScore: "672/720", ranking: "Top 15 France" }}
              palmares={[
                "Médaille d'argent au Championnat d'Europe Jeune (individuel), Lilleshall 2022",
                "Championne individuelle à la World Indoor Series, Nîmes 2023",
                "4ème par équipe au Championnat du Monde de la Jeunesse, Winnipeg 2025",
                "6ème individuelle et par équipe à la World Cup 1, Puebla 2026",
                "5ème en double mixte à la World Cup 2, Shanghai 2026",
                "5ème individuelle et par équipe au Championnat d'Europe Senior, Antalya 2026"
              ]}
              worldRanking={rankings[45361]}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Mila Fremery-Delestan est une archère française en pleine ascension. Vice-championne d'Europe jeune en 2022, vainqueure de l'Indoor World Series à Nîmes en 2023, elle s'est rapidement imposée au plus haut niveau international avec plusieurs Top 10 en Coupe du monde et aux Championnats d'Europe seniors en 2026. Son objectif est désormais clair : poursuivre sa progression pour décrocher une sélection aux Jeux olympiques de 2028.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Maia Tincu"
              country="FRA"
              flag="🇫🇷"
              profileImage="/WhatsApp_Image_2026-06-22_at_14.52.12.jpeg"
              actionImage="/WhatsApp_Image_2026-06-21_at_14.18.31.jpeg"
              palmares={[
                "Championne de France par équipes 2026",
                "Championne de France Élite en double mixte 2025 (avec Jean-Charles Valladont)",
                "Double championne d'Europe U21 en 2024 (mixte et équipe femme)",
                "Médaille de bronze par équipe en Grand Prix européen senior"
              ]}
              worldRanking={rankings[43740]}
              isEven={false}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Membre du pôle France relève de Bordeaux depuis 2022, Maia s'est imposée comme l'une des révélations du tir à l'arc français. Invincible en Junior Cup européenne depuis 2023 et accumulant les médailles nationales en U18 et U21, elle a marqué les esprits avec son doublé de championne d'Europe Junior 2024. Désormais tournée vers l'équipe de France senior, elle affiche une ambition claire : intégrer l'élite européenne et mondiale pour viser Los Angeles 2028.
              </p>
            </AthleteCard>

            <AthleteCard
              name="Iban Bariteaud"
              country="FRA"
              flag="🇫🇷"
              profileImage="/IMG_6366.JPG"
              actionImage="/IMG_6292.JPG"
              palmares={[
                "Médaille de bronze au Championnat de France D1 par équipes 2026",
                "5e du Championnat de France élite 2025",
                "Champion du Monde jeune en 2021"
              ]}
              worldRanking={rankings[41671]}
              isEven={true}>
              
              <p className="text-muted-foreground italic text-sm leading-relaxed">
                Jeune prodige du tir à l'arc français, Iban s'est révélé sur la scène internationale en décrochant le titre de Champion du Monde jeune en 2021. Poursuivant sa progression parmi l'élite nationale, il s'est classé 5e du Championnat de France élite en 2025 avant de remporter la médaille de bronze au Championnat de France D1 par équipes en 2026 avec son club. Doté d'un immense potentiel, il s'entraîne désormais avec une détermination sans faille pour représenter la France aux Jeux Olympiques de Los Angeles 2028.
              </p>
            </AthleteCard>
            
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