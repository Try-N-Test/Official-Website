"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import { V2 } from "@/lib/fonts";
import gradientLeft from "@/assets/radial-gradient.png";
interface TeamMemberProps {
  imageUrl: string;
  name: string;
  designation: string;
}

const TeamMember = ({ imageUrl, name, designation }: TeamMemberProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="bg-gradient-to-b from-primary-700 to-primary-950 backdrop-blur-sm border-primary-400/20">
        <CardContent className="p-4">
          <div className="relative">
            <div className="aspect-square w-full overflow-hidden rounded-full border-2 border-primary-400/20">
              <Image
                src={imageUrl}
                alt={name}
                width={319}
                height={319}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="inline-flex rounded-full bg-gradient-to-r from-primary-800 to-primary-600 px-3 py-1 text-sm text-white">
                {designation}
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-lg font-medium text-white">{name}</h3>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Teams = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      imageUrl: "/path/to/image1.jpg",
      name: "Team Member 1",
      designation: "Designation 1",
    },
    {
      imageUrl: "/path/to/image1.jpg",
      name: "Team Member 1",
      designation: "Designation 1",
    },
    {
      imageUrl: "/path/to/image1.jpg",
      name: "Team Member 1",
      designation: "Designation 1",
    },
    {
      imageUrl: "/path/to/image1.jpg",
      name: "Team Member 1",
      designation: "Designation 1",
    },
    {
      imageUrl: "/path/to/image1.jpg",
      name: "Team Member 1",
      designation: "Designation 1",
    },

    // Add more team members as needed
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Left decorative image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-40 z-50">
        <Image
          src={gradientLeft}
          alt="Decorative gradient"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>

      {/* Right decorative image */}
      <div className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 opacity-40 z-0">
        <Image
          src={gradientLeft}
          alt="Decorative gradient"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          className={`text-4xl md:text-6xl text-white font-bold mb-16 text-center ${V2.className}`}
        >
          Meet Our <span className="text-primary-400">Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-stretch lg:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
