import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";
import Itinerary from "../modules/itinerary";
import OtherDestinations from "../modules/others";

export default async function Page() {
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/live-one-day/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/live-one-day/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/live-one-day/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/live-one-day/gallery-4.jpg",
    },
  ];

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/live-one-day.jpg`}
          fill
          priority
          alt="Experience Lake Nakuru with Madfun"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              LIVE ONE DAY THE MAASAI WAY
            </h1>
            <p className="sm:text-lg font-medium">
              Maasai Magic Cultural Tour | Kiserian, Kajiado County
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div className="flex flex-col mb-6">
            <div className="flex flex-col gap-4">
              <p className="">
                Step into the untamed beauty of Maasai land, where ancient
                culture collides with adventure! This isn’t just a tour—it’s a
                heart-pounding journey into the vibrant soul of Maasai culture!
                Join Maasai mothers around the fire as they prepare a
                traditional feast filled with laughter, stories, and the
                irresistible aromas of Kenyan cuisine. But the true magic lies
                in those unexpected moments—the laughter of Maasai children, the
                warmth of shared stories, and the sense of belonging that
                envelops you. Every detail has been meticulously planned to
                ensure your day is nothing short of extraordinary—from
                air-conditioned transfers to a meal enjoyed under the vast
                African sky.
              </p>
              <p>
                For just USD 295 per person, including transport, refreshments,
                and a handcrafted Maasai bracelet, this unforgettable adventure
                is calling your name. Whether you’re in town for business or
                seeking a unique escape, the Maasai Magic Cultural Tour is the
                perfect blend of comfort, culture, and thrill.
              </p>
              <h2 className="text-lg">TO EXPERIENCE THIS</h2>
              <p>
                <span className="font-bold italic">USD 295</span> per person
                with a minimum of 4 people in a vehicle. The rate applies to
                both Residents and non-residents.
              </p>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins">
                  The above rate includes:
                </h2>
                <ul className="list-disc px-4">
                  <li>
                    Pick up and drop off at your residence/hotel in Nairobi
                  </li>
                  <li>Services of a fluent English-speaking driver guide</li>
                  <li>Air-conditioned hotel transfers</li>
                  <li>Masai welcome dance on arrival</li>
                  <li>All-round experience of the Masai culture</li>
                  <li>A handmade bracelet</li>
                  <li>A magical moment with the Masai people</li>
                  <li>Club throwing challenge</li>
                  <li>Lunch with unlimited tea, coffee, fruits, and water</li>
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
        <OtherDestinations slug={`live-one-day`} />
      </div>
    </section>
  );
}
