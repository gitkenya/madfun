import { createClient } from "@/utils/supabase/server";
import Navbar from "@/app/(account)/modules/shared/navbar/navbar";
import Link from "next/link";
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import WorldMap from "@/app/(account)/modules/components/map/WorldMap";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <section className="w-full">
      <Navbar title="Dashboard" user={user} />
      <div className="w-full p-4 flex flex-col gap-4 sm:gap-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="border border-slate-300/50 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg flex flex-col gap-2 py-4 px-6">
            <h2 className="font-bold text-lg sm:text-xl">0</h2>
            <p className="text-slate-500 dark:text-slate-400">Total events</p>
          </div>
          <div className="border border-slate-300/50 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg flex flex-col gap-2 py-4 px-6">
            <h2 className="font-bold text-lg sm:text-xl">0</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Total Tickets sold
            </p>
          </div>
          <div className="border border-slate-300/50 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg flex flex-col gap-2 py-4 px-6">
            <h2 className="font-bold text-lg sm:text-xl">0</h2>
            <p className="text-slate-500 dark:text-slate-400">Total Revenue</p>
          </div>
          <div className="border border-slate-300/50 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg flex flex-col gap-2 py-4 px-6">
            <h2 className="font-bold text-lg sm:text-xl">0</h2>
            <p className="text-slate-500 dark:text-slate-400">
              Available for withdrawal
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-slate-300/50 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg flex flex-col items-center justify-between gap-5 py-4 sm:py-6 px-6">
            <h2 className="font-bold text-lg sm:text-xl pb-3">Recent events</h2>
            <div className="flex flex-col items-center justify-center gap-5">
              <IoCalendarOutline
                size={80}
                className="text-slate-400 dark:text-slate-600"
              />
              <h3 className="font-semibold sm:text-lg">
                No events created yet
              </h3>
              <Link
                href="/account/events/create"
                className="transition-all duration-300 border border-slate-700 dark:border-slate-500 text-slate-700 hover:bg-slate-300 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200 px-5 py-2 rounded-lg flex flex-row items-center justify-center"
              >
                Create event
              </Link>
            </div>
          </div>
          <div className="relative border border-slate-300/50 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg flex flex-col items-center justify-between gap-5 py-4 sm:py-6 px-6">
            <h2 className="font-bold text-lg sm:text-xl pb-3">
              Map distribution
            </h2>
            <div className="w-full sm:w-[64%]">
              <WorldMap />
            </div>
            <span className="absolute bottom-4 px-4 py-1.5 border text-slate-400 border-slate-300 dark:border-slate-700 dark:text-slate-600 rounded text-sm">
              No data
            </span>
          </div>
          <div className="border border-slate-300/50 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg flex flex-col items-center justify-between gap-5 py-4 sm:py-6 px-6">
            <h2 className="font-bold text-lg sm:text-xl pb-3">
              Ticket sale overtime
            </h2>
            <div className="flex flex-col items-center justify-center gap-5 min-h-48">
              <span className="px-4 py-1.5 border text-slate-400 border-slate-300 dark:border-slate-700 dark:text-slate-600 rounded text-sm">
                No data
              </span>
            </div>
          </div>
          <div className="text-slate-600 dark:text-slate-300 rounded-lg grid grid-cols-2 gap-2 sm:gap-5">
            <div className="border border-slate-300/50 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg flex flex-col items-center justify-between gap-2 py-4 px-6">
              <h2 className="font-bold text-lg sm:text-xl">Gender</h2>
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-[20px] border-slate-200 dark:border-slate-700 flex flex-row items-center justify-center"></div>
              <span className="px-4 py-1.5 border text-slate-400 border-slate-300 dark:border-slate-700 dark:text-slate-600 rounded text-sm">
                No data
              </span>
            </div>
            <div className="border border-slate-300/50 bg-white dark:bg-slate-800/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 rounded-lg flex flex-col items-center justify-between gap-2 py-4 px-6">
              <h2 className="font-bold text-lg sm:text-xl">Age group</h2>
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-slate-200 dark:bg-slate-700 flex flex-row items-center justify-center"></div>
              <span className="px-4 py-1.5 border text-slate-400 border-slate-300 dark:border-slate-700 dark:text-slate-600 rounded text-sm">
                No data
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
