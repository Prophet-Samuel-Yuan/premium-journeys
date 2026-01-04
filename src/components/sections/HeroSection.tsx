import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shanghai.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Shanghai Bund night skyline with golden lights reflecting on Huangpu River"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-sans mb-6">
            Beyond the Horizon
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-8">
            Unrivaled Journeys
            <br />
            <span className="text-gradient-gold">&</span> Bespoke Service
          </h1>
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToContact}
            className="animate-fade-in-delay"
          >
            Consult Our Experts
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
};
