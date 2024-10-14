"use client";
import { useState } from "react";
import { IoEllipse, IoChevronDownOutline } from "react-icons/io5";
import Select, { components } from "react-select";

export default function Flights() {
  const [selectedLocation, setSelectedLocation] = useState(1);
  const locations: any[] = [
    { value: 1, label: "Nairobi" },
    { value: 2, label: "Mombasa" },
    { value: 3, label: "Kisumu" },
  ];
  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.value);
  };

  const CustomDropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <IoChevronDownOutline />
      </components.DropdownIndicator>
    );
  };

  return (
    <div className="w-full max-w-[60rem] flex flex-col gap-4">
      <h1 className="flex flex-row items-end gap-3 font-poppins text-lg sm:text-4xl uppercase font-bold text-white tracking-wider">
        Flights
        <IoEllipse size={14} className="text-yellow-400 mb-[0.4rem]" />
      </h1>
      <div className="w-full p-4 rounded-lg bg-white grid grid-cols-5 gap-4">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-5">
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="one-way"
                  type="radio"
                  name="flight-type"
                  className="radio"
                />
                <label htmlFor="one-way" className="cursor-pointer">
                  One Way
                </label>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="round-trip"
                  type="radio"
                  name="flight-type"
                  className="radio"
                />
                <label htmlFor="round-trip" className="cursor-pointer">
                  Round Trip
                </label>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="multi-city"
                  type="radio"
                  name="flight-type"
                  className="radio"
                />
                <label htmlFor="multi-city" className="cursor-pointer">
                  Multi City
                </label>
              </div>
            </div>
            <div>
              <div className="flex flex-row gap-2 items-center">
                <input
                  id="non-stop"
                  type="checkbox"
                  name="non-stop"
                  className="checkbox"
                />
                <label htmlFor="non-stop" className="cursor-pointer">
                  Non Stop Only
                </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full flex flex-row justify-between items-center py-1 rounded-lg border border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="From"
                unstyled
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex items-center w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
                }}
              />
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="To"
                unstyled
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border min-w-[200px] right-0 border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
                }}
              />
            </div>
            <div className="w-full flex flex-row justify-between items-center py-1 rounded-lg border border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Departure"
                unstyled
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border min-w-[200px] left-0  border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
                }}
              />
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Return"
                unstyled
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border w-full min-w-[200px] right-0 border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
                }}
              />
            </div>
            <div className="w-full flex flex-row justify-between items-center py-1 rounded-lg border border-slate-200">
              <Select
                defaultValue={selectedLocation}
                onChange={handleLocationChange}
                options={locations}
                placeholder="Travelers & class"
                unstyled
                components={{ DropdownIndicator: CustomDropdownIndicator }}
                className="w-full"
                classNames={{
                  control: () =>
                    "appearance-none flex w-full h-full outline-none text-base text-slate-800 bg-white rounded py-2 px-4 focus:outline-none",
                  menu: () =>
                    "p-1 mt-1 border w-full min-w-[200px] right-0 border-slate-200 text-slate-800 bg-white rounded-lg py-3 px-4 focus:outline-none",
                  option: () =>
                    "cursor-pointer p-2 hover:bg-slate-100 rounded-sm",
                  menuList: () => "cursor-pointer text-base",
                  placeholder: () => "text-base text-slate-600",
                  dropdownIndicator: () => "pt-1",
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <button className="transition-all duration-300 w-full bg-slate-800 hover:bg-slate-950 text-white rounded-lg px-4 py-3 text-center">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
