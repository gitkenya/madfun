import Link from "next/link";
import Image from "next/image";
import { IoChevronForwardOutline, IoShare } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";

export default function Events() {
  return (
    <section className="w-full py-8 bg-slate-100">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4 space-y-16">
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-3xl font-semibold">Upcoming events</h1>
          <Link
            href="/"
            className="text-sm font-medium underline flex flex-row items-center gap-2"
          >
            See All <IoChevronForwardOutline size={20} />
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="grid">
            <div className="bg-slate-50 p-4 rounded-xl flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <h2 className="font-semibold text-lg line-clamp-1">
                  Every Brilliant thing by Madfun Events
                </h2>
                <h3 className="text-sm text-slate-500">
                  <span className="bg-slate-300 text-slate-800 px-2 py-1 rounded">
                    31 May
                  </span>{" "}
                  <span className="italic">Kenya Cinema, Nairobi</span>
                </h3>
              </div>
              <div className="w-full">
                <Image
                  src="/assets/img/events/event1.svg"
                  width={600}
                  height={600}
                  alt="Events in Kenya Cinema Nairobi"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-2 text-xs text-slate-400 font-semibold">
                    <div className="flex flex-row">
                      <Image
                        className="rounded-full border-2 border-slate-50"
                        src="/assets/img/users/user1.jpg"
                        width={30}
                        height={30}
                        alt=""
                      />
                      <Image
                        className="rounded-full border-2 border-slate-50 -ml-3"
                        src="/assets/img/users/user2.jpg"
                        width={30}
                        height={30}
                        alt=""
                      />
                    </div>
                    200+ Going
                  </div>
                  <button className="bg-slate-200 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                    <IoMdShare size={16} />
                  </button>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <h4 className="font-bold text-slate-500">Ksh 1500+</h4>
                  <Link
                    href="/"
                    className="bg-slate-900 text-slate-50 px-8 py-2 rounded"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
