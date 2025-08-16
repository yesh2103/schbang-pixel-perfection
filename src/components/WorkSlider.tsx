import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Winning Domino's 43K Followers in <6 hours",
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "New-age website experience for India's most trusted bank",
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Stickiest Social Distancing Campaign for Fevicol",
      images: [
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Creative Road Safety Awareness Campaign with Mumbai Police",
      images: [
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Raising Tuberculosis Awareness for a healthcare brand",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Finding #CoffeeKaBetterHalf with Karan Johar",
      images: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 7,
      title: "Tailored Website Experience for TATA Communications",
      images: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-section-title mb-6 animate-fade-in-up">
            Our latest work
          </h2>
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="bg-background rounded-2xl overflow-hidden shadow-medium">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={projects[currentSlide].images[0]} 
                  alt={projects[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-card-title mb-4">{projects[currentSlide].title}</h3>
                <div className="text-small text-gray-500">0{currentSlide + 1}</div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full bg-background shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? "bg-accent" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full bg-background shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="grid grid-cols-7 gap-8 mb-8">
              {projects.map((project, index) => (
                <div key={project.id} className="space-y-4">
                  <div 
                    className={`transition-all duration-500 ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-60 scale-95"
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 hover-lift">
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden hover-lift">
                      <img 
                        src={project.images[1]} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-small text-gray-500 mb-2">0{project.id}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Project Title */}
            <div className="text-center mb-8">
              <h3 className="text-hero max-w-4xl mx-auto">
                {projects[currentSlide].title}
              </h3>
              <div className="text-large text-gray-600 mt-4">
                0{currentSlide + 1} / 0{projects.length}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4">
              <button 
                onClick={prevSlide}
                className="p-4 rounded-full bg-background shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex gap-3">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`text-xl font-bold transition-colors duration-300 ${
                      index === currentSlide ? "text-accent" : "text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-4 rounded-full bg-background shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSlider;