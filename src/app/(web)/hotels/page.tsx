import Link from "next/link";
import Image from "next/image";
import SearchForm from "./modules/search";
import {
  IoChevronForwardOutline,
  IoLocationOutline,
  IoPersonOutline,
  IoTimeOutline,
} from "react-icons/io5";
import Hotels from "@/app/(web)/modules/components/hotels/hotels";
import { hotels } from "@/utils/data/hotels";
export const revalidate = 604800;
export default async function Page() {
  return (
    <>
      <section className="w-full mt-12">
        <div className="w-full relative min-h-[280px]">
          <Image
            className="object-cover"
            src="/assets/img/hotels/banner.webp"
            fill
            priority
            alt="Madfun Flights"
            sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
          />
          <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full rounded-xl bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/20 z-20">
            <div className="w-full max-w-[50rem] mx-auto">
              <SearchForm hotels={hotels} />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[85rem] px-2 sm:px-4 space-y-6 my-6 sm:my-12">
          <div className="relative grid grid-cols-1 sm:grid-cols-4 gap-5">
            <div className="flex flex-col gap-8 sm:pe-16 sm:sticky sm:top-[70px] sm:max-h-64">
              <div className="font-poppins flex flex-col gap-1 sm:gap-2 text-slate-800">
                <h2 className="text-lg sm:text-3xl font-bold uppercase">Top</h2>
                <h2 className="text-lg sm:text-3xl font-bold uppercase">
                  Picks
                </h2>
              </div>
              <p className="text-slate-600 leading-7 font-light">
                Experience top-rated hotels that promise unforgettable memories
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:col-span-3 gap-3 sm:gap-5">
              {hotels?.map((hotel: any) => (
                <Link
                  key={hotel.id}
                  href={`/hotels/${hotel.slug}`}
                  className="relative bg-cover bg-center bg-slate-50 rounded-lg aspect-square"
                  style={{
                    backgroundImage: `url(/assets/img/hotels/featured/${hotel.photo})`,
                  }}
                >
                  <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-slate-900/60 rounded-lg flex flex-col justify-end">
                    <div className="flex flex-col gap-1.5 px-5 py-3">
                      <div className="font-semibold text-white sm:text-lg font-poppins">
                        {hotel.title}
                      </div>
                      <div className="flex flex-col sm:flex-row justify-end sm:items-end sm:justify-start gap-1 sm:gap-3 text-white text-sm">
                        <div className="flex flex-row items-end gap-3">
                          {hotel.days && (
                            <div className="hidden sm:flex flex-row items-center gap-2">
                              <span>
                                <IoTimeOutline size={16} />
                              </span>
                              <span>{hotel.days}</span>
                            </div>
                          )}
                          {hotel.guests && (
                            <div className="hidden sm:flex flex-row items-center gap-2">
                              <span>
                                <IoPersonOutline size={16} />
                              </span>

                              <span>{hotel.guests}</span>
                            </div>
                          )}
                        </div>
                        {hotel.price && (
                          <div className="flex flex-row items-center gap-1">
                            <span>From {hotel.currency}.</span>
                            <span>
                              {parseFloat(hotel.price).toLocaleString()}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
