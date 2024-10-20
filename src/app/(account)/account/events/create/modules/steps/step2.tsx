// components/Step2.tsx
import React from "react";

const Step2 = ({ formData, handleChange }: any) => {
  return (
    <div className="text-slate-600 dark:text-slate-300 sm:p-6">
      <h2 className="flex flex-row items-center gap-5 font-semibold text-slate-800 dark:text-slate-300 text-lg sm:text-2xl mb-5">
        <span className="text-sm w-8 h-8 rounded-full flex flex-row items-center justify-center font-normal bg-slate-300 text-slate-600 dark:bg-slate-700 dark:text-slate-200">
          2
        </span>{" "}
        Step 2
      </h2>
    </div>
  );
};

export default Step2;
