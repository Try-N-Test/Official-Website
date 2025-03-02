import { Metadata } from "next";
import Banner from "@/components/home/Banner";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";

export const metadata: Metadata = {
  title: "Try N Test Foundation | Expert Web Solutions & Developer Community",
  description:
    "Try N Test Foundation offers premium web development solutions and hosts a vibrant community of developers. Our expert team delivers custom websites, apps, and digital solutions while fostering collaboration and learning.",
  keywords: [
    "Try N Test Foundation",
    "Web Development",
    "Freelance Web Solutions",
    "Developer Community",
    "Custom Website Development",
    "Tech Experts",
    "Digital Solutions",
    "Web Design",
    "App Development",
    "Professional Web Services",
    "Coding Community",
    "Developer Network",
    "Web Experts India"
  ],
  openGraph: {
    title: "Try N Test Foundation | Expert Web Solutions & Developer Community",
    description:
      "Premium web development services and a thriving developer community. Get expert solutions for your digital needs while connecting with passionate tech professionals.",
    url: "https://tryntest.in",
    siteName: "Try N Test Foundation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://tryntest.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Try N Test Foundation - Web Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Try N Test Foundation | Expert Web Solutions",
    description:
      "Premium web development services and a thriving developer community. Expert solutions for all your digital needs.",
    creator: "@tryntest",
    images: ["https://tryntest.in/twitter-image.png"],
  },
  alternates: {
    canonical: "https://tryntest.in",
    languages: {
      'en-US': 'https://tryntest.in',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verify-code",
    yandex: "verify-code",
    yahoo: "verify-code",
    other: {
      me: ["support@tryntest.in"],
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
