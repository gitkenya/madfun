// components/Step3.tsx
import React from "react";

const Step3 = ({ formData, handleChange }: any) => {
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
        </div>
      </div>
    </div>
  );
};

export default Step3;
