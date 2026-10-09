import About from "./components/About";
import Brands from "./components/Brands";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import PopularCars from "./components/PopularCars";
import Services from "./components/Services";
import Hero from "./components/Hero";
import { getRydoraSections } from "@/lib/rydora";

export default function Home() {
  const sections = getRydoraSections();

  return (
    <main className="flex-1">
      <Hero data={sections.Hero?.variants?.RydoraHero1} />

      <PopularCars data={sections.Fleet?.variants?.RydoraFleet1} />
      <About data={sections.AboutUs?.variants?.RydoraAboutUs1} />
      <Services data={sections.Services?.variants?.RydoraServices1} />
      <HowItWorks
        data={sections.WorkingProcess?.variants?.RydoraWorkingProcess1}
      />
      <Brands data={sections.Brands?.variants?.RydoraBrands1} />
      <Testimonials
        data={sections.Testimonials?.variants?.RydoraTestimonials1}
      />
      <BlogSection
        data={sections.BlogNews?.variants?.RydoraBlogNews1}
        limit={3}
      />
    </main>
  );
}
