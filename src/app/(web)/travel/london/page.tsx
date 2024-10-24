import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";
import OtherDestinations from "../modules/others";
import { destinations } from "@/utils/data/destinations";

export default async function Page() {
  const currentDestination = destinations.find(
    (obj: any) => obj.slug === "london"
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
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-700 font-poppins uppercase">
                ANDREA BOCELLI
              </h2>
              <p className="">
                Grammy Award winning Artist, Andrea Bocelli will be performing
                LIVE in London, 7 hours away and you can't afford to miss it.
                Madfun will be covering for the concert VIP Top priced seated
                ticket. 4 days, 3 nights stay in a top rated hotel. Return
                Flight & VIP Transfers (NBO-LHR) Call us today at +25411555000
                or email bookings@madfun.com to reserve your ticket.
              </p>
              <p>Limited spots are available!</p>
              <p>Plan your experience with us!</p>
            </div>
            <div>
              <Image
                className="rounded-lg sm:rounded-xl"
                src={`/assets/img/destinations/banners/andrea-bocelli.jpg`}
                width={800}
                height={800}
                alt="Andrea Bocelli"
              />
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg sm:w-5/12">
          <BookingForm user={null} destination={currentDestination} />
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <OtherDestinations slug={`london`} />
      </div>
    </section>
  );
}
