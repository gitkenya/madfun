// components/Step3.tsx
import React from "react";
import Image from "next/image";
import { IoAddOutline } from "react-icons/io5";

export default function Step3({
  formData,
  handleChange,
  handleTicketsDrawer,
}: any) {
  return (
    <div className="text-slate-600 dark:text-slate-300 sm:p-6">
      <h2 className="flex flex-row items-center gap-5 font-semibold text-slate-800 dark:text-slate-300 text-lg sm:text-2xl mb-5">
        <span className="text-sm w-8 h-8 rounded-full flex flex-row items-center justify-center font-medium border border-green-500 text-green-500">
          3
        </span>{" "}
        Add event tickets
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="">
              Create and customize your event tickets by setting types, prices,
              quantities, etc
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full  bg-slate-100 dark:bg-slate-700 rounded-lg flex flex-col items-center justify-center gap-5 py-6 sm:py-16">
              <Image
                src="/assets/img/icons/account/ticket3.png"
                width={120}
                height={120}
                alt="Event Tickets"
              />
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-semibold text-slate-800 dark:text-slate-300 text-lg sm:text-xl">
                  No Tickets Yet!
                </h3>
                <p className="">Create the tickets now</p>
                <button
                  className="transition-all duration-300 mt-4 flex flex-row items-center gap-2 px-6 py-2 rounded-lg border border-slate-700 text-slate-700 dark:border-slate-400 dark:text-slate-400 hover:bg-slate-800 hover:text-white"
                  onClick={handleTicketsDrawer}
                >
                  <IoAddOutline size={20} />
                  Add Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
