import { useEffect, useState } from "react";

const RealClients = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  // Real client logos from Schbang website
  const clientLogos = [
    // Row 1
    [
      { name: "Xiaomi", emoji: "📱" },
      { name: "Rio", emoji: "🌊" },
      { name: "Jio", emoji: "📡" },
      { name: "Kotak", emoji: "🏦" },
      { name: "Glow & Lovely", emoji: "✨" },
      { name: "Short Story", emoji: "📖" },
      { name: "Fevicreate", emoji: "🎨" },
      { name: "Cordelia", emoji: "🚢" },
      { name: "Date Crown", emoji: "🥜" },
      { name: "Dhampur", emoji: "🍯" },
      { name: "MIA", emoji: "💄" },
      { name: "Fixit", emoji: "🔧" },
      { name: "Prime Video", emoji: "📺" }
    ],
    // Row 2  
    [
      { name: "Tata Communications", emoji: "📞" },
      { name: "PayTM", emoji: "💰" },
      { name: "Protinex", emoji: "🥛" },
      { name: "Hershey's", emoji: "🍫" },
      { name: "J&J India", emoji: "🏥" },
      { name: "Domino's", emoji: "🍕" },
      { name: "Cipla", emoji: "💊" },
      { name: "Garnier", emoji: "🧴" },
      { name: "Bblunt", emoji: "💈" },
      { name: "Bodycraft", emoji: "💪" },
      { name: "Britannia", emoji: "🍪" },
      { name: "B Natural", emoji: "🥤" },
      { name: "Asian Paints", emoji: "🎨" }
    ]
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1) % clientLogos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [clientLogos.length]);

  return (
    <section className="section-padding-sm bg-background border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-section-title mb-4 animate-fade-in-up">
            Trusted by Leading Brands
          </h2>
          <p className="text-large text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            From startups to Fortune 500 companies, we've helped brands achieve remarkable results.
          </p>
        </div>

        {/* Sliding Logo Grid */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentGroup * 100}%)` }}
          >
            {clientLogos.map((group, groupIndex) => (
              <div key={groupIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-13 gap-8 lg:gap-12">
                  {group.map((client, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center p-4 group hover-lift"
                    >
                      <div className="text-3xl lg:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {client.emoji}
                      </div>
                      <p className="text-small font-medium text-gray-600 group-hover:text-foreground transition-colors duration-300 text-center">
                        {client.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {clientLogos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentGroup(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentGroup ? "bg-accent" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-3">300+</div>
            <p className="text-body text-gray-600">Brands Worldwide</p>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.5s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-3">1000+</div>
            <p className="text-body text-gray-600">Team Specialists</p>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-3">8+</div>
            <p className="text-body text-gray-600">Years Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealClients;