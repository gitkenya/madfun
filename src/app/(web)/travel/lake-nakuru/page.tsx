import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";
import OtherDestinations from "../modules/others";
import { destinations } from "@/utils/data/destinations";

export default async function Page() {
  const currentDestination = destinations.find(
    (obj: any) => obj.slug === "lake-nakuru"
  );
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/lake-nakuru/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/lake-nakuru/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/lake-nakuru/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/lake-nakuru/gallery-4.jpg",
    },
  ];

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/lake-nakuru.jpg`}
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
                Lake Nakuru, located in Kenya’s Great Rift Valley at an
                elevation of 1,745 m, is renowned for its fluctuating population
                of flamingos and a vast rhino population. The park supports
                zebra, buffalo, and the endangered Rothschild giraffe,
                benefiting from its diverse ecosystems including waterfalls,
                cliffs, and forests.
              </p>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins">
                  Package includes:
                </h2>
                <ul className="list-decimal mt-4 px-4">
                  <li>
                    3 nights accommodation on full board basis Transport in a
                    4x4 Safari Landcruiser
                  </li>
                  <li>Extensive game viewing drives</li>
                  <li>Professional driver guide</li>
                  <li>
                    Note:{" "}
                    <span className="italic">
                      Park entrance fee of $60 per day is excluded
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      COST
                    </h4>
                    <h5 className="font-semibold text-slate-700 font-poppins">
                      Hotel Option 1: Sarova Lion Hill
                    </h5>
                    <ul className="list-none">
                      <li>
                        Individual price –{" "}
                        <span className="font-bold">$1975</span>
                      </li>
                      <li>
                        2 people – <span className="font-bold">$1395</span>{" "}
                        (single) / <span className="font-bold">$1351</span>{" "}
                        (double room) per person
                      </li>
                      <li>
                        4 people – <span className="font-bold">$1064</span>{" "}
                        (single) / <span className="font-bold">$1015</span>{" "}
                        (double room) per person
                      </li>
                      <li>
                        6 people – <span className="font-bold">$975</span>{" "}
                        (single) / <span className="font-bold">$920</span>{" "}
                        (double room) per person
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 font-poppins">
                      Hotel Option 2: Lake Nakuru Sopa Lodge
                    </h5>
                    <ul className="list-none">
                      <li>
                        Individual price –{" "}
                        <span className="font-bold">$1880</span>
                      </li>
                      <li>
                        2 people – <span className="font-bold">$1285</span>{" "}
                        (single) / <span className="font-bold">$1135</span>{" "}
                        (double room) per person
                      </li>
                      <li>
                        4 people – <span className="font-bold">$975</span>{" "}
                        (single) / <span className="font-bold">$825</span>{" "}
                        (double room) per person
                      </li>
                      <li>
                        6 people – <span className="font-bold">$865</span>{" "}
                        (single) / <span className="font-bold">$740</span>{" "}
                        (double room) per person
                      </li>
                    </ul>
                  </div>
                </div>
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
        <OtherDestinations slug={`lake-nakuru`} />
      </div>
    </section>
  );
}
