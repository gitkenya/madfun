import Image from "next/image";
import BookingForm from "../modules/form";
import Gallery from "..//modules/gallery";
import { hotels } from "@/utils/data/hotels";
import OtherHotels from "../modules/otherHotels";

export default async function Page() {
  const currentHotel = hotels.find((obj: any) => obj.slug === "the-mora");
  const galleryLength = 14;
  const gallery = Array.from({ length: galleryLength }, (v, i) => ({
    id: `${i + 1}`,
    photo: `/assets/img/hotels/gallery/the-mora/gallery-${i + 1}.jpeg`,
  }));

  return (
    <section className="w-full pt-16 sm:pt-20">
      <div className="w-full max-w-[85rem] mx-auto relative min-h-[240px] sm:min-h-[360px] sm:rounded-xl mt-0 mb-6 sm:mt-6">
        <Image
          className="object-cover sm:rounded-xl"
          src={`/assets/img/hotels/banners/the-mora.jpg`}
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
                Imagine stepping into an exquisite tropical paradise where
                golden sunlight caresses pristine white sandy beaches, and the
                air is infused with the intoxicating aroma of exotic spices.
                Welcome to <span className="font-bold">Mora, Zanzibar</span> —
                an enchanting oasis that beckons you to experience its splendor!
              </p>
              <p>
                Nestled in the heart of the Indian Ocean, Mora offers an
                unparalleled escape from the ordinary. Here, stunning beaches
                invite you to bask in luxury, swim in azure waters, and indulge
                in a variety of thrilling water sports. But Mora is more than
                just a serene retreat; it is a vibrant tapestry of cultures,
                where rich history is woven into the architecture, bustling
                markets, and exquisite local cuisine. Whether you seek adventure
                or cultural immersion, Mora promises an enchanting experience
                for every traveler.
              </p>
              <p>
                Our exclusive travel package includes a stay in a charming
                beachfront bungalow, where the soothing sound of waves lulls you
                to sleep each night. Delight in exhilarating activities such as
                snorkeling in crystal-clear waters and embarking on a guided
                cultural tour through vibrant local markets. Savor the culinary
                treasures of Zanzibar with meals featuring the freshest seafood
                and aromatic spices that will tantalize your palate. Enjoy
                seamless airport transfers and local transport, ensuring a
                hassle-free journey throughout your stay.
              </p>
              <p>
                Are you ready to escape to this paradise? Book your Mora
                adventure today. Mora isn’t just a destination; it’s an odyssey
                into a world of unparalleled beauty, rich culture, and thrilling
                adventure. Don’t miss out on this unforgettable experience that
                will leave you enchanted!
              </p>
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
        <OtherHotels slug={`the-mora`} />
      </div>
    </section>
  );
}
