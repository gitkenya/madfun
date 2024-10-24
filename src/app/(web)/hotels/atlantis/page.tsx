import Image from "next/image";
import BookingForm from "../modules/form";
import Gallery from "..//modules/gallery";
import { hotels } from "@/utils/data/hotels";
import OtherHotels from "../modules/otherHotels";

export default async function Page() {
  const currentHotel = hotels.find((obj: any) => obj.slug === "atlantis");
  const galleryLength = 5;
  const gallery = Array.from({ length: galleryLength }, (v, i) => ({
    id: `${i + 1}`,
    photo: `/assets/img/hotels/gallery/atlantis/gallery-${i + 1}.jpg`,
  }));

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/hotels/banners/atlantis.jpg`}
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
                3 days, 2 nights stay
              </h2>
              <p className="">
                Nestled between the shimmering Arabian Gulf and the breathtaking
                Dubai skyline, Atlantis, The Palm invites you to a realm of
                unforgettable experiences. From luxurious accommodations and
                world-class dining by celebrity chefs to thrilling adventures at
                Aqua venture Waterpark, discover a destination where every
                moment feels extraordinary
              </p>
              <p className="italic">
                Special rate: <span className="font-bold">USD 2400</span> for
                two in a double room
              </p>
              <div>
                <h2 className="font-semibold text-slate-700 font-poppins">
                  Inclusions
                </h2>
                <ul className="list-disc px-4">
                  <li>2 nights of accommodation in an Ocean King room</li>
                  <li>Meals on bed and breakfast basis</li>
                  <li>Complimentary access to Aquaventure Waterpark</li>
                  <li>Complimentary entrance to The Lost Chambers Aquarium</li>
                  <li>Complimentary access to the AWAKEN Fitness Centre</li>
                  <li>One Explorers Club session per stay</li>
                  <li>Extraordinary views of the Arabian Sea</li>
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
        <OtherHotels slug={`atlantis`} />
      </div>
    </section>
  );
}
