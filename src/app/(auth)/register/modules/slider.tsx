"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/effect-fade";
export default function Slider() {
  const slides = [
    {
      id: "0",
      name: "",
      photo: "/assets/img/auth/slider/slide-0.webp",
    },
    {
      id: "1",
      name: "",
      photo: "/assets/img/auth/slider/slide-6.jpg",
    },
    {
      id: "2",
      name: "",
      photo: "/assets/img/auth/slider/slide-2.jpg",
    },
    {
      id: "3",
      name: "",
      photo: "/assets/img/auth/slider/slide-3.jpg",
    },
    {
      id: "4",
      name: "",
      photo: "/assets/img/auth/slider/slide-4.jpg",
    },
  ];
  return (
    <div className="relative w-full h-screen bg-slate-800">
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
                sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1200px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
