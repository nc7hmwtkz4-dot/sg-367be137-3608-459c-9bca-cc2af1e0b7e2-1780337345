import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { ArrowRight, Target, Trophy, Medal } from "lucide-react";
import Link from "next/link";

const athletes = [
{ name: "Baptiste Addis", country: "FRA", flag: "🇫🇷", profileImage: "/R3X_2643.jpg", actionImage: "/media_51380562_50966596_compressed.jpg", stats: { discipline: "Arc Classique", competitions: "12 compétitions nationales", bestScore: "680/720", ranking: "Top 15 France" } },
{ name: "Victoria Sebastian", country: "FRA", flag: "🇫🇷" },
{ name: "Jean-Charles Valladont", country: "FRA", flag: "🇫🇷" },
{ name: "Anaëlle Florent", country: "FRA", flag: "🇫🇷" },
{ name: "Athlète FR 5", country: "FRA", flag: "🇫🇷" },
{ name: "Franck Eyeni", country: "CIV", flag: "🇨🇮" },
{ name: "Marcelle Diombo", country: "CIV", flag: "🇨🇮" },
{ name: "Thomas Aubert", country: "SUI", flag: "🇨🇭" }];


export default function LosAngeles2028() {
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
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                  
                  {/* Photo de profil */}
                  <div className="w-full lg:w-2/5">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-olympic-gold/20 group hover:border-olympic-gold/40 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-olympic-gold/20 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
                        <div className="text-center space-y-3">
                          <div className="text-6xl">{athlete.flag}</div>
                          <p className="text-2xl font-bold text-foreground">{athlete.name}</p>
                          <p className="text-sm text-muted-foreground uppercase tracking-widest">[Photo de profil]</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Zone de texte avec filigrane */}
                  <div className="w-full lg:w-3/5">
                    <div className="relative rounded-2xl overflow-hidden border-2 border-olympic-gold/20 bg-card shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-olympic-gold/40">
                      {/* Image d'action en filigrane */}
                      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-olympic-gold/30 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Target className="w-64 h-64 text-olympic-gold rotate-12" />
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="relative z-10 p-8 lg:p-10 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="text-5xl">{athlete.flag}</div>
                          <div>
                            <h3 className="text-3xl font-bold text-foreground">{athlete.name}</h3>
                            <p className="text-sm text-muted-foreground uppercase tracking-wide">{athlete.country}</p>
                          </div>
                        </div>

                        <div className="h-px bg-gradient-to-r from-olympic-gold/50 via-olympic-gold/20 to-transparent"></div>

                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold text-foreground flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-olympic-gold" />
                            Palmarès et Statistiques
                          </h4>
                          
                          <div className="grid gap-3">
                            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                              <span className="text-sm text-muted-foreground">Classement National</span>
                              <span className="font-semibold text-foreground">[À compléter]</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                              <span className="text-sm text-muted-foreground">Meilleur Score</span>
                              <span className="font-semibold text-foreground">[À compléter]</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                              <span className="text-sm text-muted-foreground">Compétitions Internationales</span>
                              <span className="font-semibold text-foreground">[À compléter]</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                              <span className="text-sm text-muted-foreground">Objectif LA 2028</span>
                              <span className="font-semibold text-olympic-gold flex items-center gap-1">
                                Qualification
                                <ArrowRight className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4">
                          <p className="text-muted-foreground italic text-sm leading-relaxed">
                            "[Biographie courte ou citation de l'athlète à ajouter]"
                          </p>
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