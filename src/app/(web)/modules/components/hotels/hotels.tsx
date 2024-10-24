"use client";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineHotel, MdPersonOutline } from "react-icons/md";
import { hotels } from "@/utils/data/hotels";

export default function Hotels(props: any) {
  return (
    <section className="w-full py-8 sm:py-12 bg-slate-100">
      <div className="mx-auto max-w-[85rem] px-2 sm:px-0 space-y-6 mt-2">
        <div className="w-full flex flex-col gap-3 items-center justify-center font-poppins">
          <h2 className="text-lg text-slate-800 sm:text-3xl font-bold uppercase sm:max-w-lg text-center leading">
            Our Top Picks
          </h2>
        </div>
        <div className="w-full px-2 sm:px-0">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-8">
            {hotels?.map((hotel: any) => (
              <div key={hotel.id} className="grid">
                <div className="relative rounded-lg flex flex-col justify-between gap-4">
                  <Link
                    className="relative flex w-full h-48 sm:h-[24rem] bg-cover bg-center rounded-lg"
                    href={`/hotels/${hotel.slug}`}
                    style={{
                      backgroundImage: `url(/assets/img/hotels/featured/${hotel.photo})`,
                    }}
                  >
                    <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-slate-900/40 sm:from-slate-900/10 via-slate-900/50 sm:via-slate-900/10 to-slate-900/50 sm:to-slate-900/60 rounded-lg flex flex-col justify-end">
                      <div className="flex flex-col gap-1.5 px-3 sm:px-5 py-3">
                        <div className="font-poppins font-semibold text-white sm:text-lg">
                          {hotel.name}
                        </div>
                        <div className="flex flex-col sm:flex-row justify-end sm:items-end sm:justify-start gap-1 sm:gap-3 text-white text-sm">
                          <div className="flex flex-row items-end gap-2 sm:gap-3 text-white text-sm font-normal">
                            <div className="hidden sm:flex flex-row items-center gap-1.5">
                              <span>
                                <MdPersonOutline size={18} />
                              </span>
                              <span>{hotel.guests} Guest</span>
                            </div>
                            <div className="hidden sm:flex flex-row items-center gap-1.5">
                              <span>
                                <MdOutlineHotel size={18} />
                              </span>
                              <span>{hotel.beds} Bed</span>
                            </div>
                          </div>
                          <div className="flex flex-row items-center gap-1.5">
                            <span>
                              <span className="sm:hidden">From</span> Ksh.
                            </span>
                            <span className="line-clamp-1">{hotel.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
