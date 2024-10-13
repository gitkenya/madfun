"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineHotel, MdPersonOutline } from "react-icons/md";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function Hotels(props: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const hotels = [
    {
      id: "1",
      beds: "1",
      guests: "1",
      price: "70,000/ Night",
      name: "Trivia Hotel",
      photo: "/assets/img/hotels/hotel-1.jpg",
    },
    {
      id: "2",
      beds: "1",
      guests: "1",
      price: "70,000/ Night",
      name: "Trivia Hotel",
      photo: "/assets/img/hotels/hotel-2.jpg",
    },
    {
      id: "3",
      beds: "1",
      guests: "1",
      price: "70,000/ Night",
      name: "Trivia Hotel",
      photo: "/assets/img/hotels/hotel-3.jpg",
    },
    {
      id: "4",
      beds: "1",
      guests: "1",
      price: "70,000/ Night",
      name: "Trivia Hotel",
      photo: "/assets/img/hotels/hotel-4.jpg",
    },
    {
      id: "5",
      beds: "1",
      guests: "1",
      price: "70,000/ Night",
      name: "Trivia Hotel",
      photo: "/assets/img/hotels/hotel-5.jpg",
    },
    {
      id: "6",
      beds: "1",
      guests: "1",
      price: "70,000/ Night",
      name: "Trivia Hotel",
      photo: "/assets/img/hotels/hotel-6.jpg",
    },
    {
      id: "7",
      beds: "1",
      guests: "1",
      price: "70,000/ Night",
      name: "Trivia Hotel",
      photo: "/assets/img/hotels/hotel-7.jpg",
    },
    {
      id: "8",
      beds: "1",
      guests: "1",
      price: "70,000/ Night",
      name: "Trivia Hotel",
      photo: "/assets/img/hotels/hotel-8.jpg",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 bg-slate-100">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4 space-y-6 mt-2">
        <div className="w-full flex flex-col gap-3 items-center justify-center">
          <h2 className="text-lg sm:text-3xl font-bold uppercase sm:max-w-lg text-center leading">
            Experience Luxury & Comfort
          </h2>
          <h2 className="text-lg sm:text-3xl font-bold uppercase sm:max-w-lg text-center leading">
            in our handpicked stays
          </h2>
        </div>
        <div className="w-full px-4">
          <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <TabList
              className={`flex flex-row justify-center text-slate-500 text-sm sm:text-base overflow-x-auto`}
            >
              <Tab className="transition-all duration-300 px-5 py-2 uppercase border-b border-slate-300 data-[selected]:text-slate-800 data-[selected]:border-slate-700 data-[hover]:text-slate-700 data-[hover]:border-slate-700">
                All
              </Tab>
              <Tab className="transition-all duration-300 px-5 py-2 uppercase border-b border-slate-300 data-[selected]:border-slate-700 data-[selected]:text-slate-800 data-[hover]:text-slate-700 data-[hover]:border-slate-700">
                Hotels
              </Tab>
              <Tab className="transition-all duration-300 px-5 py-2 uppercase border-b border-slate-300 data-[selected]:border-slate-700 data-[selected]:text-slate-800 data-[hover]:text-slate-700 data-[hover]:border-slate-700">
                Resorts
              </Tab>
              <Tab className="transition-all duration-300 px-5 py-2 uppercase border-b border-slate-300 data-[selected]:border-slate-700 data-[selected]:text-slate-800 data-[hover]:text-slate-700 data-[hover]:border-slate-700">
                Vilas
              </Tab>
              <Tab className="transition-all duration-300 px-5 py-2 uppercase border-b border-slate-300 data-[selected]:border-slate-700 data-[selected]:text-slate-800 data-[hover]:text-slate-700 data-[hover]:border-slate-700">
                Apartments
              </Tab>
            </TabList>
            <TabPanels className={`pt-4`}>
              <TabPanel>
                <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-5 sm:gap-8">
                  {hotels?.map((hotel: any) => (
                    <div key={hotel.id} className="grid">
                      <div className="relative rounded-lg flex flex-col justify-between gap-4">
                        <div className="relative ">
                          <Link
                            className="relative flex w-full h-72 sm:h-96"
                            href={`/`}
                          >
                            <Image
                              className="rounded-lg object-cover"
                              src={hotel.photo}
                              fill
                              alt={hotel.name}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </Link>
                        </div>
                        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-slate-900/60 rounded-lg flex flex-col justify-end">
                          <div className="flex flex-col gap-1.5 px-5 py-3">
                            <div className="font-semibold text-white sm:text-lg">
                              {hotel.name}
                            </div>
                            <div className="flex flex-row items-end gap-3 text-white text-xs font-normal">
                              <div className="flex flex-row items-center gap-1.5">
                                <span>
                                  <MdPersonOutline size={18} />
                                </span>
                                <span>{hotel.guests} Guest</span>
                              </div>
                              <div className="flex flex-row items-center gap-1.5">
                                <span>
                                  <MdOutlineHotel size={18} />
                                </span>
                                <span>{hotel.beds} Bed</span>
                              </div>
                              <div className="flex flex-row items-center gap-1.5">
                                <span>Ksh.</span>
                                <span>{hotel.price}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>Hotels Data Content</TabPanel>
              <TabPanel>Resorts Data Content</TabPanel>
              <TabPanel>Vilas Data Content</TabPanel>
              <TabPanel>Apartments Data Content</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
