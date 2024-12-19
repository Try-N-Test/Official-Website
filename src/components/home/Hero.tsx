"use client";

import Logo from "@/assets/logo.png";
import BackgroundImage from "@/assets/background-hero.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa6";
import NavBar from "@/components/NavBar";
import { V2, Outline } from "@/lib/fonts";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative mt-8 z-50">
        <NavBar />
      </div>
      {/* Right Logo - Absolutely Positioned */}
      <motion.div
        className="absolute top-12 -right-64 h-[700px] w-[700px] z-20 lg:block"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image src={Logo} alt="TNT Logo" fill className="object-contain" />
      </motion.div>

      {/* Animated Background Aurora Effects */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <svg className="h-full w-full">
          <defs>
            <radialGradient id="aurora1" cx="75%" cy="50%" r="70%">
              <stop offset="0%" stopColor="rgba(46, 183, 185, 0.3)" />
              <stop offset="100%" stopColor="rgba(46, 183, 185, 0)" />
            </radialGradient>
            <radialGradient id="aurora2" cx="25%" cy="70%" r="70%">
              <stop offset="0%" stopColor="rgba(46, 183, 185, 0.25)" />
              <stop offset="100%" stopColor="rgba(46, 183, 185, 0)" />
            </radialGradient>
          </defs>
          <motion.circle
            cx="75%"
            cy="50%"
            r="70%"
            fill="url(#aurora1)"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="25%"
            cy="70%"
            r="70%"
            fill="url(#aurora2)"
            animate={{
              scale: [1.4, 1, 1.4],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-9xl px-6 py-8">
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
              <motion.div
                className="text-center w-full mr-24" // Added w-full for full width centering
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full mx-auto">
                  <h1
                    className={`mb-8 text-6xl text-center font-bold tracking-wider text-white ${V2.className}`}
                  >
                    UNVEILING THE POWER
                    <br />
                    <div className="flex items-center justify-center gap-2">
                      OF <span className="text-primary-800">TNT</span>
                    </div>
                  </h1>

                  <div
                    className={`mb-12 w-full text-center mx-auto space-y-4 text-4xl font-medium ${Outline.className}`}
                  >
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-white">OUR</span>
                      <span className="text-primary-400">TEAM</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-white">OUR</span>
                      <span className="text-primary-400">PROJECTS</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <span className="text-white">OUR</span>
                      <span className="text-primary-400">FUTURE</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button className="bg-transparent hover:bg-primary-500/10 text-primary-400 border-primary-400 border rounded-full px-6 py-2 text-base">
                    <FaDiscord className="h-5 w-5" />
                    Join Us
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent hover:bg-white/10 hover:text-white text-white border-white border rounded-full px-6 py-2 text-base"
                  >
                    Learn More
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="h-2 bg-primary-400 w-[1100px] rounded-b-3xl mx-auto" />
      </div>
    </div>
  );
};

export default Hero;
