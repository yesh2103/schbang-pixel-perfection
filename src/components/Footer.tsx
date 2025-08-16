import { ArrowRight, MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Digital Strategy",
    "Brand Development", 
    "Creative Design",
    "Web Development",
    "Mobile Applications",
    "Content Creation",
    "SEO & Marketing",
    "Technology Consulting"
  ];

  const company = [
    { name: "About Us", action: () => scrollToSection("about") },
    { name: "Our Work", action: () => scrollToSection("work") },
    { name: "Careers", action: () => scrollToSection("careers") },
    { name: "Awards", action: () => scrollToSection("awards") },
    { name: "Blog", action: () => scrollToSection("blog") },
    { name: "Contact", action: () => scrollToSection("contact") }
  ];

  const resources = [
    "Case Studies",
    "White Papers", 
    "Industry Reports",
    "Design Resources",
    "Developer Tools",
    "Brand Guidelines"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main CTA Section */}
      <div id="contact" className="section-padding border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display mb-8 animate-fade-in-up">
              Ready to Create a{" "}
              <span className="text-schbang-yellow">Schbang?</span>
            </h2>
            <p className="text-large text-gray-300 mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Let's transform your vision into reality. Our team is ready to partner with you 
              on your next breakthrough project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <button className="btn-accent group text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="btn-outline group text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-gray-900">
                Schedule a Call
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="section-padding-sm">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="mb-8">
                <h3 className="text-3xl font-black tracking-tight mb-2">
                  Schbang
                  <span className="text-lg font-normal ml-2 text-gray-400">
                    .Production
                  </span>
                </h3>
                <p className="text-body text-gray-300 max-w-md">
                  Your Creative, Media & Technology Transformation Partner. 
                  We create meaningful experiences that drive business growth and cultural impact.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-schbang-yellow mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-body text-gray-300">
                      123 Innovation Drive, Suite 400<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-schbang-yellow" />
                  <a href="tel:+1-555-123-4567" className="text-body text-gray-300 hover:text-schbang-yellow transition-colors duration-300">
                    +1 (555) 123-4567
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-schbang-yellow" />
                  <a href="mailto:hello@schbang.com" className="text-body text-gray-300 hover:text-schbang-yellow transition-colors duration-300">
                    hello@schbang.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-schbang-yellow hover:text-gray-900 transition-all duration-300 group">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-schbang-yellow hover:text-gray-900 transition-all duration-300 group">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-schbang-yellow hover:text-gray-900 transition-all duration-300 group">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-schbang-yellow hover:text-gray-900 transition-all duration-300 group">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h4 className="text-card-title mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button className="text-body text-gray-300 hover:text-schbang-yellow transition-colors duration-300">
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-card-title mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={item.action}
                      className="text-body text-gray-300 hover:text-schbang-yellow transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h4 className="text-card-title mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <button className="text-body text-gray-300 hover:text-schbang-yellow transition-colors duration-300">
                      {resource}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-small text-gray-400">
              © 2024 Schbang Production. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-small text-gray-400 hover:text-schbang-yellow transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-small text-gray-400 hover:text-schbang-yellow transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-small text-gray-400 hover:text-schbang-yellow transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;