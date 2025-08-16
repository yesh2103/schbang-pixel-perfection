import { Calendar, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Reality & Advantages of Account-Based Marketing",
      excerpt: "Exploring how ABM strategies can transform B2B marketing effectiveness and drive targeted business growth.",
      author: "Marketing Team",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      featured: true
    },
    {
      title: "2025's Winning Formula for Brand Growth", 
      excerpt: "Key strategies and insights for building successful brands in the evolving digital landscape.",
      author: "Strategy Team",
      date: "December 12, 2024",
      readTime: "3 min read",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      featured: false
    },
    {
      title: "9 Power Moves to Build Your E-Commerce Business",
      excerpt: "Essential tactics and proven methods to accelerate e-commerce growth and maximize conversions.",
      author: "E-commerce Team",
      date: "December 10, 2024", 
      readTime: "3 min read",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      featured: false
    }
  ];

  const categories = ["All", "Digital Strategy", "Branding", "Design", "UX Strategy", "Marketing"];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-section-title mb-6 animate-fade-in-up">
            Trending now
          </h2>
          <p className="text-large text-gray-700 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Stay ahead with our latest insights on design, technology, and business strategy.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 ${
                index === 0 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-background text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-background rounded-3xl overflow-hidden shadow-medium hover:shadow-large transition-shadow duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-small text-gray-500">{blogPosts[0].category}</span>
                  <span className="text-small text-gray-500">•</span>
                  <span className="text-small text-gray-500">{blogPosts[0].readTime}</span>
                </div>
                
                <h3 className="text-section-title mb-4 hover:text-accent transition-colors duration-300 cursor-pointer">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-large text-gray-600 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <button className="text-accent hover:text-accent-foreground hover:bg-accent px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2 self-start">
                  Read Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid - Only show first 3 posts */}
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-small text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-card-title mb-3 group-hover:text-accent transition-colors duration-300 cursor-pointer line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-body text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-small text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <button className="text-accent hover:text-accent-foreground transition-colors duration-300">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
          <button className="btn-outline group">
            View All Articles
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;