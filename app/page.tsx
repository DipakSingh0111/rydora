import About from "@/components/about/About";
import HowItWorks from "@/components/about/HowItWorks";
import BlogSection from "@/components/blog/BlogSection";
import PopularCars from "@/components/fleet/PopularCars";
import Brands from "@/components/home/Brands";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import Services from "@/components/services/Services";
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
      <Testimonials
        data={sections.Testimonials?.variants?.RydoraTestimonials1}
      />
      <Brands data={sections.Brands?.variants?.RydoraBrands1} />

      <BlogSection
        data={sections.BlogNews?.variants?.RydoraBlogNews1}
        limit={3}
      />
    </main>
  );
}
