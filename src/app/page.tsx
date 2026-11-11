import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Navbar } from "@/components/Navbar";
import { About, Contact, Process, Products, Stats } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <Products />
        <About />
        <Stats />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
