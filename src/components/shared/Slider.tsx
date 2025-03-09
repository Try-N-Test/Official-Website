"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import Image from "next/image";
import about1 from "@/assets/About/about1.jpg";
import about2 from "@/assets/About/about2.jpg";

import "@/styles/style.css";

const Slider = () => {
  // Array of images to map through
  const images = [
    { src: about1, alt: "About image 1" },
    { src: about2, alt: "About image 2" },
  ];

  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      className="mySwiper text-white w-[30vw]"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000, // Increased from 2500 to 5000 ms
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation, EffectCreative]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="rounded-xl">
          <Image
            src={image.src}
            className="object-cover"
            fill
            alt={image.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
