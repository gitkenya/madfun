"use client";

import { useEffect, useId, useRef, useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import StepNavigation from "./steps/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAccount } from "@/providers/account/account";
import Mockup from "./mockup";
import {
  IoChevronDownOutline,
  IoCloseOutline,
  IoLocationOutline,
} from "react-icons/io5";
import Datepicker from "react-tailwindcss-datepicker";
import Select, { components } from "react-select";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { timezones } from "./data/timezones";
const libraries: any[] = ["places"];

export default function CreateEventForm(props: any) {
  const [step, setStep] = useState(1);
  const [timeSlots, setTimeSlots] = useState<any[]>([]);
  const [startSlot, setStartSlot] = useState(null);
  const [endSlot, setEndSlot] = useState(null);
  const [filteredEndSlots, setFilteredEndSlots] = useState<any[]>([]);
  const [timeZones, setTimeZones] = useState<any[]>([]);
  const {
    newEventData,
    setNewEventData,
    openEventDrawer,
    setOpenEventDrawer,
    openTicketsDrawer,
    setOpenTicketsDrawer,
  } = useAccount();
  const [eventDate, setEventDate] = useState<any>({
    startDate: null,
    endDate: null,
  });
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    closeDrawer();
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
    closeDrawer();
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

  const handleTicketsDrawer = async () => {
    console.log(openTicketsDrawer);
    setOpenTicketsDrawer((prevState: any) => !prevState);
  };

  const slideIn = {
    hidden: { x: "100%" }, // start from the right
    visible: { x: 0 }, // move to center
    exit: { x: "100%" }, // slide out to the right
  };

  const CustomDropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoChevronDownOutline />
      </components.DropdownIndicator>
    );
  };

  const handleStartSlotChange = (selectedOption: any) => {
    setStartSlot(selectedOption);

    // Filter end times so that they are after the selected start time
    const startTime = selectedOption.value;
    const filtered = timeSlots.filter((slot) => slot.value > startTime);
    setFilteredEndSlots(filtered);
  };

  // Handle end time change
  const handleEndSlotChange = (selectedOption: any) => {
    setEndSlot(selectedOption);
  };

  const mapContainerStyle = {
    width: "100%",
    height: "200px",
  };
  const center = {
    lat: -1.286389, // Default location (Latitude of Nairobi, Kenya)
    lng: 36.817223, // Default location (Longitude of Nairobi, Kenya)
  };

  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const inputRef = useRef(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string, // Add your API key here
    libraries: ["places"],
  });

  const handlePlaceSelect = () => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current
    );
    autocomplete.setFields(["geometry", "name"]);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        setSelectedLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    });
  };

  const generateTimeSlots = () => {
    const slots = [];
    let time = new Date();
    time.setHours(0, 0, 0, 0); // Start at midnight

    while (time.getDate() === new Date().getDate()) {
      const hours = time.getHours().toString().padStart(2, "0");
      const minutes = time.getMinutes().toString().padStart(2, "0");
      const timeString = `${hours}:${minutes}`;

      // Format with value and label
      slots.push({ value: timeString, label: timeString });
      time.setMinutes(time.getMinutes() + 15); // Increment by 15 minutes
    }

    setTimeSlots(slots);
  };

  useEffect(() => {
    const loadTimezones = () => {
      const newZones = timezones.map((zone: any) => ({
        value: zone.timezone,
        label: zone.timezone,
      }));
      setTimeZones(newZones);
    };

    loadTimezones();
    generateTimeSlots();
  }, []);

  const toggleTicketsDrawer = () => {
    setOpenTicketsDrawer((prevState: any) => !prevState);
  };

  return (
    <div className="w-full h-[calc(100vh-64px)] flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-x-hidden">
      <div className="p-4 w-full sm:w-[70%] min-h-[calc(100vh-64px)]">
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
            <Step3
              formData={newEventData}
              handleChange={handleChange}
              handleTicketsDrawer={toggleTicketsDrawer}
            />
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
      <div className="w-full sticky top-0 h-[calc(100vh-64px)] hidden sm:flex flex-col items-center justify-center sm:w-[30%] sm:border-l sm:border-slate-200 dark:border-slate-800">
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
                  className="absolute top-0 right-0 m-4 w-8 h-8 flex flex-row items-center justify-center bg-slate-200 text-slate-600 dark:text-slate-300 dark:bg-slate-700/40 rounded-full"
                >
                  <IoCloseOutline size={20} />
                </button>
                <div className="w-full h-full text-slate-600 dark:text-slate-300  pt-12">
                  <div className="h-[calc(100vh-120px)] px-6 flex flex-col gap-3 overflow-y-scroll scrollbar-thin pb-20">
                    <div>
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
                            minDate={
                              new Date(
                                new Date().setDate(new Date().getDate() + 1)
                              )
                            }
                            primaryColor={"red"}
                            inputClassName={`appearance-none relative block w-full outline-none text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4 focus:outline-none`}
                            toggleClassName="absolute rounded-r-lg text-slate-600 dark:text-slate-300 right-0 top-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                            useRange={false}
                            asSingle={true}
                            value={eventDate}
                            displayFormat="DD-MM-YYYY"
                            onChange={(newDate) => setEventDate(newDate)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="grid">
                        <label
                          className="block uppercase tracking-wide text-slate-800 text-sm mb-2"
                          htmlFor="event_start_time"
                        >
                          Start Time
                        </label>
                        <Select
                          defaultValue={startSlot}
                          onChange={handleStartSlotChange}
                          options={timeSlots}
                          placeholder="Time"
                          unstyled
                          name="event_start_time"
                          instanceId="event_start_time"
                          components={{
                            DropdownIndicator: CustomDropdownIndicator,
                          }}
                          className="w-full"
                          classNames={{
                            control: () =>
                              "appearance-none relative block w-full outline-none text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4 focus:outline-none",
                            menu: () =>
                              "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                            option: () =>
                              "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                            menuList: () => "cursor-pointer text-base",
                            placeholder: () =>
                              "text-base text-slate-600 dark:text-slate-400",
                            dropdownIndicator: () => "pt-1",
                          }}
                        />
                      </div>
                      <div className="grid">
                        <label
                          className="block uppercase tracking-wide text-slate-800 text-sm mb-2"
                          htmlFor="event_end_time"
                        >
                          End Time
                        </label>
                        <Select
                          defaultValue={endSlot}
                          onChange={handleEndSlotChange}
                          options={timeSlots}
                          placeholder="Time"
                          unstyled
                          name="event_end_time"
                          instanceId="event_end_time"
                          components={{
                            DropdownIndicator: CustomDropdownIndicator,
                          }}
                          className="w-full"
                          classNames={{
                            control: () =>
                              "appearance-none relative block w-full outline-none text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4 focus:outline-none",
                            menu: () =>
                              "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                            option: () =>
                              "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                            menuList: () => "cursor-pointer text-base",
                            placeholder: () =>
                              "text-base text-slate-600 dark:text-slate-400",
                            dropdownIndicator: () => "pt-1",
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                      <div className="grid">
                        <label
                          className="block uppercase tracking-wide text-slate-800 text-sm mb-2"
                          htmlFor="event_zone"
                        >
                          Timezone
                        </label>
                        <Select
                          defaultValue={startSlot}
                          onChange={handleStartSlotChange}
                          options={timeZones}
                          placeholder="Timezone"
                          unstyled
                          name="event_zone"
                          instanceId="event_zone"
                          components={{
                            DropdownIndicator: CustomDropdownIndicator,
                          }}
                          className="w-full"
                          classNames={{
                            control: () =>
                              "appearance-none relative block w-full outline-none text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg py-3 px-4 focus:outline-none",
                            menu: () =>
                              "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                            option: () =>
                              "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                            menuList: () => "cursor-pointer text-base",
                            placeholder: () =>
                              "text-base text-slate-600 dark:text-slate-400",
                            dropdownIndicator: () => "pt-1",
                          }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <TabGroup>
                          <TabList className="flex flex-row justify-between gap-2 bg-slate-200 dark:bg-slate-700 p-2 rounded">
                            <Tab className="transition-all duration-300 rounded w-full py-1 px-3 text-sm/6 font-normal text-slate-800 dark:text-white focus:outline-none data-[selected]:bg-white data-[selected]:dark:bg-slate-600 data-[hover]:bg-white dark:data-[hover]:bg-slate-500 data-[selected]:data-[hover]:bg-white data-[selected]:dark:data-[hover]:bg-slate-600 data-[focus]:outline-0 data-[focus]:outline-white">
                              Physical
                            </Tab>
                            <Tab className="transition-all duration-300 rounded w-full py-1 px-3 text-sm/6 font-normal text-slate-800 dark:text-white focus:outline-none data-[selected]:bg-white data-[selected]:dark:bg-slate-600 data-[hover]:bg-white dark:data-[hover]:bg-slate-500 data-[selected]:data-[hover]:bg-white data-[selected]:dark:data-[hover]:bg-slate-600 data-[focus]:outline-0 data-[focus]:outline-white">
                              Virtual
                            </Tab>
                            <Tab className="transition-all duration-300 rounded w-full py-1 px-3 text-sm/6 font-normal text-slate-800 dark:text-white focus:outline-none data-[selected]:bg-white data-[selected]:dark:bg-slate-600 data-[hover]:bg-white dark:data-[hover]:bg-slate-500 data-[selected]:data-[hover]:bg-white data-[selected]:dark:data-[hover]:bg-slate-600 data-[focus]:outline-0 data-[focus]:outline-white">
                              Hybrid
                            </Tab>
                          </TabList>
                          <TabPanels className="mt-3">
                            <TabPanel className="rounded-xl">
                              <div className="flex flex-col gap-4">
                                <div className="relative flex flex-row items-center">
                                  <div className="w-12 px-4 py-3 flex flex-row items-center justify-center border border-slate-200 dark:border-slate-700 border-e-0 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-s-lg">
                                    <IoLocationOutline size={20} className="" />
                                  </div>
                                  <input
                                    ref={inputRef}
                                    type="text"
                                    onFocus={handlePlaceSelect}
                                    placeholder="Type event location"
                                    className="appearance-none relative block w-full outline-none text-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-e-lg py-3 px-4 focus:outline-none"
                                  />
                                </div>
                                <div className="event_map rounded border border-slate-300 w-full min-h-[200px] flex flex-col items-center justify-center">
                                  {isLoaded && (
                                    <GoogleMap
                                      mapContainerStyle={mapContainerStyle}
                                      zoom={14}
                                      center={selectedLocation || center}
                                      options={{
                                        streetViewControl: false, // This disables the Street View Pegman
                                        mapTypeControl: false,
                                        fullscreenControl: false,
                                        scrollwheel: false,
                                      }}
                                    >
                                      {selectedLocation && (
                                        <Marker position={selectedLocation} />
                                      )}
                                    </GoogleMap>
                                  )}
                                </div>
                              </div>
                            </TabPanel>
                            <TabPanel className="rounded-xl bg-white/5 p-3">
                              Virtual Modules
                            </TabPanel>
                            <TabPanel className="rounded-xl bg-white/5 p-3">
                              Hybrid Modules
                            </TabPanel>
                          </TabPanels>
                        </TabGroup>
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
      <Drawer
        open={openTicketsDrawer}
        onClose={toggleTicketsDrawer}
        size={400}
        direction="right"
        className="max-w-full"
      >
        <div className="p-4">
          <h4>Add Ticket Form</h4>
        </div>
      </Drawer>
    </div>
  );
}
