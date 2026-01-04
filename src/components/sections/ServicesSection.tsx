export const ServicesSection = () => {
  const services = [
    {
      title: "Personal Travel",
      description: "Bespoke journeys tailored to your unique preferences and desires.",
      href: "#personal-travel",
    },
    {
      title: "Team Building",
      description: "Strengthen your team's bond with curated corporate retreats.",
      href: "#team-building",
    },
    {
      title: "Business Visit",
      description: "Premium delegation services for conferences and business trips.",
      href: "#business-visit",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-sans mb-4">
            Explore Our
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium">
            Premium Itineraries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group block bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-300"
            >
              <h3 className="text-xl font-serif mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
