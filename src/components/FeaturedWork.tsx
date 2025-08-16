import { ExternalLink, Play } from "lucide-react";

const FeaturedWork = () => {
  const projects = [
    {
      title: "Digital Transformation for Global Retailer",
      category: "E-commerce & Technology",
      description: "Complete digital overhaul resulting in 300% increase in online revenue and enhanced customer experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Strategy", "Development", "UX/UI"],
      isVideo: false
    },
    {
      title: "Award-Winning Brand Campaign",
      category: "Creative & Branding",
      description: "Multi-channel campaign that won 5 international advertising awards and increased brand awareness by 250%.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      tags: ["Branding", "Creative", "Campaign"],
      isVideo: true
    },
    {
      title: "Fintech App Revolutionizing Payments",
      category: "Mobile & Technology",
      description: "User-centered design approach led to 1M+ downloads and 95% user satisfaction rating.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      tags: ["Mobile", "Fintech", "UX"],
      isVideo: false
    },
    {
      title: "Sustainable Fashion Brand Launch",
      category: "Brand Strategy & Creative",
      description: "End-to-end brand development from concept to market launch, achieving $2M revenue in first year.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      tags: ["Branding", "Strategy", "Launch"],
      isVideo: false
    },
    {
      title: "Healthcare Digital Platform",
      category: "Healthcare & Technology",
      description: "HIPAA-compliant platform serving 500K+ patients with 99.9% uptime and enhanced care coordination.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      tags: ["Healthcare", "Platform", "Compliance"],
      isVideo: true
    },
    {
      title: "Interactive Museum Experience",
      category: "Experience Design",
      description: "Cutting-edge interactive installations that increased visitor engagement by 400% and extended average visit time.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      tags: ["Interactive", "Experience", "Culture"],
      isVideo: false
    }
  ];

  return (
    <section id="work" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-section-title mb-6 animate-fade-in-up">
            Featured Work
          </h2>
          <p className="text-large text-gray-700 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Every project tells a story of transformation. From startups to Fortune 500 companies, 
            we've helped brands achieve remarkable results through strategic thinking and creative execution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="work-grid">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-work animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="card-work-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="card-work-overlay">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="bg-background text-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
                      {project.isVideo ? (
                        <>
                          <Play className="h-4 w-4" />
                          Watch Case Study
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-small text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-card-title mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-body text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-small text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <button className="btn-outline group">
            View All Projects
            <ExternalLink className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;