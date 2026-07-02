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
      title: "Sporting Excellence",
      keywords: ["1st French club", "3 Olympic medals", "Top 10 worldwide"],
      imageUrl: "/excellence-sportive.jpg",
      details: "Arc Club de Nîmes embodies sporting excellence at the highest national and international level.\n\nWe are the leading French archery club, with an exceptional track record:\n• Over 100 podiums in French championships across all categories\n• Athletes regularly ranked in the Top 10 worldwide\n• Training of Olympic and World champions\n• Training center recognized by the French Archery Federation\n\nOLYMPIC SELECTIONS:\n• Baptiste Addis (2024)\n• Pierre Jangnäs (2016, 2020)\n• Jean-Charles Valladont (2008, 2016, 2020, 2024)\n• Aurore Trayan (2004)\n• Séverine Bonal (1992, 1996)\n\nWORLD RANKINGS:\n• Baptiste Addis — World #6 in 2026\n• Victoria Sebastian — World #7 in 2025\n• Jean-Charles Valladont — World #1 in 2017\n• Pierre Jangnäs — World #5 in 2014\n• Thomas Aubert — World #10 in 2013\n\nOur approach combines technical excellence, personalized coaching and world-class infrastructure to enable our athletes to reach their full potential.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "rayonnement",
      title: "International Reach",
      keywords: ["50 nations", "1350 athletes", "30 years of history"],
      imageUrl: "/rayonnement-international.jpg",
      details: "Our international indoor tournament has become a worldwide reference in the archery calendar.\n\nKey figures of our reach:\n• 50 nations represented each year\n• 1350 international athletes participating\n• 30 years of uninterrupted organization, including two World Championships in 2003 and 2014\n• Live broadcast on international channels\n\nThis tournament positions Nîmes as a world archery capital and offers exceptional visibility to our partners on the international stage.\n\nThe world's best archers consider our tournament as a must-attend event on the international indoor circuit, alongside Lausanne (SUI), Luxembourg (LUX), Taipei (TPE), Rio de Janeiro (BRA), Mérida (MEX), Las Vegas (USA).",
      gallery: [] as GalleryItem[]
    },
    {
      id: "parite",
      title: "Equality & Inclusion",
      keywords: ["Education", "Sharing", "Sport for all"],
      imageUrl: "/DSC04113.jpg",
      details: "Arc Club de Nîmes is committed to accessible and inclusive sport.\n\nOur approach to equality and inclusion:\n\n• National high-level teams in both men's and women's categories\n• Training of international athletes with a gender-balanced collective\n• Para Archery section dedicated to athletes with disabilities\n• International solidarity programs to promote archery worldwide with hosting of athletes from the Ivory Coast national team\n• Financial and human support to organizers (Morocco, Thailand)\n• Welcoming and supporting all profiles, without discrimination\n• Unconditional support for young people with international aspirations (financial support, coaching, medical follow-up, and competition travel)\n\nWe believe that archery should be accessible to everyone, regardless of gender, age, origin or physical abilities. Our club is a place of openness and diversity.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "impact",
      title: "Economic Impact",
      keywords: ["Development", "Tourism", "Employment"],
      imageUrl: "/CyrilTONDUT066.jpg",
      details: "Beyond the sporting aspect, Arc Club de Nîmes is a major economic player for the city.\n\nDirect economic impact of the 2026 tournament:\n• 2350 participants (athletes + companions)\n• Average spending: €200 per person per day\n• Average stay: 3.5 days\n• Direct economic returns: €2,000,000\n• +1500 spectators attending the tournament\n\nAnnual indirect economic impact:\n• Hiring permanent employees\n• Purchases of sports equipment and materials\n• Service providers in local businesses\n• Investments for club operations\n• Estimated indirect returns: €400,000 per year\n\nOur international tournament is the city of Nîmes' second-largest event after the Féria in terms of economic returns.\n\nIt generates essential activity in the middle of January (off-season) for the hotel, restaurant and local service sectors.\n\nNearly 30 years of existence, a worldwide reference that attracts the best international archers who appreciate the quality of organization and unique experience of the French tournament.\n\nAfter a record year in 2025 with 1238 participating archers, the tournament continues to grow, with 1350 participating athletes in 2026.",
      gallery: [] as GalleryItem[],
      stats: [
        {
          value: "2M€",
          label: "Direct financial impact",
          sublabel: "2026 Tournament",
          color: "accent" as const
        },
        {
          value: "400K€",
          label: "Global impact",
          sublabel: "yearly",
          color: "secondary" as const
        },
        {
          value: "2350",
          label: "Visitors",
          sublabel: "3.5 average days",
          color: "primary" as const
        }
      ]
    },
    {
      id: "engagement",
      title: "Community Engagement",
      keywords: ["School Program", "Quality practice for all"],
      imageUrl: "/engagement-territorial.jpg",
      details: "Arc Club de Nîmes actively invests in developing archery in its territory.\n\nOur community engagement:\n• Partnerships with 9 primary schools and colleges in the metropolitan area\n• Youth training program from age 7\n• Introduction and discovery of archery for nearly 1000 young people per year\n• Training of local volunteer coaches\n• Organization of events open to the general public\n• Collaboration with local institutions to promote sport\n\nArc Club de Nîmes provides support and works closely with surrounding clubs.\n\nWe contribute to the sporting dynamism of Nîmes and participate in educating younger generations through archery values: concentration, discipline, respect and self-improvement.\n\nArc Club de Nîmes also works for sport practice for all in the best conditions:\n• Facility\n• Quality coaching\n• Equipment available",
      gallery: [] as GalleryItem[]
    }
  ];

  return (
    <>
      <SEO 
        title="Arc Club de Nîmes - Leading French Archery Club"
        description="Discover Arc Club de Nîmes, France's leading archery club with Olympic champions and world-class athletes. International tournament, training excellence and community engagement." />
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
            buttonText="Discover more"
            galleryText="Gallery"
            stats={'stats' in value ? value.stats : undefined}
          />
        ))}
        <CTASection 
          title="Become a Partner"
          description="Join the adventure of France's leading archery club and associate your brand with sporting excellence."
          imageAlt="Become a partner"
          photoCredit="Photo credit ©World Archery"
        />
      </main>
      <ScrollNavigation sections={values} />
    </>
  );
}