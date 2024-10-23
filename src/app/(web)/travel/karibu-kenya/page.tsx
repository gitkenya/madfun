import Image from "next/image";
import BookingForm from "../modules/form";
import Link from "next/link";
import Gallery from "../modules/gallery";

export default async function Page() {
  const gallery: any[] = [
    {
      id: "1",
      photo: "/assets/img/destinations/gallery/nairobi/gallery-1.jpg",
    },
    {
      id: "2",
      photo: "/assets/img/destinations/gallery/nairobi/gallery-2.jpg",
    },
    {
      id: "3",
      photo: "/assets/img/destinations/gallery/nairobi/gallery-3.jpg",
    },
    {
      id: "4",
      photo: "/assets/img/destinations/gallery/nairobi/gallery-4.jpg",
    },
    {
      id: "5",
      photo: "/assets/img/destinations/gallery/nairobi/gallery-5.jpg",
    },
  ];
  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/destinations/banners/nairobi.jpg`}
          fill
          priority
          alt="Experience Nairobi"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              Karibu Kenya
            </h1>
            <p className="sm:text-lg font-medium">
              KARIBU KENYA, WHERE THE CITY LIGHTS MEET THE WILD SIDE
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col sm:flex-row gap-5 text-slate-600">
        <div className="w-full sm:w-7/12 flex flex-col gap-4">
          <div>
            <h2 className="text-lg sm:text-2xl text-slate-800 font-semibold font-poppins mb-4">
              About the Experience
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-slate-600">
                Nairobi is a place where the unexpected thrives. This bustling
                African metropolis is an explorer’s camp in disguise, where
                cosmopolitan culture, nature, and urbanization collide in a
                breathtaking spectacle.
              </p>
              <p>
                It’s the only capital city in the world with a national game
                park within its borders. Imagine waking up to the roar of lions
                just a stone’s throw from the city center. Nairobi National
                Park, a haven of wildlife, is home to lions, leopards, giraffes,
                and zebras. It’s a truly unique opportunity to encounter
                Africa’s big game without venturing far from the city’s concrete
                jungle. For a heartwarming experience, visit the{" "}
                <span className="font-bold">
                  David Sheldrick Elephant Orphanage
                </span>
                , where you can witness the tender care given to orphaned
                elephants. It’s a heart-melting encounter that will stay with
                you forever.
              </p>
              <p>
                Let’s not forget the{" "}
                <span className="font-bold">Giraffe Centre</span>, where you can
                get up close and personal with these gentle giants, even feeding
                them by hand! Beyond the wildlife, Nairobi offers a vibrant
                tapestry of experiences. Trendy boutiques, world-class
                restaurants, and a burgeoning art scene cater to the city’s
                cosmopolitan crowd. Yet, the city’s heart remains deeply rooted
                in its African heritage. Explore the colorful markets, savor
                authentic cuisine, and immerse yourself in the warm hospitality
                of the locals.
              </p>
              <p>
                Nairobi is a city of contrasts, where the wild and the
                sophisticated coexist in perfect harmony. It’s a place that will
                awaken your senses, ignite your spirit, and leave you longing
                for more. So, embrace the adventure, and let Nairobi enchant
                you.
              </p>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-700 font-poppins">
                      Option 1: Nairobi Half Day Excursion
                    </h3>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      Tour highlights:
                    </h4>
                    <ul className="list-decimal px-4">
                      <li>Nairobi National Park</li>
                      <li>David Sheldrick Wildlife Trust</li>
                      <li>Giraffe Centre</li>
                      <li>BBQ Lunch at the Carnivore Restaurant</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <h4 className="font-semibold text-slate-700 font-poppins">
                        Package Cost:
                      </h4>
                      <ul className="list-none">
                        <li>
                          Non-residents-
                          <span className="font-bold">USD 160</span> per person
                          based on a minimum of 6 pax in one vehicle
                        </li>
                        <li>
                          Residents-
                          <span className="font-bold">USD 130</span> per person
                          based on a minimum of 6 persons in one vehicle
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 font-poppins">
                        The above rate includes:
                      </h4>
                      <ul className="list-disc px-4">
                        <li>
                          Round transport (window sitting) in a safari vehicle
                          with a photographic roof hatch for easy game viewing
                          and photography
                        </li>
                        <li>Nairobi National Park entry fees.</li>
                        <li>David Sheldrick entry fees</li>
                        <li>
                          Services of a fluent English-speaking driver guide.
                        </li>
                        <li>
                          Extensive game viewing drives at Nairobi National
                          Park.
                        </li>
                        <li>
                          Mineral drinking water during the safari (Please carry
                          a reusable water bottle)
                        </li>
                        <li>
                          Giraffe Centre entry fees and the feeding platform.
                        </li>
                        <li>BBQ lunch at The Carnivore Restaurant.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-700 font-poppins">
                      Option 2: Nairobi Full-Day Excursion
                    </h3>
                    <h4 className="font-semibold text-slate-700 font-poppins">
                      Tour highlights:
                    </h4>
                    <ul className="list-decimal px-4">
                      <li>Nairobi National Park</li>
                      <li>David Sheldrick Wildlife Trust</li>
                      <li>Giraffe Centre</li>
                      <li>BBQ Lunch at the Carnivore Restaurant</li>
                      <li>Bomas of Kenya</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <h4 className="font-semibold text-slate-700 font-poppins">
                        Package Cost:
                      </h4>
                      <ul className="list-none">
                        <li>
                          Non-residents-
                          <span className="font-bold">USD 185</span> per person
                          based on a minimum of 6 pax in one vehicle
                        </li>
                        <li>
                          Residents-
                          <span className="font-bold">USD 150</span> per person
                          based on a minimum of 6 persons in one vehicle
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 font-poppins">
                        The above rates include:
                      </h4>
                      <ul className="list-disc px-4">
                        <li>All the offerings in Half Day Excursions</li>
                        <li>Bomas of Kenya Entry Tickets</li>
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
