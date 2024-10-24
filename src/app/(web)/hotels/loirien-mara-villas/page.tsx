import Image from "next/image";
import BookingForm from "../modules/form";
import Gallery from "..//modules/gallery";
import { hotels } from "@/utils/data/hotels";
import OtherHotels from "../modules/otherHotels";

export default async function Page() {
  const currentHotel = hotels.find(
    (obj: any) => obj.slug === "loirien-mara-villas"
  );
  const galleryLength = 15;
  const gallery = Array.from({ length: galleryLength }, (v, i) => ({
    id: `${i + 1}`,
    photo: `/assets/img/hotels/gallery/loirien/gallery-${i + 1}.jpg`,
  }));

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/hotels/banners/loirien-mara-villas.jpg`}
          fill
          priority
          alt="The Mora with Madfun"
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
              <p className="">
                Discover the epitome of splendour at Loirien Mara Villa—your
                ultimate escape in the heart of the Maasai Mara! This stunning
                villa is the epitome of luxury and comfort, featuring three
                beautifully designed double bedrooms, each with its own
                en-suite. Imagine waking up in a cozy bed, surrounded by the
                sights and sounds of the wild!
              </p>
              <p>
                Step outside into your spacious private garden, where a gorgeous
                swimming pool awaits! Picture yourself lounging under the sun,
                soaking in the breathtaking panoramic views of the Mara. With a
                dedicated staff ready to pamper you and an amazing chef in
                residence, prepare your taste buds for a culinary journey like
                no other. From delicious local dishes to international delights,
                every meal is a celebration!
              </p>
              <p>
                Loirien Villa is all about elegance. The master bedroom is your
                personal retreat, complete with a chic dresser, en-suite
                bathroom, and a private balcony that boasts spectacular views of
                the landscape. The two additional bedrooms also feature
                en-suites and access to a shared balcony—perfect for sipping
                your morning coffee while watching the sunrise over the Mara
                Triangle.
              </p>
              <p>
                But the fun doesn’t stop at the bedrooms! Loirien Villa has
                everything you need for relaxation and entertainment. Need to
                catch up on work? The tranquil office space has you covered.
                Feeling cozy? Grab some popcorn and enjoy movie nights in the
                comfy TV room! The spacious living and dining areas are perfect
                for gathering with friends, complemented by a well-stocked bar
                and cellar for those indulgent evenings.
              </p>
              <p>
                Step outside and explore the sprawling private garden that
                stretches right to the edge of the escarpment. It’s a peaceful
                oasis, ideal for leisurely strolls or dining under the stars.
                And don’t forget about the infinity pool! It’s the perfect spot
                to relax and soak up the natural beauty of the Maasai Mara.
              </p>
              <h2 className="font-bold text-lg text-slate-700">Cost</h2>
              <p>
                <span className="font-bold">USD 21,375</span> for upto 6 pax for
                4 days and 3 nights on full board basis
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      Above rates include:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>Full board accommodation</li>
                      <li>2 daily game drives</li>
                      <li>Night game drives within the Conservancy</li>
                      <li>
                        Local airstrip transfers (from/to Kichwa Tembo Airstrip)
                      </li>
                      <li>One complimentary massage per guest per stay</li>
                      <li>
                        Selected cellar wines, spirits, beers, and soft drinks
                      </li>
                      <li>Sauna</li>
                      <li>Steam Room</li>
                      <li>Swimming Pool</li>
                      <li>Wheelchair Accessible rooms</li>
                      <li>Villa Activities</li>
                      <li>Infinity Pool</li>
                      <li>Wine Tasting</li>
                      <li>Campfires</li>
                      <li>Nyama Choma</li>
                      <li>Outdoor Bush Dining</li>
                      <li>Star Gazing</li>
                      <li>Cooking experience with Star Chef</li>
                      <li>Massage</li>
                      <li>Yoga & Pilates</li>
                      <li>Serviced Bar</li>
                      <li>Meditation</li>
                      <li>Spa</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      Out of the Villa Activities:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>Walking safari</li>
                      <li>Birding Excursions</li>
                      <li>Rhino trekking</li>
                      <li>Cattle farm visit</li>
                      <li>Greenhouse/farm visit and seasonal menu</li>
                      <li>Maasai Cultural Visits</li>
                      <li>Mountain Biking</li>
                      <li>Kayaking on the Dam</li>
                      <li>Star gazing under the African sky</li>
                      <li>Archery</li>
                      <li>Mountain Biking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      Above rates exclude:
                    </h4>
                    <ul className="list-disc px-4">
                      <li>
                        Return Wilson - Masai Mara - Wilson flights from USD 450
                        per person
                      </li>
                      <li>
                        Daily Conservancy fees of USD 200 per adult & USD 100
                        per child
                      </li>
                      <li>
                        Hot Air balloon flight at USD 520 per adult and USD 420
                        per child
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
          <BookingForm user={null} destination={currentHotel} />
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <OtherHotels slug={`loirien-mara-villas`} />
      </div>
    </section>
  );
}
