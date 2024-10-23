import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

import {
  IoCheckmark,
  IoClose,
  IoPersonOutline,
  IoTimeOutline,
} from "react-icons/io5";
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
          alt="Experience Nairobi with Madfun"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1600px"
        />
        <div className="absolute flex flex-col items-center justify-center top-0 left-0 w-full h-full sm:rounded-xl bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/20 z-20">
          <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-4 items-center justify-center text-center text-white">
            <h1 className="text-lg sm:text-5xl font-bold uppercase font-poppins tracking-wider">
              Experience Nairobi
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
            <h2 className="text-lg sm:text-2xl text-slate-800 font-semibold font-poppins">
              About the Experience
            </h2>
            <p className="mt-4 text-slate-600">
              Nairobi, the vibrant capital of Kenya, is a dynamic city known for
              its blend of urban sophistication and rich cultural heritage.
              Founded in the late 19th century, it has grown into one of
              Africa's largest cities. Nairobi is famous for its unique
              combination of wildlife and urban life, featuring Nairobi National
              Park. With a rich history and lively atmosphere, Nairobi serves as
              a gateway to exploring Kenya's diverse landscapes and wildlife,
              making it a must-visit destination for travellers. Join us for a
              captivating wildlife adventure in Nairobi, where you’ll experience
              the city’s unique blend of urban life and natural beauty.
            </p>
          </div>
          <div>
            <ol className="flex flex-col gap-3 list-decimal px-3">
              <li>
                <h3 className="text-slate-700 font-semibold font-poppins">
                  Nairobi National Park:
                </h3>
                <p className="text-slate-600">
                  The only national park situated within a city, Nairobi
                  National Park was established in 1946 and is home to various
                  species, including the endangered black rhino. The park also
                  hosts a rehabilitation centre for orphaned elephants, managed
                  by the David Sheldrick Wildlife Trust.
                </p>
              </li>
              <li>
                <h3 className="text-slate-700 font-semibold font-poppins">
                  David Sheldrick Wildlife Trust:
                </h3>
                <p>
                  Founded 45 years ago, the David Sheldrick Wildlife Trust is
                  renowned for its Orphans' Project, the first successful
                  elephant orphan rescue and rehabilitation program. Visitors
                  can meet the orphaned elephants, learn their stories, and
                  understand the Trust’s crucial conservation efforts.
                </p>
              </li>
              <li>
                <h3 className="text-slate-700 font-semibold font-poppins">
                  Giraffe Centre:
                </h3>
                <p>
                  This sanctuary is dedicated to the endangered Rothschild
                  giraffe, where visitors can feed these majestic animals and
                  observe warthogs in their natural habitat.
                </p>
              </li>
              <li>
                <h3 className="text-slate-700 font-semibold font-poppins">
                  Carnivore Restaurant:{" "}
                </h3>
                <p>
                  Carnivore offers a diverse selection of meats in a lively,
                  safari-themed setting, providing a unique dining experience.
                </p>
              </li>
              <li>
                <h3 className="text-slate-700 font-semibold font-poppins">
                  Bomas of Kenya:
                </h3>
                <p>
                  Bomas of Kenya is a vibrant cultural centre showcasing the
                  rich heritage of Kenya. It features traditional music, dance,
                  and performances from various ethnic groups, with the
                  highlight being the Cultural Performance which includes
                  captivating dances, drumming, and acrobatics. Located just
                  outside Nairobi, Bomas also offers handcrafted souvenirs,
                  making it an ideal spot to explore the nation's traditions.
                </p>
              </li>
            </ol>
          </div>
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
                      Non-residents-<span className="font-bold">USD 160</span>{" "}
                      per person based on a minimum of 6 pax in one vehicle
                    </li>
                    <li>
                      Residents-<span className="font-bold">USD 130</span> per
                      person based on a minimum of 6 persons in one vehicle
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 font-poppins">
                    The above rate includes:
                  </h4>
                  <ul className="list-disc px-4">
                    <li>
                      Round transport (window sitting) in a safari vehicle with
                      a photographic roof hatch for easy game viewing and
                      photography
                    </li>
                    <li>Nairobi National Park entry fees.</li>
                    <li>David Sheldrick entry fees</li>
                    <li>Services of a fluent English-speaking driver guide.</li>
                    <li>
                      Extensive game viewing drives at Nairobi National Park.
                    </li>
                    <li>
                      Mineral drinking water during the safari (Please carry a
                      reusable water bottle)
                    </li>
                    <li>Giraffe Centre entry fees and the feeding platform.</li>
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
                      Residents-<span className="font-bold">USD 150</span> per
                      person based on a minimum of 6 persons in one vehicle
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 font-poppins">
                    The above rates include:
                  </h4>
                  <ul className="list-disc px-4">
                    <li>
                      Round transport (window sitting) in a safari vehicle with
                      a photographic roof hatch for easy game viewing and
                      photography
                    </li>
                    <li>Nairobi National Park entry fees.</li>
                    <li>David Sheldrick entry fees</li>
                    <li>Services of a fluent English-speaking driver guide.</li>
                    <li>
                      Extensive game viewing drives at Nairobi National Park.
                    </li>
                    <li>
                      Mineral drinking water during the safari (Please carry a
                      reusable water bottle)
                    </li>
                    <li>Giraffe Centre entry fees and the feeding platform.</li>
                    <li>BBQ lunch at The Carnivore Restaurant.</li>
                    <li>Bomas of Kenya Entry Tickets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="font-semibold text-lg text-slate-700 font-poppins">
                  Option 3: Live One Day the Maasai Way
                </h3>
                <h4 className="font-normal italic text-slate-700 font-poppins">
                  Maasai Magic Cultural Tour | Kiserian, Kajiado County
                </h4>
                <div className="flex flex-col gap-2">
                  <p className="">
                    Step into the untamed beauty of Maasai land, where ancient
                    culture collides with adventure! This isn’t just a tour—it’s
                    a heart-pounding journey into the vibrant soul of Maasai
                    culture! Join Maasai mothers around the fire as they prepare
                    a traditional feast filled with laughter, stories, and the
                    irresistible aromas of Kenyan cuisine. But the true magic
                    lies in those unexpected moments—the laughter of Maasai
                    children, the warmth of shared stories, and the sense of
                    belonging that envelops you. Every detail has been
                    meticulously planned to ensure your day is nothing short of
                    extraordinary—from air-conditioned transfers to a meal
                    enjoyed under the vast African sky.
                  </p>
                  <p className="">
                    For just <span className="font-bold">USD 295</span> per
                    person, including transport, refreshments, and a handcrafted
                    Maasai bracelet, this unforgettable adventure is calling
                    your name. Whether you’re in town for business or seeking a
                    unique escape, the Maasai Magic Cultural Tour is the perfect
                    blend of comfort, culture, and thrill.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <h4 className="font-semibold text-slate-700 font-poppins">
                    To Experience This:
                  </h4>
                  <ul className="list-none">
                    <li>
                      <span className="font-bold">USD 295</span> per person with
                      a minimum of 4 people in a vehicle. The rate applies to
                      both Residents and non-residents.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 font-poppins">
                    The above rate includes:
                  </h4>
                  <ul className="list-disc px-4">
                    <li>
                      Pick up and drop off at your residence/hotel in Nairobi
                    </li>
                    <li>Services of a fluent English-speaking driver guide.</li>
                    <li>Air-conditioned hotel transfers.</li>
                    <li>Maasai welcome dance on arrival.</li>
                    <li>An all-round experience of Maasai culture.</li>
                    <li>A handmade bracelet</li>
                    <li>A magical moment with the Maasai people.</li>
                    <li>Club throwing challenge.</li>
                    <li>
                      Lunch with unlimited tea, coffee, fruits, and water.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="">
                    Ready to immerse yourself in Maasai magic? Book your spot
                    today at Mad Fun Travels. We’ve got you covered.
                  </p>
                  <p className="text-slate-700 italic">
                    Terms and conditions apply.
                  </p>
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
