import { Phone, Mail, Globe, Facebook, Instagram, Music, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const isEnglish = router.pathname.startsWith('/en');
  const isOnLA2028 = router.pathname.includes('los-angeles-2028');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLA2028Link = () => {
    if (isOnLA2028) {
      return isEnglish ? '/en' : '/';
    }
    return isEnglish ? '/en/los-angeles-2028' : '/los-angeles-2028';
  };

  const getLanguageLink = () => {
    if (isEnglish) {
      return isOnLA2028 ? '/los-angeles-2028' : '/';
    }
    return isOnLA2028 ? '/en/los-angeles-2028' : '/en';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {!isOnLA2028 &&
      <Link
        href={isEnglish ? '/en/los-angeles-2028' : '/los-angeles-2028'}
        className="bg-red-600 text-white w-full py-2 px-4 text-center text-sm font-bold hover:bg-red-700 transition-colors flex justify-center items-center gap-2 group shadow-sm">
        
          <span>{isEnglish ? "On the road to the Olympics: Discover our LA 2028 project" : "En route pour les JO : Découvrez notre projet LA 2028"}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      }
      
      <div
        className={`w-full transition-all duration-500 ${
        isScrolled ?
        "bg-background/98 backdrop-blur-md shadow-lg border-b-2 border-primary/20" :
        "bg-background/85 backdrop-blur-sm shadow-md border-b border-border/50"}`
        }>
        
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-4 group">
              <img
                src="/logo.png"
                alt="Arc Club de Nîmes"
                className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
            
              <div className="text-center sm:text-left">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  Arc Club de Nîmes
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground hidden sm:block transition-colors duration-300 group-hover:text-secondary">
                  Stade de l'Assomption, 30000 Nîmes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              <Link
                href={getLanguageLink()}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-foreground/70 hover:text-foreground border border-border/50 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-sm">
                <Languages className="w-3.5 h-3.5" />
                <span>{isEnglish ? 'FR' : 'EN'}</span>
              </Link>

              <Link
                href={getLA2028Link()}
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground border border-olympic-gold/30 rounded-full hover:border-olympic-gold/60 hover:bg-olympic-gold/5 transition-all duration-300 relative group/link shadow-sm">
                
                <span className="text-olympic-gold text-xs">●</span>
                <span className="relative">
                  {isOnLA2028 ? isEnglish ? 'Back to Home' : 'Retour à l\'accueil' : isEnglish ? 'LA 2028 Project' : 'Projet Los Angeles 2028'}
                </span>
                <span className="text-olympic-gold opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-xs">→</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm">
              <a
                href="tel:+33466291632"
                className="flex items-center gap-1.5 md:gap-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-2 py-1 rounded-lg hover:bg-primary/10">
                
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300" />
                <span className="hidden sm:inline">+33 4 66 29 16 32</span>
              </a>
              <a
                href="mailto:contact@arcclubdenimes.com"
                className="flex items-center gap-1.5 md:gap-2 text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-2 py-1 rounded-lg hover:bg-primary/10">
                
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300" />
                <span className="hidden md:inline">contact@arcclubdenimes.com</span>
              </a>

              <div className="flex items-center gap-2 md:gap-3 border-l border-border pl-2 md:pl-4">
                <a
                  href="https://arcclubdenimes.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6 p-1 rounded-lg hover:bg-primary/10"
                  aria-label="Site web">
                  
                  <Globe className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="https://facebook.com/arcclubdenimes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6 p-1 rounded-lg hover:bg-primary/10"
                  aria-label="Facebook">
                  
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="https://instagram.com/arcclubdenimes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6 p-1 rounded-lg hover:bg-primary/10"
                  aria-label="Instagram">
                  
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="https://tiktok.com/@arcclubdenimes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-6 p-1 rounded-lg hover:bg-primary/10"
                  aria-label="TikTok">
                  
                  <Music className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>);

}