"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/effect-fade";
import { IoChevronForwardOutline, IoVideocam } from "react-icons/io5";
import Link from "next/link";
import LivestreamModal from "./modules/livestream";
export default function Streams() {
  const slides = [
    {
      id: "1",
      name: "",
      photo: "/assets/img/streams/streams-1.jpg",
    },
    {
      id: "2",
      name: "",
      photo: "/assets/img/streams/streams-2.jpg",
    },
    {
      id: "3",
      name: "",
      photo: "/assets/img/streams/streams-3.jpg",
    },
  ];
  return (
    <section className="relative w-full h-[200px] sm:h-96 bg-slate-800">
      <div className="absolute flex flex-col gap-5 items-center justify-center w-full h-full top-0 left-0 z-20 bg-gradient-to-b from-slate-900/80 via-slate-900/20 to-slate-900/80">
        <div className="flex flex-col items-center justify-center font-poppins">
          <h2 className="font-extrabold text-white text-lg sm:text-4xl uppercase">
            Live Stream Events
          </h2>
          <h2 className="font-extrabold text-white text-lg sm:text-4xl uppercase">
            You Can't miss
          </h2>
        </div>
        <LivestreamModal />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-slate-900/50">
          <div className="w-full flex flex-row justify-between items-center py-2 sm:py-4 max-w-[90rem] mx-auto text-white text-sm sm:text-lg">
            <div className="flex flex-row items-center gap-3">
              <button
                type="button"
                className="flex flex-row items-center gap-1 bg-red-600 rounded text-xs font-medium px-2 py-1"
              >
                <span>
                  <IoVideocam size={18} />
                </span>
                <span className="">Live</span>
              </button>
              <span className="font-semibold">Every Brilliant thing</span>
            </div>
            <Link
              href="/"
              className="text-sm font-normal flex flex-row items-center gap-2"
            >
              Buy to watch <IoChevronForwardOutline size={18} />
            </Link>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        speed={1000}
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
    </section>
  );
}
