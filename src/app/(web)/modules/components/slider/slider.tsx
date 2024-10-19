"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/effect-fade";
import SearchBar from "./modules/search";
import { IoChevronForwardOutline, IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
export default function Slider(props: any) {
  const { flight_types, location_types, flight_stops, flight_classes } = props;
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
    <section className="relative w-full bg-slate-100">
      <div className="relative w-full h-[300px] sm:h-[calc(100vh-200px)] bg-slate-800 z-20">
        <div className="absolute flex flex-col items-center justify-center w-full h-full top-0 left-0 z-20 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/10">
          <div className="w-full px-4 max-w-[85rem] mx-auto hidden sm:flex flex-col items-center justify-end sm:justify-center">
            <div className="block w-full max-w-[70rem] rounded-lg text-slate-600 ">
              <SearchBar
                flight_types={flight_types}
                location_types={location_types}
                flight_stops={flight_stops}
                flight_classes={flight_classes}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900/50">
            <div className="w-full flex flex-row justify-between items-center pt-12 pb-20 px-4 py-2 sm:py-4 max-w-[80rem] mx-auto text-white text-sm sm:text-base">
              <div className="flex flex-row items-center gap-3 font-poppins">
                <span>
                  <IoLocationOutline size={20} />
                </span>
                <span className="font-semibold">Malaysia</span>
              </div>
              <Link
                href="/travel/malaysia"
                className="transition-all duration-300 font-medium flex flex-row items-center gap-2 hover:text-yellow-400"
              >
                Book now <IoChevronForwardOutline size={18} />
              </Link>
            </div>
          </div>
        </div>

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

      {/* Bottom div to overlap the top div */}
      <div className="relative z-50 -mt-12 w-[94%] mx-auto rounded sm:hidden">
        <div className="w-full px-4 max-w-[85rem] mx-auto flex bg-white rounded-lg shadow flex-col items-center justify-end sm:justify-center">
          <div className="block w-full max-w-[70rem] rounded-lg text-slate-600">
            <SearchBar
              flight_types={flight_types}
              location_types={location_types}
              flight_stops={flight_stops}
              flight_classes={flight_classes}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
