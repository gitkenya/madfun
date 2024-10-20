"use client";

import { useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import StepNavigation from "./steps/navigation";

export default function CreateEventForm(props: any) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    event_poster: "",
    event_title: "",
    event_description: "",
    event_guests: "",
    event_category: "",
    event_age: "",
    event_visibility: "",
    event_type: "",
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    console.log(formData);
  };

  return (
    <div>
      {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
      {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
      {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}

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
