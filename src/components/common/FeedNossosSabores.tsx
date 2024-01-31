"use client";
import Image from "next/image";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const FeedNossosSabores = () => {
  return (
    <div className="relative" id="nossos-sabores">
      <div className="absolute z-0 w-full h-3/5 bg-brand-150 -top-14"></div>
      <section className="relative py-10">
        <div className="row">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-3 text-brand-500">
				Nossos sabores
			</h1>
            <p className="text-center text-lg mb-6 text-faiz-100">
              Lorem
            </p>
            <div className="relative">
              <Swiper
                navigation={{
                  nextEl: ".next_produtos",
                  prevEl: ".prev_produtos",
                }}
                autoplay
                loop
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                className="mySwiper relative"
                breakpoints={{
                    // When window width is >= 640px (sm)
                    640: {
                      slidesPerView: 1,
                    },
                    // When window width is >= 768px (md)
                    768: {
                        slidesPerView: 2,
                      },
                    // When window width is >= 1024px (lg)
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
              >
                <SwiperSlide className="py-3">
                  <div className="max-w-xs mx-auto overflow-hidden hover:-translate-y-2 transition duration-500 group">
                    <p className="text-2xl text-center justify-center text-brand-300 font-semibold"> 
                        Brigadeiro
                    </p>
                    <Image
                      src="/img/brigadeiro.png" 
                      alt="Brigadeiro" 
                      width={449}
                      height={449}
                    />
                    
                  </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                  <div className="max-w-xs mx-auto overflow-hidden hover:-translate-y-2 transition duration-500 group">
                    <p className="text-2xl text-center justify-center text-brand-300 font-semibold"> 
                        Brigadeiro
                    </p>
                    <Image
                      src="/img/brigadeiro.png" 
                      alt="Brigadeiro" 
                      width={449}
                      height={449}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                  <div className="max-w-xs mx-auto overflow-hidden hover:-translate-y-2 transition duration-500 group">
                    <p className="text-2xl text-center justify-center text-brand-300 font-semibold"> 
                        Brigadeiro
                    </p>
                    <Image
                      src="/img/brigadeiro.png" 
                      alt="Brigadeiro" 
                      width={449}
                      height={449}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                  <div className="max-w-xs mx-auto overflow-hidden hover:-translate-y-2 transition duration-500 group">
                    <p className="text-2xl text-center justify-center text-brand-300 font-semibold"> 
                        Brigadeiro
                    </p>
                    <Image
                      src="/img/brigadeiro.png" 
                      alt="Brigadeiro" 
                      width={449}
                      height={449}
                    />
                    
                  </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                  <div className="max-w-xs mx-auto overflow-hidden hover:-translate-y-2 transition duration-500 group">
                    <p className="text-2xl text-center justify-center text-brand-300 font-semibold"> 
                        Brigadeiro
                    </p>
                    <Image
                      src="/img/brigadeiro.png" 
                      alt="Brigadeiro" 
                      width={449}
                      height={449}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="py-3">
                  <div className="max-w-xs mx-auto overflow-hidden hover:-translate-y-2 transition duration-500 group">
                    <p className="text-2xl text-center justify-center text-brand-300 font-semibold"> 
                        Brigadeiro
                    </p>
                    <Image
                      src="/img/brigadeiro.png" 
                      alt="Brigadeiro" 
                      width={449}
                      height={449}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>

                <div className="absolute h-full w-full flex items-center place-content-between inset-0">
                    <div className="prev_produtos text-5xl text-brand-300 cursor-pointer relative z-10 md:-ml-8 -ml-5">
                        <RxCaretLeft />
                    </div>
                    <div className="next_produtos text-5xl text-brand-300 cursor-pointer relative z-10 md:-mr-8 -mr-5">
                        <RxCaretRight />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedNossosSabores;
