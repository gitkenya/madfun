"use client";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function Gallery(props: any) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const slides = [
    {
      id: "1",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-1.jpg",
    },
    {
      id: "2",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-2.jpg",
    },
    {
      id: "3",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-3.jpg",
    },
    {
      id: "4",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-4.jpg",
    },
    {
      id: "5",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-5.jpg",
    },
    {
      id: "6",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-6.jpg",
    },
    {
      id: "7",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-7.jpg",
    },
    {
      id: "8",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-8.jpg",
    },
    {
      id: "9",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-9.jpg",
    },
    {
      id: "10",
      name: "",
      photo: "/assets/img/destinations/gallery/malaysia/slide-10.jpg",
    },
  ];
  return (
    <div className="h-48 relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        loop={true}
        effect="fade"
        speed={2000}
        className="h-full"
        onInit={(swiper: any) => {
          // Assign buttons to navigation after Swiper is initialized
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {slides.map((slide: any) => (
          <SwiperSlide key={slide.id} className="">
            <div className="relative h-full">
              <Image
                className="object-cover rounded-xl"
                src={slide.photo}
                fill={true}
                priority
                alt="Madfun"
                sizes="(max-width: 768px) 600px, (max-width: 1200px) 600px, 600px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button
          ref={prevRef}
          className="transition-all duration-300 absolute w-10 h-10 flex flex-row items-center justify-center left-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-800 p-2 rounded-full"
        >
          <IoChevronBack />
        </button>
        <button
          ref={nextRef}
          className="transition-all duration-300 absolute w-10 h-10 flex flex-row items-center justify-center right-1 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-800 p-2 rounded-full"
        >
          <IoChevronForward />
        </button>
      </div>
    </div>
  );
}
