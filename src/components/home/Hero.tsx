import Logo from "@/assets/logo.png";
import BackgroundImage from "@/assets/background-hero.png";
import BottomGradient from "@/assets/radial-gradient.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa6";
import NavBar from "@/components/shared/NavBar";
import { V2, Outline } from "@/lib/fonts";
import MotionDiv from "@/components/animations/MotionDiv";
// import AnimatedAurora from "../animations/AnimatedAurora";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Right Logo - Absolutely Positioned */}
      <MotionDiv
        className="hidden md:absolute -top-16 -right-64 h-[700px] w-[700px] z-20 lg:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image src={Logo} alt="TNT Logo" fill className="object-contain opacity-90" />
      </MotionDiv>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-9xl px-6 pt-16 md:pt-12">
        <div className="relative rounded-[2.5rem] bg-transparent overflow-hidden border-background/20 border-2 py-12">
          <Image
            src={BackgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-80"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/40" />

          {/* Content Wrapper */}
          <div className="relative px-8 py-8 z-30">
            <div className="flex flex-col items-center justify-between lg:flex-row">
              {/* Left Content */}
              <MotionDiv
                className="text-center w-full md:mr-24"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="w-full mx-auto">
                  <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h1 className={`mb-10 text-4xl md:text-7xl text-center font-bold tracking-wider text-white ${V2.className}`}>
                      WHERE INNOVATION
                      <br />
                      <div className="flex items-center justify-center gap-3 mt-2">
                        MEETS <span className="text-primary-800 relative">COMMUNITY</span>
                      </div>
                    </h1>
                  </MotionDiv>

                  <MotionDiv
                    className={`mb-14 w-full text-center mx-auto space-y-5 text-2xl md:text-4xl font-medium ${Outline.className}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-white">EXPERT</span>
                      <span className="text-primary-600">DEVELOPERS</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-white">IMPACTFUL</span>
                      <span className="text-primary-600">PROJECTS</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-white">LEARNING</span>
                      <span className="text-primary-600">TOGETHER</span>
                    </p>
                  </MotionDiv>
                </div>

                <MotionDiv
                  className="flex flex-wrap items-center justify-center gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link href={"https://discord.gg/N8TnbbesBa"}>
                    <Button
                      className="bg-primary-500/20 hover:bg-primary-500/30 text-primary-400 border-primary-400 border-2 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                      size={"lg"}
                    >
                      <FaDiscord className="h-5 w-5 mr-2" />
                      Join Community
                    </Button>
                  </Link>
                  <Link href="#about">
                    <Button
                      variant="outline"
                      className="bg-white/5 hover:bg-white/15 text-white border-white border-2 rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:text-white"
                      size={"lg"}
                    >
                      Work With Us
                    </Button>
                  </Link>
                </MotionDiv>
              </MotionDiv>
            </div>
          </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-primary-800 via-primary-400 to-primary-800 w-56 md:w-[75rem] rounded-b-3xl mx-auto blur-[1px]" />
        <Image
          src={BottomGradient}
          alt="gradient"
          className="mx-auto relative -top-2 -z-10 h-max w-96 md:w-full opacity-90"
        />
      </div>
    </div>
  );
};

export default Hero;
