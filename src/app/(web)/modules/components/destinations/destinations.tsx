import Link from "next/link";
import Image from "next/image";
import {
  IoChevronForwardOutline,
  IoEye,
  IoEyeOutline,
  IoShare,
} from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { SlPlane } from "react-icons/sl";
import { BiSolidPlaneAlt } from "react-icons/bi";

export default function Destinations() {
  const destinations: any[] = [1, 2, 3, 4, 5];
  return (
    <section className="w-full py-8 bg-slate-100 mt-4">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4 space-y-16">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-3xl font-bold">Popular Destinations from</h1>
            <select className="mt-[2px] font-bold border-none outline-none text-3xl bg-transparent text-slate-500">
              <option disabled selected>
                Nairobi
              </option>
              <option>Mombasa</option>
              <option>Kisumu</option>
              <option>Nyeri</option>
              <option>Nakuru</option>
              <option>Thika</option>
            </select>
          </div>
          <Link
            href="/"
            className="text-sm font-medium underline flex flex-row items-center gap-2"
          >
            See All <IoChevronForwardOutline size={20} />
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {destinations?.map((key: any) => (
            <div key={key} className="bg-slate-50 rounded-lg">
              <Image
                className="rounded-t-lg"
                src="/assets/img/destinations/destination1.webp"
                width={600}
                height={348}
                alt="Events in Kenya Cinema Nairobi"
              />
              <div className="p-2">
                <div className="flex flex-row justify-between text-slate-500 p-2 border-b border-slate-200">
                  <span className="text-sm flex flex-row items-center gap-2">
                    <IoEyeOutline size={20} /> 20
                  </span>
                  <IoMdShare size={20} />
                </div>
                <div className="flex flex-row gap-2 items-center font-bold text-slate-800 p-2">
                  <BiSolidPlaneAlt size={20} className="text-slate-500" /> Dubai
                </div>
                <div className="flex flex-row justify-between text-slate-500 text-sm p-2">
                  <span>One-Way</span>
                  <span>Non Stop</span>
                  <span>Economy</span>
                </div>
                <div className="flex flex-col gap-1 p-2">
                  <h4 className="font-bold text-lg flex flex-row items-center gap-2">
                    Ksh 50,000{" "}
                    <span className="font-normal text-xs text-red-600">
                      20% off
                    </span>
                  </h4>
                  <Link
                    href="/"
                    className="px-5 py-2 block text-center bg-slate-800 text-slate-50 rounded text-xs font-semibold"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
