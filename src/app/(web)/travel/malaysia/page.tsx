import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";
import OtherDestinations from "../modules/others";
import { destinations } from "@/utils/data/destinations";

export default async function Page() {
  const currentDestination = destinations.find(
    (obj: any) => obj.slug === "malaysia"
  );
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-4.jpg",
    },
    {
      id: "5",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-5.jpg",
    },
    {
      id: "6",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-6.jpg",
    },
    {
      id: "7",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-7.jpg",
    },
    {
      id: "8",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-8.jpg",
    },
    {
      id: "9",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-9.jpg",
    },
    {
      id: "10",
      photo: "/assets/img/destinations/gallery/malaysia/gallery-10.jpg",
    },
  ];
  const itinerary: any[] = [
    {
      id: 1,
      day: "Day 01",
      title: "Arrival Day in Malaysia from Singapore",
      description:
        "Pickup at 10:00 AM for a 5-hour drive to Berjaya Times Square Hotel Kuala Lumpur (4 Star) in Singapore. Check in at 3:00 PM for a relaxed evening at your leisure to recharge for the adventures ahead. This booking is on bed and breakfast meal plan.",
    },
    {
      id: 2,
      day: "Day 02",
      title: "Kuala Lumpur to Genting and Batu Caves",
      description:
        "After breakfast, you'll head to Genting Highlands, taking in a scenic one-hour drive followed by a cable car ride that offers stunning views. Explore the remarkable Batu Caves, where you can admire the Hindu statue and ascend 272 steps for panoramic city views. Enjoy lunch at a top restaurant, take some time to explore the area, and then return to the city for evening activities or a restful night.",
    },
    {
      id: 3,
      day: "Day 03",
      title: "Sunway Lagoon Theme Park",
      description:
        "Kick off your day with adventure at the Sunway Lagoon Theme Park, where you can enjoy various rides and attractions, including Water Park, Amusement Park, Wildlife Park, X Park, Scream Park, and Sunway Lost Lagoon Park.",
    },
    {
      id: 4,
      day: "Day 04",
      title: "Kuala Lumpur Cultural City Tour",
      description:
        "After breakfast you will start your day with a tour of Kuala Lumpur, visiting the National Monument, National Mosque, National Museum, Merdeka Square, Batik factory, and the King’s Palace. Enjoy lunch in KLCC Park, then marvel at the Petronas Twin Towers and Menara KL Tower. End the day shopping in Chinatown and Central Market.",
    },
    {
      id: 5,
      day: "Day 05",
      title: "Checkout from Berjaya Times Square Hotel Kuala Lumpur (4 Star)",
      description:
        "Enjoy breakfast in the morning, check out from the hotel before noon, and get picked up for your transfer to the airport to catch your flight.",
    },
  ];

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/malaysia.jpg`}
          fill
          priority
          alt="Experience Malaysia With Madfun"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              Discover Malaysia
            </h1>
            <p className="sm:text-lg font-medium">
              An adventure you never knew you needed!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div className="flex flex-col mb-6">
            <div className="flex flex-col gap-4">
              <p className="italic">
                Dive into a world where adventure meets culture, from the
                bustling streets of Kuala Lumpur to the serene beauty of lush
                rainforests. Experience breathtaking landscapes and rich
                traditions that will leave you enchanted.
              </p>
              <h2 className="font-semibold text-slate-700 font-poppins">
                Below is a preview of our Itinerary
              </h2>
              <div className="flex flex-col gap-5 mt-5">
                <Itinerary itinerary={itinerary} />
              </div>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins italic">
                  Trip fee:
                </h2>
                <ul className="list-disc mt-4 px-4">
                  <li>USD 470 per person sharing in a double room</li>
                  <li>USD 780 for single occupancy</li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      INCLUSIONS:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>Transfer to hotel</li>
                      <li>
                        4 nights’ accommodation at Berjaya Times Square Hotel
                        Kuala Lumpur (4 Star) or similar
                      </li>
                      <li>Daily breakfast at the hotel</li>
                      <li>Genting Highlands</li>
                      <li>Cable car ride</li>
                      <li>Batu caves</li>
                      <li>The Sunway Lagoon theme park</li>
                      <li>National Monument - Tugu Negara</li>
                      <li>The National Mosque of Malaysia</li>
                      <li>The King’s Palace - Istana Negara</li>
                      <li>KLCC Park</li>
                      <li>Petronas Twin Towers</li>
                      <li>Menara KL Tower</li>
                      <li>Bukit Bintang</li>
                      <li>Visit to Chinatown</li>
                      <li>Visit the Central market</li>
                      <li>UR Spa</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      EXCLUSIONS:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>Lunch, Dinner, and any other refreshments</li>
                      <li>Tips and gratuities</li>
                      <li>International and local flights</li>
                      <li>Other Meals</li>
                      <li>Travel insurance (recommended)</li>
                      <li>Hotel deposit (refundable)</li>
                      <li>Optional activities not listed in inclusions</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="italic">Terms and conditions apply</p>
              <ul className="list-disc px-4">
                <li>
                  The package is valid from September 1st to December 19th,
                  2024.
                </li>
                <li>
                  The booking includes a bed and breakfast; please cater for
                  your lunch and dinner meals.
                </li>
                <li>
                  Please follow the timing instructions given by the driver or
                  tour guide. The maximum wait time for the driver at the hotel
                  parking during pick-up is 15 minutes only.
                </li>
                <li>
                  Madfun will not be responsible for any damage, loss of
                  personal belongings, or injury.
                </li>
                <li>
                  Standard check-in time is 3:00 PM, and check-out time is 12:00
                  PM. Additional charges apply for early check-in or late
                  check-out.
                </li>
                <li>
                  The itinerary schedule may change without prior notice due to
                  unforeseen circumstances.
                </li>
                <li>
                  No refunds will be provided due to weather-related issues.
                </li>
                <li>
                  Madfun does not assume responsibility for inherent risks that
                  may lead to unfortunate accidents or incidents during ordinary
                  travel conditions. The company will not be held liable for
                  injury, death, damage, loss, delay, cost, expense, or
                  inconvenience arising from travel misfortunes beyond our
                  control.
                </li>
                <li>
                  Madfun reserves the right to amend these terms and conditions
                  at any time without prior notice.
                </li>
                <li>
                  Other terms and conditions published on Madfun’s website (
                  <a
                    href="http://www.madfun.com"
                    target="_blank"
                    className="text-blue-500"
                  >
                    www.madfun.com
                  </a>
                  ) shall apply.
                </li>
              </ul>
              <p className="italic">Book your spot today!</p>
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
        <OtherDestinations slug={`malaysia`} />
      </div>
    </section>
  );
}
