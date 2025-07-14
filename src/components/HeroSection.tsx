import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard.png";
import mobileScreenshot from "@/assets/mobile-screenshot.png";
import desktopScreenshot from "@/assets/desktop-screenshot.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const screenshots = [
    { image: heroDashboard, title: "Dashboard Overview" },
    { image: mobileScreenshot, title: "Mobile Experience" },
    { image: desktopScreenshot, title: "Desktop Application" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Screenshots Slider */}
        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-card">
            <div className="relative">
              <div className="relative h-[400px] md:h-[600px] overflow-hidden">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' : 
                      index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 z-10">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
                    Transform Your Business with{" "}
                    <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                      ProductFlow
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                    Streamline your workflow, boost productivity, and scale your business 
                    with our powerful all-in-one platform designed for modern teams.
                  </p>
                  
                  {/* CTA Button */}
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => navigate('/booking')}
                    className="text-lg px-8 py-4 shadow-lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Meeting
                  </Button>
                </div>
              </div>

              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 shadow-card transition-all hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 shadow-card transition-all hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-primary scale-125' 
                        : 'bg-background/60 hover:bg-background/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* Current Slide Title */}
          <div className="text-center mt-6">
            <h3 className="text-xl font-semibold text-foreground">
              {screenshots[currentSlide].title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;