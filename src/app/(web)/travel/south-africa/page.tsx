import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";

export default async function Page() {
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-4.jpg",
    },
    {
      id: "5",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-5.jpg",
    },
    {
      id: "6",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-6.jpg",
    },
    {
      id: "7",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-7.jpg",
    },
    {
      id: "8",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-8.jpg",
    },
    {
      id: "9",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-9.jpg",
    },
    {
      id: "10",
      photo: "/assets/img/destinations/gallery/south-africa/gallery-10.jpg",
    },
  ];
  const itinerary: any[] = [
    {
      id: 1,
      day: "Day 1",
      title: "Arrival in Johannesburg",
      description:
        "Our team will meet and welcome you on arrival in Johannesburg. You will be transferred to your cozy hotel to check in and relax. Once you’ve settled in, take some time to relax and refresh before your first excursion. At the hotel, you will enjoy a comfortable stay with a bed and breakfast meal plan.",
    },
    {
      id: 2,
      day: "Day 2",
      title: "Exploring Johannesburg",
      description:
        "On your second day, you’ll kick off your experience with breakfast followed by a half-day city tour. This tour will immerse you in Johannesburg’s rich history and culture, allowing you to visit key landmarks and explore vibrant neighborhoods. After a day of discovery, you’ll have a free afternoon for your leisure either return to the hotel and unwind or visit the Sandton Mall for some exploration and shopping.",
    },
    {
      id: 3,
      day: "Day 3",
      title: "Journey to Freedom tour",
      description:
        "After breakfast, we embark on a full-day Journey to Freedom Tour. This tour will delve deeper into South Africa’s struggle for freedom, sharing inspiring stories that have shaped the nation. After a fulfilling time in Johannesburg, you’ll head to Cape Town. To ensure a seamless experience, return airport transfers from O.R. Tambo International Airport (JNB) are included for your convenience. Following your check-in at the hotel, you’ll enjoy a comfortable stay with a Bed and Breakfast meal plan. Take some time to relax and take in the stunning views of this coastal city.",
    },
    {
      id: 4,
      day: "Day 4",
      title: "The ‘Walk to Freedom’ Tour",
      description:
        "On your fourth day, you’ll participate in a full-day ‘Walk to Freedom Tour.’ This immersive experience will allow you to explore the poignant history of apartheid through visits to the District Six Museum, Langa Township local market, arts and crafts center, and Robben Island. It’s a profound journey that will deepen your understanding of South Africa’s past.",
    },
    {
      id: 5,
      day: "Day 5",
      title: "Authentic Cape Town Experience",
      description:
        "On your fifth day, your Cape Town adventure continues with an authentic half-day city tour, featuring a thrilling cable ride up Table Mountain. The breathtaking views from the summit are not to be missed!",
    },
    {
      id: 6,
      day: "Day 6",
      title: "Constantia Winelands' experience and departure",
      description:
        "After breakfast, you will check out of your hotel room. You will then embark on a journey to enjoy a half-day at Constantia Winelands, where you can savor some of South Africa’s finest wines amidst stunning scenery. If time allows, explore any remaining sights in Cape Town or relax at the beach before your return journey. Convenient transfers will take you back to Cape Town International Airport (CPT) for your departure.",
    },
  ];

  itinerary;

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/south-africa.jpg`}
          fill
          priority
          alt="Experience Capetown - South Africa with Madfun"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              South Africa
            </h1>
            <p className="sm:text-lg font-medium">
              DISCOVER THE BEST OF JOHANNESBURG & CAPE TOWN: 6 DAYS, 5 NIGHTS
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div className="flex flex-col mb-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-slate-700 font-poppins italic">
                Package valid: September 1st- November 30th, 2024
              </h2>
              <p className="text-slate-600">
                Experience the vibrant energy of Johannesburg and the stunning
                landscapes of Cape Town in a journey that will ignite your sense
                of adventure. Pack your bags and prepare for the trip of a
                lifetime
              </p>
              <p>Below is a glimpse of the itinerary:</p>

              <div className="flex flex-col gap-5 mt-5">
                <Itinerary itinerary={itinerary} />
              </div>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins">
                  Accommodation Options
                </h2>
                <p className="text-slate-600">
                  To ensure your stay is memorable, we have curated a list of
                  hotel options combination that you can choose from:
                </p>
                <ul className="list-decimal mt-4 px-4">
                  <li>
                    <span className="font-medium italic">
                      Sandton Sun and Towers
                    </span>{" "}
                    in Johannesburg and Taj Cape Town in Cape Town at a rate of
                    USD 970 per person sharing with bed and breakfast meal plan
                  </li>
                  <li>
                    <span className="font-medium italic">
                      African Pride Melrose Arch Hotel
                    </span>{" "}
                    in Johannesburg and Radisson Blu Hotel Waterfront in Cape
                    Town at a rate of USD 1590 per person sharing with bed and
                    breakfast meal plan
                  </li>
                  <li>
                    <span className="font-medium italic">
                      54 On Bath in Johannesburg
                    </span>{" "}
                    and The Table Bay Hotel in Cape Town at a rate of USD 1680
                    per person sharing with bed and breakfast meal plan
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      PACKAGE INCLUDES:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>Airport transfers</li>
                      <li>
                        All ground trips and transfers within the itinerary
                      </li>
                      <li>Daily breakfast at the hotel</li>
                      <li>Guided city tour in Johannesburg</li>
                      <li>Journey to Freedom Tour in Johannesburg</li>
                      <li>The Walk to Freedom tour in Cape Town</li>
                      <li>Guided city tour in Cape Town</li>
                      <li>Entrance fee to Table Mountain cable ride</li>
                      <li>Visit to Constantia Winelands</li>
                      <li>All applicable taxes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      PACKAGE EXCLUDES:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>All flights, international and local flights</li>
                      <li>Meals unless mentioned</li>
                      <li>Items of personal nature</li>
                      <li>Travel insurance</li>
                      <li>
                        Tips and gratuities for your tour leaders & driver
                        guides
                      </li>
                      <li>Anything else not mentioned in the inclusion</li>
                    </ul>
                  </div>
                </div>
                <p>
                  This package is not just a trip; it’s an opportunity to
                  experience the diverse culture, rich history, and stunning
                  landscapes of South Africa. Don’t miss out on this incredible
                  adventure. For enquiries and reservations contact us today.
                </p>
                <p className="italic">Terms and conditions apply.</p>
                <ul className="list-disc italic px-4">
                  <li>
                    Rates are subject to availability at the time of booking.
                  </li>
                  <li>Rates are not applicable during blackout dates.</li>
                </ul>
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
          <BookingForm user={null} />
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col gap-5">
          <h2 className="font-bold text-lg sm:text-3xl text-slate-800 font-poppins">
            Other Destinations
          </h2>
        </div>
      </div>
    </section>
  );
}
