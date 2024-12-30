import Footer from "@/components/Footer";
import Banner from "@/components/home/Banner";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Banner />
      <Projects />
      <Footer />
    </main>
  );
}
