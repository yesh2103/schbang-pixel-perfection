import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const solutions = [
    { name: "Digital Strategy", href: "#solutions" },
    { name: "Brand Development", href: "#solutions" },
    { name: "Technology Solutions", href: "#solutions" },
    { name: "Media Planning", href: "#solutions" },
  ];

  const about = [
    { name: "Our Story", href: "#about" },
    { name: "Leadership Team", href: "#about" },
    { name: "Culture", href: "#culture" },
    { name: "Awards", href: "#awards" },
  ];

  const resources = [
    { name: "Blog", href: "#blog" },
    { name: "Case Studies", href: "#work" },
    { name: "Insights", href: "#blog" },
    { name: "Downloads", href: "#resources" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "header-solid" : "header-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              className="text-2xl lg:text-3xl font-black tracking-tight"
              onClick={() => scrollToSection("hero")}
            >
              Schbang
              <span className="text-xs lg:text-sm font-normal ml-2 text-gray-600">
                .Influencers
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <button
              className="text-body font-medium hover:text-accent transition-colors duration-300"
              onClick={() => scrollToSection("work")}
            >
              Work
            </button>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen("solutions")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 text-body font-medium hover:text-accent transition-colors duration-300">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </button>
              {dropdownOpen === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background shadow-medium rounded-xl p-4 animate-fade-in-up">
                  {solutions.map((item) => (
                    <button
                      key={item.name}
                      className="block w-full text-left px-4 py-3 text-body hover:bg-secondary rounded-lg transition-colors duration-200"
                      onClick={() => scrollToSection("solutions")}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen("about")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 text-body font-medium hover:text-accent transition-colors duration-300">
                About
                <ChevronDown className="h-4 w-4" />
              </button>
              {dropdownOpen === "about" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background shadow-medium rounded-xl p-4 animate-fade-in-up">
                  {about.map((item) => (
                    <button
                      key={item.name}
                      className="block w-full text-left px-4 py-3 text-body hover:bg-secondary rounded-lg transition-colors duration-200"
                      onClick={() => scrollToSection("about")}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen("resources")}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-1 text-body font-medium hover:text-accent transition-colors duration-300">
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
              {dropdownOpen === "resources" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background shadow-medium rounded-xl p-4 animate-fade-in-up">
                  {resources.map((item) => (
                    <button
                      key={item.name}
                      className="block w-full text-left px-4 py-3 text-body hover:bg-secondary rounded-lg transition-colors duration-200"
                      onClick={() => scrollToSection("blog")}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="text-body font-medium hover:text-accent transition-colors duration-300"
              onClick={() => scrollToSection("careers")}
            >
              Careers
            </button>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              className="btn-primary group"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in-up">
            <nav className="px-4 py-6 space-y-4">
              <button
                className="block w-full text-left text-large font-medium py-2"
                onClick={() => scrollToSection("work")}
              >
                Work
              </button>
              <button
                className="block w-full text-left text-large font-medium py-2"
                onClick={() => scrollToSection("solutions")}
              >
                Solutions
              </button>
              <button
                className="block w-full text-left text-large font-medium py-2"
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
              <button
                className="block w-full text-left text-large font-medium py-2"
                onClick={() => scrollToSection("blog")}
              >
                Resources
              </button>
              <button
                className="block w-full text-left text-large font-medium py-2"
                onClick={() => scrollToSection("careers")}
              >
                Careers
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;