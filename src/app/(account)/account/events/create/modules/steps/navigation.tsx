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
    <div className="p-6 flex flex-row justify-between items-center">
      {step > 1 ? (
        <button
          className="flex flex-row justify-center min-w-[200px] bg-slate-50 border border-slate-700 text-slate-800 px-5 py-3 rounded-lg"
          onClick={handlePrevious}
        >
          Previous
        </button>
      ) : (
        <button className="flex flex-row justify-center min-w-[200px] bg-slate-50 border border-slate-700 text-slate-800 px-5 py-3 rounded-lg">
          Clear
        </button>
      )}
      {!isLastStep ? (
        <div className="">
          <button
            className="flex flex-row justify-center min-w-[200px] bg-slate-800 border border-slate-800 text-slate-50 px-5 py-3 rounded-lg"
            onClick={handleNext}
          >
            Save & Continue
          </button>
        </div>
      ) : (
        <button
          type="submit"
          className="flex flex-row justify-center min-w-[200px] bg-slate-800 border border-slate-800 text-slate-50 px-5 py-3 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default StepNavigation;
