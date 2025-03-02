import { Metadata } from "next";
import Banner from "@/components/home/Banner";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";

export const metadata: Metadata = {
  title: "Try N Test Foundation | Open Source Community",
  description:
    "Join Try N Test Foundation - a vibrant open-source community dedicated to innovation, learning, and collaboration. Explore our projects and be part of our growing developer ecosystem.",
  keywords: [
    "Try N Test Foundation",
    "Open Source",
    "Developer Community",
    "Software Development",
    "Coding Projects",
    "Tech Innovation",
  ],
  openGraph: {
    title: "Try N Test Foundation | Open Source Community",
    description:
      "Join our vibrant open-source community dedicated to innovation, learning, and collaboration.",
    url: "https://tryntest.in",
    siteName: "Try N Test Foundation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Try N Test Foundation Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Try N Test Foundation",
    description:
      "Join our vibrant open-source community dedicated to innovation, learning, and collaboration.",
    creator: "@tryntest",
    images: ["/image.png"],
  },
  alternates: {
    canonical: "https://tryntest.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
import Teams from "@/components/home/Teams";
import Journey from "@/components/home/Journey";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Banner />
      <Projects />
      <Teams />
      <Journey />
    </main>
  );
}
