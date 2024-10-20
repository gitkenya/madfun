// components/StepNavigation.tsx
import React from "react";

const StepNavigation = ({
  step,
  handleNext,
  handlePrevious,
  handleSubmit,
  isLastStep,
}: any) => {
  return (
    <div className="px-0 py-6 sm:px-6 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-5">
      {step > 1 ? (
        <button
          className="flex flex-row justify-center w-full min-w-[200px] bg-slate-50 border border-slate-700 text-slate-800 px-5 py-3 rounded-lg"
          onClick={handlePrevious}
        >
          Previous
        </button>
      ) : (
        <button className="flex flex-row justify-center w-full min-w-[200px] bg-slate-50 border border-slate-700 text-slate-800 px-5 py-3 rounded-lg">
          Clear
        </button>
      )}
      {!isLastStep ? (
        <button
          className="flex flex-row justify-center w-full min-w-[200px] bg-slate-800 border border-slate-800 text-slate-50 px-5 py-3 rounded-lg"
          onClick={handleNext}
        >
          Save & Continue
        </button>
      ) : (
        <button
          type="submit"
          className="flex flex-row justify-center w-full min-w-[200px] bg-slate-800 border border-slate-800 text-slate-50 px-5 py-3 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default StepNavigation;
