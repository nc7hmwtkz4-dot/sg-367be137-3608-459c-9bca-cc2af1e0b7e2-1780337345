import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";

export default function LosAngeles2028() {
  return (
    <>
      <SEO 
        title="Projet Los Angeles 2028 - Arc Club de Nîmes"
        description="Découvrez les 8 athlètes de l'Arc Club de Nîmes en route vers les Jeux Olympiques de Los Angeles 2028."
      />
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Projet Los Angeles 2028</h1>
          <p className="text-center text-muted-foreground mt-4">Page en construction...</p>
        </div>
      </main>
    </>
  );
}