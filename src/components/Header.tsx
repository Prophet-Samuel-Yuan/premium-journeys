import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (isHomePage && href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navHref = (href: string) => {
    if (!isHomePage && href.startsWith("#")) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="First Landing 领拓国旅" 
              className="h-14 lg:h-16 w-auto rounded-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={navHref(link.href)}
                onClick={(e) => {
                  if (isHomePage && link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="text-foreground/80 hover:text-primary uppercase tracking-[0.15em] text-xs font-sans font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Button variant="gold" size="default">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={navHref(link.href)}
                  onClick={(e) => {
                    if (isHomePage && link.href.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="text-foreground/80 hover:text-primary uppercase tracking-[0.15em] text-sm font-sans font-medium transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" size="default" className="mt-4">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
