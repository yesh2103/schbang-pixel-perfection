import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Awards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const awards = [
    {
      title: "Agency of the Year",
      organization: "Digital Marketing Awards 2024",
      category: "Creative Excellence",
      year: "2024"
    },
    {
      title: "Best Campaign Strategy",
      organization: "Global Advertising Awards",
      category: "Strategic Innovation",
      year: "2024"
    },
    {
      title: "Excellence in Digital Transformation",
      organization: "Tech Innovation Awards",
      category: "Technology Leadership",
      year: "2023"
    },
    {
      title: "Outstanding Creative Work",
      organization: "Creative Industry Awards",
      category: "Visual Design",
      year: "2023"
    },
    {
      title: "Best User Experience Design",
      organization: "UX Design Awards",
      category: "Digital Experience",
      year: "2023"
    }
  ];

  const testimonials = [
    {
      quote: "Schbang transformed our entire digital presence. Their strategic approach and creative execution exceeded all our expectations, resulting in a 300% increase in online engagement.",
      author: "Sarah Chen",
      position: "Chief Marketing Officer",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      quote: "Working with Schbang was a game-changer for our brand. Their team's expertise in both creative and technology helped us launch successfully into new markets.",
      author: "Michael Rodriguez",
      position: "Founder & CEO",
      company: "GreenStart Initiative",
      rating: 5
    },
    {
      quote: "The level of professionalism and innovative thinking from Schbang is unmatched. They don't just deliver projects; they deliver business transformation.",
      author: "Emily Johnson",
      position: "VP of Digital Strategy",
      company: "Fashion Forward Inc.",
      rating: 5
    },
    {
      quote: "Schbang's ability to understand our complex requirements and translate them into beautiful, functional solutions is remarkable. True strategic partners.",
      author: "David Kim",
      position: "Head of Innovation",
      company: "FinanceFirst Bank",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="awards" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Awards Section */}
          <div className="animate-fade-in-up">
            <h2 className="text-section-title mb-8 text-white">
              Awards & Recognition
            </h2>
            <p className="text-large text-gray-300 mb-12">
              Our commitment to excellence has been recognized by leading industry organizations worldwide.
            </p>
            
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-card-title text-white mb-2">{award.title}</h3>
                      <p className="text-body text-schbang-yellow font-medium">{award.organization}</p>
                    </div>
                    <span className="bg-schbang-yellow text-black px-3 py-1 rounded-full text-small font-bold">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-small text-gray-400">{award.category}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-section-title mb-8 text-white">
              Client Testimonials
            </h2>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 lg:p-10 min-h-[400px] flex flex-col justify-between">
                <div className="mb-8">
                  <Quote className="h-12 w-12 text-schbang-yellow mb-6" />
                  <blockquote className="text-large text-gray-100 leading-relaxed mb-6">
                    "{testimonials[currentSlide].quote}"
                  </blockquote>
                  
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonials[currentSlide].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-schbang-yellow fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-body font-semibold text-white">
                        {testimonials[currentSlide].author}
                      </p>
                      <p className="text-small text-gray-400">
                        {testimonials[currentSlide].position}
                      </p>
                      <p className="text-small text-schbang-yellow">
                        {testimonials[currentSlide].company}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? "bg-schbang-yellow" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;