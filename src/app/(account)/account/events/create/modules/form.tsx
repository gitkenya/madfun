"use client";

import { useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import StepNavigation from "./steps/navigation";
import { useAccount } from "@/providers/account/account";

export default function CreateEventForm(props: any) {
  const [step, setStep] = useState(1);
  const { newEventData, setNewEventData } = useAccount();

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

  return (
    <div>
      {step === 1 && (
        <Step1 formData={newEventData} handleChange={handleChange} />
      )}
      {step === 2 && (
        <Step2 formData={newEventData} handleChange={handleChange} />
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
  );
}
