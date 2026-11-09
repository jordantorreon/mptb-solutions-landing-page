import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Navbar } from "@/components/Navbar";
import { About, Contact, Process, Services, Stats } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <Services />
        <About />
        <Stats />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
