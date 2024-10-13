"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/effect-fade";
export default function Slider() {
  const slides = [
    {
      id: "1",
      name: "",
      photo: "/assets/img/slider/slide-1.jpg",
    },
    {
      id: "2",
      name: "",
      photo: "/assets/img/slider/maldives-island.jpg",
    },
    {
      id: "3",
      name: "",
      photo: "/assets/img/slider/hero.jpg",
    },
    {
      id: "4",
      name: "",
      photo: "/assets/img/slider/hero-4.jpg",
    },
  ];
  return (
    <section className="relative w-full h-screen sm:h-[calc(100vh-200px)] bg-slate-800">
      <div className="absolute w-full h-full top-0 left-0 z-20 bg-gradient-to-b from-slate-900/60 via-slate-900/10 to-slate-900/10"></div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        speed={2000}
        className="h-full"
      >
        {slides.map((slide: any) => (
          <SwiperSlide key={slide.id} className="">
            <div className="relative w-full h-full bg-gradient-to-b from-slate-800 to-slate-600">
              <Image
                className="object-cover"
                src={slide.photo}
                fill={true}
                priority
                alt="Madfun"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
