"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { motion } from "motion/react";
import { V2 } from "@/lib/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import XtremeLogo from '@/assets/Competitions/xtreme.png';
import CISLogo from '@/assets/Competitions/cis.png';
import GOCLogo from '@/assets/Competitions/goc.webp';
import HackQuestLogo from '@/assets/Competitions/hackquest logo.webp';
import HackWithIndiaLogo from '@/assets/Competitions/hack with india.jpeg';
import DUhacks from '@/assets/Competitions/duhacks.png';

import { Autoplay } from "swiper/modules";

const journeyData = [
  {
    id: 3,
    logo: GOCLogo,
    location: "Mohali",
    title: "SheBoss",
    organiser: "IEEE WIE CUSB",
    description: "Finalist in this women-first ideathon event that focused on empowering female innovators with creative solutions.",
    link: "https://edu.ieee.org/in-cu/goc/"
  },
  {
    id: 1,
    logo: XtremeLogo,
    location: "Virtual",
    title: "Xtreme 18.0",
    organiser: "IEEE",
    description: "University Rank 1, India Rank 25, Global Rank 158. An intense 24-hour programming competition.",
    link: "https://ieeextreme.org/ieeextreme-18-0-ranking/"
  },
  {
    id: 2,
    logo: CISLogo,
    location: "Mohali",
    title: "What's Your Opinion?",
    organiser: "IEEE CIS CUSB",
    description: "Secured Rank 1 in this ideathon. Developed a solution focused on efficient management and utilization of surplus food resources.",
    link: "https://www.linkedin.com/posts/ieee-computational-intelligence-society-cusb_bethechangewithieeecusb-explorewithieeeciscusb-activity-7068453024830042112-2_f9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADePLdEBHhU1dy1uZ6YWVNwDwx_KPGgdYbk"
  },

  {
    id: 4,
    logo: HackQuestLogo,
    location: "Virtual",
    title: "Hackquest",
    organiser: "IEEE Delhi Section SAC",
    description: "Finalist in this hackathon where we built innovative technical solutions addressing challenges in emerging technology domains.",
    link: "https://hackquest.in"
  },
  {
    id: 5,
    logo: HackWithIndiaLogo,
    location: "Chandigarh",
    title: "Hack With Chandigarh",
    organiser: "Hack With India",
    description: "Finalist in this hackathon where we designed and implemented a emergency medical solution for problems.",
    link: "https://vision.hack2skill.com/event/hackwithchandigarh"
  },
  {
    id: 6,
    logo: DUhacks,
    location: "Virtual",
    title: "DUHacks 3.0",
    organiser: "GDSC",
    description: "Finalist in this hackathon where we developed innovative software solutions for collaboration between different learners and students.",
    link: "https://duhacks.tech/"
  },
];

export function Journey() {
  return (
    <section className="bg-background py-24 select-auto">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-6xl text-center font-bold mb-16 ${V2.className} `}
        >
          <span
            className={` text-white font-bold text-center lg:mb-10 ${V2.className}`}
          >
            Our <span className="text-teal-400">Journey</span>
          </span>
        </motion.h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {journeyData.map((item, index) => (
            <SwiperSlide key={item.id} className="select-auto p-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="transform-gpu"
              >
                <div className="group">
                  <Card className="relative overflow-hidden bg-[#0C1315]/40 border-primary-400/20 backdrop-blur-sm transition-all duration-300 h-[22rem] select-auto transform-gpu group-hover:scale-105">
                    <ShineBorder className="!z-10" shineColor={["#46D1D2", "#2DB7B9", "#196667"]} />
                    <div className="relative z-[1]">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col gap-4">
                            <Image
                              src={item.logo}
                              alt={item.title}
                              width={100}
                              height={100}
                              className="w-24 h-24 rounded-xl object-cover"
                            />
                            <Badge
                              variant="outline"
                              className="w-max rounded-full text-primary-600 border-primary-600"
                            >
                              {item.location}
                            </Badge>
                          </div>
                          <Link 
                            href={item.link}
                            className="group hover:scale-105 transition-all duration-300"
                          >
                            <MoveUpRight className="border-2 border-primary-400 rounded-full size-12 p-1 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300" />
                          </Link>
                        </div>

                        <div className="space-y-2 mt-6">
                          <CardTitle className="text-white text-2xl font-medium">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-primary-400 text-base">
                            {item.organiser}
                          </CardDescription>
                        </div>
                      </CardHeader>

                      <CardContent className="text-white/80 select-text">
                        <p className="line-clamp-3 cursor-text">
                          {item.description}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Journey;
