import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/utils/data/destinations";
import {
  IoChevronForwardOutline,
  IoPersonOutline,
  IoTimeOutline,
} from "react-icons/io5";

export default function Destinations(props: any) {
  //const { destinations } = props;
  const featuredDestinations: any[] = destinations.filter(
    (obj: any) => obj.featured === true
  );
  return (
    <section className="w-full py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-[85rem] px-2 sm:px-0 space-y-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="flex flex-col gap-4 sm:gap-8 sm:pe-16">
            <div className="font-poppins hidden sm:flex flex-col gap-1 sm:gap-3 text-slate-800">
              <h2 className="text-lg sm:text-3xl font-bold uppercase text-slate-800">
                Top
              </h2>
              <h2 className="text-lg sm:text-3xl font-bold uppercase text-slate-800">
                Destinations
              </h2>
            </div>
            <div className="font-poppins sm:hidden flex flex-row gap-1 sm:gap-3">
              <h2 className="text-lg sm:text-3xl font-bold uppercase">Top</h2>
              <h2 className="text-lg sm:text-3xl font-bold uppercase">
                Destinations
              </h2>
            </div>
            <p className="text-slate-600 leading-7 font-light">
              Experience top-rated destinations and activities that promise
              unforgettable memories
            </p>
            <Link
              href="/travel"
              className="text-sm text-slate-600 font-medium flex flex-row items-center gap-2"
            >
              More to explore <IoChevronForwardOutline size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:col-span-3 gap-3 sm:gap-5">
            {featuredDestinations?.map((destination: any) => (
              <Link
                key={destination.id}
                href={`/travel/${destination.slug}`}
                className="relative bg-cover bg-center bg-slate-50 rounded-lg aspect-video"
                style={{
                  backgroundImage: `url(/assets/img/destinations/featured/${destination.photo})`,
                }}
              >
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-slate-900/60 rounded-lg flex flex-col justify-end">
                  <div className="flex flex-col gap-1.5 px-5 py-3">
                    <div className="font-semibold text-white sm:text-lg font-poppins">
                      {destination.title}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end sm:items-end sm:justify-start gap-1 sm:gap-3 text-white text-sm">
                      <div className="flex flex-row items-end gap-3">
                        {destination.days && (
                          <div className="hidden sm:flex flex-row items-center gap-2">
                            <span>
                              <IoTimeOutline size={16} />
                            </span>
                            <span>{destination.days}</span>
                          </div>
                        )}
                        {destination.persons && (
                          <div className="hidden sm:flex flex-row items-center gap-2">
                            <span>
                              <IoPersonOutline size={16} />
                            </span>

                            <span>{destination.persons}</span>
                          </div>
                        )}
                      </div>
                      {destination.from && (
                        <div className="flex flex-row items-center gap-1">
                          <span>From {destination.currency}.</span>
                          <span>
                            {parseFloat(destination.from).toLocaleString()}
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
  );
}
