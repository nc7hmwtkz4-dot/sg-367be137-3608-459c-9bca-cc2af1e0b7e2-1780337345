import { ChevronUp, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
}

export interface ScrollNavigationProps {
  sections: Section[];
}

export function ScrollNavigation({ sections }: ScrollNavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === section.id
              ? "bg-accent scale-150"
              : "bg-white/50 hover:bg-white/80"
          }`}
          aria-label={`Aller à ${section.title}`}
          title={section.title}
        />
      ))}
    </div>
  );
}