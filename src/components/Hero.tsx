import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import heroAbstract from "@/assets/hero-abstract.jpg";
import ScrollReveal from "./ScrollReveal";

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
      <div className="relative z-10 bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-200 py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-small font-medium text-gray-800">
            🎉 <strong>Addikt</strong> is now part of the Schbang Network.{" "}
            <button 
              className="text-red-600 hover:underline font-semibold transition-colors duration-200"
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
            <div className="space-y-8">
              <ScrollReveal delay={200}>
                <div className="space-y-6">
                  <h1 className="text-display">
                    Your Creative, <span className="text-accent animate-pulse-glow">Media</span> & Technology Transformation Partner
                  </h1>
                  <p className="text-large text-gray-700 max-w-xl">
                    We're a team of 1000+ Specialists delivering award-winning work 
                    for 300+ brands worldwide, 8 years and counting!
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="btn-accent group hover-glow"
                    onClick={() => scrollToSection("contact")}
                  >
                    IT'S TIME TO CREATE A SCHBANG
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                  </button>
                  <button 
                    className="btn-outline group hover-lift"
                    onClick={() => scrollToSection("culture")}
                  >
                    Dive into Our Culture
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* Visual Content */}
            <ScrollReveal delay={600} direction="right">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  {/* Blue Abstract */}
                  <div className="space-y-4">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-blue-600 hover-lift animate-float">
                      <img 
                        src={heroAbstract} 
                        alt="Digital transformation concept"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  {/* Phone Mockup */}
                  <div className="space-y-4 mt-8">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden hover-lift bg-gray-100" style={{ animationDelay: '1.5s' }}>
                      <img 
                        src={heroImage} 
                        alt="Creative team collaboration"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-bounce-in opacity-80" style={{ animationDelay: '2s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-schbang-yellow rounded-full animate-bounce-in opacity-60" style={{ animationDelay: '2.5s' }}></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scrolling Services Banner */}
      <div className="relative z-10 py-6 bg-primary text-primary-foreground overflow-hidden">
        <div className="scrolling-text">
          {/* First set */}
          <div className="flex items-center space-x-12 pr-12">
            <span className="text-xl lg:text-2xl font-black whitespace-nowrap uppercase tracking-widest">
              IT'S TIME TO CREATE A SCHBANG
            </span>
            <div className="text-xl">✶</div>
            <span className="text-xl lg:text-2xl font-black whitespace-nowrap uppercase tracking-widest">
              IT'S TIME TO CREATE A SCHBANG
            </span>
            <div className="text-xl">✶</div>
            <span className="text-xl lg:text-2xl font-black whitespace-nowrap uppercase tracking-widest">
              IT'S TIME TO CREATE A SCHBANG
            </span>
            <div className="text-xl">✶</div>
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex items-center space-x-12 pr-12">
            <span className="text-xl lg:text-2xl font-black whitespace-nowrap uppercase tracking-widest">
              IT'S TIME TO CREATE A SCHBANG
            </span>
            <div className="text-xl">✶</div>
            <span className="text-xl lg:text-2xl font-black whitespace-nowrap uppercase tracking-widest">
              IT'S TIME TO CREATE A SCHBANG
            </span>
            <div className="text-xl">✶</div>
            <span className="text-xl lg:text-2xl font-black whitespace-nowrap uppercase tracking-widest">
              IT'S TIME TO CREATE A SCHBANG
            </span>
            <div className="text-xl">✶</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;