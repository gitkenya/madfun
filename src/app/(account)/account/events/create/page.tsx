import { createClient } from "@/utils/supabase/server";
import Navbar from "@/app/(account)/modules/shared/navbar/navbar";
import Link from "next/link";
import { IoCheckmarkOutline } from "react-icons/io5";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <section className="w-full">
      <Navbar title="Create Event" user={user} />
      <div className="flex flex-col items-center justify-center w-full sm:min-h-[calc(100vh-64px)]">
        <div className="p-4 w-full max-w-[60rem] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col gap-4 items-center justify-start p-4 sm:p-8 sm:px-12 text-slate-400 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg sm:rounded-xl">
            <h2 className="font-bold text-slate-700 dark:text-slate-200 text-lg font-poppins">
              Essentials
            </h2>
            <h3 className="flex flex-row items-end gap-2 text-slate-700 dark:text-slate-200 font-poppins">
              <span className="text-2xl font-bold">4%</span>
              <span className="text-sm font-medium mb-0.5">
                Fee on Ticket Price
              </span>
            </h3>
            <p className="text-center text-sm">
              Get started by creating and managing your events with basic tools
              on our platform
            </p>
            <Link
              href="/account/events/editor"
              className="transition-all duration-300 flex flex-row justify-center min-w-[240px] bg-white hover:bg-slate-100 dark:bg-transparent dark:hover:border-slate-500 dark:hover:text-slate-300 border border-slate-700 dark:border-slate-600 text-slate-800 dark:text-slate-400 px-5 py-3 rounded-lg"
            >
              Create your event
            </Link>
            <ul className="flex flex-col gap-1.5">
              <li className="flex flex-row gap-2 items-center">
                <IoCheckmarkOutline
                  size={18}
                  className="text-slate-600 dark:text-slate-200"
                />{" "}
                List your event in a few steps
              </li>
              <li className="flex flex-row gap-2 items-center">
                <IoCheckmarkOutline
                  size={18}
                  className="text-slate-600 dark:text-slate-200"
                />{" "}
                Sales reports on demand
              </li>
              <li className="flex flex-row gap-2 items-center">
                <IoCheckmarkOutline
                  size={18}
                  className="text-slate-600 dark:text-slate-200"
                />{" "}
                High traffic website with over 4M annual customers
              </li>
              <li className="flex flex-row gap-2 items-center">
                <IoCheckmarkOutline
                  size={18}
                  className="text-slate-600 dark:text-slate-200"
                />{" "}
                Smart Algorithm targets the right customers
              </li>
              <li className="flex flex-row gap-2 items-center">
                <IoCheckmarkOutline
                  size={18}
                  className="text-slate-600 dark:text-slate-200"
                />{" "}
                Kenya's Top ranked ticket provider
              </li>
              <li className="flex flex-row gap-2 items-center">
                <IoCheckmarkOutline
                  size={18}
                  className="text-slate-600 dark:text-slate-200"
                />{" "}
                Scanning App for simple access control
              </li>
              <li className="flex flex-row gap-2 items-center">
                <IoCheckmarkOutline
                  size={18}
                  className="text-slate-600 dark:text-slate-200"
                />{" "}
                Customer Chat support
              </li>
              <li className="flex flex-row gap-2 items-center">
                <IoCheckmarkOutline
                  size={18}
                  className="text-slate-600 dark:text-slate-200"
                />{" "}
                Issue comps and tickets
              </li>
              <li className="flex flex-row gap-2 items-center">
                <IoCheckmarkOutline
                  size={18}
                  className="text-slate-600 dark:text-slate-200"
                />{" "}
                Card payments anywhere
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start p-4 sm:p-8 sm:px-12 text-slate-400 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg sm:rounded-xl">
            <h2 className="font-bold text-slate-700 dark:text-slate-200 text-lg font-poppins">
              Premium
            </h2>
            <h3 className="flex flex-row items-end gap-2 text-slate-700 dark:text-slate-200">
              <span className="text-2xl font-bold font-poppins">
                Let's Talk
              </span>
            </h3>
            <p className="text-center text-sm">
              Contact us for a custom quote with advanced features and tailored
              support from the Madfun Team
            </p>
            <button className="transition-all duration-300 flex flex-row justify-center min-w-[240px] bg-slate-800 dark:bg-slate-600 dark:hover:bg-slate-500 dark:hover:text-white border border-slate-800 text-slate-50 px-5 py-3 rounded-lg">
              Contact us for a quote
            </button>
            <ul className="flex flex-col gap-1.5">
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <IoCheckmarkOutline
                    size={18}
                    className="text-slate-600 dark:text-slate-200"
                  />
                </span>
                Blast SMS to your database
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <IoCheckmarkOutline
                    size={18}
                    className="text-slate-600 dark:text-slate-200"
                  />
                </span>
                Event Planning and Management
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <IoCheckmarkOutline
                    size={18}
                    className="text-slate-600 dark:text-slate-200"
                  />
                </span>
                Event Production
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <IoCheckmarkOutline
                    size={18}
                    className="text-slate-600 dark:text-slate-200"
                  />
                </span>
                Stage and Program Management
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <IoCheckmarkOutline
                    size={18}
                    className="text-slate-600 dark:text-slate-200"
                  />
                </span>
                Kenya's Top ranked ticket provider
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <IoCheckmarkOutline
                    size={18}
                    className="text-slate-600 dark:text-slate-200"
                  />
                </span>
                Sourcing and Management of Event Suppliers (Audio-Visual,
                Security, Event Decor and Experiential Elements)
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <IoCheckmarkOutline
                    size={18}
                    className="text-slate-600 dark:text-slate-200"
                  />
                </span>
                Event Wristbands: Tyvek, Vinyl or Fabric Wristbands (Plain or
                Custom Branded)
              </li>
              <li className="flex flex-row gap-2 items-center">
                <span>
                  <IoCheckmarkOutline
                    size={18}
                    className="text-slate-600 dark:text-slate-200"
                  />
                </span>
                Event Entry Management (Security and Ticket Validation Team)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
