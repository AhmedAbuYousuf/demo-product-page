import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">ProductFlow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Demo Button */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              onClick={() => scrollToSection('hero')}
            >
              Get Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md w-full text-left"
              >
                FAQ
              </button>
              <div className="pt-2">
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => scrollToSection('hero')}
                >
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;