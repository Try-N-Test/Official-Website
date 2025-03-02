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

import { Autoplay, Pagination } from "swiper/modules";

const journeyData = [
  {
    id: 1,
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    badge: "Hackathon",
    title: "Hackout 2023",
    subtitle: "Chikitsa Salah",
    description: "A platform for medical advice and consultation.",
    link: "#",
  },
  // Repeat 5 more times with different titles
  {
    id: 2,
    image:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    badge: "Workshop",
    title: "Tech Summit",
    subtitle: "AI Workshop",
    description: "Exploring the frontiers of artificial intelligence.",
    link: "#",
  },
  // ... Add 4 more similar objects
];

export function Journey() {
  return (
    <section className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-6">
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
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' +
                className +
                ' bg-white/20 mt-16 rounded-full w-4 h-4"></span>'
              );
            },
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden bg-[#0C1315]/40 border-primary-400/20 backdrop-blur-sm">
                  <ShineBorder shineColor={["#46D1D2", "#2DB7B9", "#196667"]} />
                  <CardHeader>
                    <div className="flex justify-between">
                      <div>
                        <Image
                          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                          alt="alt"
                          width={100}
                          height={100}
                          className="w-32 h-32 rounded-full"
                        />
                      </div>
                      <div>
                        <Link className="" href="#">
                          <MoveUpRight className="border-2 border-primary-400 rounded-full size-12 p-1 text-primary-600" />
                        </Link>
                      </div>
                    </div>

                    <Badge
                      variant="outline"
                      className="w-max mt-8 rounded-full text-primary-600 border-primary-600"
                    >
                      location
                    </Badge>
                    <CardTitle className="text-white text-2xl font-medium">
                      Hackathon {item}
                    </CardTitle>
                    <CardDescription className="text-primary-400 text-base">
                      organized
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="text-white/60">
                    <p>
                      lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Journey;
