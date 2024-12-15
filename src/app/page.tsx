import Hero from "@/components/home/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="min-h-screen pt-12 bg-background">
      <NavBar />
      <Hero />
    </main>
  );
}
