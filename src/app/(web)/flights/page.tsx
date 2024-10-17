import Image from "next/image";
import FlightSearch from "@/app/(web)/modules/components/search/flights";
import { createClient } from "@/utils/supabase/server";
import { IoEllipse } from "react-icons/io5";
export const revalidate = 604800;
export default async function Page() {
  const supabase = await createClient();
  const { data: flight_types } = await supabase
    .from("flight_types")
    .select("*")
    .order("id", { ascending: true });
  const { data: locations } = await supabase
    .from("locations")
    .select("*, countries(*)")
    .order("id", { ascending: true });
  const { data: flight_stops } = await supabase
    .from("flight_stops")
    .select("*")
    .order("id", { ascending: true });
  const { data: flight_classes } = await supabase
    .from("flight_classes")
    .select("*")
    .order("id", { ascending: true });
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-[85rem] px-2 sm:px-0 pt-10 sm:pt-12">
        <div className="w-full h-60 sm:min-h-[calc(100vh-100px)] bg-slate-800 rounded-xl relative">
          <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full rounded-xl bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/20 z-20">
            <div className="w-full max-w-[75rem] hidden sm:flex flex-col gap-4">
              <h1 className="flex flex-row items-end gap-3 font-poppins text-lg sm:text-4xl uppercase font-bold text-white tracking-wider">
                Flights
                <IoEllipse size={14} className="text-yellow-400 mb-[0.4rem]" />
              </h1>
              <FlightSearch
                flight_types={flight_types}
                location_types={locations}
                flight_stops={flight_stops}
                flight_classes={flight_classes}
              />
            </div>
          </div>
          <Image
            className="object-cover rounded-xl"
            src="/assets/img/flights/flights-banner.jpg"
            fill
            priority
            alt="Madfun Flights"
            sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
          />
        </div>
      </div>
    </section>
  );
}
