import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import heroAbstract from "@/assets/hero-abstract.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "content creation",
    "seo",
    "brand strategy",
    "research & analytics",
    "video production",
    "web development",
    "media planning",
    "digital transformation",
    "creative strategy",
    "technology consulting",
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-background" />
      
      {/* Announcement Bar */}
      <div className="relative z-10 bg-schbang-yellow-light border-b border-schbang-yellow py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-small font-medium">
            🎉 <strong>Schbang Production</strong> is now part of the global network.{" "}
            <button 
              className="text-schbang-yellow-dark hover:underline font-semibold"
              onClick={() => scrollToSection("about")}
            >
              Read More Here.
            </button>
          </p>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 pt-20 lg:pt-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h1 className="text-display">
                  Your Creative, Media &{" "}
                  <span className="text-accent">Technology</span>{" "}
                  Transformation Partner
                </h1>
                <p className="text-large text-gray-700 max-w-xl">
                  We're a team of 1000+ Specialists delivering award-winning work 
                  for 300+ brands worldwide, 8 years and counting!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="btn-accent group"
                  onClick={() => scrollToSection("contact")}
                >
                  IT'S TIME TO CREATE A SCHBANG
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button 
                  className="btn-outline group"
                  onClick={() => scrollToSection("culture")}
                >
                  Dive into Our Culture
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {/* Abstract Design */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-blue-600 hover-lift">
                    <img 
                      src={heroAbstract} 
                      alt="Digital transformation concept"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-32 bg-gradient-to-br from-schbang-yellow to-schbang-yellow-dark rounded-2xl hover-lift" />
                </div>
                
                {/* Team Image */}
                <div className="space-y-4 mt-8">
                  <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl hover-lift" />
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden hover-lift">
                    <img 
                      src={heroImage} 
                      alt="Creative team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Services Banner */}
      <div className="relative z-10 py-8 bg-foreground text-background overflow-hidden">
        <div className="scrolling-text">
          {/* First set */}
          <div className="flex items-center space-x-8 pr-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-8">
                <span className="text-2xl lg:text-3xl font-bold whitespace-nowrap uppercase tracking-wide">
                  {service}
                </span>
                <div className="w-2 h-2 rounded-full bg-schbang-yellow flex-shrink-0" />
              </div>
            ))}
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-8 pr-8">
            {services.map((service, index) => (
              <div key={`duplicate-${index}`} className="flex items-center space-x-8">
                <span className="text-2xl lg:text-3xl font-bold whitespace-nowrap uppercase tracking-wide">
                  {service}
                </span>
                <div className="w-2 h-2 rounded-full bg-schbang-yellow flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;