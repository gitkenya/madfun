import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";
import OtherDestinations from "../modules/others";
import { destinations } from "@/utils/data/destinations";

export default async function Page() {
  const currentDestination = destinations.find(
    (obj: any) => obj.slug === "masai-mara"
  );
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/masai-mara/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/masai-mara/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/masai-mara/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/masai-mara/gallery-4.jpg",
    },
    {
      id: "5",
      photo: "/assets/img/destinations/gallery/masai-mara/gallery-5.jpg",
    },
    {
      id: "6",
      photo: "/assets/img/destinations/gallery/masai-mara/gallery-6.jpg",
    },
    {
      id: "7",
      photo: "/assets/img/destinations/gallery/masai-mara/gallery-7.jpg",
    },
    {
      id: "8",
      photo: "/assets/img/destinations/gallery/masai-mara/gallery-8.jpg",
    },
  ];

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/masai-mara.jpg`}
          fill
          priority
          alt="Experience Masai Mara with Madfun"
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
                Masai Mara National Reserve in southwest Kenya, adjacent to
                Tanzania’s Serengeti, is a premier wildlife sanctuary famous for
                diverse species like lions and elephants. Spanning 1,510 square
                kilometres, it’s named after the Maasai tribe and recognised as
                one of the new Seven Wonders of the World.
              </p>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins">
                  Package includes:
                </h2>
                <ul className="list-decimal mt-4 px-4">
                  <li>
                    3 nights accommodation on full board basis transport in a
                    4x4 safari landcruiser
                  </li>
                  <li>Extensive game viewing drives</li>
                  <li>Professional driver guide</li>
                  <li>
                    Note:{" "}
                    <span className="italic">
                      park entrance fee of $200 per day is excluded
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
                      Hotel Option 1: Sarova Mara Camp/Similar
                    </h5>
                    <ul className="list-none">
                      <li>
                        Individual price –{" "}
                        <span className="font-bold">$2323</span>
                      </li>
                      <li>
                        2 people – <span className="font-bold">$2223</span>{" "}
                        (single), <span className="font-bold">$1785</span>{" "}
                        (double room) per person
                      </li>
                      <li>
                        4 people – <span className="font-bold">$2123</span>{" "}
                        (single), <span className="font-bold">$1465</span>{" "}
                        (double room) per person
                      </li>
                      <li>
                        6 people – <span className="font-bold">$2023</span>{" "}
                        (single), <span className="font-bold">$1380</span>{" "}
                        (double room) per person
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 font-poppins">
                      Hotel Option 2: Mara Elatia Camp
                    </h5>
                    <ul className="list-none">
                      <li>
                        Individual price –{" "}
                        <span className="font-bold">$2210</span>
                      </li>
                      <li>
                        Group of 2 people –{" "}
                        <span className="font-bold">$2110</span> (single) /{" "}
                        <span className="font-bold">$2050</span> (double) per
                        person
                      </li>
                      <li>
                        Group of 4 people –{" "}
                        <span className="font-bold">$2010</span> (single) /{" "}
                        <span className="font-bold">$1950</span> (double) per
                        person
                      </li>
                      <li>
                        Group of 6 people –{" "}
                        <span className="font-bold">$1910</span> (single) /{" "}
                        <span className="font-bold">$1850</span> (double) per
                        person
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
        <OtherDestinations slug={`masai-mara`} />
      </div>
    </section>
  );
}
