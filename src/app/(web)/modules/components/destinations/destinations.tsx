import Link from "next/link";
import Image from "next/image";
import {
  IoChevronForwardOutline,
  IoPersonOutline,
  IoTimeOutline,
} from "react-icons/io5";

export default function Destinations() {
  const destinations = [
    {
      id: "1",
      name: "Maldives",
      period: "7 days",
      price: "60,000",
      persons: "1",
      photo: "/assets/img/destinations/destination-1.jpg",
    },
    {
      id: "2",
      name: "Capetown",
      period: "7 days",
      price: "50,000",
      persons: "1",
      photo: "/assets/img/destinations/destination-2.jpg",
    },
    {
      id: "3",
      name: "Capetown",
      period: "7 days",
      price: "60,000",
      persons: "1",
      photo: "/assets/img/destinations/destination-3.jpg",
    },
    {
      id: "4",
      name: "Sychelles",
      period: "7 days",
      price: "75,000",
      persons: "1",
      photo: "/assets/img/destinations/destination-4.jpg",
    },
    {
      id: "5",
      name: "Spain",
      period: "7 days",
      price: "80,000",
      persons: "1",
      photo: "/assets/img/destinations/destination-5.jpg",
    },
  ];
  return (
    <section className="w-full py-8 sm:py-12 bg-white">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4 space-y-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="flex flex-col gap-8 sm:pe-16">
            <div className="font-poppins flex flex-col gap-1 sm:gap-3">
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
              className="text-sm font-medium flex flex-row items-center gap-2"
            >
              More to explore <IoChevronForwardOutline size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:col-span-3 gap-4 sm:gap-5">
            {destinations?.map((destination: any) => (
              <div
                key={destination.id}
                className="relative bg-slate-50 rounded-lg"
              >
                <Image
                  className="rounded-lg"
                  src={destination.photo}
                  width={600}
                  height={400}
                  alt={`Travel with Madfun - ${destination.name}`}
                />
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-slate-900/60 rounded-lg flex flex-col justify-end">
                  <div className="flex flex-col gap-1.5 px-5 py-3">
                    <div className="font-semibold text-white sm:text-lg font-poppins">
                      {destination.name}
                    </div>
                    <div className="flex flex-row items-end gap-3 text-white text-sm">
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
                      <div className="flex flex-row items-center gap-1">
                        <span>Ksh.</span>
                        <span>{destination.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
