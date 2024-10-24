import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";
import OtherDestinations from "../modules/others";
import { destinations } from "@/utils/data/destinations";

export default async function Page() {
  const currentDestination = destinations.find(
    (obj: any) => obj.slug === "diani"
  );
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/diani/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/diani/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/diani/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/diani/gallery-4.jpg",
    },
    {
      id: "5",
      photo: "/assets/img/destinations/gallery/diani/gallery-5.jpg",
    },
  ];

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/diani.jpg`}
          fill
          priority
          alt="Experience Lake Nakuru with Madfun"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              Diani
            </h1>
            <p className="sm:text-lg font-medium">
              4 DAYS, 3 NIGHTS DIANI BEACH HOLIDAY PACKAGE
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div className="flex flex-col mb-6">
            <div className="flex flex-col gap-4">
              <p className="">
                Diani Beach, located 30 km south of Mombasa, is an award-winning
                tropical paradise renowned for its white sands, clear waters
                ideal for snorkelling, and diverse wildlife. This premier beach
                destination, surrounded by the warm Indian Ocean and numerous
                resorts, is perfect for both families and couples, whether as a
                post-safari relaxation spot or a standalone getaway.
              </p>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins">
                  Package includes:
                </h2>
                <ul className="">
                  <li>
                    3 nights accommodation on all-inclusive basis Return flights
                    from Nairobi to/from Ukunda. Return Airport transfers
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
                      Hotel Option 1: Southern Palms Beach Resort & Spa
                    </h5>
                    <ul className="list-none">
                      <li>
                        Individual price –{" "}
                        <span className="font-bold">$1250</span>
                      </li>
                      <li>
                        Groups comprising 2 or more –{" "}
                        <span className="font-bold">$1175</span> (single),{" "}
                        <span className="font-bold">$900</span> (double room)
                        per person
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 font-poppins">
                      Hotel Option 2: Baobab Beach Resort
                    </h5>
                    <ul className="list-none">
                      <li>
                        Individual price –{" "}
                        <span className="font-bold">$1310</span>
                      </li>
                      <li>
                        Groups comprising 2 or more –{" "}
                        <span className="font-bold">$1235</span> (single),{" "}
                        <span className="font-bold">$1045</span> (double room)
                        per person
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
        <OtherDestinations slug={`diani`} />
      </div>
    </section>
  );
}
