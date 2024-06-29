import Link from "next/link";
import Image from "next/image";
import { IoChevronForwardOutline, IoShare } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { TfiSearch } from "react-icons/tfi";
import ShareModal from "@/components/modals/shareModal";

export default function Events(props: any) {
  const { events, mode } = props;
  return (
    <section className="w-full py-8 bg-slate-100">
      <div className="mx-auto max-w-[90rem] px-2 md:px-4 space-y-6 mt-6">
        {mode === "page" ? (
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div className="flex items-center w-full max-w-sm md:max-w-md h-10 md:h-12 rounded bg-slate-100 border border-slate-300 overflow-hidden">
              <input
                className="peer flex-grow h-full outline-none text-sm text-slate-700 px-4 py-2 sm:py-3 bg-slate-100"
                type="text"
                id="search"
                placeholder="Search events..."
                autoComplete="off"
              />
              <button
                type="submit"
                className="transition-all duration-300 grid place-items-center h-full w-12 text-slate-700 border-l border-slate-300"
              >
                <TfiSearch />
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex flex-row items-center justify-between gap-4 px-2 pt-4 md:pt-0">
                <span className="font-medium">Filter Events By:</span>
                <select className="bg-transparent border-b border-slate-300 py-2 focus:outline-none">
                  <option value={1}>Categories</option>
                </select>
              </div>
              <div className="flex flex-row items-center gap-4 px-2 text-xs sm:text-sm">
                <span className="px-5 py-2 border border-slate-300 rounded-full font-semibold">
                  All
                </span>
                <span>This Week</span>
                <span>This Month</span>
                <span>Next Month</span>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="w-full flex flex-row items-center justify-between">
          <h1 className="text-lg sm:text-3xl font-bold">Upcoming events</h1>
          {mode === "section" ? (
            <Link
              href="/"
              className="text-sm font-medium underline flex flex-row items-center gap-2"
            >
              See All <IoChevronForwardOutline size={20} />
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {events?.map((key: any) => (
            <div key={key} className="grid">
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
                <Link className="w-full" href={`/events/demo`}>
                  <Image
                    src="/assets/img/events/event1.svg"
                    width={600}
                    height={600}
                    alt="Events in Kenya Cinema Nairobi"
                  />
                </Link>
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
                    <ShareModal
                      event={{
                        id: "event1",
                        slug: "demo",
                        url: `${process.env.NEXT_PUBLIC_BASE_URL}/events/demo`,
                      }}
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <h4 className="font-bold text-slate-800 text-xl">
                      Ksh 1500+
                    </h4>
                    <Link
                      href="/events/demo"
                      className="bg-slate-900 text-slate-50 px-8 py-2 rounded"
                    >
                      Buy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
