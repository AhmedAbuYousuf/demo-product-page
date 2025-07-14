import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="ProductFlow Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold">ProductFlow</span>
            </div>
            <p className="text-background/80 text-lg mb-6 max-w-md">
              Empowering teams to achieve more with intelligent workflow automation 
              and seamless collaboration tools.
            </p>
            <p className="text-background/60 text-sm">
              © 2024 ProductFlow. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Get Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-background/80">
                support@productflow.com
              </li>
              <li className="text-background/80">
                1-800-PRODUCT
              </li>
              <li className="text-background/80">
                Mon-Fri, 9am-6pm EST
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            Built with ❤️ for modern teams everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;