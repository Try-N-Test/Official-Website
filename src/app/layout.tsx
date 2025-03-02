import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const monaSans = localFont({
  src: "./fonts/Mona-Sans.ttf",
  variable: "--font-mona-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tryntest.in"),
  title: {
    default:
      "Try N Test Foundation | Expert Web Solutions & Developer Community",
    template: "%s | Try N Test Foundation",
  },
  description:
    "Premium web development services by an expert team. We build custom websites, apps and digital solutions while nurturing a vibrant developer community.",
  keywords: [
    "Web Development",
    "Web Design",
    "Freelance",
    "Developer Community",
    "Digital Solutions",
    "Expert Web Team",
    "Custom Websites",
  ],
  authors: [{ name: "Try N Test Foundation", url: "https://tryntest.in" }],
  creator: "Try N Test Foundation",
  publisher: "Try N Test Foundation",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
    other: {
      rel: "android-chrome-192x192",
      url: "/icons/android-chrome-192x192.png",
    },
  },
  manifest: "/manifest.json",
  applicationName: "Try N Test Foundation",
  appleWebApp: {
    capable: true,
    title: "Try N Test Foundation",
    statusBarStyle: "black-translucent",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
  },
  themeColor: "#2DB7B9",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/Mona-Sans.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* Android Chrome Icons */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/icons/android-chrome-512x512.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Try N Test Foundation",
              url: "https://tryntest.in",
              logo: "https://tryntest.in/_next/static/media/Logo%20Full.873bf192.png",
              sameAs: ["https://linkedin.com/company/tryntest"],
            }),
          }}
        />
      </head>
      <body className={`${monaSans.className} antialiased`}>
        <NavBar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
