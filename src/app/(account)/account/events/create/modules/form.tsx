"use client";

import { useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import StepNavigation from "./steps/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAccount } from "@/providers/account/account";
import Mockup from "./mockup";
import { IoCloseOutline } from "react-icons/io5";
import Datepicker from "react-tailwindcss-datepicker";

export default function CreateEventForm(props: any) {
  const [step, setStep] = useState(1);
  const { newEventData, setNewEventData, openEventDrawer, setOpenEventDrawer } =
    useAccount();
  const [eventDate, setEventDate] = useState<any>({
    startDate: null,
    endDate: null,
  });
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    console.log(e);
    // Check if the value is an object (e.g., for React Select)
    const value = e?.target?.value ?? e; // Use e directly for cases where it's an object (like from React Select)

    if (typeof value === "object" && value !== null) {
      // Handling for Select components or object-based values
      setNewEventData({
        ...newEventData,
        [e.name]: value, // Save the whole object (id and value)
      });
    } else {
      // Handling for standard inputs
      setNewEventData({
        ...newEventData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async () => {
    console.log(newEventData);
  };

  const handleDrawer = async () => {
    setOpenEventDrawer(!openEventDrawer);
  };
  const closeDrawer = async () => {
    setOpenEventDrawer(false);
  };

  const slideIn = {
    hidden: { x: "100%" }, // start from the right
    visible: { x: 0 }, // move to center
    exit: { x: "100%" }, // slide out to the right
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-x-hidden">
      <div className="p-4 w-full sm:w-3/5 min-h-[calc(100vh-64px)]">
        <div>
          {step === 1 && (
            <Step1 formData={newEventData} handleChange={handleChange} />
          )}
          {step === 2 && (
            <Step2
              formData={newEventData}
              handleChange={handleChange}
              handleDrawer={handleDrawer}
            />
          )}
          {step === 3 && (
            <Step3 formData={newEventData} handleChange={handleChange} />
          )}

          <StepNavigation
            step={step}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
            isLastStep={step === 3}
          />
        </div>
      </div>
      <div className="w-full sticky top-0 h-[calc(100vh-64px)] hidden sm:flex flex-col items-center justify-center sm:w-2/5 sm:border-l sm:border-slate-200 dark:border-slate-800">
        <div className="w-full h-full relative sm:flex flex-col items-center justify-center">
          <AnimatePresence>
            {openEventDrawer && (
              <motion.div
                className="absolute w-full h-full bg-slate-100 dark:bg-slate-800 z-50"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideIn}
                transition={{ duration: 0.2 }} // Adjust speed here
              >
                <button
                  onClick={closeDrawer}
                  className="absolute top-0 right-0 m-4 w-8 h-8 flex flex-row items-center justify-center bg-slate-300 text-slate-500 dark:bg-slate-700 rounded-full"
                >
                  <IoCloseOutline size={20} />
                </button>
                <div className="w-full h-full text-slate-600 dark:text-slate-300  pt-12">
                  <div className="px-6">
                    <h2 className="text-lg font-semibold text-slate-600 dark:text-slate-300 mb-5">
                      Add event date & time
                    </h2>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <label
                          htmlFor="event_date"
                          className="uppercase text-sm text-slate-600 dark:text-slate-300"
                        >
                          Date
                        </label>
                        <Datepicker
                          primaryColor={"red"}
                          inputClassName={`appearance-none relative block w-full outline-none text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4 focus:outline-none`}
                          toggleClassName="absolute bg-slate-200 dark:bg-slate-700 rounded-r-lg text-slate-600 dark:text-slate-300 right-0 top-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                          useRange={false}
                          asSingle={true}
                          value={eventDate}
                          displayFormat="DD-MM-YYYY"
                          onChange={(newDate) => setEventDate(newDate)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full flex flex-row justify-between gap-6 p-4 px-6 bg-slate-50 dark:bg-slate-900">
                    <button className="flex flex-row justify-center w-full bg-slate-50 dark:bg-transparent border border-slate-700 dark:border-slate-600 text-slate-800 dark:text-slate-400 px-4 py-2 rounded-lg">
                      Clear
                    </button>
                    <button className="flex flex-row justify-center w-full bg-slate-800 dark:bg-slate-700 border border-slate-800 text-slate-50 dark:text-slate-300 px-4 py-2 rounded-lg">
                      Save & Continue
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <Mockup />
        </div>
      </div>
    </div>
  );
}
