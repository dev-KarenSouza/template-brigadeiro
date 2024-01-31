"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const HeroSlider = () => {
  return (
    <div className="relative" id="home">
      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        autoplay
        loop
        modules={[Navigation, Autoplay]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block">
                <Image
                  src="/img/brigadeiros-banner.webp"
                  width={1920}
                  height={700}
                  alt="Brigadeiros"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <Image
                  src="/img/brigadeiros-banner.webp"
                  width={1920}
                  height={700}
                  alt="Brigadeiros"
                  className="relative object-cover h-full w-full"
                />
              </div>
              <section className="absolute w-full h-full flex flex-col justify-center place-content-center inset-0 bg-black/50">
                <div className="row">
                  <div className="container">
                    <h1
                      className={`font-black text-2xl sm:text-2xl lg:text-4xl xl:text-5xl text-white text-center ${
                        isActive && "animate-fade-down"
                      }`}
                    >
                      Paraíso
                    </h1>
                    <p
                      className={`text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-medium ${
                        isActive && "animate-fade-down"
                      }`}
                    >
                      Brigadeiros
                    </p>
                  </div>
                </div>
              </section>
            </div>
          )}
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default HeroSlider;
