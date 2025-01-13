"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { V2 } from "@/lib/fonts";
import { PinContainer } from "../ui/3d-pin";

interface TeamMemberProps {
  imageUrl: string;
  name: string;
  designation: string;
  href: string;
}

const TeamMember = ({ imageUrl, name, designation, href }: TeamMemberProps) => {
  const [role1, role2] = designation.split(" & ");
  
  return (
    <PinContainer containerClassName="m-0 "  title={`Also: ${role2 || "Bhai akela hin kaafi h" }`} href={href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        className="relative flex flex-col justify-center items-center bg-gradient-to-b mt-0  from-primary-700 to-primary-950/30 p-6 rounded-3xl w-[250px] group"
      >
        <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative w-[120px] h-[120px] group-hover:ring-2 group-hover:ring-cyan-500/50 rounded-full transition-all duration-300">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-teal-400/20">
            <Image
              src={imageUrl}
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
  );
};

const Teams = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      imageUrl: "/image.png",
      name: "Dipesh Ranjan",
      designation: "Team Lead & Full Stack Developer",
      href: "https://github.com/dipesh2508"
    },
    {
      imageUrl: "/image.png",
      name: "Isheta Aggarwal",
      designation: "UI/UX Designer & Content Writer",
      href: "https://github.com/Isheta20"
    },
    {
      imageUrl: "/image.png",
      name: "Rajat Srivastava",
      designation: "Backend Developer & DSA Expert",
      href: "https://github.com/Rajat4279"
    },
    {
      imageUrl: "/image.png",
      name: "Kislay Gupta",
      designation: "Front End Developer & Mobile Developer",
      href: "https://github.com/kislay-gupta"
    },
    {
      imageUrl: "/image.png",
      name: "Ankit Panigrahi",
      designation: "Devops Engineer & ML Programmer",
      href: "https://github.com/PanigrahiAnkit"
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-5xl text-white font-bold text-center mb-10 ${V2.className}`}>
          Meet Our <span className="text-teal-400">Team</span>
        </h2>
        <div className="relative flex justify-center items-start min-h-[700px]">
          <svg className="absolute w-full h-full top-0 left-0" viewBox="0 0 1000 1000">
            <line x1="500" y1="200" x2="300" y2="400" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" />
            <line x1="500" y1="200" x2="700" y2="400" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" />
            <line x1="300" y1="400" x2="200" y2="600" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" />
            <line x1="700" y1="400" x2="800" y2="600" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" />
            <line x1="200" y1="600" x2="800" y2="600" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" />
          </svg>

          {/* Top member (Team Lead) */}
          <div className="absolute" style={{ top: '-5%', left: '50%', transform: 'translateX(-50%)' }}>
            <TeamMember {...teamMembers[0]} />
          </div>

          {/* Left middle member */}
          <div className="absolute" style={{ top: '20%', left: '20%' }}>
            <TeamMember {...teamMembers[1]} />
          </div>

          {/* Right middle member */}
          <div className="absolute" style={{ top: '20%', right: '20%' }}>
            <TeamMember {...teamMembers[2]} />
          </div>

          {/* Bottom left member */}
          <div className="absolute" style={{ bottom: '0%', left: '24%' }}>
            <TeamMember {...teamMembers[4]} />
          </div>

          {/* Bottom right member */}
          <div className="absolute" style={{ bottom: '0%', right: '24%' }}>
            <TeamMember {...teamMembers[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
