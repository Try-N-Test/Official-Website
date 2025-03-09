"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { V2 } from "@/lib/fonts";
import { PinContainer } from "../ui/3d-pin";
import Dipesh from "@/assets/Team/Dipesh.jpg";
import Isheta from "@/assets/Team/Isheta.jpg";
import Rajat from "@/assets/Team/Rajat.jpg";
import Kislay from "@/assets/Team/Kislay.jpg";
import Ankit from "@/assets/Team/Ankit.jpg";

interface TeamMemberProps {
  image: StaticImageData;
  name: string;
  designation: string;
  href: string;
}

const TeamMember = ({ image, name, designation, href }: TeamMemberProps) => {
  const [role1, role2] = designation.split(" & ");

  return (
    <div className="inline-block">
      <PinContainer 
        containerClassName="!p-0 inline-block" 
        title={`${role2 || "Bhai akela hin kaafi h"}`} 
        href={href}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="relative flex flex-col justify-center items-center bg-gradient-to-b from-primary-700 to-primary-950/30 p-6 rounded-3xl w-[250px] group"
        >
          <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative w-[120px] h-[120px] group-hover:ring-2 group-hover:ring-cyan-500/50 rounded-full transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-teal-400/20">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover rounded-full w-full h-full"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="bg-gradient-to-r from-primary-800 to-primary-600 px-3 py-1 rounded-full">
                <p className="text-white text-sm">{role1}</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-white text-base font-medium">{name}</p>
          </div>
        </motion.div>
      </PinContainer>
    </div>
  );
};

const Teams = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      image: Dipesh,
      name: "Dipesh Ranjan",
      designation: "Team Lead & Full Stack Developer",
      href: "https://github.com/dipesh2508"
    },
    {
      image: Isheta,
      name: "Isheta Aggarwal",
      designation: "UI/UX Designer & Interface Developer",
      href: "https://github.com/Isheta20"
    },
    {
      image: Rajat,
      name: "Rajat Srivastava",
      designation: "Backend Developer & DSA Expert",
      href: "https://github.com/Rajat4279"
    },
    {
      image: Kislay,
      name: "Kislay Gupta",
      designation: "Mobile Developer & Front End Developer ",
      href: "https://github.com/kislay-gupta"
    },
    {
      image: Ankit,
      name: "Ankit Panigrahi",
      designation: "Devops Engineer & AI Enthusiast",
      href: "https://github.com/PanigrahiAnkit"
    },
  ];

  return (
    <section className="pt-8 md:pt-12 relative overflow-hidden max-w-7xl mx-auto" id="team">
      <div className="mx-auto px-4 relative z-10">
        <h2 className={`text-3xl lg:text-5xl text-white font-bold text-center lg:mb-10 ${V2.className}`}>
          Meet Our <span className="text-teal-400">Team</span>
        </h2>
        <div className="relative flex flex-col lg:block lg:min-h-[800px]">
          <svg className="absolute w-full h-full top-0 left-0 opacity-20 hidden lg:block">
            <line x1="50%" y1="10%" x2="25%" y2="35%" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" />
            <line x1="50%" y1="10%" x2="75%" y2="35%" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" />
            <line x1="25%" y1="35%" x2="30%" y2="80%" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" />
            <line x1="75%" y1="35%" x2="70%" y2="80%" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" />
            <line x1="30%" y1="80%" x2="70%" y2="80%" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" />
          </svg>

          {/* Top member (Team Lead) */}
          <div className="mx-auto mb-4 lg:mb-0 lg:absolute lg:top-[0%] lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <TeamMember {...teamMembers[0]} />
          </div>

          {/* Left middle member */}
          <div className="mx-auto mb-4 lg:mb-0 lg:absolute lg:top-[20%] lg:left-[10%]">
            <TeamMember {...teamMembers[1]} />
          </div>

          {/* Right middle member */}
          <div className="mx-auto mb-4 lg:mb-0 lg:absolute lg:top-[20%] lg:right-[10%]">
            <TeamMember {...teamMembers[2]} />
          </div>

          {/* Bottom left member */}
          <div className="mx-auto mb-4 lg:mb-0 lg:absolute lg:top-[50%] lg:left-[20%]">
            <TeamMember {...teamMembers[4]} />
          </div>

          {/* Bottom right member */}
          <div className="mx-auto mb-4 lg:mb-0 lg:absolute lg:top-[50%] lg:right-[20%]">
            <TeamMember {...teamMembers[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
