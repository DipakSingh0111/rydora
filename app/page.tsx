import { About, HowItWorks } from "@/components/about";
import { BlogSection } from "@/components/blog";
import { PopularCars } from "@/components/fleet";
import { Brands, Hero, Testimonials } from "@/components/home";
import { Services } from "@/components/services";
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
