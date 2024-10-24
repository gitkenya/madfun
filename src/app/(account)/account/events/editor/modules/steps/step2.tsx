// components/Step2.tsx
"use client";
import React from "react";
import {
  IoCalendarOutline,
  IoCloseCircleOutline,
  IoEllipsisVertical,
  IoLocationOutline,
  IoTimeOutline,
} from "react-icons/io5";

export default function Step2({ formData, handleChange, handleDrawer }: any) {
  return (
    <div className="text-slate-600 dark:text-slate-300 sm:p-6">
      <h2 className="flex flex-row items-center gap-5 font-semibold text-slate-800 dark:text-slate-300 text-lg sm:text-2xl mb-5">
        <span className="text-sm w-8 h-8 rounded-full flex flex-row items-center justify-center font-medium border border-green-500 text-green-500">
          2
        </span>{" "}
        Event date, time & location
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="">Set the event's date, time, and location details</p>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
          <button className="transition-all duration-300 absolute flex flex-row items-center justify-center right-0 top-0 m-4 w-10 h-10 bg-slate-200/20 hover:bg-slate-200/40 rounded-full">
            <IoEllipsisVertical />
          </button>

          <div className="flex flex-col gap-2">
            <button
              className="flex flex-row items-center gap-2"
              onClick={handleDrawer}
            >
              <span>
                <IoCalendarOutline />
              </span>{" "}
              Add date
            </button>
            <button
              className="flex flex-row items-center gap-2"
              onClick={handleDrawer}
            >
              <span>
                <IoTimeOutline />
              </span>
              Add time
            </button>
            <button
              className="flex flex-row items-center gap-2"
              onClick={handleDrawer}
            >
              <span>
                <IoLocationOutline />
              </span>
              Add location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
