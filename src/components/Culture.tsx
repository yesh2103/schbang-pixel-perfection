import { Heart, Coffee, Trophy, Rocket } from "lucide-react";

const Culture = () => {
  const cultureValues = [
    {
      icon: Heart,
      title: "People First",
      description: "We believe that great work comes from great people. Our team is our greatest asset, and we invest in their growth, wellbeing, and success."
    },
    {
      icon: Coffee,
      title: "Creative Energy",
      description: "Innovation thrives in an environment of creative freedom. We encourage experimentation, bold ideas, and thinking outside conventional boundaries."
    },
    {
      icon: Trophy,
      title: "Excellence Driven",
      description: "We set high standards for ourselves and our work. Every project is an opportunity to exceed expectations and deliver exceptional results."
    },
    {
      icon: Rocket,
      title: "Future Ready",
      description: "We embrace emerging technologies and evolving trends to ensure our clients stay ahead of the curve in an ever-changing digital landscape."
    }
  ];

  const perks = [
    "Flexible remote work options",
    "Professional development budget",
    "Health & wellness programs", 
    "Creative sabbaticals",
    "Team building retreats",
    "Learning & development days",
    "Innovation time (20% projects)",
    "Mental health support"
  ];

  return (
    <section id="culture" className="section-padding bg-gradient-to-br from-schbang-yellow-light to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6 animate-fade-in-up">
            Our Culture & Values
          </h2>
          <p className="text-large text-gray-700 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            At Schbang, we've built more than just a company – we've created a community 
            of passionate creators, thinkers, and innovators who are united by shared values 
            and a commitment to excellence.
          </p>
        </div>

        {/* Culture Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {cultureValues.map((value, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 text-center group hover-lift shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-card-title mb-4">{value.title}</h3>
              <p className="text-body text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Image & Perks */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Team Showcase */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-300 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="Team collaboration at Schbang"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-large">
                <div className="text-2xl font-black">1000+</div>
                <div className="text-small font-medium">Happy Team Members</div>
              </div>
            </div>
          </div>

          {/* Perks & Benefits */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <h3 className="text-section-title mb-8">Why Join Schbang?</h3>
            <p className="text-large text-gray-700 mb-8">
              We offer more than just a job – we provide a platform for growth, 
              creativity, and making a meaningful impact in the world of digital transformation.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {perks.map((perk, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-body text-gray-700">{perk}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-accent group">
                View Open Positions
                <Heart className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </button>
              <button className="btn-outline group">
                Learn About Life at Schbang
                <Coffee className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;