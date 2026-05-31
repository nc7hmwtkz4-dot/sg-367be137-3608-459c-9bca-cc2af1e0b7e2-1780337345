import { Mail, Phone } from "lucide-react";
import { HomeActionLink } from "@/components/home/HomeActionLink";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen snap-start snap-always flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/devenez-partenaire.jpg"
          alt="Devenez partenaire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
      </div>

      <div
        className={`relative z-10 container mx-auto px-4 py-20 md:py-0 text-center text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto space-y-8 md:space-y-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight px-2">
            Devenez Partenaire
          </h2>

          <p
            className={`text-base md:text-lg lg:text-xl leading-relaxed px-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Rejoignez l'aventure du 1er club français de tir à l'arc
            et associez votre marque à l'excellence sportive.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-6 md:pt-8 px-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <HomeActionLink
              href="tel:+33466291632"
              variant="solid"
              aria-label="Appeler le 04 66 29 16 32"
            >
              <Phone className="w-5 h-5" />
              <span className="whitespace-nowrap">04 66 29 16 32</span>
            </HomeActionLink>

            <HomeActionLink
              href="mailto:contact@arcclubdenimes.com"
              variant="outline"
              aria-label="Envoyer un email à contact@arcclubdenimes.com"
            >
              <Mail className="w-5 h-5" />
              <span>contact@arcclubdenimes.com</span>
            </HomeActionLink>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-3 md:bottom-4 right-3 md:right-4 z-10 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white/40 text-[10px] md:text-xs font-light">
          Crédit photo ©World Archery
        </p>
      </div>
    </section>
  );
}