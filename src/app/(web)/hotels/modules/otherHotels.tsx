import { hotels } from "@/utils/data/hotels";
import Link from "next/link";
import Image from "next/image";
import { IoPersonOutline, IoTimeOutline } from "react-icons/io5";
export default function OtherHotels(props: any) {
  const { slug } = props;
  const currentHotel = hotels.find((obj: any) => obj.slug === slug);
  const otherHotels: any[] = hotels
    ?.filter((obj: any) => obj.slug !== slug) // Step 1: Filter out the current destination
    .sort(
      (a: any, b: any) =>
        Math.abs(a.id - currentHotel.id) - Math.abs(b.id - currentHotel.id) // Step 2: Sort by proximity in ID
    )
    .slice(0, 4);
  return (
    <div className="w-full max-w-[85rem] mx-auto py-6 sm:py-12 px-4 sm:px-0 flex flex-col gap-5">
      <h2 className="font-bold text-lg sm:text-3xl text-slate-800 font-poppins">
        Other Picks
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
        {otherHotels?.map((des: any) => (
          <Link
            key={des.id}
            href={`/hotels/${des.slug}`}
            className="relative bg-cover bg-center bg-slate-50 rounded-lg aspect-video"
            style={{
              backgroundImage: `url(/assets/img/hotels/featured/${des.photo})`,
            }}
          >
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-slate-900/10 via-slate-900/10 to-slate-900/60 rounded-lg flex flex-col justify-end">
              <div className="flex flex-col gap-1.5 px-5 py-3">
                <div className="font-semibold text-white sm:text-lg font-poppins">
                  {des.name}
                </div>
                <div className="flex flex-col sm:flex-row justify-end sm:items-end sm:justify-start gap-1 sm:gap-3 text-white text-sm">
                  <div className="flex flex-row items-end gap-3">
                    {des.days && (
                      <div className="hidden sm:flex flex-row items-center gap-2">
                        <span>
                          <IoTimeOutline size={16} />
                        </span>
                        <span>{des.days}</span>
                      </div>
                    )}
                    {des.guests && (
                      <div className="hidden sm:flex flex-row items-center gap-2">
                        <span>
                          <IoPersonOutline size={16} />
                        </span>

                        <span>{des.guests}</span>
                      </div>
                    )}
                  </div>
                  {des.price && (
                    <div className="flex flex-row items-center gap-1">
                      <span>From {des.currency}.</span>
                      <span>{parseFloat(des.price).toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
