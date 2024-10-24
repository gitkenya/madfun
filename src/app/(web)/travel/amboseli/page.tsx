import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import { destinations } from "@/utils/data/destinations";
import OtherDestinations from "../modules/others";

export default async function Page() {
  const currentDestination = destinations.find(
    (obj: any) => obj.slug === "amboseli"
  );
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/amboseli/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/amboseli/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/amboseli/gallery-3.jpg",
    },
    {
      id: "6",
      photo: "/assets/img/destinations/gallery/amboseli/gallery-6.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/amboseli/gallery-4.jpg",
    },
    {
      id: "5",
      photo: "/assets/img/destinations/gallery/amboseli/gallery-5.jpg",
    },
    {
      id: "6",
      photo: "/assets/img/destinations/gallery/amboseli/gallery-6.jpg",
    },
    {
      id: "7",
      photo: "/assets/img/destinations/gallery/amboseli/gallery-7.jpg",
    },
    {
      id: "8",
      photo: "/assets/img/destinations/gallery/amboseli/gallery-8.jpg",
    },
  ];
  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/amboseli.jpg`}
          fill
          priority
          alt="Experience Amboseli with Madfun"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              Amboseli
            </h1>
            <p className="sm:text-lg font-medium">
              4 days, 3 night Amboseli National Park Spectacular Safari
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-slate-600">
                Amboseli National Park is set beneath Mount Kilimanjaro. It is
                renowned for its close-up views of elephants and diverse
                habitats including the dried-up Lake Amboseli and wetlands.
                Known in Maasai as “salty dust,” it’s one of Kenya’s most
                visited parks.
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      Package includes:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>3 nights accommodation on full board basis</li>
                      <li>Transport in a 4x4 Safari Landcruiser</li>
                      <li>Extensive game-viewing drives</li>
                      <li>Professional driver guide</li>
                      <li>
                        <span className="font-bold">Note:</span> Park entrance
                        fees of $60 per day is excluded
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <h4 className="font-semibold text-slate-700 font-poppins">
                        Cost:
                      </h4>
                      <ul className="list-none">
                        <li className="font-bold">
                          Hotel option 1: Amboseli Serena Safari Lodge
                        </li>
                        <ul className="list-disc px-4">
                          <li>
                            Individual price –{" "}
                            <span className="font-bold">$1856</span>
                          </li>
                          <li>
                            2 people – <span className="font-bold">$1396</span>{" "}
                            (single) /<span className="font-bold">$1156</span>{" "}
                            (double room) per person
                          </li>
                          <li>
                            4 people – <span className="font-bold">$1086</span>{" "}
                            (single) /<span className="font-bold">$856</span>{" "}
                            (double room) per person
                          </li>
                          <li>
                            6 people – <span className="font-bold">$995</span>{" "}
                            (single) /<span className="font-bold">$765</span>{" "}
                            (double room) per person
                          </li>
                        </ul>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-none">
                        <li className="font-bold">
                          Hotel option 2: Ol Tukai Lodge
                        </li>
                        <ul className="list-disc px-4">
                          <li>
                            Individual price –{" "}
                            <span className="font-bold">$1846</span>
                          </li>
                          <li>
                            2 people – <span className="font-bold">$1710</span>{" "}
                            (single) /<span className="font-bold">$1590</span>{" "}
                            (double room) per person
                          </li>
                          <li>
                            4 people – <span className="font-bold">$1400</span>{" "}
                            (single) /<span className="font-bold">$1290</span>{" "}
                            (double room) per person
                          </li>
                          <li>
                            6 people – <span className="font-bold">$1310</span>{" "}
                            (single) /<span className="font-bold">$1200</span>{" "}
                            (double room) per person
                          </li>
                        </ul>
                      </ul>
                    </div>
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
        <OtherDestinations slug={`amboseli`} />
      </div>
    </section>
  );
}
