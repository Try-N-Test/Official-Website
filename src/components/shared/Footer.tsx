"use client";

import Logo from "@/assets/Logo Full.png";
import BackgroundFooter from "@/assets/background-Footer.png";
import Image from "next/image";
import { FaDiscord, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import BottomGradient from "@/assets/radial-gradient.png";
import FooterForm from "./FooterForm";
import { footerLinks } from "@/data/footer";

const Footer = () => {
  return (
    <div className="relative overflow-hidden bg-transparent">
      <Image
        src={BottomGradient}
        alt="gradient"
        className="mx-auto relative rotate-180 -bottom-1 md:-bottom-4 h-max w-96 md:w-full"
      />
      <div className="relative z-10 mx-auto px-6 md:py-3">
        <div className="relative rounded-[2.5rem] bg-transparent overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-primary-800 via-primary-400 to-primary-800 w-56 md:w-[75rem] rounded-t-3xl mx-auto" />
          <Image
            src={BackgroundFooter}
            alt="Background"
            fill
            className="object-cover"
          />

          {/* Content Wrapper */}
          <div className="relative px-8 py-12 z-30">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
              {/* Logo and Description */}
              <div className="space-y-4 col-span-1 md:col-span-2">
                <Image
                  src={Logo}
                  alt="TNT Logo"
                  className="h-36 w-auto mx-auto md:mx-0"
                />
                <p className="text-white/80 text-xl italic  text-center md:text-left md:ml-4">
                  Exploring, Innovating, Perfecting
                </p>
              </div>

              {/* Pages Links */}
              <div className="space-y-4 col-span-1 pt-4">
                <h3
                  className={`text-xl font-semibold text-center md:text-left text-white`}
                >
                  Pages
                </h3>
                <div className="flex flex-col space-y-2">
                  {footerLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white/80 text-center md:text-left hover:text-primary-400"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <FooterForm />
            </div>

            {/* Bottom Section - Now inside the background container */}
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-white/80 border-t border-white/10 pt-8">
              <p>© 2024 Try N Test Foundation, Inc. All rights reserved</p>
              <div className="flex gap-6 text-primary-600">
                <Link
                  href="https://linkedin.com"
                  className="hover:text-primary-400"
                >
                  <FaLinkedin className="size-8" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="hover:text-primary-400"
                >
                  <FaXTwitter className="size-8" />
                </Link>
                <Link
                  href="https://discord.gg/N8TnbbesBa"
                  className="hover:text-primary-400"
                >
                  <FaDiscord className="size-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
