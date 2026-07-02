import { useState } from "react";
import { ChevronDown, X, Images, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export type GalleryItem = {
  type: "image" | "article";
  src: string;
  title: string;
  description: string;
};

export type StatBox = {
  value: string;
  label: string;
  sublabel: string;
  color: "accent" | "secondary" | "primary";
};

export interface ValueSectionProps {
  index: number;
  id: string;
  title: string;
  keywords: string[];
  image: string;
  details: string;
  gallery: GalleryItem[];
  buttonText?: string;
  galleryText?: string;
  stats?: StatBox[];
}

export function ValueSection({ index, id, title, keywords, image, details, gallery, buttonText = "En savoir plus", galleryText = "Galerie", stats }: ValueSectionProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const isEconomieSection = id === "impact";

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section
      ref={ref}
      id={id}
      className="relative min-h-screen snap-start snap-always flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/70" />
      </div>

      <div className={`relative z-10 container mx-auto px-4 py-20 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
      }>
        <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            {title}
          </h2>

          {isEconomieSection && stats ?
          <div className="space-y-8 md:space-y-12 pt-8">
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }>
                {stats.map((stat, idx) => {
                  const borderColor = stat.color === "accent" ? "border-accent" : stat.color === "secondary" ? "border-secondary" : "border-primary";
                  const textColor = stat.color === "accent" ? "text-accent" : stat.color === "secondary" ? "text-secondary" : "text-primary";
                  
                  return (
                    <div key={idx} className={`bg-white/10 backdrop-blur-sm border-2 ${borderColor} rounded-2xl p-6 md:p-8 text-center hover:bg-white/20 transition-all`}>
                      <div className={`text-5xl md:text-6xl font-bold ${textColor} mb-3`}>
                        {stat.value}
                      </div>
                      <div className="text-lg md:text-xl font-semibold text-white mb-2">
                        {stat.label}
                      </div>
                      <div className="text-sm text-white/80">
                        {stat.sublabel}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={`flex flex-wrap gap-4 md:gap-6 justify-center text-base md:text-lg lg:text-xl transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }>
                {keywords.map((keyword, idx) =>
              <span
                key={idx}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium text-white">
                
                    {keyword}
                  </span>
              )}
              </div>

              <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }>
                <button
                onClick={() => setShowDetails(true)}
                className="mt-6 px-6 md:px-8 py-3 md:py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2 text-base md:text-lg">
                
                  {buttonText}
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div> :

          <>
              <div className={`flex flex-wrap gap-4 md:gap-6 justify-center text-base md:text-lg lg:text-xl transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }>
                {keywords.map((keyword, idx) =>
              <span
                key={idx}
                className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium text-white">
                
                    {keyword}
                  </span>
              )}
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
            }>
                <button
                onClick={() => setShowDetails(true)}
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2 text-base md:text-lg">
                
                  {buttonText}
                  <ChevronDown className="w-5 h-5" />
                </button>

                {gallery && gallery.length > 0 &&
              <button
                onClick={() => setShowGallery(true)}
                className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center gap-2 text-base md:text-lg">
                
                    <Images className="w-5 h-5" />
                    {galleryText}
                  </button>
              }
              </div>
            </>
          }
        </div>
      </div>

      {showDetails &&
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom duration-500">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 md:p-8 flex justify-between items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">{title}</h3>
              <button
              onClick={() => setShowDetails(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Fermer">
              
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                {details}
              </p>
            </div>
          </div>
        </div>
      }

      {showGallery && gallery && gallery.length > 0 &&
      <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
          onClick={() => setShowGallery(false)}
          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10">
          
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full max-w-5xl animate-in zoom-in-95 duration-500">
            {gallery.length > 1 &&
          <>
                <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors z-10">
              
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors z-10">
              
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </>
          }

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <img
                src={gallery[currentImageIndex].src}
                alt={gallery[currentImageIndex].title}
                className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain bg-black" />
              
              </div>

              <div className="p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                  {gallery[currentImageIndex].title}
                </h4>
                <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                  {gallery[currentImageIndex].description}
                </p>

                {gallery.length > 1 &&
              <div className="mt-4 flex justify-center gap-2">
                    {gallery.map((_, idx) =>
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex ?
                  "bg-primary w-8" :
                  "bg-foreground/20"}`
                  } />

                )}
                  </div>
              }
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

}