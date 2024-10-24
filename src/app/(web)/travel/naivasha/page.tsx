import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";
import OtherDestinations from "../modules/otherDestinations";
import { destinations } from "@/utils/data/destinations";

export default async function Page() {
  const currentDestination = destinations.find(
    (obj: any) => obj.slug === "naivasha"
  );
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/naivasha/gallery-1.webp",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/naivasha/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/naivasha/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/naivasha/gallery-4.jpg",
    },
    {
      id: "5",
      photo: "/assets/img/destinations/gallery/naivasha/gallery-5.jpg",
    },
  ];

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/naivasha.webp`}
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
                Imagine yourself sipping wine while enjoying breathtaking views
                at the rooftop lounge while the kids burn some energy on the
                trampoline. This dream can be your reality at the Impala House
                in Naivasha, the ideal spot for an amazing 2-night, 3-day family
                getaway.
              </p>
              <p>
                Located on Moi South Lake Road, this beautiful 3-bedroom
                bungalow offers comfort and enjoyment for just 55,000ksh. Enjoy
                a fully furnished home where relaxation is key. Challenge your
                family to a pool game, capture those Insta-worthy moments with
                free Wi-Fi, and let daily housekeeping take care of the details.
              </p>
              <p>
                While the package is self-catering, you can elevate your
                experience by hiring a professional chef for just Ksh 3,000
                daily. But if you’d rather cook for yourself, the kitchen is
                fully stocked.
              </p>
              <p>
                Whether you seek adventure or relaxation, the Impala house
                offers the perfect blend.
              </p>
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
        <OtherDestinations slug={`naivasha`} />
      </div>
    </section>
  );
}
