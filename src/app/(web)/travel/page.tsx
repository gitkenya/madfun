import Link from "next/link";
import Image from "next/image";
import SearchForm from "./modules/search";
import {
  IoChevronForwardOutline,
  IoLocationOutline,
  IoPersonOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { createClient } from "@/utils/supabase/server";
export const revalidate = 604800;
export default async function Page() {
  const supabase = await createClient();
  const { data: destinations } = await supabase
    .from("destinations")
    .select("*")
    .order("id", { ascending: true });
  return (
    <section className="w-full mt-12">
      <div className="w-full relative min-h-[280px]">
        <Image
          className="object-cover"
          src="/assets/img/travel/travel-banner.jpg"
          fill
          priority
          alt="Madfun Flights"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full rounded-xl bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto">
            <SearchForm destinations={destinations} />
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-slate-900/50">
            <div className="w-full flex flex-row justify-between items-center py-2 sm:py-4 max-w-[80rem] mx-auto text-white text-sm sm:text-base">
              <div className="flex flex-row items-center gap-3 font-poppins">
                <span>
                  <IoLocationOutline size={20} />
                </span>
                <span className="font-semibold">Discover Malaysia</span>
              </div>
              <Link
                href="/travel"
                className="font-normal flex flex-row items-center gap-2"
              >
                Book now <IoChevronForwardOutline size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[85rem] px-2 sm:px-4 space-y-6 my-6 sm:my-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="flex flex-col gap-8 sm:pe-16">
            <div className="font-poppins flex flex-col gap-1 sm:gap-3 text-slate-800">
              <h2 className="text-lg sm:text-3xl font-bold uppercase">Top</h2>
              <h2 className="text-lg sm:text-3xl font-bold uppercase">
                Destinations
              </h2>
            </div>
            <p className="text-slate-600 leading-7 font-light">
              Experience top-rated destinations and activities that promise
              unforgettable memories
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 sm:col-span-3 gap-3 sm:gap-5">
            {destinations?.map((destination: any) => (
              <Link
                key={destination.id}
                href={`/travel/${destination.slug}`}
                className="relative bg-slate-50 rounded-lg"
              >
                <Image
                  className="rounded-lg"
                  src={`/assets/img/destinations/${destination.photo}`}
                  width={600}
                  height={400}
                  alt={`Travel with Madfun - ${destination.name}`}
                />
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-slate-900/60 rounded-lg flex flex-col justify-end">
                  <div className="flex flex-col gap-1.5 px-5 py-3">
                    <div className="font-semibold text-white sm:text-lg font-poppins">
                      {destination.name}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end sm:items-end sm:justify-start gap-1 sm:gap-3 text-white text-sm">
                      <div className="flex flex-row items-end gap-3">
                        <div className="flex flex-row items-center gap-2">
                          <span>
                            <IoTimeOutline size={16} />
                          </span>
                          <span>{destination.period}</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                          <span>
                            <IoPersonOutline size={16} />
                          </span>
                          <span>{destination.persons}</span>
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-1">
                        <span>Ksh.</span>
                        <span>{destination.price.toLocaleString()}</span>
                      </div>
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
