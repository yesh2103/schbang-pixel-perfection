import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import FeaturedWork from "@/components/FeaturedWork";
import Awards from "@/components/Awards";
import Blog from "@/components/Blog";
import Partners from "@/components/Partners";
import Culture from "@/components/Culture";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Mission />
        <FeaturedWork />
        <Awards />
        <Blog />
        <Partners />
        <Culture />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
