import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PersonalTravelSection } from "@/components/sections/PersonalTravelSection";
import { TeamBuildingSection } from "@/components/sections/TeamBuildingSection";
import { BusinessVisitSection } from "@/components/sections/BusinessVisitSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PersonalTravelSection />
        <TeamBuildingSection />
        <BusinessVisitSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
