import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-navy-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-sans mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-8">
              Let Us Craft Your Perfect Journey
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Ready to embark on an extraordinary adventure? Our travel experts are here to help you 
              create the perfect itinerary tailored to your preferences.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-serif text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground font-sans">Shanghai, China</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-serif text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground font-sans">contact@1st-landing.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-serif text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground font-sans">+86 21 1234 5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-lg p-8 lg:p-10 shadow-elegant">
            <h3 className="text-2xl font-serif mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-sans text-muted-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-sans text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Trip inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-sans text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground font-sans focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your dream journey..."
                />
              </div>

              <Button variant="gold" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
