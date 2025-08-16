import { MapPin, Clock, Users, ArrowRight } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Creative Director",
      department: "Creative",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "8+ years",
      description: "Lead creative strategy and execution for major brand campaigns while mentoring junior creative talent."
    },
    {
      title: "Full Stack Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time", 
      experience: "5+ years",
      description: "Build scalable web applications using modern technologies and contribute to our technical architecture."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      experience: "4+ years",
      description: "Create intuitive and beautiful user experiences for web and mobile applications across various industries."
    },
    {
      title: "Digital Marketing Strategist",
      department: "Strategy",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "6+ years",
      description: "Develop comprehensive digital marketing strategies that drive measurable business results for our clients."
    },
    {
      title: "Brand Strategist",
      department: "Strategy",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "5+ years",
      description: "Shape brand positioning and messaging strategies for emerging and established brands across multiple verticals."
    },
    {
      title: "Motion Graphics Designer",
      department: "Creative",
      location: "Remote",
      type: "Contract",
      experience: "3+ years",
      description: "Create compelling motion graphics and animations for digital campaigns and brand storytelling initiatives."
    }
  ];

  const departments = ["All", "Creative", "Technology", "Design", "Strategy"];

  return (
    <section id="careers" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-section-title mb-6 animate-fade-in-up">
            Join Our Team
          </h2>
          <p className="text-large text-gray-700 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Ready to make your mark in the world of creative technology? We're always 
            looking for talented individuals who share our passion for innovation and excellence.
          </p>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {departments.map((dept, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                index === 0 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-background text-gray-600 hover:bg-gray-200"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Open Positions */}
        <div className="space-y-6 mb-16">
          {openPositions.map((position, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-card-title group-hover:text-accent transition-colors duration-300">
                      {position.title}
                    </h3>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-small font-medium">
                      {position.department}
                    </span>
                  </div>
                  
                  <p className="text-body text-gray-600 mb-4">
                    {position.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-6 text-small text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {position.experience}
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <button className="btn-primary group">
                    Apply Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-8 lg:p-12 text-center animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          <h3 className="text-section-title mb-4 text-white">
            Don't See the Perfect Role?
          </h3>
          <p className="text-large text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always interested in connecting with talented individuals. 
            Send us your portfolio and let's explore how you can contribute to our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent group">
              Send Your Portfolio
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="btn-outline group text-white border-white hover:bg-white hover:text-gray-900">
              Learn About Our Culture
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;