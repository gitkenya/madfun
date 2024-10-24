import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";
import OtherDestinations from "../modules/others";
import { destinations } from "@/utils/data/destinations";

export default async function Page() {
  const currentDestination = destinations.find(
    (obj: any) => obj.slug === "zanzibar"
  );
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/zanzibar/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/zanzibar/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/zanzibar/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/zanzibar/gallery-4.jpg",
    },
  ];

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/zanzibar.webp`}
          fill
          priority
          alt="Experience Zanzibar with Madfun"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              Discover Zanzibar
            </h1>
            <p className="sm:text-lg font-medium">
              The Best of Zanzibar’s “Couple Delight”:6 days and 5 nights
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div className="flex flex-col mb-6">
            <h2 className="font-bold text-slate-700 font-poppins text-lg italic">
              Love in Paradise! Your Dream Romantic Getaway in Zanzibar
            </h2>
            <div className="flex flex-col gap-4">
              <p className="">
                Zanzibar’s stunning beaches, clear waters, and rich culture make
                it the perfect spot for couples to make lasting memories.
                Whether you are celebrating a honeymoon, or an anniversary, or
                want to reconnect, Zanzibar offers an unforgettable couples'
                getaway.
              </p>
              <h2 className="font-semibold text-slate-700 font-poppins">
                Below is a list of luxury accommodation options that you can
                choose from:
              </h2>
              <ul className="list-decimal mt-4 px-4">
                <li>
                  <span className="font-semibold italic">
                    Paradise Beach Resort:
                  </span>{" "}
                  Located on the tranquil East Coast, this resort offers a
                  sophisticated all-inclusive experience. Priced at USD 1400 per
                  couple, you’ll enjoy sheer comfort. Wake up to the sound of
                  waves and indulge in gourmet meals, refreshing drinks, and
                  excursions.{" "}
                </li>
                <li>
                  <span className="font-semibold italic">
                    Dream’s Bay Beach Hotel:
                  </span>{" "}
                  This adult-only hotel is a great choice for couples craving
                  privacy with a touch of charm. At USD 1570 for two, you’ll
                  experience an intimate yet laid-back atmosphere, perfect for
                  unwinding. Besides all-inclusive meals, the stunning location
                  provides access to Matemwa Bay which offers a breathtaking
                  view of Mnemba Island.
                </li>
                <li>
                  <span className="font-semibold italic">
                    White Paradise Zanzibar:
                  </span>{" "}
                  If you’re after a mix of luxury and adventure, this option is
                  priced at USD 1450 for 4 nights. With all-inclusive meals,
                  beach access, and exciting immersion in culture, this getaway
                  promises lasting memories. White Paradise is home to the
                  largest pool on the island overlooking the turquoise sea with
                  mangroves.
                </li>
              </ul>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins italic">
                  Activities and excursions:
                </h2>
                <p>
                  Zanzibar isn't just about stunning resorts. It’s an island
                  bursting with life and adventure: Discover Stone Town, a
                  UNESCO World Heritage site where history whispers in every
                  corner. You’ll also enjoy a sunset cruise and experience the
                  island’s world-renowned spice plantations.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins italic">
                  A taste of Zanzibar:
                </h2>
                <p>
                  Your stay includes all meals with selected drinks, but
                  Zanzibar’s culinary experience is one to explore beyond the
                  resort walls. Don’t hesitate to venture out to sample fresh
                  seafood and tropical fruits at nearby local restaurants. There
                  is always something magical about exploring together.
                </p>
                <p>
                  Are you planning your perfect getaway? This unforgettable
                  “Couples Delight” experience is available from September 1st
                  through December 21st, 2024. Whether it’s lounging on powdery
                  beaches, exploring the island’s history, or savoring exquisite
                  meals, Zanzibar is the perfect place to escape with the one
                  you love. With exclusive VIP treatment and luxurious
                  accommodation, Zanzibar promises a romantic retreat like no
                  other.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      INCLUSIONS:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>
                        Exclusive VIP transfers from the Abeid Karume Airport
                        to/from the hotel
                      </li>
                      <li>Welcome drink upon arrival at the hotel</li>
                      <li>
                        4 Nights’ accommodation in a double room on an
                        all-inclusive basis
                      </li>
                      <li>Meal Plan (Breakfast, Lunch & Dinner)</li>
                      <li>Selected alcoholic and non-alcoholic drinks</li>
                      <li>Stone Town and Spice Tour visits</li>
                      <li>Sunset cruise experience</li>
                      <li>10 am tea with pastries</li>
                      <li>4 pm tea with pastries</li>
                      <li>Access to the beach</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      EXCLUSIONS:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>
                        Return flight tickets from NBO to/from ZNZ from USD 560
                        per person
                      </li>
                      <li>Travel Insurance</li>
                      <li>Items of personal nature</li>
                      <li>Tips and gratuities</li>
                      <li>Anything else not mentioned in the package</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p>
                For more details visit (
                <Link
                  href="http://www.madfun.com"
                  target="_blank"
                  className="text-blue-500"
                >
                  www.madfun.com
                </Link>
                ) or contact us through bookings@madfun.com. Zanzibar is
                calling.
              </p>
              <p className="italic">Terms and Conditions apply</p>
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
        <OtherDestinations slug={`zanzibar`} />
      </div>
    </section>
  );
}
