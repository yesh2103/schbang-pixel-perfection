import { useEffect, useState } from "react";

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock partner logos - in real implementation, these would be actual brand logos
  const partners = [
    { name: "Google", logo: "🔍" },
    { name: "Microsoft", logo: "Ⓜ️" },
    { name: "Apple", logo: "🍎" },
    { name: "Amazon", logo: "📦" },
    { name: "Meta", logo: "🌐" },
    { name: "Netflix", logo: "🎬" },
    { name: "Tesla", logo: "⚡" },
    { name: "Spotify", logo: "🎵" },
    { name: "Adobe", logo: "🎨" },
    { name: "Shopify", logo: "🛍️" },
    { name: "Airbnb", logo: "🏠" },
    { name: "Uber", logo: "🚗" },
    { name: "Zoom", logo: "📹" },
    { name: "Slack", logo: "💬" },
    { name: "Dropbox", logo: "📁" },
    { name: "Twitter", logo: "🐦" }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 8));
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  // Split partners into groups for carousel
  const partnerGroups = [];
  for (let i = 0; i < partners.length; i += 8) {
    partnerGroups.push(partners.slice(i, i + 8));
  }

  return (
    <section className="section-padding-sm bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-4 animate-fade-in-up">
            Trusted by Leading Brands
          </h2>
          <p className="text-large text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            We're proud to partner with innovative companies across industries, 
            from emerging startups to Fortune 500 enterprises.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {partnerGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-12">
                  {group.map((partner, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center p-6 group hover-lift"
                    >
                      <div className="text-4xl lg:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {partner.logo}
                      </div>
                      <p className="text-small font-medium text-gray-600 group-hover:text-foreground transition-colors duration-300">
                        {partner.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {partnerGroups.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-accent" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-3">300+</div>
            <p className="text-body text-gray-600">Global Partners</p>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-3">95%</div>
            <p className="text-body text-gray-600">Client Retention Rate</p>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-3">24/7</div>
            <p className="text-body text-gray-600">Global Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;