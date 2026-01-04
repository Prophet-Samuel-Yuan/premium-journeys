import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getItineraryBySlug } from "@/data/itineraries";
import { ArrowLeft, Clock, MapPin, CheckCircle } from "lucide-react";

// Image imports
import baikalIce from "@/assets/tours/baikal-ice.jpg";
import kenyaSafari from "@/assets/tours/kenya-safari.jpg";
import huizhou from "@/assets/tours/huizhou.jpg";
import teamBuilding from "@/assets/tours/team-building.jpg";
import businessConference from "@/assets/tours/business-conference.jpg";
import egyptPyramids from "@/assets/tours/egypt-pyramids.jpg";
import morocco from "@/assets/tours/morocco.jpg";
import greece from "@/assets/tours/greece.jpg";

const imageMap: Record<string, string> = {
  "baikal-ice": baikalIce,
  "kenya-safari": kenyaSafari,
  "huizhou": huizhou,
  "team-building": teamBuilding,
  "business-conference": businessConference,
  "egypt-pyramids": egyptPyramids,
  "morocco": morocco,
  "greece": greece,
};

const ItineraryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const itinerary = getItineraryBySlug(slug || "");

  if (!itinerary) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-4xl font-serif mb-4">Itinerary Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The itinerary you're looking for doesn't exist.
            </p>
            <Link to="/">
              <Button variant="gold">Return Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const image = imageMap[itinerary.image] || baikalIce;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end">
          <div className="absolute inset-0">
            <img
              src={image}
              alt={itinerary.titleEn}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>
          <div className="relative z-10 container mx-auto px-6 lg:px-12 pb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              <span className="font-sans text-sm uppercase tracking-wider">Back to Home</span>
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-2">
              {itinerary.titleCn}
            </h1>
            <p className="text-xl text-foreground/80 font-sans">
              {itinerary.titleEn}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-serif mb-6">About This Journey</h2>
                <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                  {itinerary.descriptionCn}
                </p>
                <p className="text-muted-foreground font-sans leading-relaxed mb-12">
                  {itinerary.descriptionEn} This carefully curated experience combines the finest 
                  accommodations, expert local guides, and exclusive access to create memories that 
                  will last a lifetime. Every detail has been thoughtfully considered to ensure an 
                  exceptional journey.
                </p>

                {/* Highlights */}
                {itinerary.highlights && (
                  <div>
                    <h3 className="text-xl font-serif mb-6">Tour Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {itinerary.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-3 bg-card p-4 rounded-lg"
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-sans text-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-lg p-8 sticky top-32">
                  <h3 className="text-xl font-serif mb-6">Trip Details</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-sans">Duration</p>
                        <p className="text-foreground font-medium">{itinerary.duration}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-sans">Category</p>
                        <p className="text-foreground font-medium capitalize">
                          {itinerary.category.replace("-", " ")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-muted-foreground font-sans text-sm mb-4">
                      Ready to start planning your journey?
                    </p>
                    <Button variant="gold" size="lg" className="w-full">
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ItineraryDetail;
