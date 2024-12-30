"use client";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-creative';

import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import Image from "next/image";
import dev from "../../assets/developer_work.jpg";
import team from "../../assets/about us.png";

import '../../styles/style.css';

const Slider = () => {
  return (
    <Swiper
    grabCursor={true}
    effect={'creative'}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }}
      className="mySwiper text-white w-[30vw] h-80"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation, EffectCreative]}
    >
      
      <SwiperSlide className="rounded-xl">
        <Image
          src={team}
          className="object-cover"
          fill
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Image
          src={dev}
          className="object-cover"
          fill
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide className="rounded-xl">
        <Image
          src={team}
          className="object-cover"
          fill
          alt="Picture of the author"
        />
      </SwiperSlide>
      
    </Swiper>
  );
};

export default Slider;
