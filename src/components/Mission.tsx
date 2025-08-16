import { Target, Users, Award, Zap } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Vision",
      description: "We create transformative strategies that drive meaningful business outcomes and lasting brand impact."
    },
    {
      icon: Users,
      title: "Collaborative Excellence",
      description: "Our diverse team of specialists works seamlessly together to deliver award-winning creative solutions."
    },
    {
      icon: Award,
      title: "Quality Obsessed",
      description: "Every project reflects our commitment to excellence, innovation, and attention to detail."
    },
    {
      icon: Zap,
      title: "Future Focused",
      description: "We leverage cutting-edge technology and emerging trends to keep our clients ahead of the curve."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6 animate-fade-in-up">
            What Defines Us
          </h2>
          <p className="text-large text-gray-700 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            We're not just another agency. We're transformation partners who blend creativity, 
            technology, and strategic thinking to create experiences that matter. Our mission 
            is to help brands navigate the complex digital landscape while staying true to 
            their core values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in-up hover-lift"
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

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-background rounded-3xl p-8 lg:p-12 shadow-medium">
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-2">1000+</div>
            <p className="text-body text-gray-600">Team Specialists</p>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.7s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-2">300+</div>
            <p className="text-body text-gray-600">Global Brands</p>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-2">8+</div>
            <p className="text-body text-gray-600">Years Experience</p>
          </div>
          <div className="text-center animate-scale-in" style={{ animationDelay: "0.9s" }}>
            <div className="text-4xl lg:text-5xl font-black text-accent mb-2">50+</div>
            <p className="text-body text-gray-600">Industry Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;