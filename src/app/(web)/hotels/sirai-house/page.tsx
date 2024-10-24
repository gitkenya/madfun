import Image from "next/image";
import BookingForm from "../modules/form";
import Gallery from "..//modules/gallery";
import { hotels } from "@/utils/data/hotels";
import OtherHotels from "../modules/otherHotels";

export default async function Page() {
  const currentHotel = hotels.find((obj: any) => obj.slug === "sirai-house");
  const galleryLength = 4;
  const gallery = Array.from({ length: galleryLength }, (v, i) => ({
    id: `${i + 1}`,
    photo: `/assets/img/hotels/gallery/sirai/gallery-${i + 1}.jpeg`,
  }));

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/hotels/banners/sirai-house.jpg`}
          fill
          priority
          alt="Nyumbu Luxury Camp with Madfun"
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
            <div className="flex flex-col gap-4"></div>
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
        <OtherHotels slug={`sirai-house`} />
      </div>
    </section>
  );
}
