import type { ReactElement } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ValueSection, type GalleryItem } from "@/components/ValueSection";
import { CTASection } from "@/components/CTASection";
import { ScrollNavigation } from "@/components/ScrollNavigation";

export default function Home(): ReactElement {
  const values = [
    {
      id: "excellence",
      title: "Excellence Sportive",
      keywords: ["1er club Francais", "3 médailles Olympiques", "Top 10 mondial"],
      imageUrl: "/excellence-sportive.jpg",
      details: "L'Arc Club de Nîmes incarne l'excellence sportive au plus haut niveau national et international.\n\nNous sommes le premier club français de tir à l'arc, avec un palmarès exceptionnel :\n• Plus de 100 podiums en championnats de France toutes catégories\n• Athlètes classés régulièrement dans le Top 10 mondial\n• Formation de champions olympiques et mondiaux\n• Centre d'entraînement reconnu par la Fédération Française de Tir à l'Arc\n\nSÉLECTIONS OLYMPIQUES :\n• Baptiste Addis (2024)\n• Pierre Jangnäs (2016, 2020)\n• Jean-Charles Valladont (2008, 2016, 2020, 2024)\n• Aurore Trayan (2004)\n• Séverine Bonal (1992, 1996)\n\nCLASSEMENTS MONDIAUX :\n• Baptiste Addis — N°6 mondial en 2026\n• Victoria Sebastian — N°7 mondial en 2025\n• Jean-Charles Valladont — N°1 mondial en 2017\n• Pierre Jangnäs — N°5 mondial en 2014\n• Thomas Aubert — N°10 mondial en 2013\n\nNotre approche combine excellence technique, suivi personnalisé et infrastructure de premier plan pour permettre à nos athlètes d'atteindre leur plein potentiel.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "rayonnement",
      title: "Rayonnement International",
      keywords: ["50 nations", "1350 athlètes", "30 ans d'histoire"],
      imageUrl: "/rayonnement-international.jpg",
      details: "Notre tournoi international indoor est devenu une référence mondiale dans le calendrier du tir à l'arc.\n\nChiffres clés de notre rayonnement :\n• 50 nations représentées chaque année\n• 1350 athlètes internationaux participants\n• 30 années d'organisation sans interruption, dont deux championnats du Monde en 2003 et 2014\n• Retransmission en direct sur les chaînes internationales\n\nCe tournoi positionne Nîmes comme une capitale mondiale du tir à l'arc et offre une visibilité exceptionnelle à nos partenaires sur la scène internationale.\n\nLes meilleurs archers du monde considèrent notre tournoi comme un passage obligé du circuit international indoor, parmi Lausanne (SUI), Luxembourg (LUX), Taipei (TPE), Rio de Janeiro (BRA), Mérida (MEX), Las Vegas (USA).",
      gallery: [] as GalleryItem[]
    },
    {
      id: "parite",
      title: "Parité & Inclusion",
      keywords: ["Éducation", "Partage", "Sport pour tous"],
      imageUrl: "/DSC04113.jpg",
      details: "L'Arc Club de Nîmes s'engage pour un sport accessible et inclusif.\n\nNotre approche de la parité et de l'inclusion :\n\n• Équipes de haut niveau national en catégorie masculine et féminine\n• Formation d'athlètes internationaux avec un collectif à parité\n• Section Para Archerie dédiée aux athlètes en situation de handicap\n• Programmes de solidarité internationale pour promouvoir le tir à l'arc dans le monde avec l'accueil d'athlètes de l'équipe nationale de Côte d'Ivoire\n• Soutien financier et humain aux organisateurs (Maroc, Thaïlande)\n• Accueil et accompagnement de tous les profils, sans discrimination\n• Soutien inconditionnel aux jeunes ayant des aspirations internationales (soutien financier, encadrement, suivi médical, et déplacements en compétition)\n\nNous sommes convaincus que le tir à l'arc doit être accessible à tous, quels que soient le genre, l'âge, l'origine ou les capacités physiques. Notre club est un lieu d'ouverture et de diversité.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "impact",
      title: "Impact Économique",
      keywords: ["Développement", "Tourisme", "Emploi"],
      imageUrl: "/CyrilTONDUT066.jpg",
      details: "Au-delà de l'aspect sportif, l'Arc Club de Nîmes est un acteur économique majeur pour la ville.\n\nImpact économique direct du tournoi 2026 :\n• 2350 participants (athlètes + accompagnants)\n• Dépense moyenne : 200€ par personne et par jour\n• Séjour moyen : 3,5 jours\n• Retombées économiques directes : 2 000 000€\n• +1500 spectateurs venant assister au tournoi\n\nImpact économique indirect annuel :\n• Embauche de salariés permanents\n• Achats d'équipement et de matériel sportif\n• Prestations de services dans les commerces locaux\n• Investissements pour le fonctionnement du club\n• Retombées indirectes estimées : 400 000€ par an\n\nNotre tournoi international est le deuxième événement de la ville de Nîmes après la Féria en termes de retombées économiques.\n\nIl génère une activité essentielle en plein mois de janvier (hors saison touristique) pour les domaines de l'hôtellerie, de la restauration et des services locaux.\n\nPrès de 30 ans d'existence, une référence mondiale qui attire les meilleurs archers internationaux qui apprécient la qualité de l'organisation et l'expérience unique du tournoi tricolore.\n\nAprès une année record en 2025 avec 1238 archers participants, le tournoi poursuit sa croissance, avec 1350 athlètes participants en 2026.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "engagement",
      title: "Engagement Territorial",
      keywords: ["Programme Scolaire", "Pratique de qualité pour tous"],
      imageUrl: "/engagement-territorial.jpg",
      details: "L'Arc Club de Nîmes s'investit activement dans le développement du tir à l'arc sur son territoire.\n\nNotre engagement territorial :\n• Partenariats avec 9 écoles primaires et collèges de la métropole\n• Programme de formation jeunesse dès 7 ans\n• Initiation et découverte du tir à l'arc pour près de 1000 jeunes par an\n• Formation d'entraîneurs bénévoles locaux\n• Organisation d'événements ouverts au grand public\n• Collaboration avec les institutions locales pour promouvoir le sport\n\nL'Arc Club de Nîmes apporte son soutien et travaille en étroite collaboration avec les clubs alentours.\n\nNous contribuons au dynamisme sportif de Nîmes et participons à l'éducation des jeunes générations à travers les valeurs du tir à l'arc : concentration, discipline, respect et dépassement de soi.\n\nL'Arc Club de Nîmes œuvre également pour une pratique du sport pour tous dans les meilleures conditions :\n• Site\n• Qualité de l'encadrement\n• Matériel à disposition",
      gallery: [] as GalleryItem[]
    }
  ];

  return (
    <>
      <SEO />
      <Header />
      <main className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll">
        {values.map((value, index) => (
          <ValueSection
            key={value.id}
            index={index}
            id={value.id}
            title={value.title}
            keywords={value.keywords}
            image={value.imageUrl}
            details={value.details}
            gallery={value.gallery}
          />
        ))}
        <CTASection />
      </main>
      <ScrollNavigation sections={values} />
    </>
  );
}