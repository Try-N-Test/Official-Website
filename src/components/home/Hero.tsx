import Logo from "@/assets/logo.png";
import BackgroundImage from "@/assets/background-hero.png";
import BottomGradient from '@/assets/radial-gradient.png'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa6";
import NavBar from "@/components/NavBar";
import { V2, Outline } from "@/lib/fonts";
import MotionDiv from "@/components/animations/MotionDiv";
import AnimatedAurora from "../animations/AnimatedAurora";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative mt-8 z-50">
        <NavBar />
      </div>
      {/* Right Logo - Absolutely Positioned */}
      <MotionDiv
        className="hidden md:absolute top-12 -right-64 h-[700px] w-[700px] z-20 lg:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image src={Logo} alt="TNT Logo" fill className="object-contain" />
      </MotionDiv>

      {/* Animated Background Aurora Effects */}
      <AnimatedAurora />


      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-9xl px-6 py-16 md:py-8">
        <div className="relative rounded-[2.5rem] bg-transparent overflow-hidden border-background/20 border-2 py-8">
          <Image
            src={BackgroundImage}
            alt="Background"
            fill
            className="object-cover"
          />

          {/* Content Wrapper */}
          <div className="relative px-8 py-8 z-30">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              {/* Left Content */}
              <MotionDiv
                className="text-center w-full md:mr-24" // Added w-full for full width centering
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full mx-auto">
                  <h1
                    className={`mb-8 text-3xl md:text-6xl text-center font-bold tracking-wider text-white ${V2.className}`}
                  >
                    UNVEILING THE POWER
                    <br />
                    <div className="flex items-center justify-center gap-2">
                      OF <span className="text-primary-800">TNT</span>
                    </div>
                  </h1>

                  <div
                    className={`mb-12 w-full text-center mx-auto space-y-4 text-2xl md:text-4xl font-medium ${Outline.className}`}
                  >
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-white">OUR</span>
                      <span className="text-primary-600">TEAM</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-white">OUR</span>
                      <span className="text-primary-600">PROJECTS</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-white">OUR</span>
                      <span className="text-primary-600">FUTURE</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href={"https://discord.gg/N8TnbbesBa"}>
                  <Button className="bg-transparent hover:bg-primary-500/10 text-primary-400 border-primary-400 border rounded-full px-6 py-2 text-base" size={"lg"}>
                    <FaDiscord className="h-5 w-5" />
                    Join Us
                  </Button>
                  </Link>
                  <Link href="#about">
                  <Button
                    variant="outline"
                    className="bg-transparent hover:bg-white/10 hover:text-white text-white border-white border rounded-full px-6 py-2 text-base"  size={"lg"}
                    >
                    Learn More
                  </Button>
                    </Link>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
        <div className="h-2 bg-primary-400 w-56 md:w-[75rem] rounded-b-3xl mx-auto" />
            <Image src={BottomGradient} alt="gradient" className="mx-auto relative -top-2 -z-10 h-max w-96 md:w-full" />
      </div>
    </div>
  );
};

export default Hero;
