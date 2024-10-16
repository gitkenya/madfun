import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import Itinerary from "./modules/itinerary";
import { IoPersonOutline, IoTimeOutline } from "react-icons/io5";
export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  const { data: destination } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", params.slug)
    .order("id", { ascending: true })
    .single();
  return (
    <section className="w-full mt-16 sm:mt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[300px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/travel/packages/${destination.banner}`}
          fill
          priority
          alt="Madfun Flights"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              Discover {destination.name}
            </h1>
            <p className="sm:text-lg">
              {destination.name} is one of those cities that never gets old, a
              captivating tourist destination that seamlessly blends modern
              urban centers
            </p>
            <div className="flex flex-col sm:flex-row justify-end sm:items-end sm:justify-start gap-1 sm:gap-3 text-white">
              <div className="flex flex-row items-end gap-3">
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <IoTimeOutline size={20} />
                  </span>
                  <span>{destination.period}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <IoPersonOutline size={20} />
                  </span>
                  <span>{destination.persons} person</span>
                </div>
              </div>
              <div className="flex flex-row items-center gap-1">
                <span>KES.</span>
                <span>{destination.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 flex flex-col sm:flex-row gap-5">
        <div className="w-full sm:w-2/3">
          <h2 className="text-lg sm:text-2xl font-semibold font-poppins">
            About the Experience
          </h2>
          <p>
            Malaysia is one of those cities that never gets old, a captivating
            tourist destination that seamlessly blends modern urban centers with
            rich cultural heritage and natural beauty. No matter how many times
            you've been, you'll always discover something new and exciting to
            see, do, and eat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-12">
            <h3>Price Includes</h3>
            <ul>
              <li>✔️ Breakfast at the hotel</li>
              <li>✔️ Breakfast at the hotel</li>
              <li>✔️ Breakfast at the hotel</li>
              <li>✔️ Breakfast at the hotel</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-12">
            <h3>Price Excludes</h3>
            <ul>
              <li>❌ Breakfast at the hotel</li>
              <li>❌ Breakfast at the hotel</li>
              <li>❌ Breakfast at the hotel</li>
              <li>❌ Breakfast at the hotel</li>
              <li>❌ Breakfast at the hotel</li>
            </ul>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold font-poppins">
            Itinerary
          </h3>
          <div className="">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Day 1: Departure
                </div>
                <div className="collapse-content">
                  <p className="border-l-2 border-yellow-400 ps-2 sm:ps-5">
                    Pickup at 10:00 am from Singapore, a 5-hour drive to Ibis
                    Hotel Kuala Lumpur. 3:00 pm Check into the hotel for a
                    relaxed evening at your leisure to recharge and await a day
                    filled with adventure!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Day 2: Kuala Lumpur to Genting and Batu Caves
                </div>
                <div className="collapse-content">
                  <p className="border-l-2 border-yellow-400 ps-2 sm:ps-5">
                    Pickup at 10:00 am from Singapore, a 5-hour drive to Ibis
                    Hotel Kuala Lumpur. 3:00 pm Check into the hotel for a
                    relaxed evening at your leisure to recharge and await a day
                    filled with adventure!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Day 3: Kuala Lumpur to Genting and Batu Caves
                </div>
                <div className="collapse-content">
                  <p className="border-l-2 border-yellow-400 ps-2 sm:ps-5">
                    Pickup at 10:00 am from Singapore, a 5-hour drive to Ibis
                    Hotel Kuala Lumpur. 3:00 pm Check into the hotel for a
                    relaxed evening at your leisure to recharge and await a day
                    filled with adventure!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Day 4: Kuala Lumpur to Genting and Batu Caves
                </div>
                <div className="collapse-content">
                  <p className="border-l-2 border-yellow-400 ps-2 sm:ps-5">
                    Pickup at 10:00 am from Singapore, a 5-hour drive to Ibis
                    Hotel Kuala Lumpur. 3:00 pm Check into the hotel for a
                    relaxed evening at your leisure to recharge and await a day
                    filled with adventure!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Day 5: Kuala Lumpur to Genting and Batu Caves
                </div>
                <div className="collapse-content">
                  <p className="border-l-2 border-yellow-400 ps-2 sm:ps-5">
                    Pickup at 10:00 am from Singapore, a 5-hour drive to Ibis
                    Hotel Kuala Lumpur. 3:00 pm Check into the hotel for a
                    relaxed evening at your leisure to recharge and await a day
                    filled with adventure!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Day 6: Kuala Lumpur to Genting and Batu Caves
                </div>
                <div className="collapse-content">
                  <p className="border-l-2 border-yellow-400 ps-2 sm:ps-5">
                    Pickup at 10:00 am from Singapore, a 5-hour drive to Ibis
                    Hotel Kuala Lumpur. 3:00 pm Check into the hotel for a
                    relaxed evening at your leisure to recharge and await a day
                    filled with adventure!
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                  Day 7: Kuala Lumpur to Genting and Batu Caves
                </div>
                <div className="collapse-content">
                  <p className="border-l-2 border-yellow-400 ps-2 sm:ps-5">
                    Pickup at 10:00 am from Singapore, a 5-hour drive to Ibis
                    Hotel Kuala Lumpur. 3:00 pm Check into the hotel for a
                    relaxed evening at your leisure to recharge and await a day
                    filled with adventure!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3">Booking Form</div>
      </div>
    </section>
  );
}
