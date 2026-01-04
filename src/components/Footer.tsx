import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-navy-light border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logo} 
                alt="1st Landing Tours" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground font-sans leading-relaxed max-w-md">
              At 1st Landing Tours, we believe travel is an art. From the neon-lit skyline of Shanghai 
              to the silent mountains of the West, we curate moments that stay with you forever.
            </p>
            <p className="text-muted-foreground font-sans mt-4 text-sm">
              卓越したサービスと信頼、一点物の旅をお届けします。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                Home
              </a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                About Us
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                Our Services
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Contact Us</h4>
            <div className="flex flex-col gap-3 text-muted-foreground font-sans text-sm">
              <p>Shanghai, China</p>
              <p>contact@1st-landing.com</p>
              <p>+86 21 1234 5678</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-sans">
            © {new Date().getFullYear()} 1st Landing Tours. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-sans">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-sans">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
