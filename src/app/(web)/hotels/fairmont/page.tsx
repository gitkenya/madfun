import Image from "next/image";
import BookingForm from "../modules/form";
import Gallery from "..//modules/gallery";
import { hotels } from "@/utils/data/hotels";
import OtherHotels from "../modules/otherHotels";

export default async function Page() {
  const currentHotel = hotels.find((obj: any) => obj.slug === "fairmont");
  const galleryLength = 15;
  const gallery = Array.from({ length: galleryLength }, (v, i) => ({
    id: `${i + 1}`,
    photo: `/assets/img/hotels/gallery/fairmont/gallery-${i + 1}.jpg`,
  }));

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/hotels/banners/fairmont.jpg`}
          fill
          priority
          alt="Experience Lake Nakuru with Madfun"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              {currentHotel?.title}
            </h1>
            <p className="sm:text-lg font-medium">{currentHotel?.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div className="flex flex-col mb-6">
            <div className="flex flex-col gap-4">
              <h2 className="italic font-semibold text-slate-700 text-lg">
                3 days, 2 nights Self-drive weekend getaway
              </h2>
              <p className="">
                Welcome to Fairmont Mount Kenya Safari Club, where the majesty
                of nature and adventure intertwine seamlessly! Nestled at the
                foot of the iconic Mount Kenya, this luxurious retreat offers a
                unique blend of breathtaking landscapes, thrilling safaris, and
                world-class golf.
              </p>
              <p>
                Imagine waking up to the stunning backdrop of Africa’s
                second-highest peak, its snow-capped summits shimmering in the
                morning sun. Surrounded by lush gardens and vibrant wildlife,
                every moment at Fairmont feels like a celebration of nature’s
                beauty. The crisp mountain air invigorates your spirit, inviting
                you to embark on a journey filled with adventure and serenity.
              </p>
              <p>
                Here, an array of exciting outdoor activities awaits you,
                including world-class golfing on our scenic course, exhilarating
                horse riding through enchanting forests, and a visit to the
                animal orphanage to learn about conservation efforts.
              </p>
              <p>
                After a day filled with exploration, unwind in our luxurious
                accommodations, where comfort meets elegance. Indulge in
                exquisite dining options featuring locally sourced ingredients
                that tantalize your taste buds. For a truly memorable dining
                experience, savor an amazing breakfast overlooking the slopes or
                indulge in romantic bush dining under the stars, surrounded by
                the soothing sounds of the wild.
              </p>
              <p>
                At Fairmont Mount Kenya, every mile you travel leads to
                breathtaking experiences and cherished memories. Whether you’re
                seeking adventure on the greens, thrilling wildlife encounters,
                or simply a serene escape in nature, this destination has it
                all. Are you ready to dive into an unforgettable getaway filled
                with adventure and excitement? Experience the MadFun moments
                that await—book your stay today and let the journey unfold!
              </p>

              <p className="italic">
                Package Rates: <span className="font-bold">USD 3680</span> for
                upto 4 pax
              </p>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins">
                  Inclusions
                </h2>
                <ul className="list-disc px-4">
                  <li>
                    2 nights of accommodation at the William Holden 2-bedroomed
                    cottage
                  </li>
                  <li>Meals on full board basis</li>
                  <li>Conservancy fees</li>
                  <li>Complimentary use of the swimming pool/gym</li>
                </ul>
              </div>
              <p className="italic">Terms and conditions apply</p>
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
          <BookingForm user={null} destination={currentHotel} />
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <OtherHotels slug={`fairmont`} />
      </div>
    </section>
  );
}
