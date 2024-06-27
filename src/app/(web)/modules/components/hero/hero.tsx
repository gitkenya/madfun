import Image from "next/image";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
export default function Hero() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="grid">
            <div className="rounded-xl bg-pink-100 flex flex-col sm:flex-row-reverse min-h-[18rem]">
              <div className="w-full h-full sm:w-1/2 relative">
                <Image
                  className="object-cover rounded-t-xl sm:rounded-e-xl sm:rounded-s-none"
                  src="/assets/img/hero/banner.webp"
                  fill
                  alt="Madfun Flights"
                  sizes="(max-width: 768px) 600px, (max-width: 1200px) 600px, 600px"
                />
              </div>
              <div className="w-full h-full sm:w-1/2 p-12 flex flex-col items-start justify-center gap-5">
                <div className="font-bold text-3xl text-left">
                  Enjoy 20%
                  <br />
                  Flight Offers
                  <br />
                  till June 31st
                </div>
                <Link
                  href="/"
                  className="bg-slate-800 text-slate-50 px-8 py-2 rounded"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="rounded-xl flex flex-col sm:flex-row min-h-[18rem] gap-6">
              <div className="w-full h-full sm:w-1/2 bg-slate-100 rounded-xl p-12 flex flex-col items-start justify-center gap-5">
                <h2 className="text-3xl font-bold">Mega Sale</h2>
                <div className="font-normal text-lg text-left">
                  Travel to Popular Destinations and{" "}
                  <span className="font-bold">save 20%</span> off holiday
                  packages!
                </div>
                <Link
                  href="/"
                  className="bg-slate-800 text-slate-50 px-8 py-2 rounded"
                >
                  View Packages
                </Link>
              </div>
              <div className="w-full h-full sm:w-1/2 relative">
                <div className="h-full flex flex-col justify-between gap-6">
                  <div className="w-full h-1/2 bg-pink-100 rounded-xl flex flex-row">
                    <div className="w-full h-full sm:w-1/2 relative">
                      <Image
                        className="object-cover rounded-s-xl"
                        src="/assets/img/hero/events.jpg"
                        fill
                        alt="Madfun Events"
                        sizes="(max-width: 768px) 600px, (max-width: 1200px) 600px, 600px"
                      />
                    </div>
                    <div className="w-full h-full sm:w-1/2 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-xl">Featured</h3>
                        <h4 className="font-bold text-xl">Events</h4>
                      </div>
                      <div className="flex flex-row items-center gap-2 font-semibold">
                        See All <IoChevronForward size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-1/2 bg-slate-100 rounded-xl flex flex-row">
                    <div className="w-full h-full sm:w-1/2 relative">
                      <Image
                        className="object-cover rounded-s-xl"
                        src="/assets/img/hero/jumanji.jpg"
                        fill
                        alt="Madfun Movies"
                        sizes="(max-width: 768px) 600px, (max-width: 1200px) 600px, 600px"
                      />
                    </div>
                    <div className="w-full h-full sm:w-1/2 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-lg">Movies</h3>
                        <h4 className="font-bold text-xl">Streaming</h4>
                      </div>
                      <div className="flex flex-row items-center gap-2 font-semibold">
                        Watch <IoChevronForward size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
