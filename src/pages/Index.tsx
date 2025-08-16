import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import WorkSlider from "@/components/WorkSlider";
import Awards from "@/components/Awards";
import Blog from "@/components/Blog";
import RealClients from "@/components/RealClients";
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
        <WorkSlider />
        <Awards />
        <Blog />
        <RealClients />
        <Culture />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
