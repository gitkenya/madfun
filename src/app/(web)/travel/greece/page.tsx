import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";
import OtherDestinations from "../modules/otherDestinations";
import { destinations } from "@/utils/data/destinations";

export default async function Page() {
  const currentDestination = destinations.find(
    (obj: any) => obj.slug === "greece"
  );
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/greece/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/greece/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/greece/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/greece/gallery-4.jpg",
    },
  ];

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/greece.jpg`}
          fill
          priority
          alt="Experience Lake Nakuru with Madfun"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              {currentDestination?.title}
            </h1>
            <p className="sm:text-lg font-medium">
              {currentDestination?.subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div className="flex flex-col mb-6">
            <div className="flex flex-col gap-4">
              <p className="">
                Greece, a land steeped in history and draped in natural beauty,
                is a destination that captures the hearts of travelers from
                around the globe. From the iconic white-washed buildings of
                Santorini to the ancient ruins of Athens, Greece offers a rich
                tapestry of experiences that blend breathtaking landscapes with
                a vibrant culture.
              </p>
              <p>
                Escape to the enchanting landscapes of Greece with our exclusive
                travel package for two adults at just{" "}
                <span className="font-bold">USD 1899</span>! Experience the
                breathtaking beauty of Mykonos, the rich history of Athens, and
                the stunning vistas of Santorini—all in one unforgettable
                journey.
              </p>
              <p>
                Indulge in luxury with two nights at the elegant Mykonian Mews
                Luxury Suites, followed by a comfortable stay at the Novotel
                Athens, and conclude your adventure at the beautiful Ambience
                Suites in Santorini. Explore Athens with a Hop On Hop Off tour,
                immerse yourself in local culture on a full-day Tinos tour from
                Mykonos, and discover the majestic spots of Santorini with a
                guided island bus tour.
              </p>
              <p>
                Greece is more than just a destination; it’s an experience that
                lingers long after you leave. With its rich history, stunning
                landscapes, and warm hospitality, Greece invites you to explore,
                indulge, and create unforgettable memories. Whether you’re
                lounging on a beach, wandering through ancient ruins, or
                enjoying a meal under the stars, the magic of Greece is waiting
                for you to discover it.
              </p>
              <p>
                This all-inclusive package features meals on a bed and breakfast
                basis, seamless airport transfers, and covers all current
                applicable taxes, making your getaway hassle-free and memorable.
                Don’t miss your chance to experience the magic of Greece—book
                your adventure today!
              </p>
              <p className="italic">
                Cost: <span className="font-bold">USD 1899</span> total cost for
                2 adults
              </p>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins">
                  Inclusions
                </h2>
                <ul className="list-disc px-4">
                  <li>
                    2 Night/s accommodation in Mykonian Mews Luxury Suites at
                    Mykonos
                  </li>
                  <li>
                    2 Night/s accommodation in Novotel Athenes Hotel at Athens
                  </li>
                  <li>
                    2 Night/s accommodation in Ambience Suites at Santorini
                  </li>
                  <li>Athens Hop On Hop Off Tour</li>
                  <li>Full Day Tinos Tour from Mykonos</li>
                  <li>
                    Full Day Island Bus Tour - the Majestic spots of Santorini
                    Inclusive of all current applicable taxes.
                  </li>
                  <li>All airport transfers</li>
                  <li>Meals on bed and breakfast basis</li>
                </ul>
                <p className="italic">
                  <span className="font-bold">Please note:</span> The package
                  price is dynamic and subject to availability at the time of
                  booking
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-lg sm:text-2xl text-slate-800 font-semibold font-poppins mb-4">
            Gallery
          </h3>
          <div className="w-full">
            <Gallery gallery={gallery} />
          </div>
        </div>
        <div className="w-full rounded-lg sm:w-5/12">
          <BookingForm user={null} destination={currentDestination} />
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <OtherDestinations slug={`greece`} />
      </div>
    </section>
  );
}
