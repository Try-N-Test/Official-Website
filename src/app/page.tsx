import Footer from "@/components/Footer";
import Banner from "@/components/home/Banner";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Banner />
      <Projects />
      <Footer />
    </main>
  );
}
